import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface FavoriteStore {
  favoriteCitiesIds: number[];
  addFavoriteCityId: (cityId: number) => void;
  removeFavoriteCityId: (cityId: number) => void;
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
}

const favoriteStore = create<FavoriteStore>()(
  persist(
    (set) => ({
      favoriteCitiesIds: [],
      _hasHydrated: false,
      setHasHydrated: (state: boolean) => set({ _hasHydrated: state }),
      addFavoriteCityId: (cityId: number) =>
        set((state) => ({
          favoriteCitiesIds: [...state.favoriteCitiesIds, cityId],
        })),
      removeFavoriteCityId: (cityId: number) =>
        set((state) => ({
          favoriteCitiesIds: state.favoriteCitiesIds.filter(
            (id) => id !== cityId
          ),
        })),
    }),
    {
      name: "favorite-cities-ids",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) state.setHasHydrated(true);
      },
    }
  )
);

export default favoriteStore;
