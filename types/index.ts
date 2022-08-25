export interface MapClickEvent extends MouseEvent {
  Ab: { x: number; y: number };
  domEvent: MouseEvent;
  latLng: { lat: number; lng: number };
  pixel: { x: number; y: number };
}

export interface Coord {
  lat: number;
  lng: number;
}

export interface Communication {
  id: string;
  owner_name: string;
  owner_email: string;
  owner_cpf: string;
  latitude: number;
  longitude: number;
  type: string;
  date: string;
  event: string;
  suspicious: boolean;
}

export interface CommunicationList {
  count: number;
  next: string | null;
  previous: string | null;
  results: Communication[];
}
