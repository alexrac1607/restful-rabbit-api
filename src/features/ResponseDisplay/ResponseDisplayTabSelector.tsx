import Tab from "../../components/Tabs/Tab";
import TabsContainer from "../../components/Tabs/TabsContainer";
import { ResponseDisplayScreen } from "../../types/requestTab.types";
import { handleStatusCodeText } from "../../utils/formatters";

interface ResponseDisplayTabSelectorProps {
  selectedScreen: ResponseDisplayScreen;
  setSelectedScreen: React.Dispatch<
    React.SetStateAction<ResponseDisplayScreen>
  >;
  statusCode: number | undefined;
}

const ResponseDisplayTabSelector = ({
  selectedScreen,
  setSelectedScreen,
  statusCode,
}: ResponseDisplayTabSelectorProps) => {
  const tabClickHandler = (newTab: ResponseDisplayScreen) =>
    setSelectedScreen(newTab);

  return (
    <TabsContainer>
      <Tab
        text={ResponseDisplayScreen.Response}
        statusCodeText={handleStatusCodeText(statusCode)}
        isSelected={selectedScreen === ResponseDisplayScreen.Response}
        onClick={() => tabClickHandler(ResponseDisplayScreen.Response)}
      />
      <Tab
        text={ResponseDisplayScreen.Headers}
        isSelected={selectedScreen === ResponseDisplayScreen.Headers}
        onClick={() => tabClickHandler(ResponseDisplayScreen.Headers)}
      />
    </TabsContainer>
  );
};

export default ResponseDisplayTabSelector;
