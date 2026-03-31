export interface Sentiment {
  name: string;
  createdAt: string;
  lastUpdateAt: string;
  lists: {
    accepted: string[];
    denied: string[];
  };
}
