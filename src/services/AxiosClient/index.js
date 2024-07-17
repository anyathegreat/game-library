import axios from "axios";

export class AxiosClient {
  constructor(url, baseHeaders) {
    this._url = url;
    this._headers = baseHeaders;
  }

  get baseURL() {
    return this._url;
  }

  get client() {
    const headers = {
      Accept: "*/*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      ...this._headers,
    };

    return axios.create({
      baseURL: this.baseURL,
      headers,
    });
  }
}
