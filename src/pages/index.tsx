import Navbar from "./components/navbar";
import MainContent from "./components/maincontent";
import TableComponent from "./components/table";
import DepositeSection from "./components/deposite";
import BuyAndSell from "./components/buysell";
import TraderJurnel from "./components/traders";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen ">
      <Navbar />
      <div className=" w-[80%] p-4 mx-auto">
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-4 w-[80%]">
            <MainContent />

            <TableComponent />
          </div>
          <div className="flex flex-col gap-4 w-[20%]">
            <DepositeSection />
            <BuyAndSell />
            <TraderJurnel />
          </div>
        </div>
      </div>
    </div>
  );
}
