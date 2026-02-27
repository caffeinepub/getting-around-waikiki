import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { Category, type TransportEntry, type TransportEntryInput } from '../backend';

export function useGetAllEntries() {
  const { actor, isFetching } = useActor();

  return useQuery<TransportEntry[]>({
    queryKey: ['entries'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllEntries();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetEntriesByCategory(category: Category | null) {
  const { actor, isFetching } = useActor();

  return useQuery<TransportEntry[]>({
    queryKey: ['entries', 'category', category],
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
    mutationFn: async (entry: TransportEntryInput) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.addEntry(entry);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['entries'] });
    },
  });
}

export function useDeleteEntry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.deleteEntry(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['entries'] });
    },
  });
}

export { Category };
