import { Button } from "@/components/ui/button";
import { Category } from "../backend";

interface CategoryFilterProps {
  selected: Category | null;
  onSelect: (category: Category | null) => void;
  counts?: Record<string, number>;
}

const CATEGORY_CONFIG: {
  value: Category | null;
  label: string;
  emoji: string;
}[] = [
  { value: null, label: "All", emoji: "🗺️" },
  { value: Category.theBus, label: "TheBus", emoji: "🚌" },
  { value: Category.biki, label: "Biki Bikes", emoji: "🚲" },
  { value: Category.trolley, label: "Trolley", emoji: "🚃" },
  { value: Category.rideshare, label: "Rideshare", emoji: "🚗" },
  { value: Category.carRental, label: "Car Rental", emoji: "🔑" },
  { value: Category.walking, label: "Walking", emoji: "🚶" },
  { value: Category.other, label: "Other", emoji: "✨" },
];

export default function CategoryFilter({
  selected,
  onSelect,
  counts,
}: CategoryFilterProps) {
  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 justify-center">
        {CATEGORY_CONFIG.map(({ value, label, emoji }) => {
          const isActive = selected === value;
          const count = value !== null && counts ? counts[value] : undefined;
          return (
            <button
              // biome-ignore lint/a11y/useButtonType: filter button, not in a form context
              key={label}
              onClick={() => onSelect(value)}
              className={[
                "inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-sans font-medium transition-all duration-200 border",
                isActive
                  ? "bg-primary text-primary-foreground border-primary shadow-card scale-105"
                  : "bg-card text-foreground border-border hover:border-primary/50 hover:bg-secondary hover:scale-105",
              ].join(" ")}
            >
              <span>{emoji}</span>
              <span>{label}</span>
              {count !== undefined && (
                <span
                  className={[
                    "ml-1 text-xs px-1.5 py-0.5 rounded-full font-medium",
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
    </div>
  );
}
