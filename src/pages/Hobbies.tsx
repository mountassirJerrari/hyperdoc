import { motion, AnimatePresence } from "framer-motion";
import { Music, Book, ExternalLink } from "lucide-react";
import { useState } from "react";
import { hobbiesData, Hobby, GalleryContent } from "@/data/hobbiesData";
import ArtGallery from "@/components/ArtGallery";
import ArtCard from "@/components/ArtCard";

const Hobbies = () => {
  const [selectedArt, setSelectedArt] = useState<{ images: { src: string; alt: string }[]; deviantArtUrl: string } | null>(null);
  
  const openArtGallery = (hobby: Hobby) => {
    if (hobby.type === 'gallery' && hobby.deviantArtUrl) {
      const galleryContent = hobby.content as GalleryContent;
      setSelectedArt({ 
        images: galleryContent.images, 
        deviantArtUrl: hobby.deviantArtUrl 
      });
    }
  };
  
  const closeArtGallery = () => {
    setSelectedArt(null);
  };
  return (
    <>
      <AnimatePresence>
        {selectedArt && (
          <ArtGallery 
            images={selectedArt.images} 
            onClose={closeArtGallery}
            deviantArtUrl={selectedArt.deviantArtUrl}
          />
        )}
      </AnimatePresence>
    <motion.section
      className="min-h-screen w-full flex items-center justify-center px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl w-full mx-auto">
        <motion.h2 
          className="font-orbitron text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-space-purple">Hobbies</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {hobbiesData.map((hobby, index) => (
            <motion.div 
              key={index}
              className="card card-hover group"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              <h3 className="card-title mb-5 text-xl">{hobby.title}</h3>
              <div className="space-y-5">
                {hobby.type === "gallery" && (
                  <ArtCard 
                    key={`gallery-${hobby.title}`}
                    title="Digital Art Gallery"
                    thumbnail={(hobby.content as GalleryContent).thumbnail}
                    count={(hobby.content as GalleryContent).images.length}
                    onClick={() => openArtGallery(hobby)}
                  />
                )}
                
                {hobby.type === "playlist" && (
                  <div className="bg-space-secondary/50 rounded-xl p-4 border border-space-secondary/50">
                    <div className="flex items-center justify-between mb-4">
                      <a 
                        href={hobby.spotifyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-orbitron text-sm text-space-purple hover:text-space-cyan transition-colors flex items-center gap-1.5"
                      >
                        Spotify Playlists
                        <Music className="text-space-purple" size={18} />
                      </a>
                    </div>
                    <ul className="space-y-3">
                      {(hobby.content as { songs: { title: string }[] }).songs.map((song, songIndex) => (
                        <li key={songIndex} className="group">
                          <a 
                            href={hobby.spotifyUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex justify-between items-center group-hover:bg-space-secondary/30 px-2 py-1.5 rounded-md -mx-2 group-hover:mx-0 transition-all duration-200"
                          >
                            <span className="text-gray-200 group-hover:text-space-cyan transition-colors">{song.title}</span>
                            <span className="text-xs text-gray-400 group-hover:text-space-cyan transition-colors">→</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {hobby.type === "grid" && (
                  <div className="grid grid-cols-3 gap-3">
                    {(hobby.content as { images: { src: string; alt: string }[] }).images.map((image, imgIndex) => (
                      <motion.div 
                        key={imgIndex}
                        className="relative overflow-hidden rounded-lg aspect-square"
                        whileHover="hover"
                        initial="rest"
                      >
                        <motion.img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-full object-cover"
                          variants={{
                            rest: { scale: 1 },
                            hover: { scale: 1.1 }
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    ))}
                  </div>
                )}
                
                {hobby.type === "books" && (
                  <div className="space-y-4">
                    <ul className="space-y-4">
                      {(hobby.content as { books: { title: string; author: string }[] }).books.map((book, bookIndex) => (
                        <li key={bookIndex} className="flex items-start group">
                          <div className="bg-space-purple/10 p-2 rounded-lg mr-3 group-hover:bg-space-purple/20 transition-colors">
                            <Book className="text-space-purple" size={18} />
                          </div>
                          <div>
                            <span className="block text-white group-hover:text-space-cyan transition-colors">{book.title}</span>
                            <span className="text-sm text-gray-400">{book.author}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {hobby.type === "list" && (
                  <div className="space-y-4">
                    <ul className="space-y-4">
                      {(hobby.content as { items: { title: string; description: string; link?: string; icon: string }[] }).items.map((item, itemIndex) => (
                        <li key={itemIndex} className="group">
                          <div className={`flex items-start ${item.link ? 'hover:bg-space-secondary/30' : ''} p-3 rounded-lg transition-colors`}>
                            <span className="text-2xl mr-3 mt-0.5">{item.icon}</span>
                            <div className="flex-1">
                              <div className="flex items-center">
                                <span className="font-medium text-white group-hover:text-space-cyan transition-colors">
                                  {item.link ? (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                      {item.title}
                                      <ExternalLink size={14} className="ml-1.5 opacity-0 group-hover:opacity-70 transition-opacity" />
                                    </a>
                                  ) : item.title}
                                </span>
                              </div>
                              <p className="text-sm text-gray-300 mt-1">{item.description}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <p className="text-gray-300 mt-4 text-sm leading-relaxed">
                  {hobby.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
    </>
  );
};

export default Hobbies;
