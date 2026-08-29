import { useState, useEffect } from 'react';

type YouTubeSearchItem = {
  id?: { videoId?: string };
  snippet?: { title?: string };
};

// ✅ Hook para cargar videos (autocontenida, sin dependencias externas)
export const useYouTubeVideos = (maxResults = 4) => {
  const [videos, setVideos] = useState<Array<{ id: string; title: string }>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Usa variables de entorno si están, o fallback para testing
    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY || 'AIzaSyBx...'; // ← reemplazá por tu clave en .env.local
    const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID || 'UCx...'; // ← tu channel ID

    if (API_KEY === 'AIzaSyBx...' || CHANNEL_ID === 'UCx...') {
      // Modo dev: videos de ejemplo (evita errores en consola)
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
        const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=${maxResults}&type=video`;
        const res = await fetch(url);
        const data : { items?: YouTubeSearchItem[] } =await res.json();
        const items = data.items || [];
        
        setVideos(items.map((item: YouTubeSearchItem) => ({
          id: item.id?.videoId ?? '',
          title: item.snippet?.title ?? 'Untitled'
        })));
      } catch (err) {
        console.warn('YouTube API no disponible. Usando demos.',err);
        setVideos([
          { id: 'dQw4w9WgXcQ', title: 'Demo: Beat épico' },
          { id: 'LACbE319lWI', title: 'Live Session – Guitarra' }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [maxResults]);

  return { videos, loading };
};