import React, { createContext, ReactNode, useContext } from "react";
import RootStore from "../stores/RootStore";

let store: RootStore;
const StoreContext = createContext<RootStore | undefined>(undefined);
StoreContext.displayName = "StoreContext";

export function useRootStore() {
    const context = useContext(StoreContext);
    if (context === undefined) {
        throw new Error("useRootStore must be used within RootStoreProvider");
    }

    return context;
}

export function useMealsStore() {
    const { mealsStore } = useRootStore();
    return mealsStore;
}

export function useCurrentMealStore() {
    const { currentMealStore } = useRootStore();
    return currentMealStore;
}

export function RootStoreProvider({ children }: { children: ReactNode }) {
    // only create root store once (store is a singleton)
    const root = store ?? new RootStore();

    return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
}