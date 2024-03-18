import { useMainPageContext } from "../contexts/MainPageContext";
import { RequestMethod } from "../types/mainRequest.types";

const MethodSelect = () => {
  const { selectedTabData, changeTabMethodHandler } = useMainPageContext();
  const { method: selectedMethod } = selectedTabData.requestData;
  return (
    <select
      value={selectedMethod}
      onChange={(e) => changeTabMethodHandler(e.target.value as RequestMethod)}
      className="bg-yellow-50 border h-8 border-yellow-400 text-gray-900 text-sm rounded-md focus:ring-yellow-500 focus:border-yellow-500 hover:bg-yellow-100"
    >
      {Object.values(RequestMethod).map((method) => (
        <option key={method} value={method}>
          {method}
        </option>
      ))}
    </select>
  );
};

export default MethodSelect;
