"use client";

import { DATA_RIDES } from "@/mock/data";
import { useEffect, useState } from "react";

export default function useFetchMockId(id: number) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  function timeout(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        await timeout(2000); // simulate fetch
        setData(DATA_RIDES.find((data) => data.id === id));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { data, error, loading };
}
