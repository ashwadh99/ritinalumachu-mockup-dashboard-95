import { FileText, Clock, CheckCircle, AlertTriangle, TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const metricCards = [
  {
    title: 'Total POs Processed',
    value: '1,200',
    change: '12.5%',
    trend: 'up',
    icon: FileText,
    iconBg: 'bg-blue-500',
    vs: 'vs last month',
    details: {
      thisMonth: '1,200',
      lastMonth: '1,067',
      breakdown: [
        { period: 'Week 1', value: 280 },
        { period: 'Week 2', value: 315 },
        { period: 'Week 3', value: 290 },
        { period: 'Week 4', value: 315 }
      ]
    }
  },
  {
    title: 'Avg Processing Time',
    value: '8.2 min',
    change: '15.3%',
    trend: 'down',
    icon: Clock,
    iconBg: 'bg-green-500',
    vs: 'vs last month',
    details: {
      thisMonth: '8.2 min',
      lastMonth: '9.7 min',
      breakdown: [
        { period: 'Simple POs', value: '5.1 min' },
        { period: 'Complex POs', value: '12.8 min' },
        { period: 'Review Required', value: '18.5 min' }
      ]
    }
  },
  {
    title: 'Success Rate',
    value: '99.98%',
    change: '0.2%',
    trend: 'up',
    icon: CheckCircle,
    iconBg: 'bg-red-500',
    vs: 'vs last month',
    details: {
      thisMonth: '99.98%',
      lastMonth: '99.78%',
      breakdown: [
        { period: 'Successful', value: '1,197 POs' },
        { period: 'Failed', value: '3 POs' },
        { period: 'Manual Review', value: '0 POs' }
      ]
    }
  },
  {
    title: 'Error Count',
    value: '33',
    change: '8.1%',
    trend: 'down',
    icon: AlertTriangle,
    iconBg: 'bg-yellow-500',
    vs: 'vs last month',
    details: {
      thisMonth: '33',
      lastMonth: '36',
      breakdown: [
        { period: 'Critical', value: '2 errors' },
        { period: 'Medium', value: '15 errors' },
        { period: 'Low', value: '16 errors' }
      ]
    }
  }
];

const MetricCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metricCards.map((metric, index) => (
        <HoverCard key={index}>
          <HoverCardTrigger asChild>
            <Card className="bg-white border-0 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${metric.iconBg} rounded-xl flex items-center justify-center`}>
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center">
                    {metric.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500" />
                    )}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm font-medium ${
                      metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {metric.trend === 'up' ? '↗' : '↘'} {metric.change}
                    </span>
                    <span className="text-sm text-gray-500">{metric.vs}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </HoverCardTrigger>
          <HoverCardContent className="w-80" side="bottom">
            <div className="space-y-3">
              <h4 className="font-semibold">{metric.title} Details</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">This Month</p>
                  <p className="font-bold text-lg">{metric.details.thisMonth}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Last Month</p>
                  <p className="font-bold text-lg">{metric.details.lastMonth}</p>
                </div>
              </div>
              <div className="border-t pt-3">
                <p className="text-sm font-medium text-gray-700 mb-2">Breakdown:</p>
                <div className="space-y-2">
                  {metric.details.breakdown.map((item, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="text-gray-600">{item.period}</span>
                      <span className="font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
};

export default MetricCards;