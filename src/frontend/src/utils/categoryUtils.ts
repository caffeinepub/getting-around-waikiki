import { Category } from "../backend";

/**
 * Motoko variant types come back from the canister as objects like { theBus: null }.
 * This utility normalizes them to the Category string enum values.
 */
export function normalizeCategory(raw: unknown): Category {
  if (
    typeof raw === "string" &&
    Object.values(Category).includes(raw as Category)
  ) {
    return raw as Category;
  }
  if (typeof raw === "object" && raw !== null) {
    const key = Object.keys(raw)[0];
    if (key && Object.values(Category).includes(key as Category)) {
      return key as Category;
    }
  }
  return Category.taxi;
}
