import s from "./FavoriteButton.module.css";
import like from "@shared/assets/like.png";
import activeLike from "@shared/assets/active-like.png";
import React from "react";

interface Props {
  isFavorite?: boolean;
  onClick: () => void;
}

export const FavoriteButton: React.FC<Props> = ({
  isFavorite,
  onClick,
}: Props) => {
  return (
    <button
      className={`${s.favoriteBtn} ${isFavorite ? `${s.active}` : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {isFavorite ? (
        <img src={activeLike} alt="" className={s.likeImg} />
      ) : (
        <img src={like} alt="" className={s.likeImg} />
      )}
    </button>
  );
};
