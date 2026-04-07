import { AllCatsPage } from "@pages/AllCatsPage/AllCatsPage";
import { FavoritesPage } from "@pages/FavoritesPage/FavoritesPage";
import { Route, Routes, Navigate } from "react-router";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AllCatsPage />} />
      <Route path="/favorite" element={<FavoritesPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
