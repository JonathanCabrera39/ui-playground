import { useState, useEffect } from 'react';

// ✅ Tipo correcto para la respuesta de playlistItems
type YouTubePlaylistItem = {
  id: string; // ID del item en la playlist
  snippet?: {
    title?: string;
    resourceId?: {
      videoId?: string; // ✅ Aquí está el ID real del video
    };
  };
};

export const useYouTubeVideos = (maxResults = 4) => {
  const [videos, setVideos] = useState<Array<{ id: string; title: string }>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY || 'AIzaSyBx...';
    const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID || 'UCx...';

    // Fallback elegante si no hay variables de entorno (Modo Dev)
    if (API_KEY === 'AIzaSyBx...' || CHANNEL_ID === 'UCx...') {
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
        // UU + los últimos 22 caracteres del Channel ID (UC...)
        const uploadsPlaylistId = `UU${CHANNEL_ID.slice(2)}`;
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${maxResults}&key=${API_KEY}`;
    
        const res = await fetch(url);
        const data: { items?: YouTubePlaylistItem[] } = await res.json();
        const items = data.items || [];
        
        // ✅ Mapeo corregido para extraer el videoId de resourceId
        setVideos(items.map((item: YouTubePlaylistItem) => ({
          id: item.snippet?.resourceId?.videoId ?? '',
          title: item.snippet?.title ?? 'Untitled'
        })));
      } catch (err) {
        console.warn('YouTube API no disponible. Usando demos.', err);
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