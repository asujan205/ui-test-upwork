import { ArrowLeft, ChevronDown } from "lucide-react";
import Tabs from "./tabs";
import TableComponent from "./table";

const MainContent = () => {
  return (
    <div className="rounded-lg p-4 flex flex-col gap-3 w-[70%] shadow-md bg-gray-800 bg-opacity-50">
      <div className="flex items-center mb-4">
        <button className="mr-2 text-gray-400">
          <ArrowLeft size={20} />
        </button>
        <span className="text-gray-400">Agents / Sharpe Navigator</span>
      </div>
      <div className=" flex flex-row">
        <div className="flex items-start space-x-4">
          <div className="w-36 h-36 bg-green-900 rounded-lg overflow-hidden flex items-center justify-center">
            {/* <Image src="/sharpe-navigator.png" width={144} height={144} /> */}
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">Sharpe Navigator</h2>
            <p className="text-gray-400 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* Agent Stats */}
            <div className="flex space-x-8 text-sm">
              <div>
                <div className="text-gray-400 mb-1">Vault Assets</div>
                <div className="font-bold">0 USDC</div>
              </div>
              <div>
                <div className="text-gray-400 mb-1">Annualized Net Return</div>
                <div className="font-bold text-green-500">+20%</div>
              </div>
              <div>
                <div className="text-gray-400 mb-1">My Vault Asset</div>
                <div className="font-bold">0 USDC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tabs
        tabs={[
          { name: "Performance", key: "performance" },
          { name: "Token", key: "token" },
          { name: "About", key: "about" },
        ]}
      />
      <div className="flex mb-8">
        <div className="w-1/3">
          <h3 className="text-lg font-bold mb-4">Performance (30D)</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-400">CAGR*</span>
              <span className="text-green-500 font-bold">15.2%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">YTD return*</span>
              <span className="font-bold">100%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Volatility</span>
              <span className="font-bold">32%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Max Drawdown</span>
              <span className="font-bold">12.6%</span>
            </div>
            <div className="text-gray-500 text-xs">*net of X% Agent Fee</div>
          </div>
        </div>
        <div className="w-2/3 pl-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">NAV</h3>
            <div className="flex items-center bg-gray-800 rounded px-2 py-1 text-xs">
              <span>30D</span>
              <ChevronDown size={16} className="ml-1" />
            </div>
          </div>
          <div className="text-3xl font-bold text-white flex items-center">
            105%
            <span className="text-green-500 text-sm ml-2">+16.2% Last 30D</span>
          </div>
          <div className="mt-2 h-36 relative bg-gray-800 bg-opacity-30 rounded-lg overflow-hidden">
            <div className="absolute bottom-0 w-full">
              <svg
                width="100%"
                height="120"
                viewBox="0 0 600 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,120 L20,110 L40,115 L60,100 L80,105 L100,90 L120,85 L140,95 L160,80 L180,70 L200,75 L220,60 L240,65 L260,50 L280,55 L300,40 L320,45 L340,30 L360,35 L380,25 L400,20 L420,30 L440,15 L460,25 L480,10 L500,15 L520,5 L540,10 L560,0 L580,5 L600,0"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="3"
                />
                <path
                  d="M0,120 L20,110 L40,115 L60,100 L80,105 L100,90 L120,85 L140,95 L160,80 L180,70 L200,75 L220,60 L240,65 L260,50 L280,55 L300,40 L320,45 L340,30 L360,35 L380,25 L400,20 L420,30 L440,15 L460,25 L480,10 L500,15 L520,5 L540,10 L560,0 L580,5 L600,0 L600,120 L0,120"
                  fill="url(#grad1)"
                  fillOpacity="0.2"
                />
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Point marker */}
                <circle cx="120" cy="85" r="4" fill="white" />
              </svg>
            </div>
            <div className="absolute left-[120px] top-[40px] bg-white text-black text-xs px-1 py-0.5 rounded">
              2024 JAN 22: $432
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
