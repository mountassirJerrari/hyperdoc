export type Hobby = {
  title: string;
  description: string;
  type: "gallery" | "playlist" | "grid" | "books" | "list";
  content: HobbyContent;
  deviantArtUrl?: string;
  spotifyUrl?: string;
};

export type HobbyContent = GalleryContent | PlaylistContent | GridContent | BooksContent | ListContent;

export type GalleryContent = {
  thumbnail: string;
  images: { src: string; alt: string }[];
};

export type PlaylistContent = {
  songs: { title: string; duration?: string }[];
};

export type GridContent = {
  images: { src: string; alt: string }[];
};

export type BooksContent = {
  books: { title: string; author: string }[];
};

export type ListContent = {
  items: {
    title: string;
    description: string;
    link?: string;
    icon: string;
  }[];
};

export const hobbiesData: Hobby[] = [
  {
    title: "Digital Art",
    description: "Creating digital artwork and illustrations. Exploring different styles and techniques in digital painting and design.",
    type: "gallery",
    content: {
      // Show only the first image in the card
      thumbnail: "/art/art0.jpg",
      // All images for the gallery
      images: [
        {
          src: "/art/art0.jpg",
          alt: "Digital Artwork - Abstract Composition"
        },
        {
          src: "/art/art1.png",
          alt: "Digital Artwork - Geometric Design"
        },
        {
          src: "/art/art2.png",
          alt: "Digital Artwork - Surreal Landscape"
        },
        {
          src: "/art/art3.png",
          alt: "Digital Artwork - Character Design"
        },
        {
          src: "/art/art4.jpg",
          alt: "Digital Artwork - Pattern Study"
        },
        {
          src: "/art/art5.png",
          alt: "Digital Artwork - Abstract Portrait"
        },
        {
          src: "/art/art6.jpg",
          alt: "Digital Artwork - Minimalist Design"
        },
        {
          src: "/art/art7.jpg",
          alt: "Digital Artwork - Texture Exploration"
        }
      ]
    },
    deviantArtUrl: "https://www.deviantart.com/yourusername"
  },
  {
    title: "Tech Reads & Blogs",
    description: "Exploring the latest in technology through various blogs and publications. Always learning from the tech community.",
    type: "grid",
    content: {
      images: [
        {
          src: "https://cdn-icons-png.flaticon.com/512/2111/2111501.png",
          alt: "Medium Blog"
        },
        {
          src: "https://cdn-icons-png.flaticon.com/512/5968/5968906.png",
          alt: "Dev.to Community"
        },
        {
          src: "https://cdn-icons-png.flaticon.com/512/2111/2111425.png",
          alt: "GitHub Blog"
        },
        {
          src: "https://cdn-icons-png.flaticon.com/512/5968/5968853.png",
          alt: "CSS-Tricks"
        },
        {
          src: "https://cdn-icons-png.flaticon.com/512/5968/5968871.png",
          alt: "FreeCodeCamp"
        },
        {
          src: "https://cdn-icons-png.flaticon.com/512/2111/2111320.png",
          alt: "Smashing Magazine"
        }
      ]
    }
  },
  {
    title: "Technical Reading",
    description: "Reading technical books and articles about software architecture, design patterns, and new technologies to expand my knowledge.",
    type: "books",
    content: {
      books: [
        { title: "Clean Code", author: "Robert C. Martin" },
        { title: "Design Patterns", author: "Erich Gamma et al." },
        { title: "Thinking in C++", author: "Bruce Eckel" },
        { title: "Professional CMake: A Practical Guide", author: "Craig Scott" }
      ]
    }
  },
  {
    title: "Hobbies & Interests",
    description: "A mix of activities and interests that keep me engaged and inspired.",
    type: "list",
    content: {
      items: [
        { 
          title: "Music",
          description: "Rock, Electronic, Lo-fi, and more. Always exploring new genres and artists.",
          link: "https://open.spotify.com/user/your-profile",
          icon: "🎵"
        },
        { 
          title: "Sports & Outdoors",
          description: "Football, Hiking, and staying active.",
          icon: "⚽"
        },
        { 
          title: "Gaming",
          description: "Video games, Chess, and strategy games.",
          icon: "🎮"
        },
        { 
          title: "Creative",
          description: "Photography, Movies, and TV Shows.",
          icon: "📸"
        },
        { 
          title: "Chess",
          description: "Strategic board games and competitive play.",
          icon: "♟️"
        }
      ]
    }
  }
];
