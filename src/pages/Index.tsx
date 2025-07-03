import Header from "@/components/dashboard/Header";
import MetricCards from "@/components/dashboard/MetricCards";
import PurchaseOrdersTable from "@/components/dashboard/PurchaseOrdersTable";
import ChartsGrid from "@/components/dashboard/ChartsGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="p-6">
        <MetricCards />
        <PurchaseOrdersTable />
        <ChartsGrid />
      </div>
    </div>
  );
};

export default Index;