import { CommonInputsTableData } from "../types/common.types";
import { StateType } from "../types/mainPageContext.types";
import { RequestMethod, AuthorizationType } from "../types/mainRequest.types";

export const updateTabData = (
  state: StateType,
  dataToUpdate: {
    section: "requestData" | "authorizationData";
    valuesToUpdate: {
      [key: string]:
        | string
        | CommonInputsTableData
        | RequestMethod
        | AuthorizationType;
    };
  }[],
) => {
  const tabId = state.selectedTabId;
  const tabIndex = state.tabs.findIndex((tab) => tab.id === tabId);
  if (tabIndex === -1) {
    return state;
  }

  const newTabs = [...state.tabs];

  dataToUpdate.forEach((data) => {
    const { section, valuesToUpdate } = data;
    newTabs[tabIndex] = {
      ...newTabs[tabIndex],
      [section]: {
        ...newTabs[tabIndex][section],
        ...valuesToUpdate,
      },
    };
  });

  return {
    ...state,
    tabs: newTabs,
  };
};

export const extractParamsFromUrl = (url: string): CommonInputsTableData => {
  return (
    url
      .split("?")?.[1]
      ?.split("&")
      ?.map((param) => {
        const [key, value = ""] = param.split("=");
        return { key, value };
      }) || [{ key: "", value: "" }]
  );
};

export const buildUrlWithParams = (
  params: CommonInputsTableData,
  url?: string,
): string => {
  if (!url) return "";
  const newQueryString = params
    .filter((param) => param.key) // Optional: Ignore params with empty keys
    .map(
      (param) =>
        `${encodeURIComponent(param.key)}=${encodeURIComponent(param.value)}`,
    )
    .join("&");
  const urlWithoutQuery = url.split("?")[0];
  return `${urlWithoutQuery}?${newQueryString}`;
};
