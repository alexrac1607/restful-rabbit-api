import Tab from "../../components/Tabs/Tab";
import TabsContainer from "../../components/Tabs/TabsContainer";
import { ResponseDataScreen } from "../../types/requestTab.types";

interface RequestDataTabSelectorProps {
  selectedScreen: ResponseDataScreen;
  setSelectedScreen: React.Dispatch<React.SetStateAction<ResponseDataScreen>>;
}

const RequestDataTabSelector = ({
  selectedScreen,
  setSelectedScreen,
}: RequestDataTabSelectorProps) => {
  const tabClickHandler = (newTab: ResponseDataScreen) =>
    setSelectedScreen(newTab);

  return (
    <TabsContainer>
      {Object.values(ResponseDataScreen).map((tab) => (
        <Tab
          key={tab}
          text={tab}
          isSelected={selectedScreen === tab}
          onClick={() => tabClickHandler(tab)}
        />
      ))}
    </TabsContainer>
  );
};

export default RequestDataTabSelector;
