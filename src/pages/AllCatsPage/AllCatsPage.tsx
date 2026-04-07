import { useEffect, useRef } from "react";
import { CatCard } from "@entities/cat/CatCard/CatCard";
import { useCats } from "@entities/cat/model/useCats";
import { useFavorites } from "@features/toggleFavorite/model/useFavorite";
import { CatsGrid } from "@widgets/CatsGrid/CatsGrid";
import "@styles/global.css";
import { SkeletonCard } from "@shared/ui/SkeletonCard";

export const AllCatsPage = () => {
  const { cats, loadCats, loading } = useCats();
  const { toggleFavorite, isFavorite } = useFavorites();

  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading) {
        loadCats();
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [loading]);

  return (
    <div className="container">
      <CatsGrid>
        {cats.map((cat) => (
          <CatCard
            key={cat.id}
            cat={cat}
            isFavorite={isFavorite(cat.id)}
            onToggle={toggleFavorite}
          />
        ))}
      </CatsGrid>
      <div className="margin-bot"></div>
      <CatsGrid>
        {loading &&
          Array.from({ length: 20 }).map((_, i) => <SkeletonCard key={i} />)}
      </CatsGrid>

      {/* триггер для загрузки */}
      <div ref={loaderRef} style={{ height: 20 }} />

      {loading && <div className="loader">Loading...</div>}
    </div>
  );
};
