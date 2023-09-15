export interface TracksStateStructure {
  tracks: TrackStructure[];
}

export interface TrackStructure {
  album: string;
  image: string;
  musicType: string;
  singer: string;
  repeat: boolean;
  notes: string;
  user: string;
  songs: string[];
  id: string;
}
