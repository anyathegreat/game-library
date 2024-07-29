import { config } from "@/_config";
import { AxiosClient } from "@/services/AxiosClient";

const PROXY_URL = config.GAMES_API_PROXY_URL || "https://icy-brook-c5a6.ytar-99.workers.dev/?apiurl=";
// ||"https://thingproxy.freeboard.io/fetch";
const API_URL = config.GAMES_API_URL;
const API_KEY = config.GAMES_API_KEY;
const HEADERS = {};

class GamesService extends AxiosClient {
  constructor(url, baseHeaders) {
    super(url, baseHeaders);
    this.getGameDetails = this.getGameDetails.bind(this);
  }

  getGameDetails(id) {
    const path = PROXY_URL + encodeURIComponent(`${API_URL}/game/${id}/?api_key=${API_KEY}&format=json`);
    return this.client.get(path);
  }
}

const ServiceInstance = new GamesService(API_URL, HEADERS);

export { ServiceInstance as GamesService };
