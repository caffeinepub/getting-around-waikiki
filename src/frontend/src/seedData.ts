import { Category, type TransportEntryInput } from "./backend";

export const SEED_ENTRIES: TransportEntryInput[] = [
  // TheBus
  {
    title: "TheBus Route 8",
    description:
      "The most popular bus route for tourists, Route 8 runs along Kalakaua Avenue through Waikiki and connects to Ala Moana Center — the largest open-air shopping mall in the U.S. Buses run frequently throughout the day, making it easy to hop on and off.",
    pricing:
      "Single ride: $3.00 per adult, $1.50 for youth (6–17). Day pass: $7.50. Children under 6 ride free with a paying adult. Exact change required — drivers do not make change.",
    tips: "Download the DaBus2 app to track real-time arrivals. Pay with exact cash or use a Holo card (reloadable transit card) for convenience. Rush hours (7–9am, 4–6pm) can be crowded — plan extra time.",
    category: Category.theBus,
  },
  {
    title: "TheBus Route 20 (Airport)",
    description:
      "Route 20 connects Honolulu International Airport to Waikiki, making it the most affordable airport transfer option. The ride takes roughly 60–80 minutes depending on traffic and stops. It's a great choice for budget-conscious travelers who aren't in a rush.",
    pricing:
      "Single ride: $3.00 per adult. No extra charge for baggage, but oversized bags are not permitted — suitcases with wheels and bags that can't fit on your lap are not allowed.",
    tips: "Check TheBus policy on luggage before heading to the airport stop. If you have large bags, opt for a rideshare or shuttle instead. The bus stops on the upper-level departures roadway at the airport.",
    category: Category.theBus,
  },

  // Biki
  {
    title: "Biki Bike Share",
    description:
      "Biki is Honolulu's bike-sharing program with over 100 docking stations across Waikiki, Downtown Honolulu, and surrounding neighborhoods. Electric-assist bikes make it easy to handle Hawaii's hills. It's an eco-friendly and fun way to explore the beachside neighborhoods.",
    pricing:
      "$4.50 for a 30-minute single trip. Day Pass: $30 for unlimited 30-minute rides. Monthly pass also available. Extra time beyond 30 minutes: $0.07/minute.",
    tips: "Grab a Day Pass if you plan to explore widely — it pays for itself quickly. Dock the bike at any station before 30 minutes to avoid extra charges. The Biki app shows real-time station availability.",
    category: Category.biki,
  },
  {
    title: "Biki One-Way Trip",
    description:
      "Perfect for short point-to-point trips in Waikiki — ride from your hotel to the beach, Ala Moana, or Diamond Head lookout and dock at the nearest station. No need to return to your starting point.",
    pricing:
      "$4.50 per trip (up to 30 minutes). Add more time at $0.07 per minute. Credit card or the Biki app accepted at any docking station kiosk.",
    tips: "Plan your route in advance to stay within the 30-minute window. Helmets are not provided — bring your own or purchase one at a local pharmacy. Ride on the road or in designated bike lanes, not on sidewalks.",
    category: Category.biki,
  },

  // Trolley
  {
    title: "Waikiki Trolley Red Line",
    description:
      "The Red Line is the most popular trolley route, running a scenic loop along Waikiki Beach and stopping at Diamond Head, Kahala Mall, and key shopping areas. It's an open-air, narrated experience that doubles as a sightseeing tour.",
    pricing:
      "1-day pass: $25 adult, $15 child (3–11). 4-day pass: $45 adult, $25 child. Under 3 free. Passes cover all trolley lines (Red, Blue, Green, Pink).",
    tips: "Buy multi-day passes for the best value if you plan to use it over several days. Trolleys run every 20–40 minutes. Narration is available in multiple languages. Great for first-time visitors wanting an overview of Waikiki.",
    category: Category.trolley,
  },
  {
    title: "Waikiki Trolley Pink Line",
    description:
      "The Pink Line is a free shopping shuttle connecting Waikiki hotels to Ala Moana Center, running every 10 minutes. It's the quickest and most convenient way to reach Honolulu's premier shopping destination without a car or rideshare.",
    pricing:
      "Free! No ticket or pass required. Simply board at any Waikiki Pink Line stop and ride to Ala Moana Center.",
    tips: "Runs 9am–9:30pm daily. Look for the bright pink trolley at designated stops along Kalakaua Avenue and Kuhio Avenue. Perfect for shopping trips — the trolley runs frequently enough that you rarely wait more than 15 minutes.",
    category: Category.trolley,
  },

  // Rideshare
  {
    title: "Uber in Waikiki",
    description:
      "Uber operates throughout Oahu and is widely available in Waikiki. It's the most flexible door-to-door transportation option, great for late-night returns, airport transfers with luggage, or reaching spots not easily served by bus or trolley.",
    pricing:
      "Varies by distance and demand. Typical Waikiki to airport fare: $25–$45. Short Waikiki hops (hotel to restaurant): $8–$15. Surge pricing common during evening hours and events.",
    tips: "Request your ride from a designated rideshare pickup area to avoid congestion — many hotels have specific Uber/Lyft zones. Avoid surge times by waiting 10–15 minutes or walking a short distance.",
    category: Category.rideshare,
  },
  {
    title: "Lyft in Waikiki",
    description:
      "Lyft is a strong alternative to Uber with comparable availability across Waikiki and Oahu. Pricing is competitive and the app experience is similar. Having both apps installed lets you quickly compare prices before booking.",
    pricing:
      "Similar to Uber pricing — Waikiki to airport typically $25–$45. In-app price estimates available before confirming. No cash payments accepted.",
    tips: "Compare prices between Lyft and Uber before booking — one is often cheaper at a given moment. Lyft Pink membership offers savings if you're visiting for an extended stay. Schedule rides in advance for early morning airport departures.",
    category: Category.rideshare,
  },

  // Car Rental
  {
    title: "Economy Car Rental",
    description:
      "Renting an economy car like a Toyota Corolla or similar gives you the freedom to explore beyond Waikiki — visit the North Shore, Hanauma Bay, Kailua Beach, and the Windward Coast on your own schedule. Most rental agencies are based at the airport.",
    pricing:
      "From $50–$80/day for economy sedans. Prices increase significantly during peak travel season (Dec–Jan, Jun–Aug). Add $15–$25/day for insurance if not covered by your credit card.",
    tips: "Check if your credit card provides rental car insurance to skip the pricey daily coverage. Book early for the best rates. Parking in Waikiki costs $20–$40/day at hotels — factor this in. Fill up at a station away from the airport to avoid premium fuel prices.",
    category: Category.carRental,
  },
  {
    title: "Compact SUV Rental",
    description:
      "A compact SUV like a Honda CR-V or Jeep Renegade provides extra comfort and cargo space for families or groups with beach gear. Also better suited for excursions to higher-elevation spots like Tantalus Lookout or unpaved areas near Kaena Point.",
    pricing:
      "From $75–$120/day. Premium SUVs and Jeeps run $100–$180/day. All-inclusive insurance packages available at rental counters for additional daily fee.",
    tips: "If you plan to visit Kaena Point or unpaved roads, confirm your rental agreement allows off-road use — most standard rentals don't. Pack light to keep parking manageable in Waikiki's tight lots.",
    category: Category.carRental,
  },

  // Walking
  {
    title: "Waikiki Beach Walk",
    description:
      "The stretch along Waikiki Beach from Hilton Hawaiian Village to Kapiolani Park is one of the world's most iconic seaside walks. It runs roughly 2 miles along the waterfront, passing hotels, beach parks, surf shops, and restaurants — all steps from the sand.",
    pricing:
      "Completely free. No equipment needed beyond comfortable shoes or sandals. Public restrooms and showers available along the beach path.",
    tips: "Walk early morning (6–8am) to enjoy cooler temperatures, beautiful light, and uncrowded beaches. The path is mostly flat and suitable for all fitness levels. Watch for outrigger canoe clubs launching from the beach in the mornings.",
    category: Category.walking,
  },
  {
    title: "Kalakaua Avenue Stroll",
    description:
      "Waikiki's main boulevard, Kalakaua Avenue, is a vibrant pedestrian-friendly street lined with high-end boutiques, open-air restaurants, street performers, and the famous Duke Kahanamoku statue. It connects Waikiki's two ends and is endlessly walkable.",
    pricing:
      "Free to walk. Shopping, dining, and entertainment along the way range from budget-friendly to luxury.",
    tips: "Evening strolls after 7pm are especially lively with live music and entertainment. Street performers near the International Market Place are worth watching. Wear light, breathable clothing — evening temperatures stay warm year-round.",
    category: Category.walking,
  },

  // Other
  {
    title: "Moped Rental",
    description:
      "Mopeds (motor scooters under 50cc) are a fun way to zip around Waikiki and nearby areas without dealing with parking stress. Several rental shops near the beach offer hourly and daily rentals. No motorcycle license required for 50cc scooters.",
    pricing:
      "Hourly: $25–$35. Half-day (4 hrs): $50–$70. Full day: $80–$110. Helmet included in rental. Valid driver's license and credit card required as deposit.",
    tips: "Stick to lower-traffic streets — Kalakaua can be congested. Mopeds are not permitted on H-1 freeway. Always lock up at designated spots. Great for reaching Kahala or Diamond Head without worrying about parking.",
    category: Category.other,
  },
  {
    title: "Bicycle Rental",
    description:
      "Renting a traditional bicycle is perfect for leisurely rides along Ala Wai Boulevard, through Kapiolani Park, or to Diamond Head. Several shops along Waikiki offer beach cruisers and road bikes by the hour or day.",
    pricing:
      "Beach cruiser: $15–$20/hour or $40–$60/day. Road bike: $25–$35/hour. Electric bikes available at some shops for $30–$50/hour.",
    tips: "Ride in designated bike lanes on Ala Wai Boulevard and Kapiolani Park paths. Lock your bike whenever leaving it unattended. Bring sunscreen — the coastal sun is intense. Kapiolani Park offers smooth, flat paths perfect for casual riders.",
    category: Category.other,
  },
];
