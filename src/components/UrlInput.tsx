import { useMainPageContext } from "../contexts/MainPageContext";

const UrlInput = () => {
  const { selectedTabData, changeTabUrlHandler } = useMainPageContext();
  const { url } = selectedTabData.requestData;
  return (
    <input
      type="text"
      className="flex-1 block w-full bg-yellow-50 text-gray-900 border border-yellow-400 rounded-md py-1 pl-4 pr-10 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 h-8 hover:bg-yellow-100"
      placeholder="Enter request URL"
      value={url}
      onChange={(e) => changeTabUrlHandler(e.target.value)}
    />
  );
};

export default UrlInput;
