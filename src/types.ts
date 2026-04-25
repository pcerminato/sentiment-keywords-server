export interface Sentiment {
  name: string;
  createdAt: string;
  lastUpdateAt: string;
  lists: {
    accepted: string[];
    denied: string[];
  };
}

export type Lists = Sentiment["lists"];

export type Search = {
  name: Sentiment["name"];
  limit?: number;
  skip?: number;
};

export type ResponseData = {
  results: Sentiment[];
  count: number;
  message?: string;
};
