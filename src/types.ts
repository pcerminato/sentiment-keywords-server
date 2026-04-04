export interface Sentiment {
  name: string;
  createdAt: string;
  lastUpdateAt: string;
  lists: {
    accepted: string[];
    denied: string[];
  };
}

export type Search = {
  name: Sentiment["name"];
  limit?: number;
  skip?: number;
};
