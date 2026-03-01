import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Entry {
    id: bigint;
    name: string;
    tips: string;
    description: string;
    category: Category;
    priceInfo: string;
}
export enum Category {
    taxi = "taxi",
    rideshare = "rideshare",
    theBus = "theBus",
    waikikiTrolley = "waikikiTrolley",
    bikiBikes = "bikiBikes",
    shuttleTours = "shuttleTours",
    carRental = "carRental"
}
export interface backendInterface {
    addEntry(name: string, category: Category, description: string, priceInfo: string, tips: string): Promise<bigint>;
    deleteEntry(id: bigint): Promise<void>;
    getAllEntries(): Promise<Array<Entry>>;
    getEntriesByCategory(category: Category): Promise<Array<Entry>>;
    updateEntry(id: bigint, name: string, category: Category, description: string, priceInfo: string, tips: string): Promise<void>;
}
