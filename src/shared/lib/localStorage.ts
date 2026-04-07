const KEY = "FAVORITE_CATS";

export const getFavoriteCatsFromStorage = (): string[] => {
  const cats = localStorage.getItem(KEY);
  return cats ? JSON.parse(cats) : [];
};

export const setFavoriteCatsToStorage = (favorites: string[]): void => {
  localStorage.setItem(KEY, JSON.stringify(favorites));
};
