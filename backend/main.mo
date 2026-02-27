import Map "mo:core/Map";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import List "mo:core/List";
import MixinStorage "blob-storage/Mixin";

actor {
  include MixinStorage();

  type TransportEntry = {
    id : Nat;
    title : Text;
    description : Text;
    pricing : Text;
    tips : Text;
    category : Category;
  };

  type Category = {
    #theBus;
    #biki;
    #trolley;
    #rideshare;
    #carRental;
    #walking;
    #other;
  };

  type TransportEntryInput = {
    title : Text;
    description : Text;
    pricing : Text;
    tips : Text;
    category : Category;
  };

  let entries = Map.empty<Nat, TransportEntry>();
  var nextId = 0;

  module TransportEntry {
    public func compare(a : TransportEntry, b : TransportEntry) : Order.Order {
      Text.compare(a.title, b.title);
    };
  };

  public shared ({ caller }) func addEntry(entry : TransportEntryInput) : async Nat {
    let id = nextId;
    let newEntry : TransportEntry = {
      id;
      title = entry.title;
      description = entry.description;
      pricing = entry.pricing;
      tips = entry.tips;
      category = entry.category;
    };
    entries.add(id, newEntry);
    nextId += 1;
    id;
  };

  public query ({ caller }) func getEntry(id : Nat) : async TransportEntry {
    switch (entries.get(id)) {
      case (?entry) { entry };
      case (null) { Runtime.trap("Entry not found") };
    };
  };

  public query ({ caller }) func getAllEntries() : async [TransportEntry] {
    entries.values().toArray().sort();
  };

  public query ({ caller }) func getEntriesByCategory(category : Category) : async [TransportEntry] {
    let filtered = entries.values().toArray().filter(
      func(entry) {
        entry.category == category;
      }
    );
    filtered.sort();
  };

  public shared ({ caller }) func updateEntry(id : Nat, updatedEntry : TransportEntryInput) : async () {
    switch (entries.get(id)) {
      case (?_) {
        let newEntry : TransportEntry = {
          id;
          title = updatedEntry.title;
          description = updatedEntry.description;
          pricing = updatedEntry.pricing;
          tips = updatedEntry.tips;
          category = updatedEntry.category;
        };
        entries.add(id, newEntry);
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
