import { AxiosClient } from "@/services/AxiosClient";

const API_URL = "https://api.thecatapi.com/v1";
const HEADERS = { "x-api-key": "live_9MMtsGXs1bdyXQ4DqUhnLjB6mUejOTxoKAXlLiMcqyqND7JOswH42wnseUM2qLNL" };

class CatsService extends AxiosClient {
  constructor(url, baseHeaders) {
    super(url, baseHeaders);
    this.getCatImages = this.getCatImages.bind(this);
  }

  getCatImages(limit = 10) {
    const path = `/images/search?limit=${limit}&size=thumb`;
    return this.client.get(path);
  }
}

const ServiceInstance = new CatsService(API_URL, HEADERS);

export { ServiceInstance as CatsService };
