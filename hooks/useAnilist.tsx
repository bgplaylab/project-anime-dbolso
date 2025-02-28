import { useState } from 'react';
import { anilistClient } from '../utils/anilistApi';

const GET_ANIME = `
  query ($search: String) {
    Media (search: $search, type: ANIME) {
      id
      title {
        romaji
        english
      }
      coverImage {
        large
      }
      description
    }
  }
`;

export function useAniList() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const fetchAnime = async (search: string) => {
    setLoading(true);
    setError(null);

    try {
      const result: any = await anilistClient.request(GET_ANIME, { search });
      setData(result.Media);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchAnime };
}
