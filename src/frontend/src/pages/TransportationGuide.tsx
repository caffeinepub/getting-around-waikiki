import { Badge } from "@/components/ui/badge";
import { DollarSign, Lightbulb, MapPin, Search } from "lucide-react";
import { useMemo, useState } from "react";
import Layout from "../components/Layout";

// ── Static data – embedded directly, no backend dependency ──────────────────

type CategoryKey =
  | "TheBus"
  | "BikiBikes"
  | "WaikikiTrolley"
  | "Rideshare"
  | "CarRental"
  | "Taxi"
  | "ShuttleTours";

interface TransportEntry {
  id: string;
  name: string;
  category: CategoryKey;
  description: string;
  priceInfo: string;
  tips: string;
}

const TRANSPORT_DATA: TransportEntry[] = [
  {
    id: "1",
    name: "TheBus",
    category: "TheBus",
    description:
      "Oahu's public transit system covers the entire island with over 100 routes. Waikiki has multiple stops along Kuhio Ave and Kalakaua Ave.",
    priceInfo:
      "$3 per ride, $7.50 day pass, $30 monthly pass. Exact change required.",
    tips: "Route 8 and 19/20 connect Waikiki to Ala Moana. Use the DaBus2 app to track real-time arrivals.",
  },
  {
    id: "2",
    name: "TheBus Express",
    category: "TheBus",
    description:
      "Express routes connecting Waikiki to major destinations like Downtown Honolulu, Hawaii Kai, and the North Shore faster than local routes.",
    priceInfo: "$3 per ride. Same fare as local bus.",
    tips: "Route 42 goes express to Downtown. Great for reaching Pearl Harbor or Iolani Palace.",
  },
  {
    id: "3",
    name: "Biki Bike Share",
    category: "BikiBikes",
    description:
      "Honolulu's bikeshare program with 130+ stations across Waikiki, Downtown, and Ala Moana. Electric-assist and standard bikes available.",
    priceInfo:
      "$4.50 for 30 min, $25 for a 300-min monthly pass. Extra time billed per minute.",
    tips: "Stations are near most major hotels. Great for short trips along the beachfront path.",
  },
  {
    id: "4",
    name: "Biki Night Rides",
    category: "BikiBikes",
    description:
      "Biki bikes are available 24/7. Night rides along the Ala Wai Canal and beachfront are a popular activity.",
    priceInfo: "Same pricing. $4.50 unlocks 30 minutes.",
    tips: "Wear light-colored clothing and use the bike's built-in light at night. The beachfront path is well-lit.",
  },
  {
    id: "5",
    name: "Waikiki Trolley Pink Line",
    category: "WaikikiTrolley",
    description:
      "Free! Loops through Waikiki connecting major hotels, shopping centers, and the beach. Runs every 10 minutes.",
    priceInfo: "FREE. No ticket needed.",
    tips: "Most convenient for getting between your hotel and Kalakaua Ave shops. Runs 8am–11pm daily.",
  },
  {
    id: "6",
    name: "Waikiki Trolley Other Lines",
    category: "WaikikiTrolley",
    description:
      "Paid trolley lines to Diamond Head, Ala Moana, Chinatown, and scenic routes around Oahu.",
    priceInfo: "$2–$45 depending on route. Day passes available.",
    tips: "Buy a multi-day pass for best value if you plan to use multiple lines. Book at your hotel concierge.",
  },
  {
    id: "7",
    name: "Uber & Lyft",
    category: "Rideshare",
    description:
      "Both Uber and Lyft operate widely in Waikiki. Pickup is available from most hotels and street corners.",
    priceInfo:
      "Waikiki to Airport: ~$25–40. Waikiki to North Shore: ~$60–80. Surge pricing during peak hours.",
    tips: "Avoid rideshare during checkout time (11am) when demand surges. Use the app to compare prices.",
  },
  {
    id: "8",
    name: "Holoholo",
    category: "Rideshare",
    description:
      "Local Hawaii rideshare app. Supports Hawaii-based drivers and may have lower surge pricing than national apps.",
    priceInfo: "Comparable to Uber/Lyft pricing.",
    tips: "Good backup option when Uber/Lyft surge pricing is high. Download before your trip.",
  },
  {
    id: "9",
    name: "Enterprise / Hertz / Alamo",
    category: "CarRental",
    description:
      "Major car rental agencies at Honolulu Airport and select Waikiki locations. Reserve in advance for best rates.",
    priceInfo:
      "$40–$100/day plus taxes, fees, and parking (~$25–40/night in Waikiki).",
    tips: "Only worth it for day trips to North Shore, Hanauma Bay, or multiple stops. Waikiki parking is expensive and scarce.",
  },
  {
    id: "10",
    name: "Turo (Peer-to-Peer)",
    category: "CarRental",
    description:
      "Rent cars directly from local owners. Often cheaper than major agencies and pickup can be at the airport or your hotel.",
    priceInfo: "$30–$70/day. Check for insurance options.",
    tips: "Great for getting a unique vehicle (convertible, Jeep). Book well in advance for popular travel dates.",
  },
  {
    id: "11",
    name: "Traditional Taxi",
    category: "Taxi",
    description:
      "Metered taxis available at hotel taxi stands, the airport, and by phone. TheCab and Charley's are the main companies.",
    priceInfo: "$3.10 base + $0.45 per 1/8 mile. Airport to Waikiki: ~$35–45.",
    tips: "Best for late-night returns when rideshare surge is high. Ask your hotel to call one in advance.",
  },
  {
    id: "12",
    name: "Hotel Car Service",
    category: "Taxi",
    description:
      "Many luxury hotels offer private car or limo service to the airport and island attractions.",
    priceInfo: "$60–$150+ depending on distance and vehicle.",
    tips: "Book through your hotel concierge. Includes luggage help and can be worth it for groups or early flights.",
  },
  {
    id: "13",
    name: "Roberts Hawaii Shuttle",
    category: "ShuttleTours",
    description:
      "Shared airport shuttle service between Honolulu Airport and Waikiki hotels. Affordable but can take longer due to multiple stops.",
    priceInfo: "$16–$20 per person one way.",
    tips: "Book in advance online. Shared shuttles make multiple hotel stops — budget 45–60 min from airport.",
  },
  {
    id: "14",
    name: "Tour Buses",
    category: "ShuttleTours",
    description:
      "Full-day and half-day tours of Oahu departing from Waikiki. Covers Pearl Harbor, North Shore, Polynesian Cultural Center, and more.",
    priceInfo: "$45–$120 per person depending on tour length and inclusions.",
    tips: "Best value for seeing the whole island without renting a car. Book through your hotel or directly with operators like E Noa Tours.",
  },
];

