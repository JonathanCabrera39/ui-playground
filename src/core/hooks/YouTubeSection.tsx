import { useYouTubeVideos } from "./useYouTubeVideos";
import { YouTubeEmbed } from "./YouTubeEmbed";


export const YouTubeSection = () => {
  const { videos, loading } = useYouTubeVideos(4);

  return (
    <section className="w-full py-20 bg-black/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Últimos videos</h2>
          <p className="mt-4 text-gray-400">Escuchá, mirá y sentí la energía en vivo.</p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin w-8 h-8 border-4 border-rose-500 border-t-transparent rounded-full"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {videos.map((video) => (
              < YouTubeEmbed key={video.id} videoId={video.id} title={video.title} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};