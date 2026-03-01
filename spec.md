# Getting Around Waikiki

## Current State
The project is a transportation guide for tourists visiting Waikiki and Oahu. Previous versions had issues with category filter buttons not working correctly and options not displaying properly.

## Requested Changes (Diff)

### Add
- Reliable static transportation data embedded directly in the frontend (no backend dependency for data)
- Category filter buttons that work correctly to show/hide transportation entries
- Clear display of all transportation options on initial load

### Modify
- Rebuild the app fresh to ensure all filter and display logic works reliably
- Transportation entries should show on initial load (all categories visible)
- Clicking a category button filters to show only that category's entries

### Remove
- Any broken backend-dependent data fetching that caused filter issues

## Implementation Plan
1. Build a React frontend with static transportation data (14 entries across 7 categories)
2. Categories: TheBus, Biki Bikes, Waikiki Trolley, Rideshare, Car Rental, Taxi, Shuttle/Tours
3. Each entry has: name, category, description, price info, tips
4. Display all entries on load in a card grid
5. Category filter buttons at top — clicking one shows only entries in that category, clicking "All" resets
6. Simple, clean UI optimized for mobile tourists
