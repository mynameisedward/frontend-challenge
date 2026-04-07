import { useEffect, useState } from "react";
import { fetchCats } from "@shared/api/catApi";
import { Cat } from "@shared/types/cat";

export const useCats = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  const loadCats = async () => {
    try {
      setLoading(true);
      const data = await fetchCats(page, 20);

      setCats((prev) => [...prev, ...data]);
      setPage((prev) => prev + 1);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCats();
  }, []);

  return { cats, loadCats, loading };
};
