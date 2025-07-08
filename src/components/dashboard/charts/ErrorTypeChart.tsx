import { Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const errorTypeData = [
  { name: 'Validation Error', count: 18, color: '#ef4444' },
  { name: 'OCR Failed', count: 12, color: '#3b82f6' },
  { name: 'Missing Data', count: 8, color: '#f59e0b' },
  { name: 'Format Issues', count: 6, color: '#10b981' },
  { name: 'Network Failures', count: 3, color: '#6366f1' },
];

const PieTooltip = ({ active, payload }: { active?: boolean; payload?: any[] }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
        <p className="font-medium">{`${data.name}: ${data.count}`}</p>
        <p className="text-sm text-gray-600">{`${((data.count / errorTypeData.reduce((sum, item) => sum + item.count, 0)) * 100).toFixed(1)}%`}</p>
      </div>
    );
  }
  return null;
};

const ErrorTypeDetails = () => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold">Detailed Error Analysis</h3>
    <div className="space-y-3">
      {errorTypeData.map((error, index) => (
        <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: error.color }}></div>
            <span className="font-medium">{error.name}</span>
          </div>
          <div className="text-right">
            <div className="font-bold">{error.count}</div>
            <div className="text-sm text-gray-500">
              {((error.count / errorTypeData.reduce((sum, item) => sum + item.count, 0)) * 100).toFixed(1)}%
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
      <h4 className="font-semibold text-blue-900">Most Common Causes:</h4>
      <ul className="mt-2 text-sm text-blue-800 space-y-1">
        <li>• Validation Error: Missing required fields (67%)</li>
        <li>• OCR Failed: Poor image quality (58%)</li>
        <li>• Missing Data: Incomplete vendor information (75%)</li>
      </ul>
    </div>
  </div>
);

const ErrorTypeChart = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="bg-white border-0 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader className="pb-4 flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold text-gray-900">Distribution of Error Type</CardTitle>
            <Info className="w-4 h-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="h-80 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={errorTypeData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="count"
                    stroke="none"
                  >
                    {errorTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<PieTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-3">
                {errorTypeData.map((item, index) => (
                  <div key={index} className="flex items-center space-x-1">
                    <div className={`w-2 h-2 rounded-full`} style={{ backgroundColor: item.color }}></div>
                    <span className="text-xs font-medium text-gray-700">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Error Type Analysis</DialogTitle>
        </DialogHeader>
        <ErrorTypeDetails />
      </DialogContent>
    </Dialog>
  );
};

export default ErrorTypeChart;