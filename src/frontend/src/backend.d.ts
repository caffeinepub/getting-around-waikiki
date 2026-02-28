import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface TransportEntryInput {
    title: string;
    tips: string;
    description: string;
    pricing: string;
    category: Category;
}
export interface TransportEntry {
    id: bigint;
    title: string;
    tips: string;
    description: string;
    pricing: string;
    category: Category;
}
export enum Category {
    other = "other",
    biki = "biki",
    rideshare = "rideshare",
    theBus = "theBus",
    walking = "walking",
    trolley = "trolley",
    carRental = "carRental"
}
export interface backendInterface {
    addEntry(entry: TransportEntryInput): Promise<bigint>;
    deleteEntry(id: bigint): Promise<void>;
    getAllEntries(): Promise<Array<TransportEntry>>;
    getEntriesByCategory(category: Category): Promise<Array<TransportEntry>>;
    getEntry(id: bigint): Promise<TransportEntry>;
    updateEntry(id: bigint, updatedEntry: TransportEntryInput): Promise<void>;
}
