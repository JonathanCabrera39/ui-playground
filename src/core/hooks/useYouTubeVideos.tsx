import { useState, useEffect } from 'react';

// ID de tu playlist manual de YouTube (La que controlas tú)
const PLAYLIST_ID = 'PLS-v4wS4Dtsc';

export const useYouTubeVideos = (maxResults = 4) => {
  const [videos, setVideos] = useState<Array<{ id: string; title: string }>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

    // Fallback elegante si no hay variables de entorno (Modo Dev)
    if (!API_KEY || API_KEY.includes('...')) {
      setTimeout(() => {
        setVideos([
          { id: 'dQw4w9WgXcQ', title: 'Demo: Beat épico' },
          { id: 'LACbE319lWI', title: 'Live Session – Guitarra' },
          { id: '9bZkp7q19f0', title: 'Nuevo lanzamiento' },
          { id: 'kJQP7kiw5Fk', title: 'Detrás de escena' }
        ]);
        setLoading(false);
      }, 800);
      return;
    }

    const fetchVideos = async () => {
      try {
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=${maxResults}&key=${API_KEY}`;
        
        const res = await fetch(url);
        const data = await res.json();
        const items = data.items || [];
        
        setVideos(items.map((item: any) => ({
          id: item.snippet?.resourceId?.videoId ?? '',
          title: item.snippet?.title ?? 'Sin título'
        })));
      } catch (err) {
        console.warn('Error cargando videos de YouTube:', err);
        setVideos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [maxResults]);

  return { videos, loading };
};