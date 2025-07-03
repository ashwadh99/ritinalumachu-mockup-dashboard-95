import ErrorTypeChart from "./charts/ErrorTypeChart";
import TimeDistributionChart from "./charts/TimeDistributionChart";
import POProcessedChart from "./charts/POProcessedChart";
import ProcessingSummary from "./ProcessingSummary";

const ChartsGrid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ErrorTypeChart />
      <TimeDistributionChart />
      <POProcessedChart />
      <ProcessingSummary />
    </div>
  );
};

export default ChartsGrid;