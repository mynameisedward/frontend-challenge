import React from "react";
import s from "./CatsGrid.module.css";

interface Props {
  children: React.ReactNode;
}

export const CatsGrid = ({ children }: Props) => {
  return (
    // prettier-ignore
    <div className={s.grid}>
      {children}
    </div>
  );
};
