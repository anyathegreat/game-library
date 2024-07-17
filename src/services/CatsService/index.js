import { config } from "@/_config";
import { AxiosClient } from "@/services/AxiosClient";

const API_URL = config.CATS_API_URL;
const HEADERS = { "x-api-key": config.CATS_API_KEY };

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
