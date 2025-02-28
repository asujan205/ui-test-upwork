const BuyAndSell = () => {
  return (
    <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 mb-4">
      <div className="flex border-b border-gray-700 mb-4">
        <button className="py-2 px-4 border-b-2 border-white font-medium">
          Buy
        </button>
        <button className="py-2 px-4 text-gray-400">Sell</button>
      </div>

      <div className="text-xs text-gray-400 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </div>

      <div className="flex justify-between items-center text-sm mb-2">
        <span>Available Balance</span>
        <span>163,366.06 ITHACA</span>
      </div>

      <div className="flex items-center justify-between bg-gray-900 rounded p-2 mb-4">
        <div className="flex items-center">
          <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-2">
            <span className="text-xs">♦</span>
          </div>
          <span>0.00</span>
        </div>
        <span className="text-green-500">MAX</span>
      </div>

      <button className="w-full py-3 bg-gray-700 rounded text-center font-medium">
        Buy
      </button>
    </div>
  );
};

export default BuyAndSell;
