export type Hobby = {
  title: string;
  description: string;
  type: "gallery" | "playlist" | "grid" | "books";
  content: HobbyContent;
};

export type HobbyContent = GalleryContent | PlaylistContent | GridContent | BooksContent;

export type GalleryContent = {
  images: { src: string; alt: string }[];
};

export type PlaylistContent = {
  songs: { title: string; duration: string }[];
};

export type GridContent = {
  images: { src: string; alt: string }[];
};

export type BooksContent = {
  books: { title: string; author: string }[];
};

export const hobbiesData: Hobby[] = [
  {
    title: "Pixel Art",
    description: "Creating pixel art designs and game sprites. Exploring retro aesthetics and nostalgic game styles.",
    type: "gallery",
    content: {
      images: [
        {
          src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
          alt: "Pixel art creation"
        },
        {
          src: "https://images.unsplash.com/photo-1627163439134-7a8c47e08208?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
          alt: "Game-inspired pixel art"
        }
      ]
    }
  },
  {
    title: "Game Development",
    description: "Building small games and exploring game mechanics as a hobby. Experimenting with different frameworks and game engines.",
    type: "playlist",
    content: {
      songs: [
        { title: "Tetris Clone", duration: "C++" },
        { title: "2D Platformer", duration: "JavaScript" },
        { title: "Simple Puzzle Game", duration: "Unity" },
        { title: "8-bit Style RPG", duration: "Godot" }
      ]
    }
  },
  {
    title: "Technology Exploration",
    description: "Experimenting with new technologies and frameworks. Constantly learning and testing new programming languages and tools.",
    type: "grid",
    content: {
      images: [
        {
          src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
          alt: "Coding setup"
        },
        {
          src: "https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
          alt: "Technology exploration"
        },
        {
          src: "https://images.unsplash.com/photo-1573495612622-f1e564a8b4d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
          alt: "Learning and development"
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
        { title: "You Don't Know JS", author: "Kyle Simpson" },
        { title: "System Design Interview", author: "Alex Xu" }
      ]
    }
  },
  {
    title: "Networking & Security",
    description: "Exploring network configurations, security protocols, and system administration concepts. Applying CCNA and Red Hat knowledge in practical scenarios.",
    type: "books",
    content: {
      books: [
        { title: "CCNA Official Cert Guide", author: "Wendell Odom" },
        { title: "Red Hat Enterprise Linux", author: "Sander van Vugt" },
        { title: "Practical Network Security", author: "Allan Liska" }
      ]
    }
  }
];
