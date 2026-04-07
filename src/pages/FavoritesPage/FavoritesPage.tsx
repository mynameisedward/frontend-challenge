import { CatCard } from "@entities/cat/CatCard/CatCard";
import { useFavorites } from "@features/toggleFavorite/model/useFavorite";
import { CatsGrid } from "@widgets/CatsGrid/CatsGrid";
import { useCats } from "@entities/cat/model/useCats";
import "@styles/global.css";

export const FavoritesPage = () => {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const { cats, loading } = useCats();

  return (
    <div className="container">
      {favorites.length > 0 ? (
        <CatsGrid>
          {favorites.map((cat) => (
            <CatCard
              key={cat.id}
              cat={cat}
              isFavorite={isFavorite(cat.id)}
              onToggle={toggleFavorite}
            />
          ))}
        </CatsGrid>
      ) : (
        <div className="empty">Нет избранных котиков</div>
      )}
    </div>
  );
};
