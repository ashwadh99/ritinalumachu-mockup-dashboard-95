import { Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const timeDistributionData = [
  { name: '<10 mins', value: 78, count: 936, color: '#3b82f6' },
  { name: '10-30 mins', value: 16, count: 192, color: '#10b981' },
  { name: '>30 mins', value: 6, count: 72, color: '#ef4444' },
];

const ErrorPieTooltip = ({ active, payload }: { active?: boolean; payload?: any[] }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
        <p className="font-medium">{`${data.name}: ${data.value}%`}</p>
        <p className="text-sm text-gray-600">{`${data.count} POs`}</p>
      </div>
    );
  }
  return null;
};

const TimeDistributionDetails = () => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold">Processing Time Analysis</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {timeDistributionData.map((item, index) => (
        <div key={index} className="p-4 border rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
            <span className="font-semibold">{item.name}</span>
          </div>
          <div className="text-2xl font-bold">{item.count}</div>
          <div className="text-sm text-gray-600">{item.value}% of total</div>
          <div className="mt-2 text-xs text-gray-500">
            {item.name === '<10 mins' && 'Mostly automated processing'}
            {item.name === '10-30 mins' && 'Required manual validation'}
            {item.name === '>30 mins' && 'Complex documents or errors'}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const TimeDistributionChart = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="bg-white border-0 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader className="pb-4 flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold text-gray-900">Distribution of POs Processed by Time</CardTitle>
            <Info className="w-4 h-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={timeDistributionData}
                    cx="50%"
                    cy="45%"
                    outerRadius={80}
                    dataKey="value"
                    stroke="none"
                  >
                    {timeDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<ErrorPieTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center space-x-6 mt-4">
                {timeDistributionData.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm font-medium text-gray-700">{item.name}: {item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Processing Time Analysis</DialogTitle>
        </DialogHeader>
        <TimeDistributionDetails />
      </DialogContent>
    </Dialog>
  );
};

export default TimeDistributionChart;