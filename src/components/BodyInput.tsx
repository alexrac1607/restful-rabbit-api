import { useMainPageContext } from "../contexts/MainPageContext";

const BodyInput = () => {
  const { selectedTabData, changeTabBodyHandler } = useMainPageContext();
  const { body } = selectedTabData.requestData;
  return (
    <div className="h-96 flex flex-col">
      <span className="text-white p-2">raw - JSON</span>
      <textarea
        value={body}
        onChange={(e) => changeTabBodyHandler(e.target.value)}
        className="bg-gray-500 text-white border border-yellow-400 p-2 rounded w-full h-full resize-none "
      />
    </div>
  );
};

export default BodyInput;
