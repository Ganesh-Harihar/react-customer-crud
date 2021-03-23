import axios from "axios";
class Http {
  private apiUrl = "http://localhost:3001";

  constructor() {}

  fetch(url: string) {
    return axios.get(`${this.apiUrl}/${url}`);
  }

  post(url: string, body: any) {
    console.log('body', body);
    return axios.post(`${this.apiUrl}/${url}`, body);
  }

  put(url: string, body: any) {
    return axios.put(`${this.apiUrl}/${url}`, body);
  }

  delete(url: string) {
    return axios.delete(`${this.apiUrl}/${url}`);
  }
}

export default Http;
