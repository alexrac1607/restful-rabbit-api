import GoButton from "../../components/GoButton";
import MethodSelect from "../../components/MethodSelect";
import UrlInput from "../../components/UrlInput";

interface RequestBarProps {
  onGo: () => void;
}

const RequestBar = ({ onGo }: RequestBarProps) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-800 shadow-md ">
      <MethodSelect />
      <UrlInput />
      <GoButton onClick={onGo} />
    </div>
  );
};

export default RequestBar;
