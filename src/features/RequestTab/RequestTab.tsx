import RequestBar from "../RequestBar/RequestBar";
import ResponseDisplay from "../ResponseDisplay/ResponseDisplay";
import { useMainRequest } from "../../hooks/useMainRequest";
import RequestData from "../RequestData/RequestData";
import { useMainPageContext } from "../../contexts/MainPageContext";

const RequestTab = () => {
  const { doMainRequest, mainRequestData } = useMainRequest();
  const { selectedTabData } = useMainPageContext();
  const {
    method: selectedMethod,
    url,
    headers,
    body,
  } = selectedTabData.requestData;

  const onGoHandler = () => {
    const parsedHeaders: Record<string, string> = {};
    headers?.forEach((header) => {
      if (
        header.key &&
        header.key.length > 0 &&
        header.value &&
        header.value.length > 0
      ) {
        parsedHeaders[header.key] = header.value;
      }
    });

    doMainRequest({
      method: selectedMethod,
      url,
      headers: parsedHeaders,
      body,
    });
  };

  return (
    <>
      <RequestBar onGo={onGoHandler} />
      <b className="hr anim"></b>
      <RequestData />
      <ResponseDisplay mainRequestData={mainRequestData} />
    </>
  );
};

export default RequestTab;
