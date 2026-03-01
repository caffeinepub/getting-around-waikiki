import Map "mo:core/Map";
import Nat "mo:core/Nat";

module {
  public type OldCategory = {
    #theBus;
    #biki;
    #trolley;
    #rideshare;
    #carRental;
    #walking;
    #other;
  };

  public type OldEntry = {
    id : Nat;
    title : Text;
    description : Text;
    pricing : Text;
    tips : Text;
    category : OldCategory;
  };

  public type OldActor = {
    entries : Map.Map<Nat, OldEntry>;
  };

  public type NewCategory = {
    #theBus;
    #bikiBikes;
    #waikikiTrolley;
    #rideshare;
    #carRental;
    #taxi;
    #shuttleTours;
  };

  public type NewEntry = {
    id : Nat;
    name : Text;
    category : NewCategory;
    description : Text;
    priceInfo : Text;
    tips : Text;
  };

  public type NewActor = {
    entries : Map.Map<Nat, NewEntry>;
  };

  public func mapCategory(oldCategory : OldCategory) : NewCategory {
    switch (oldCategory) {
      case (#theBus) { #theBus };
      case (#biki) { #bikiBikes };
      case (#trolley) { #waikikiTrolley };
      case (#rideshare) { #rideshare };
      case (#carRental) { #carRental };
      case (#walking) { #theBus };
      case (#other) { #theBus };
    };
  };

  public func run(old : OldActor) : NewActor {
    let newEntries = old.entries.map<Nat, OldEntry, NewEntry>(
      func(_id, oldEntry) {
        {
          id = oldEntry.id;
          name = oldEntry.title;
          category = mapCategory(oldEntry.category);
          description = oldEntry.description;
          priceInfo = oldEntry.pricing;
          tips = oldEntry.tips;
        };
      }
    );
    { entries = newEntries };
  };
};
