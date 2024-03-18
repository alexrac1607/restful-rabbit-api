import axios from "axios";
import { MainRequest } from "../types/mainRequest.types";

export const callMainRequest = (requestConfig: MainRequest) => {
  
  const { method, url, headers, body } = requestConfig;
  return axios({ method, url, headers, data: body });
};
