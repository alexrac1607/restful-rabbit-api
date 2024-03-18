import { AxiosResponse } from "axios";
import { prettyPrintJson } from "pretty-print-json";
interface DisplayJsonProps {
  data: AxiosResponse["data"] | AxiosResponse["headers"];
}

const DisplayJson = ({ data }: DisplayJsonProps) => {
  const jsonHtml = data ? prettyPrintJson.toHtml(data) : "";
  return (
    <pre
      className="bg-yellow-50 text-gray-900 w-full h-full overflow-auto p-4 rounded-md"
      dangerouslySetInnerHTML={{ __html: jsonHtml }}
    />
  );
};

export default DisplayJson;
