export type LocationType = 
  | 'capital' 
  | 'monument' 
  | 'temple' 
  | 'fort' 
  | 'palace' 
  | 'beach' 
  | 'hillStation' 
  | 'wildlife' 
  | 'heritage' 
  | 'port';

export interface Location {
  id: number;
  name: string;
  state: string;
  description: string;
  coordinates: [number, number];
  type: LocationType;
  rating: number;
  image: string;
  yearEstablished?: number;
  isUnesco?: boolean;
}