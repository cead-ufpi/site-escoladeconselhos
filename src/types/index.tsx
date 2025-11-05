export enum LibraryItemType {
  PDF = 'pdf',
  Video = 'video',
}

export interface Project {
  imageUrl: string;
  title: string;
  description: string;
}

export interface NewsArticle {
  id: number;
  slug: string;
  imageUrl: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export interface TeamMember {
  imageUrl: string;
  name: string;
  title: string;
  bio: string;
}

export interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
}

export interface LibraryItem {
  type: LibraryItemType;
  title: string;
  link: string;
  thumbnailUrl?: string;
}

export interface Photo {
  id: number;
  galleryId: number;
  imageUrl: string;
  caption?: string;
}

export interface PhotoGallery {
  id: number;
  slug: string;
  title: string;
  description: string;
  coverImageUrl: string;
}