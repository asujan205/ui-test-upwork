import { useState } from "react";

export interface TabsProps {
  name: string;
  key: string;
}
const Tabs = ({ tabs }: { tabs: TabsProps[] }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);
  return (
    <div className="flex border-b border-gray-800 mt-4">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          className={`${
            activeTab === tab.key
              ? "text-white border-b-2 border-green-500"
              : "text-gray-400"
          } px-4 py-2`}
          onClick={() => setActiveTab(tab.key)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