// ── Category configuration ───────────────────────────────────────────────────

interface CategoryConfig {
  key: CategoryKey | null;
  label: string;
  emoji: string;
  badgeClass: string;
}

const CATEGORIES: CategoryConfig[] = [
  { key: null, label: "All", emoji: "🗺️", badgeClass: "" },
  {
    key: "TheBus",
    label: "TheBus",
    emoji: "🚌",
    badgeClass: "bg-teal-100 text-teal-600 border-teal-200",
  },
  {
    key: "BikiBikes",
    label: "Biki Bikes",
    emoji: "🚲",
    badgeClass: "bg-sunset-300/30 text-sunset-600 border-sunset-300",
  },
  {
    key: "WaikikiTrolley",
    label: "Waikiki Trolley",
    emoji: "🚃",
    badgeClass: "bg-coral-100 text-coral-600 border-coral-200",
  },
  {
    key: "Rideshare",
    label: "Rideshare",
    emoji: "🚗",
    badgeClass: "bg-sand-200 text-sand-500 border-sand-300",
  },
  {
    key: "CarRental",
    label: "Car Rental",
    emoji: "🔑",
    badgeClass: "bg-teal-50 text-teal-500 border-teal-100",
  },
  {
    key: "Taxi",
    label: "Taxi",
    emoji: "🚕",
    badgeClass: "bg-sunset-300/20 text-sunset-600 border-sunset-300",
  },
  {
    key: "ShuttleTours",
    label: "Shuttle & Tours",
    emoji: "🚐",
    badgeClass: "bg-sand-100 text-sand-500 border-sand-200",
  },
];

