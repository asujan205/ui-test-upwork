import { User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 border-b border-gray-800">
      <div className="flex items-center space-x-6">
        <div className="bg-green-400 w-4 h-4 rounded-full">{/* Icon */}</div>
      </div>
      <div className="flex space-x-6">
        <div className="text-gray-400">Trading</div>
        <div className="text-gray-400">Pricing</div>
        <div className="text-gray-400">Dashboard</div>
        <div className="text-gray-400">Analytics</div>
        <div className="text-gray-400">Airdrop</div>
        <div className="text-green-500 font-semibold">AI Agents</div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-gray-400">0x42...2432</div>
        <div className="bg-orange-500 rounded-md w-6 h-6 flex items-center justify-center text-white">
          {/* <User size={14} /> */}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
