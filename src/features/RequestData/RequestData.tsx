import { useState } from "react";
import InputsTable from "../../components/InputsTable";
import { ResponseDataScreen } from "../../types/requestTab.types";
import RequestDataTabSelector from "./RequestDataTabSelector";
import BodyInput from "../../components/BodyInput";
import Authorization from "../../components/Authorization";
import { useMainPageContext } from "../../contexts/MainPageContext";

const RequestData = () => {
  const { selectedTabData, changeTabParamsHandler, changeTabHeadersHandler } =
    useMainPageContext();
  const { headers, params } = selectedTabData.requestData;
  const [selectedScreen, setSelectedScreen] = useState(
    ResponseDataScreen.Params,
  );

  const getSelectedScreen = () => {
    if (selectedScreen === ResponseDataScreen.Params)
      return (
        <InputsTable
          columnHeaders={["param", "value"]}
          rows={params}
          setRows={changeTabParamsHandler}
        />
      );

    if (selectedScreen === ResponseDataScreen.Headers)
      return (
        <InputsTable
          columnHeaders={["header", "value"]}
          rows={headers}
          setRows={changeTabHeadersHandler}
        />
      );

    if (selectedScreen === ResponseDataScreen.Body) return <BodyInput />;

    if (selectedScreen === ResponseDataScreen.Authorization)
      return <Authorization />;
  };

  return (
    <div className="flex flex-col  space-x-4 p-4 bg-gray-800 shadow-md ">
      <RequestDataTabSelector
        selectedScreen={selectedScreen}
        setSelectedScreen={setSelectedScreen}
      />
      {getSelectedScreen()}
    </div>
  );
};

export default RequestData;
