import { useState } from "react";

export const YouTubeEmbed = ({ videoId, title }: { videoId: string; title: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="group bg-gray-800 rounded-xl overflow-hidden">
      {isPlaying ? (
        <div className="aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      ) : (
        <div 
          className="aspect-video relative cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition">
            <div className="bg-rose-600 w-14 h-14 rounded-full flex items-center justify-center transform group-hover:scale-110 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      )}
      <div className="p-4">
        <h3 className="text-white font-medium text-sm line-clamp-2">{title}</h3>
      </div>
    </div>
  );
};
