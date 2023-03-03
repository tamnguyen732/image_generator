import { useState } from 'react';
export const useFetch = async (url: string, config: RequestInit) => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState<boolean>(false);
  try {
    setLoading(true);
    const response = await fetch(url, config);
    if (response.ok) {
      const result = await response.json();
      setData(result.data);
    }
    setLoading(false);
  } catch (error) {
    console.log(error);
  }

  return { data, loading };
};
