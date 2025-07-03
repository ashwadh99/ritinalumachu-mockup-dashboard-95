import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import { Button } from "@/components/ui/button";

const timeRangeData = {
  '7days': [
    { name: 'Day 1', count: 180 },
    { name: 'Day 2', count: 165 },
    { name: 'Day 3', count: 190 },
    { name: 'Day 4', count: 175 },
    { name: 'Day 5', count: 200 },
    { name: 'Day 6', count: 155 },
    { name: 'Day 7', count: 185 },
  ],
  '30days': [
    { name: 'Week 1', count: 1200 },
    { name: 'Week 2', count: 1350 },
    { name: 'Week 3', count: 1100 },
    { name: 'Week 4', count: 1250 },
  ],
  '3months': [
    { name: 'Month 1', count: 4500 },
    { name: 'Month 2', count: 5200 },
    { name: 'Month 3', count: 4800 },
  ],
  '6months': [
    { name: 'Jan-Feb', count: 9500 },
    { name: 'Mar-Apr', count: 10200 },
    { name: 'May-Jun', count: 9800 },
  ]
};

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: any[]; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
        <p className="font-medium">{`${label}: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const getTimeRangeLabel = (range: string) => {
  switch (range) {
    case '7days': return 'Last 7 Days';
    case '30days': return 'Last 30 Days';
    case '3months': return 'Last 3 Months';
    case '6months': return 'Last 6 Months';
    default: return 'Last 7 Days';
  }
};

const POProcessedChart = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('7days');

  return (
    <Card className="bg-white border-0 shadow-sm lg:col-span-2">
      <CardHeader className="pb-4 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-gray-900">
          Number of POs Processed - {getTimeRangeLabel(selectedTimeRange)}
        </CardTitle>
        <div className="flex gap-2">
          <Button
            variant={selectedTimeRange === '7days' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedTimeRange('7days')}
          >
            7 Days
          </Button>
          <Button
            variant={selectedTimeRange === '30days' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedTimeRange('30days')}
          >
            30 Days
          </Button>
          <Button
            variant={selectedTimeRange === '3months' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedTimeRange('3months')}
          >
            3 Months
          </Button>
          <Button
            variant={selectedTimeRange === '6months' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedTimeRange('6months')}
          >
            6 Months
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={timeRangeData[selectedTimeRange as keyof typeof timeRangeData]}
              margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6b7280' }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6b7280' }}
                label={{ value: 'Number of POs', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fontSize: '12px', fill: '#6b7280' } }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="count" radius={[4, 4, 0, 0]} fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default POProcessedChart;