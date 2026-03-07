import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import List "mo:core/List";

import MixinStorage "blob-storage/Mixin";


actor {
  include MixinStorage();

  type Category = {
    #theBus;
    #bikiBikes;
    #waikikiTrolley;
    #rideshare;
    #carRental;
    #taxi;
    #shuttleTours;
  };

  type Entry = {
    id : Nat;
    name : Text;
    category : Category;
    description : Text;
    priceInfo : Text;
    tips : Text;
  };

  let entries = Map.empty<Nat, Entry>();
  var nextId = 0;

  module Entry {
    public func compare(a : Entry, b : Entry) : Order.Order {
      Text.compare(a.name, b.name);
    };
  };

  public shared ({ caller }) func addEntry(name : Text, category : Category, description : Text, priceInfo : Text, tips : Text) : async Nat {
    let id = nextId;
    let entry : Entry = {
      id;
      name;
      category;
      description;
      priceInfo;
      tips;
    };
    entries.add(id, entry);
    nextId += 1;
    id;
  };

  public query ({ caller }) func getAllEntries() : async [Entry] {
    entries.values().toArray().sort();
  };

  public query ({ caller }) func getEntriesByCategory(category : Category) : async [Entry] {
    let filtered = entries.values().toArray().filter(
      func(entry) {
        entry.category == category;
      }
    );
    filtered.sort();
  };

  public shared ({ caller }) func updateEntry(id : Nat, name : Text, category : Category, description : Text, priceInfo : Text, tips : Text) : async () {
    switch (entries.get(id)) {
      case (?_) {
        let entry : Entry = {
          id;
          name;
          category;
          description;
          priceInfo;
          tips;
        };
        entries.add(id, entry);
      };
      case (null) { Runtime.trap("Entry not found") };
    };
  };

  public shared ({ caller }) func deleteEntry(id : Nat) : async () {
    if (not entries.containsKey(id)) {
      Runtime.trap("Entry not found");
    };
    entries.remove(id);
  };
};
