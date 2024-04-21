"use client";
import { useEffect, useState } from "react";

const BASE_URL = "http://demo2763845.mockable.io/";

export default function useFetch() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}`).then((response) =>
          response.json(),
        );
        setData(response);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { data, error, loading };
}
