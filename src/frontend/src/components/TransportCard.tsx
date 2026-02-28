import { Badge } from "@/components/ui/badge";
import { DollarSign, Info, Lightbulb } from "lucide-react";
import { Category, type TransportEntry } from "../backend";
import { normalizeCategory } from "../utils/categoryUtils";

interface TransportCardProps {
  entry: TransportEntry;
}

const CATEGORY_META: Record<
  Category,
  { label: string; emoji: string; color: string }
> = {
  [Category.theBus]: {
    label: "TheBus",
    emoji: "🚌",
    color: "bg-teal-100 text-teal-600 border-teal-200",
  },
  [Category.biki]: {
    label: "Biki Bikes",
    emoji: "🚲",
    color: "bg-sunset-300/30 text-sunset-600 border-sunset-300",
  },
  [Category.trolley]: {
    label: "Trolley",
    emoji: "🚃",
    color: "bg-coral-100 text-coral-600 border-coral-200",
  },
  [Category.rideshare]: {
    label: "Rideshare",
    emoji: "🚗",
    color: "bg-sand-200 text-sand-500 border-sand-300",
  },
  [Category.carRental]: {
    label: "Car Rental",
    emoji: "🔑",
    color: "bg-teal-50 text-teal-500 border-teal-100",
  },
  [Category.walking]: {
    label: "Walking",
    emoji: "🚶",
    color: "bg-sunset-300/20 text-sunset-600 border-sunset-300",
  },
  [Category.other]: {
    label: "Other",
    emoji: "✨",
    color: "bg-sand-100 text-sand-500 border-sand-200",
  },
};

export default function TransportCard({ entry }: TransportCardProps) {
  const normalizedCat = normalizeCategory(entry.category);
  const meta = CATEGORY_META[normalizedCat] ?? {
    label: "Other",
    emoji: "✨",
    color: "bg-sand-100 text-sand-500 border-sand-200",
  };

  return (
    <article className="bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden animate-fade-in">
      {/* Card header strip */}
      <div className="h-1.5 w-full bg-gradient-to-r from-primary via-accent to-sunset-400 opacity-80" />

      <div className="p-5 flex flex-col gap-4 flex-1">
        {/* Title row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl leading-none">{meta.emoji}</span>
            <h3 className="font-display text-lg font-bold text-foreground leading-tight">
              {entry.title}
            </h3>
          </div>
          <span
            className={[
              "shrink-0 text-xs font-sans font-semibold px-2.5 py-1 rounded-full border",
              meta.color,
            ].join(" ")}
          >
            {meta.label}
          </span>
        </div>

        {/* Description */}
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
          <p className="font-sans text-sm text-foreground/80 leading-relaxed">
            {entry.description}
          </p>
        </div>

        {/* Pricing */}
        <div className="flex gap-2 bg-secondary/60 rounded-xl px-3 py-2.5">
          <DollarSign className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wide mb-0.5">
              Pricing
            </p>
            <p className="font-sans text-sm text-foreground/80 leading-relaxed">
              {entry.pricing}
            </p>
          </div>
        </div>

        {/* Tips */}
        {entry.tips && (
          <div className="flex gap-2 bg-accent/10 rounded-xl px-3 py-2.5 border border-accent/20">
            <Lightbulb className="w-4 h-4 text-accent-foreground shrink-0 mt-0.5" />
            <div>
              <p className="font-sans text-xs font-semibold text-accent-foreground uppercase tracking-wide mb-0.5">
                Pro Tips
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
