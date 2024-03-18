import { ReactNode } from "react";
import { CommonInputsTableData, TabInformation } from "../types/common.types";
import { AuthorizationType, RequestMethod } from "../types/mainRequest.types";

export interface MainPageContextType {
  tabs: TabInformation[];
  selectedTabId: string;
  addTabHandler: () => void;
  selectTabHandler: (tabId: string) => void;
  selectedTabData: TabInformation;
  changeTabMethodHandler: (method: RequestMethod) => void;
  changeTabUrlHandler: (url: string) => void;
  changeTabHeadersHandler: (headers: CommonInputsTableData) => void;
  changeTabParamsHandler: (params: CommonInputsTableData) => void;
  changeTabBodyHandler: (body: string) => void;
  changeTabAuthorizationTypeHandler: (
    authorizationType: AuthorizationType,
  ) => void;
  changeTabUsernameHandler: (username: string) => void;
  changeTabPasswordHandler: (password: string) => void;
  changeTabTokenHandler: (token: string) => void;
}

export interface MainPageProviderProps {
  children: ReactNode;
}

export interface StateType {
  tabs: TabInformation[];
  selectedTabId: string;
}

export enum ActionTypeEnum {
  ADD_TAB = "ADD_TAB",
  SELECT_TAB = "SELECT_TAB",
  CHANGE_TAB_METHOD = "CHANGE_TAB_METHOD",
  CHANGE_TAB_URL = "CHANGE_TAB_URL",
  CHANGE_TAB_HEADERS = "CHANGE_TAB_HEADERS",
  CHANGE_TAB_PARAMS = "CHANGE_TAB_PARAMS",
  CHANGE_TAB_BODY = "CHANGE_TAB_BODY",
  CHANGE_TAB_AUTHORIZATION_TYPE = "CHANGE_TAB_AUTHORIZATION_TYPE",
  CHANGE_TAB_USERNAME = "CHANGE_TAB_USERNAME",
  CHANGE_TAB_PASSWORD = "CHANGE_TAB_PASSWORD",
  CHANGE_TAB_TOKEN = "CHANGE_TAB_TOKEN",
  UPDATE_AUTHORIZATION_HEADER = "UPDATE_AUTHORIZATION_HEADER",
}

export type ActionType = { type: ActionTypeEnum; payload?: unknown };
