import React, { createContext, useContext } from "react";
import { CommonInputsTableData, TabInformation } from "../types/common.types";
import { AuthorizationType, RequestMethod } from "../types/mainRequest.types";
import {
  MainPageContextType,
  MainPageProviderProps,
  ActionTypeEnum,
} from "../types/mainPageContext.types";
import { useMainPageReducer } from "./mainPageReducer";

const MainPageContext = createContext<MainPageContextType>({
  tabs: [],
  selectedTabId: "",
  addTabHandler: () => {},
  selectTabHandler: () => {},
  selectedTabData: {} as TabInformation,
  changeTabMethodHandler: () => {},
  changeTabUrlHandler: () => {},
  changeTabHeadersHandler: () => {},
  changeTabParamsHandler: () => {},
  changeTabBodyHandler: () => {},
  changeTabAuthorizationTypeHandler: () => {},
  changeTabUsernameHandler: () => {},
  changeTabPasswordHandler: () => {},
  changeTabTokenHandler: () => {},
});

const MainPageProvider: React.FC<MainPageProviderProps> = ({ children }) => {
  const { state, dispatch } = useMainPageReducer();

  const addTabHandler = () => {
    dispatch({ type: ActionTypeEnum.ADD_TAB });
  };
  const selectTabHandler = (tabId: string) => {
    dispatch({ type: ActionTypeEnum.SELECT_TAB, payload: tabId });
  };
  const changeTabMethodHandler = (method: RequestMethod) => {
    dispatch({
      type: ActionTypeEnum.CHANGE_TAB_METHOD,
      payload: method,
    });
  };
  const changeTabUrlHandler = (url: string) => {
    dispatch({
      type: ActionTypeEnum.CHANGE_TAB_URL,
      payload: url,
    });
  };
  const changeTabHeadersHandler = (headers: CommonInputsTableData) => {
    dispatch({
      type: ActionTypeEnum.CHANGE_TAB_HEADERS,
      payload: headers,
    });
  };
  const changeTabParamsHandler = (params: CommonInputsTableData) => {
    dispatch({
      type: ActionTypeEnum.CHANGE_TAB_PARAMS,
      payload: params,
    });
  };
  const changeTabBodyHandler = (body: string) => {
    dispatch({
      type: ActionTypeEnum.CHANGE_TAB_BODY,
      payload: body,
    });
  };
  const changeTabAuthorizationTypeHandler = (
    authorizationType: AuthorizationType,
  ) => {
    dispatch({
      type: ActionTypeEnum.CHANGE_TAB_AUTHORIZATION_TYPE,
      payload: authorizationType,
    });
  };
  const changeTabUsernameHandler = (username: string) => {
    dispatch({
      type: ActionTypeEnum.CHANGE_TAB_USERNAME,
      payload: username,
    });
    dispatch({ type: ActionTypeEnum.UPDATE_AUTHORIZATION_HEADER });
  };
  const changeTabPasswordHandler = (password: string) => {
    dispatch({
      type: ActionTypeEnum.CHANGE_TAB_PASSWORD,
      payload: password,
    });
    dispatch({ type: ActionTypeEnum.UPDATE_AUTHORIZATION_HEADER });
  };
  const changeTabTokenHandler = (token: string) => {
    dispatch({
      type: ActionTypeEnum.CHANGE_TAB_TOKEN,
      payload: token,
    });
    dispatch({ type: ActionTypeEnum.UPDATE_AUTHORIZATION_HEADER });
  };

  const selectedTabData = state.tabs.find(
    (tab) => tab.id === state.selectedTabId,
  ) as TabInformation; // This is safe because selectedTabId is always a valid tab id

  const contextValue = {
    tabs: state.tabs,
    selectedTabId: state.selectedTabId,
    selectedTabData,
    addTabHandler,
    selectTabHandler,
    changeTabMethodHandler,
    changeTabUrlHandler,
    changeTabHeadersHandler,
    changeTabParamsHandler,
    changeTabBodyHandler,
    changeTabAuthorizationTypeHandler,
    changeTabUsernameHandler,
    changeTabPasswordHandler,
    changeTabTokenHandler,
  };

  return (
    <MainPageContext.Provider value={contextValue}>
      {children}
    </MainPageContext.Provider>
  );
};

function useMainPageContext(): MainPageContextType {
  const context = useContext(MainPageContext);
  if (context === undefined) {
    throw new Error(
      "useMainPageContext must be used within a MainPageProvider",
    );
  }
  return context;
}

export { MainPageProvider, useMainPageContext };
