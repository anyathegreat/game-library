import { config } from "@/_config";
import { AxiosClient } from "@/services/AxiosClient";

const API_URL = config.DOGS_API_URL;
const HEADERS = { "x-api-key": config.DOGS_API_KEY };

class DogsService extends AxiosClient {
  constructor(url, baseHeaders) {
    super(url, baseHeaders);
    this.getDogsImages = this.getDogsImages.bind(this);
  }

  getDogsImages(limit = 10) {
    const path = `/images/search?limit=${limit}&size=thumb`;
    return this.client.get(path);
  }
}

const ServiceInstance = new DogsService(API_URL, HEADERS);

export { ServiceInstance as DogsService };
