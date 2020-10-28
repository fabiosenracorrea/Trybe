import axios from 'axios';

export interface RedditResponse {
  data: {
    children: Array<{
      data: {
        title: string;
        url: string;
        ups: number;
      };
    }>;
  };
}

const api = axios.create({
  baseURL: 'https://www.reddit.com/r',
});

export default api;
