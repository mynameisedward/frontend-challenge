import { useEffect, useState } from "react";
import {
  getFavoriteCatsFromStorage,
  setFavoriteCatsToStorage,
} from "@shared/lib/localStorage";
import { Cat } from "@shared/types/cat";

const KEY = "FAVORITE_CATS";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Cat[]>(() => {
    const cats = localStorage.getItem(KEY);
    return cats ? JSON.parse(cats) : [];
  });

  const toggleFavorite = (cat: Cat) => {
    setFavorites((prev) => {
      const exists = prev.find((item) => item.id === cat.id);

      let updated;
      if (exists) {
        updated = prev.filter((item) => item.id !== cat.id);
      } else {
        updated = [...prev, cat];
      }

      localStorage.setItem(KEY, JSON.stringify(updated));

      return updated;
    });
  };

  const isFavorite = (id: string) => {
    return favorites.some((cat) => cat.id === id);
  };

  return { favorites, toggleFavorite, isFavorite };
};
