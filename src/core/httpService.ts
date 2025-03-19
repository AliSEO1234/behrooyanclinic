import axios from "axios";

const httpService = axios.create({
  baseURL: "https://azpohealth.com/api",
});

export default httpService;
