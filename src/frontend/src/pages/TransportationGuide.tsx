import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { Category } from "../backend";
import CategoryFilter from "../components/CategoryFilter";
import EmptyState from "../components/EmptyState";
import HeroBanner from "../components/HeroBanner";
import Layout from "../components/Layout";
import TransportCard from "../components/TransportCard";
import { SEED_ENTRIES } from "../seedData";

// Build static entries with numeric IDs — no backend needed
const STATIC_ENTRIES = SEED_ENTRIES.map((e, i) => ({
  ...e,
  id: BigInt(i + 1),
}));

export default function TransportationGuide() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Compute counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const entry of STATIC_ENTRIES) {
      const key = entry.category as string;
      counts[key] = (counts[key] ?? 0) + 1;
    }
    return counts;
  }, []);

  // Filter entries by category and search
  const filteredEntries = useMemo(() => {
    let entries = STATIC_ENTRIES;

    if (selectedCategory !== null) {
      entries = entries.filter((e) => e.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      entries = entries.filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q) ||
          e.pricing.toLowerCase().includes(q) ||
          e.tips.toLowerCase().includes(q),
      );
    }

    return entries;
  }, [selectedCategory, searchQuery]);

  const totalCount = STATIC_ENTRIES.length;

  return (
    <Layout>
      {/* Hero Banner */}
      <HeroBanner />

      {/* Main content */}
      <div className="container mx-auto px-4 py-10 max-w-7xl">
        {/* Intro section */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <MapPin className="w-5 h-5 text-primary" />
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
            <span className="font-semibold text-foreground">{totalCount}</span>{" "}
            transportation options available
          </p>
        </div>

        {/* Search bar */}
        <div className="max-w-md mx-auto mb-8 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <Input
            type="text"
            placeholder="Search transportation options…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 font-sans bg-card border-border rounded-full shadow-xs focus:ring-primary"
          />
        </div>

        {/* Category filter */}
        <div className="mb-10">
          <CategoryFilter
            selected={selectedCategory}
            onSelect={setSelectedCategory}
            counts={categoryCounts}
          />
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-border" />
          <span className="font-sans text-xs text-muted-foreground uppercase tracking-widest px-2">
            {selectedCategory
              ? `${filteredEntries.length} result${filteredEntries.length !== 1 ? "s" : ""}`
              : searchQuery
                ? `${filteredEntries.length} result${filteredEntries.length !== 1 ? "s" : ""}`
                : "All Options"}
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Content */}
        {filteredEntries.length === 0 ? (
          <EmptyState category={selectedCategory} isLoading={false} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredEntries.map((entry) => (
              <TransportCard key={String(entry.id)} entry={entry} />
            ))}
          </div>
        )}

        {/* Bottom decorative section */}
        {filteredEntries.length > 0 && (
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-card border border-border rounded-2xl px-6 py-4 shadow-xs">
              <span className="text-2xl">🌺</span>
              <div className="text-left">
                <p className="font-display text-sm font-semibold text-foreground">
                  Mahalo for visiting!
                </p>
                <p className="font-sans text-xs text-muted-foreground">
                  Have a wonderful time exploring Oahu
                </p>
              </div>
              <span className="text-2xl">🌊</span>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
