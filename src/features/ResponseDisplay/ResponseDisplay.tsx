import { AxiosResponse } from "axios";
import DisplayJson from "../../components/DisplayJson";
import { useState } from "react";
import { ResponseDisplayScreen } from "../../types/requestTab.types";
import ResponseDisplayTabSelector from "./ResponseDisplayTabSelector";

interface ResponseDisplayProps {
  mainRequestData: AxiosResponse | undefined;
}

const ResponseDisplay = ({ mainRequestData }: ResponseDisplayProps) => {
  const [selectedScreen, setSelectedScreen] = useState(
    ResponseDisplayScreen.Response,
  );

  const displayData =
    selectedScreen === ResponseDisplayScreen.Response
      ? mainRequestData?.data
      : mainRequestData?.headers;

  return (
    <div className="flex flex-col items-center space-x-4 p-4 bg-gray-800 shadow-md h-96">
      <ResponseDisplayTabSelector
        statusCode={mainRequestData?.status}
        selectedScreen={selectedScreen}
        setSelectedScreen={setSelectedScreen}
      />
      <DisplayJson data={displayData} />
    </div>
  );
};

export default ResponseDisplay;
