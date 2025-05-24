import { motion } from "framer-motion";
import { Music, Book } from "lucide-react";
import { hobbiesData } from "@/data/hobbiesData";

const Hobbies = () => {
  return (
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hobbiesData.map((hobby, index) => (
            <motion.div 
              key={index}
              className="bg-space-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-glow-purple transition-all duration-300"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <h3 className="font-orbitron text-xl p-4 border-b border-gray-800">{hobby.title}</h3>
              <div className="p-4">
                {hobby.type === "gallery" && (
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {hobby.content.images.map((image, imgIndex) => (
                      <motion.img 
                        key={imgIndex}
                        src={image.src} 
                        alt={image.alt} 
                        className="rounded-lg w-full h-40 object-cover hover:opacity-80 transition-opacity"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      />
                    ))}
                  </div>
                )}
                
                {hobby.type === "playlist" && (
                  <div className="bg-gray-900 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-orbitron text-sm">Current Playlist</span>
                      <Music className="text-space-purple" size={16} />
                    </div>
                    <ul className="space-y-2 text-sm text-gray-400">
                      {hobby.content.songs.map((song, songIndex) => (
                        <li key={songIndex} className="flex justify-between">
                          <span>{song.title}</span>
                          <span>{song.duration}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {hobby.type === "grid" && (
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {hobby.content.images.map((image, imgIndex) => (
                      <motion.img 
                        key={imgIndex}
                        src={image.src} 
                        alt={image.alt} 
                        className="rounded-lg w-full h-20 object-cover hover:opacity-80 transition-opacity"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      />
                    ))}
                  </div>
                )}
                
                {hobby.type === "books" && (
                  <div>
                    <h4 className="font-semibold mb-3">Favorite Books</h4>
                    <ul className="space-y-3 text-gray-300">
                      {hobby.content.books.map((book, bookIndex) => (
                        <li key={bookIndex} className="flex items-start">
                          <Book className="text-space-purple mt-1 mr-3" size={18} />
                          <div>
                            <span className="block">{book.title}</span>
                            <span className="text-sm text-gray-400">{book.author}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <p className="mt-4 text-gray-300">
                  {hobby.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Hobbies;
