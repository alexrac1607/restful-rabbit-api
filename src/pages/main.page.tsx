import { useState } from "react";
import Header from "../components/Header/Header";
import RequestTab from "../features/RequestTab/RequestTab";
import { useMainPageContext } from "../contexts/MainPageContext";
import { NUMBER_OF_TABS } from "../utils/constants";

const MainPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { tabs, addTabHandler, selectedTabId, selectTabHandler } =
    useMainPageContext();

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const selectedTab = tabs.find((tab) => tab.id === selectedTabId);

  return (
    <>
      <Header />
      <div className="flex">
        <button onClick={addTabHandler} className="p-2 ml-4">
          +
        </button>
        {tabs.slice(0, NUMBER_OF_TABS).map((tab) => (
          <div
            key={tab.id}
            onClick={() => selectTabHandler(tab.id)}
            className={`${
              tab.id === selectedTabId && "border border-orange-400"
            } py-2 pl-2 pr-4`}
          >
            {tab.requestData.method} {tab.title}
          </div>
        ))}
        {tabs.length > NUMBER_OF_TABS && (
          <div className="relative">
            <button
              id="dropdownButton"
              onClick={toggleDropdown}
              className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none"
            >
              Open
            </button>
            {isDropdownOpen && (
              <div
                id="dropdown"
                className="absolute z-10 w-56 mt-2 bg-white shadow-md rounded"
              >
                <ul>
                  {tabs.slice(NUMBER_OF_TABS).map((tab) => (
                    <li
                      key={tab.id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        selectTabHandler(tab.id);
                        toggleDropdown();
                      }}
                    >
                      {tab.requestData.method} {tab.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      {selectedTab && <RequestTab key={selectedTab.id} />}
    </>
  );
};

export default MainPage;
