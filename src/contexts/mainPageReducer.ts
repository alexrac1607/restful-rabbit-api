import { useReducer } from "react";
import { CommonInputsTableData } from "../types/common.types";
import {
  StateType,
  ActionType,
  ActionTypeEnum,
} from "../types/mainPageContext.types";
import { AuthorizationType, RequestMethod } from "../types/mainRequest.types";
import { NUMBER_OF_TABS } from "../utils/constants";
import {
  updateTabData,
  extractParamsFromUrl,
  buildUrlWithParams,
} from "./utils";

const newTabInitialData = {
  authorizationData: {
    authorizationType: AuthorizationType.None,
    username: "",
    password: "",
    token: "",
  },
  requestData: {
    url: "",
    method: RequestMethod.GET,
    params: [{ key: "", value: "" }],
    headers: [{ key: "", value: "" }],
  },
};

const mainPageReducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case ActionTypeEnum.ADD_TAB:
      const newTabId = `${Date.now()}`;
      return {
        ...state,
        selectedTabId: newTabId,
        tabs: [
          {
            id: newTabId,
            title: `New Tab ${state.tabs.length + 1}`,
            ...newTabInitialData,
          },
          ...state.tabs,
        ],
      };
    case ActionTypeEnum.SELECT_TAB:
      const selectedTabId = action.payload as string;
      const selectedTabIndex = state.tabs.findIndex(
        (tab) => tab.id === selectedTabId,
      );
      // if selectedTabIndex is > NUMBER_OF_TABS, it should be moved to the first position to make it visible
      if (selectedTabIndex >= NUMBER_OF_TABS) {
        const selectedTab = state.tabs[selectedTabIndex];
        const newTabs = state.tabs.filter((tab) => tab.id !== selectedTabId);
        return {
          ...state,
          selectedTabId,
          tabs: [selectedTab, ...newTabs],
        };
      }
      return {
        ...state,
        selectedTabId: selectedTabId,
      };
    case ActionTypeEnum.CHANGE_TAB_METHOD:
      const method = action.payload as RequestMethod;
      return updateTabData(state, [
        { section: "requestData", valuesToUpdate: { method } },
      ]);
    case ActionTypeEnum.CHANGE_TAB_URL: {
      const url = action.payload as string;
      const params = extractParamsFromUrl(url);
      return updateTabData(state, [
        {
          section: "requestData",
          valuesToUpdate: { url, params },
        },
      ]);
    }
    case ActionTypeEnum.CHANGE_TAB_HEADERS:
      const headers = action.payload as CommonInputsTableData;
      return updateTabData(state, [
        { section: "requestData", valuesToUpdate: { headers } },
      ]);
    case ActionTypeEnum.CHANGE_TAB_PARAMS:
      const params = action.payload as CommonInputsTableData;
      const url = state.tabs.find((tab) => tab.id === state.selectedTabId)
        ?.requestData.url;
      const newUrl = buildUrlWithParams(params, url);
      return updateTabData(state, [
        { section: "requestData", valuesToUpdate: { params, url: newUrl } },
      ]);
    case ActionTypeEnum.CHANGE_TAB_BODY:
      const body = action.payload as string;
      return updateTabData(state, [
        { section: "requestData", valuesToUpdate: { body } },
      ]);
    case ActionTypeEnum.CHANGE_TAB_AUTHORIZATION_TYPE:
      const authorizationType = action.payload as AuthorizationType;
      const updatedHeaders = (
        state.tabs.find((tab) => tab.id === state.selectedTabId)?.requestData
          .headers || []
      ).filter((header) => header.key !== "Authorization");
      return updateTabData(state, [
        {
          section: "authorizationData",
          valuesToUpdate: {
            authorizationType,
            username: "",
            password: "",
            token: "",
          },
        },
        {
          section: "requestData",
          valuesToUpdate: { headers: updatedHeaders },
        },
      ]);
    case ActionTypeEnum.CHANGE_TAB_USERNAME:
      const username = action.payload as string;
      return updateTabData(state, [
        { section: "authorizationData", valuesToUpdate: { username } },
      ]);
    case ActionTypeEnum.CHANGE_TAB_PASSWORD:
      const password = action.payload as string;
      return updateTabData(state, [
        { section: "authorizationData", valuesToUpdate: { password } },
      ]);
    case ActionTypeEnum.CHANGE_TAB_TOKEN:
      const token = action.payload as string;
      return updateTabData(state, [
        { section: "authorizationData", valuesToUpdate: { token } },
      ]);
    case ActionTypeEnum.UPDATE_AUTHORIZATION_HEADER: {
      const selectedTab = state.tabs.find(
        (tab) => tab.id === state.selectedTabId,
      );
      if (!selectedTab) {
        return state;
      }
      const { authorizationType, username, password, token } =
        selectedTab.authorizationData;
      let newValue = "";
      if (authorizationType === AuthorizationType.Basic)
        newValue = btoa(`${username}:${password}`);
      else if (authorizationType === AuthorizationType.Bearer)
        newValue = `Bearer ${token}`;

      const newHeaderValue = {
        key: "Authorization",
        value: newValue,
      };

      const updatedHeaders = (selectedTab.requestData.headers || []).filter(
        (header) => header.key !== "Authorization",
      );

      return updateTabData(state, [
        {
          section: "requestData",
          valuesToUpdate: {
            headers: [...updatedHeaders, newHeaderValue],
          },
        },
      ]);
    }
    default:
      return state;
  }
};

export const initialState = {
  tabs: [
    {
      id: "1",
      title: "New Tab 1",
      ...newTabInitialData,
    },
  ],
  selectedTabId: "1",
};

export const useMainPageReducer = () => {
  const [state, dispatch] = useReducer(mainPageReducer, initialState);
  return { state, dispatch };
};
