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
    title: "Digital Art",
    description: "Creating digital art pieces that blend technology and abstract concepts. Exploring new techniques in digital painting and 3D modeling.",
    type: "gallery",
    content: {
      images: [
        {
          src: "https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
          alt: "Abstract digital art"
        },
        {
          src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
          alt: "Tech-inspired digital art"
        }
      ]
    }
  },
  {
    title: "Music Production",
    description: "Producing electronic music and ambient soundscapes in my home studio. Experimenting with synthesizers and digital audio workstations.",
    type: "playlist",
    content: {
      songs: [
        { title: "Synth Odyssey", duration: "3:45" },
        { title: "Cosmic Waves", duration: "4:21" },
        { title: "Digital Dreams", duration: "5:08" },
        { title: "Neural Network", duration: "3:57" }
      ]
    }
  },
  {
    title: "Photography",
    description: "Capturing urban landscapes, architecture, and technology through photography. Focusing on night photography and long exposure techniques.",
    type: "grid",
    content: {
      images: [
        {
          src: "https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
          alt: "Urban night photography"
        },
        {
          src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
          alt: "Abstract architecture"
        },
        {
          src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
          alt: "Technology close-up"
        }
      ]
    }
  },
  {
    title: "Reading",
    description: "Exploring science fiction, technology, and design literature that inspires my work and creative thinking.",
    type: "books",
    content: {
      books: [
        { title: "Snow Crash", author: "Neal Stephenson" },
        { title: "Neuromancer", author: "William Gibson" },
        { title: "The Design of Everyday Things", author: "Don Norman" }
      ]
    }
  }
];
