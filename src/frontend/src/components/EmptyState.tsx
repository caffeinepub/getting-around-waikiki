import { Category } from "../backend";

interface EmptyStateProps {
  category: Category | null;
  isLoading?: boolean;
}

const CATEGORY_LABELS: Partial<Record<Category, string>> = {
  [Category.theBus]: "TheBus",
  [Category.bikiBikes]: "Biki Bikes",
  [Category.waikikiTrolley]: "Waikiki Trolley",
  [Category.rideshare]: "Rideshare",
  [Category.carRental]: "Car Rental",
  [Category.taxi]: "Taxi",
  [Category.shuttleTours]: "Shuttle & Tours",
};

export default function EmptyState({ category, isLoading }: EmptyStateProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <div className="text-5xl animate-bounce">🌺</div>
        <p className="font-display text-xl text-muted-foreground">
          Loading your guide…
        </p>
        <p className="font-sans text-sm text-muted-foreground">
          Fetching transportation info from the island
        </p>
      </div>
    );
  }

  const label = category ? (CATEGORY_LABELS[category] ?? category) : null;

  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4">
      <div className="text-5xl">🌊</div>
      <p className="font-display text-xl text-foreground">
        {label ? `No ${label} entries yet` : "No transportation entries yet"}
      </p>
      <p className="font-sans text-sm text-muted-foreground max-w-sm text-center">
        The guide is being populated. Check back soon for tips on getting around
        Waikiki!
      </p>
    </div>
  );
}