const CATEGORY_MAP = Object.fromEntries(
  CATEGORIES.filter((c) => c.key !== null).map((c) => [c.key, c]),
) as Record<CategoryKey, CategoryConfig>;

// ── Sub-components ───────────────────────────────────────────────────────────

function CategoryFilterBar({
  selected,
  onSelect,
  counts,
}: {
  selected: CategoryKey | null;
  onSelect: (key: CategoryKey | null) => void;
  counts: Record<CategoryKey, number>;
}) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {CATEGORIES.map(({ key, label, emoji }) => {
        const isActive = selected === key;
        const count = key !== null ? (counts[key] ?? 0) : undefined;
        return (
          <button
            type="button"
            key={label}
            onClick={() => onSelect(key)}
            className={[
              "inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-sans font-medium transition-all duration-200 border focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              isActive
                ? "bg-primary text-primary-foreground border-primary shadow-card scale-105"
                : "bg-card text-foreground border-border hover:border-primary/50 hover:bg-secondary hover:scale-105",
            ].join(" ")}
          >
            <span aria-hidden="true">{emoji}</span>
            <span>{label}</span>
            {count !== undefined && (
              <span
                className={[
                  "ml-0.5 text-xs px-1.5 py-0.5 rounded-full font-medium",
                  isActive
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "bg-muted text-muted-foreground",
                ].join(" ")}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

function TransportCard({ entry }: { entry: TransportEntry }) {
  const meta = CATEGORY_MAP[entry.category] ?? {
    label: entry.category,
    emoji: "✨",
    badgeClass: "bg-muted text-muted-foreground border-border",
  };

  return (
    <article className="bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden">
      {/* Subtle top gradient strip */}
      <div className="h-1.5 w-full bg-gradient-to-r from-primary via-accent to-sunset-400 opacity-80" />

      <div className="p-5 flex flex-col gap-4 flex-1">
        {/* Title row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="text-2xl leading-none shrink-0" aria-hidden="true">
              {meta.emoji}
            </span>
            <h3 className="font-display text-lg font-bold text-foreground leading-tight">
              {entry.name}
            </h3>
          </div>
          <span
            className={[
              "shrink-0 text-xs font-sans font-semibold px-2.5 py-1 rounded-full border whitespace-nowrap",
              meta.badgeClass,
            ].join(" ")}
          >
            {meta.label}
          </span>
        </div>

        {/* Description */}
        <p className="font-sans text-sm text-foreground/80 leading-relaxed">
          {entry.description}
        </p>

        {/* Pricing */}
        <div className="flex gap-2 bg-secondary/60 rounded-xl px-3 py-2.5">
          <DollarSign
            className="w-4 h-4 text-primary shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <div>
            <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wide mb-0.5">
              Pricing
            </p>
            <p className="font-sans text-sm text-foreground/80 leading-relaxed">
              {entry.priceInfo}
            </p>
          </div>
        </div>

        {/* Tips */}
        {entry.tips && (
          <div className="flex gap-2 bg-accent/10 rounded-xl px-3 py-2.5 border border-accent/20 mt-auto">
            <Lightbulb
              className="w-4 h-4 text-accent-foreground shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div>
              <p className="font-sans text-xs font-semibold text-accent-foreground uppercase tracking-wide mb-0.5">
                Pro Tip
              </p>
              <p className="font-sans text-sm text-foreground/80 leading-relaxed">
                {entry.tips}
              </p>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

// ── Main page ────────────────────────────────────────────────────────────────

export default function TransportationGuide() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | null>(
    null,
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Count per category for badge display
  const counts = useMemo(() => {
    const result = {} as Record<CategoryKey, number>;
    for (const entry of TRANSPORT_DATA) {
      result[entry.category] = (result[entry.category] ?? 0) + 1;
    }
    return result;
  }, []);

  // Filter by category then search
  const filtered = useMemo(() => {
    let entries = TRANSPORT_DATA;

    if (selectedCategory !== null) {
      entries = entries.filter((e) => e.category === selectedCategory);
    }

    const q = searchQuery.trim().toLowerCase();
    if (q) {
      entries = entries.filter(
        (e) =>
          e.name.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q) ||
          e.priceInfo.toLowerCase().includes(q) ||
          e.tips.toLowerCase().includes(q),
      );
    }

    return entries;
  }, [selectedCategory, searchQuery]);

  return (
    <Layout>
      {/* Hero Banner */}
      <div className="relative w-full overflow-hidden" style={{ height: 300 }}>
        <img
          src="/assets/generated/waikiki-hero.dim_1200x400.png"
          alt="Scenic Waikiki beachfront with Diamond Head"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 px-4 text-center">
          <h2
            className="font-display text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg"
            style={{ color: "#fff" }}
          >
            Getting Around Waikiki
          </h2>
          <p
            className="font-sans text-base md:text-lg font-light max-w-xl drop-shadow"
            style={{ color: "rgba(255,255,255,0.92)" }}
          >
            Your complete guide to transportation on Oahu
          </p>
          <div className="flex gap-1 mt-4" aria-hidden="true">
            {["🌊", "🌺", "🌴", "🌺", "🌊"].map((emoji, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static decorative list
              <span key={i} className="text-lg opacity-90">
                {emoji}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-10 max-w-7xl">
        {/* Intro */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
            <span className="font-sans text-sm font-semibold text-primary uppercase tracking-widest">
              Oahu, Hawaii
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Your Complete Transportation Guide
          </h2>
          <p className="font-sans text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From the iconic TheBus to Biki bike share, trolleys, rideshares, and
            more — discover every way to explore Waikiki and the beautiful
            island of Oahu.
          </p>
          <p className="font-sans text-sm text-muted-foreground mt-2">
            <span className="font-semibold text-foreground">
              {TRANSPORT_DATA.length}
            </span>{" "}
            transportation options available
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8 relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="text"
            placeholder="Search transportation options…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search transportation options"
            className="w-full pl-9 pr-4 py-2.5 rounded-full border border-border bg-card text-sm font-sans text-foreground placeholder:text-muted-foreground shadow-xs focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition"
          />
        </div>

        {/* Category filter */}
        <div className="mb-10">
          <CategoryFilterBar
            selected={selectedCategory}
            onSelect={setSelectedCategory}
            counts={counts}
          />
        </div>

        {/* Divider / result count */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-border" />
          <span className="font-sans text-xs text-muted-foreground uppercase tracking-widest px-2">
            {selectedCategory || searchQuery.trim()
              ? `${filtered.length} result${filtered.length !== 1 ? "s" : ""}`
              : "All Options"}
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Cards grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground font-sans">
            <p className="text-4xl mb-4">🌊</p>
            <p className="text-lg font-semibold text-foreground mb-1">
              No results found
            </p>
            <p className="text-sm">
              Try a different category or clear your search.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((entry) => (
              <TransportCard key={entry.id} entry={entry} />
            ))}
          </div>
        )}

        {/* Bottom decoration */}
        {filtered.length > 0 && (
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-card border border-border rounded-2xl px-6 py-4 shadow-xs">
              <span className="text-2xl" aria-hidden="true">
                🌺
              </span>
              <div className="text-left">
                <p className="font-display text-sm font-semibold text-foreground">
                  Mahalo for visiting!
                </p>
                <p className="font-sans text-xs text-muted-foreground">
                  Have a wonderful time exploring Oahu
                </p>
              </div>
              <span className="text-2xl" aria-hidden="true">
                🌊
              </span>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
