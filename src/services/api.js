import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.neko-atsume.emshea.com/",
});

export default instance;
