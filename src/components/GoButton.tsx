import Rabbit from "./Rabbit";

interface GoButtonProps {
  onClick: () => void;
}
const GoButton = ({ onClick }: GoButtonProps) => {
  return (
    <button
      className="bg-yellow-600 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded flex items-center justify-center h-8"
      onClick={onClick}
    >
      <Rabbit /> Go
    </button>
  );
};

export default GoButton;
