import Tabs from "./tabs";

const TableComponent = () => {
  return (
    <div className="rounded-lg p-4 flex flex-col gap-3 w-[70%] shadow-md">
      <Tabs
        tabs={[
          { name: "Balances", key: "balances" },
          { name: "Positions", key: "positions" },
          { name: "Trading History", key: "trading" },
        ]}
      />
      {/* Trading Table */}
      <div className="mt-4 w-full overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="text-gray-400 border-b border-gray-800">
              <th className="pb-2">Coin</th>
              <th className="pb-2">Expiry Date</th>
              <th className="pb-2">Product</th>
              <th className="pb-2">Strike</th>
              <th className="pb-2">Quantity</th>
              <th className="pb-2">Avg. Entry Price</th>
              <th className="pb-2">Model Price</th>
              <th className="pb-2">PNL</th>
            </tr>
          </thead>
          <tbody>
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <tr key={i} className="border-b border-gray-800">
                  <td className="py-3">USDC</td>
                  <td className="py-3">10Feb25</td>
                  <td className="py-3">Call</td>
                  <td className="py-3">1800</td>
                  <td className="py-3">1</td>
                  <td className="py-3">301.58</td>
                  <td className="py-3">307.58</td>
                  <td
                    className={`py-3 ${
                      i % 2 === 0 ? "text-green-500" : "text-pink-500"
                    }`}
                  >
                    {i % 2 === 0 ? "+354.45" : "-354.45"}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
