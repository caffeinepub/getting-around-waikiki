import { Category } from "./backend";

export interface SeedEntry {
  name: string;
  category: Category;
  description: string;
  priceInfo: string;
  tips: string;
}

export const SEED_ENTRIES: SeedEntry[] = [
  // TheBus
  {
    name: "TheBus",
    description:
      "Oahu's public transit system covers the entire island with over 100 routes. Waikiki has multiple stops along Kuhio Ave and Kalakaua Ave.",
    priceInfo:
      "$3 per ride, $7.50 day pass, $30 monthly pass. Exact change required.",
    tips: "Route 8 and 19/20 connect Waikiki to Ala Moana. Use the DaBus2 app to track real-time arrivals.",
    category: Category.theBus,
  },
  {
    name: "TheBus Express",
    description:
      "Express routes connecting Waikiki to major destinations like Downtown Honolulu, Hawaii Kai, and the North Shore faster than local routes.",
    priceInfo: "$3 per ride. Same fare as local bus.",
    tips: "Route 42 goes express to Downtown. Great for reaching Pearl Harbor or Iolani Palace.",
    category: Category.theBus,
  },

  // Biki
  {
    name: "Biki Bike Share",
    description:
      "Honolulu's bikeshare program with 130+ stations across Waikiki, Downtown, and Ala Moana. Electric-assist and standard bikes available.",
    priceInfo:
      "$4.50 for 30 min, $25 for a 300-min monthly pass. Extra time billed per minute.",
    tips: "Stations are near most major hotels. Great for short trips along the beachfront path.",
    category: Category.bikiBikes,
  },
  {
    name: "Biki Night Rides",
    description:
      "Biki bikes are available 24/7. Night rides along the Ala Wai Canal and beachfront are a popular activity.",
    priceInfo: "Same pricing. $4.50 unlocks 30 minutes.",
    tips: "Wear light-colored clothing and use the bike's built-in light at night. The beachfront path is well-lit.",
    category: Category.bikiBikes,
  },

  // Trolley
  {
    name: "Waikiki Trolley Pink Line",
    description:
      "Free! Loops through Waikiki connecting major hotels, shopping centers, and the beach. Runs every 10 minutes.",
    priceInfo: "FREE. No ticket needed.",
    tips: "Most convenient for getting between your hotel and Kalakaua Ave shops. Runs 8am–11pm daily.",
    category: Category.waikikiTrolley,
  },
  {
    name: "Waikiki Trolley Other Lines",
    description:
      "Paid trolley lines to Diamond Head, Ala Moana, Chinatown, and scenic routes around Oahu.",
    priceInfo: "$2–$45 depending on route. Day passes available.",
    tips: "Buy a multi-day pass for best value if you plan to use multiple lines. Book at your hotel concierge.",
    category: Category.waikikiTrolley,
  },

  // Rideshare
  {
    name: "Uber & Lyft",
    description:
      "Both Uber and Lyft operate widely in Waikiki. Pickup is available from most hotels and street corners.",
    priceInfo:
      "Waikiki to Airport: ~$25–40. Waikiki to North Shore: ~$60–80. Surge pricing during peak hours.",
    tips: "Avoid rideshare during checkout time (11am) when demand surges. Use the app to compare prices.",
    category: Category.rideshare,
  },
  {
    name: "Holoholo",
    description:
      "Local Hawaii rideshare app. Supports Hawaii-based drivers and may have lower surge pricing than national apps.",
    priceInfo: "Comparable to Uber/Lyft pricing.",
    tips: "Good backup option when Uber/Lyft surge pricing is high. Download before your trip.",
    category: Category.rideshare,
  },

  // Car Rental
  {
    name: "Enterprise / Hertz / Alamo",
    description:
      "Major car rental agencies at Honolulu Airport and select Waikiki locations. Reserve in advance for best rates.",
    priceInfo:
      "$40–$100/day plus taxes, fees, and parking (~$25–40/night in Waikiki).",
    tips: "Only worth it for day trips to North Shore, Hanauma Bay, or multiple stops. Waikiki parking is expensive and scarce.",
    category: Category.carRental,
  },
  {
    name: "Turo (Peer-to-Peer)",
    description:
      "Rent cars directly from local owners. Often cheaper than major agencies and pickup can be at the airport or your hotel.",
    priceInfo: "$30–$70/day. Check for insurance options.",
    tips: "Great for getting a unique vehicle (convertible, Jeep). Book well in advance for popular travel dates.",
    category: Category.carRental,
  },

  // Taxi
  {
    name: "Traditional Taxi",
    description:
      "Metered taxis available at hotel taxi stands, the airport, and by phone. TheCab and Charley's are the main companies.",
    priceInfo: "$3.10 base + $0.45 per 1/8 mile. Airport to Waikiki: ~$35–45.",
    tips: "Best for late-night returns when rideshare surge is high. Ask your hotel to call one in advance.",
    category: Category.taxi,
  },
  {
    name: "Hotel Car Service",
    description:
      "Many luxury hotels offer private car or limo service to the airport and island attractions.",
    priceInfo: "$60–$150+ depending on distance and vehicle.",
    tips: "Book through your hotel concierge. Includes luggage help and can be worth it for groups or early flights.",
    category: Category.taxi,
  },

  // Shuttle & Tours
  {
    name: "Roberts Hawaii Shuttle",
    description:
      "Shared airport shuttle service between Honolulu Airport and Waikiki hotels. Affordable but can take longer due to multiple stops.",
    priceInfo: "$16–$20 per person one way.",
    tips: "Book in advance online. Shared shuttles make multiple hotel stops — budget 45–60 min from airport.",
    category: Category.shuttleTours,
  },
  {
    name: "Tour Buses",
    description:
      "Full-day and half-day tours of Oahu departing from Waikiki. Covers Pearl Harbor, North Shore, Polynesian Cultural Center, and more.",
    priceInfo: "$45–$120 per person depending on tour length and inclusions.",
    tips: "Best value for seeing the whole island without renting a car. Book through your hotel or directly with operators like E Noa Tours.",
    category: Category.shuttleTours,
  },
];
