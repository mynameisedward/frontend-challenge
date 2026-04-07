import { FavoriteButton } from "@features/toggleFavorite/ui/FavoriteButton/FavoriteButton";
import s from "./CatCard.module.css";
import { Cat } from "@shared/types/cat";

interface Props {
  cat: Cat;
  isFavorite: boolean;
  onToggle: (cat: Cat) => void;
}

export const CatCard = ({ cat, isFavorite, onToggle }: Props) => {
  return (
    <div className={s.card}>
      <img src={cat.url} alt="cat" className={s.catImg} />
      <FavoriteButton isFavorite={isFavorite} onClick={() => onToggle(cat)} />
    </div>
  );
};
