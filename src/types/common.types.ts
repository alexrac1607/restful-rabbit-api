import { AuthorizationType, RequestMethod } from "./mainRequest.types";

export type CommonInputsTableData = { key: string; value: string }[];

export type TabInformation = {
  id: string;
  title: string;
  authorizationData: {
    authorizationType: AuthorizationType;
    username: string;
    password: string;
    token: string;
  };
  requestData: {
    url: string;
    method: RequestMethod;
    headers?: CommonInputsTableData;
    params?: CommonInputsTableData;
    body?: string;
  };
};
