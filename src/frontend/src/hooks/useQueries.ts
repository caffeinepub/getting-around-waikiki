import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Category, type Entry } from "../backend";
import { useActor } from "./useActor";

export function useGetAllEntries() {
  const { actor, isFetching } = useActor();

  return useQuery<Entry[]>({
    queryKey: ["entries"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllEntries();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetEntriesByCategory(category: Category | null) {
  const { actor, isFetching } = useActor();

  return useQuery<Entry[]>({
    queryKey: ["entries", "category", category],
    queryFn: async () => {
      if (!actor) return [];
      if (category === null) return actor.getAllEntries();
      return actor.getEntriesByCategory(category);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddEntry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (entry: {
      name: string;
      category: Category;
      description: string;
      priceInfo: string;
      tips: string;
    }) => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.addEntry(
        entry.name,
        entry.category,
        entry.description,
        entry.priceInfo,
        entry.tips,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["entries"] });
    },
  });
}

export function useDeleteEntry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.deleteEntry(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["entries"] });
    },
  });
}

export { Category };
