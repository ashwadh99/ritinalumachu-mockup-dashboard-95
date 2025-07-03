import { User, FileText, Clock, CheckCircle, AlertTriangle, TrendingUp, TrendingDown, Info, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Index = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('7days');
  const [selectedPO, setSelectedPO] = useState<any>(null);

  // Sample data for charts
  const errorTypeData = [
    { name: 'Validation Error', count: 18, color: '#ef4444' },
    { name: 'OCR Failed', count: 12, color: '#3b82f6' },
    { name: 'Missing Data', count: 8, color: '#f59e0b' },
    { name: 'Format Issues', count: 6, color: '#10b981' },
    { name: 'Network Failures', count: 3, color: '#6366f1' },
  ];

  // Time range data - different datasets based on selected range
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

  const timeDistributionData = [
    { name: '<10 mins', value: 78, count: 936, color: '#3b82f6' },
    { name: '10-30 mins', value: 16, count: 192, color: '#10b981' },
    { name: '>30 mins', value: 6, count: 72, color: '#ef4444' },
  ];

  const posByTimeData = [
    { name: 'Total', count: 1200, color: '#3b82f6' },
    { name: '<10 min', count: 936, color: '#10b981' },
    { name: '10-30 mins', count: 192, color: '#f59e0b' },
    { name: '>30 mins', count: 72, color: '#ef4444' },
  ];

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

  // Sample purchase order data
  const purchaseOrders = [
    {
      id: 'PO-2024-001',
      poNumber: 'PO-2024-001',
      convertedToSO: '2024-01-15 10:30 AM',
      errors: [],
      sender: 'ABC Suppliers Inc.',
      status: 'Completed',
      processingTime: '5.2 min'
    },
    {
      id: 'PO-2024-002',
      poNumber: 'PO-2024-002',
      convertedToSO: '2024-01-15 02:45 PM',
      errors: ['OCR Failed'],
      sender: 'XYZ Manufacturing',
      status: 'Completed with Errors',
      processingTime: '12.8 min'
    },
    {
      id: 'PO-2024-003',
      poNumber: 'PO-2024-003',
      convertedToSO: '2024-01-16 09:15 AM',
      errors: [],
      sender: 'Global Parts Ltd.',
      status: 'Completed',
      processingTime: '3.7 min'
    },
    {
      id: 'PO-2024-004',
      poNumber: 'PO-2024-004',
      convertedToSO: '2024-01-16 11:20 AM',
      errors: ['Validation Error', 'Missing Data'],
      sender: 'Tech Solutions Corp',
      status: 'Completed with Errors',
      processingTime: '18.5 min'
    },
    {
      id: 'PO-2024-005',
      poNumber: 'PO-2024-005',
      convertedToSO: '2024-01-16 03:30 PM',
      errors: [],
      sender: 'Industrial Supplies Co.',
      status: 'Completed',
      processingTime: '6.1 min'
    }
  ];

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

  const getTimeRangeLabel = (range: string) => {
    switch (range) {
      case '7days': return 'Last 7 Days';
      case '30days': return 'Last 30 Days';
      case '3months': return 'Last 3 Months';
      case '6months': return 'Last 6 Months';
      default: return 'Last 7 Days';
    }
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <h1 className="text-xl font-semibold text-gray-900">PO Processing Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <User className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Metric Cards */}
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

        {/* Purchase Orders Table */}
        <Card className="bg-white border-0 shadow-sm mb-8">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-gray-900">Recent Purchase Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>PO Number</TableHead>
                  <TableHead>Converted to SO</TableHead>
                  <TableHead>Errors</TableHead>
                  <TableHead>Sender</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Processing Time</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {purchaseOrders.map((po) => (
                  <TableRow key={po.id} className="cursor-pointer hover:bg-gray-50">
                    <TableCell className="font-medium">{po.poNumber}</TableCell>
                    <TableCell>{po.convertedToSO}</TableCell>
                    <TableCell>
                      {po.errors.length === 0 ? (
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          No Errors
                        </Badge>
                      ) : (
                        <div className="flex flex-wrap gap-1">
                          {po.errors.map((error, index) => (
                            <Badge key={index} variant="destructive" className="text-xs">
                              {error}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </TableCell>
                    <TableCell>{po.sender}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={po.status === 'Completed' ? 'secondary' : 'destructive'}
                        className={po.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                      >
                        {po.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{po.processingTime}</TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" onClick={() => setSelectedPO(po)}>
                            <Eye className="w-4 h-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <DialogHeader>
                            <DialogTitle>Purchase Order: {po.poNumber}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm font-medium text-gray-600">Sender</p>
                                <p className="text-lg">{po.sender}</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-600">Processing Time</p>
                                <p className="text-lg">{po.processingTime}</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-600">Status</p>
                                <Badge 
                                  variant={po.status === 'Completed' ? 'secondary' : 'destructive'}
                                  className={po.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                                >
                                  {po.status}
                                </Badge>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-600">Converted to SO</p>
                                <p className="text-lg">{po.convertedToSO}</p>
                              </div>
                            </div>
                            {po.errors.length > 0 && (
                              <div>
                                <p className="text-sm font-medium text-gray-600 mb-2">Errors Encountered</p>
                                <div className="flex flex-wrap gap-2">
                                  {po.errors.map((error, index) => (
                                    <Badge key={index} variant="destructive">
                                      {error}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                            <div className="border-t pt-4">
                              <p className="text-sm font-medium text-gray-600 mb-4">Purchase Order Document</p>
                              <div className="bg-gray-100 rounded-lg p-8 text-center">
                                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                <p className="text-gray-600">
                                  [Placeholder for PO Document Image]
                                </p>
                                <p className="text-sm text-gray-500 mt-2">
                                  Document ID: {po.poNumber}-DOC
                                </p>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Distribution of Error Type - Pie Chart */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className="bg-white border-0 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader className="pb-4 flex flex-row items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-gray-900">Distribution of Error Type</CardTitle>
                  <Info className="w-4 h-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={errorTypeData}
                          cx="50%"
                          cy="45%"
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
                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                      {errorTypeData.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: item.color }}></div>
                          <span className="text-sm font-medium text-gray-700">{item.name}</span>
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

          {/* Time Distribution Pie Chart */}
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

          {/* POs Processed Over Time - Bar Chart with Time Range Selector */}
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

          {/* Processing Summary */}
          <Card className="bg-white border-0 shadow-sm lg:col-span-2">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold text-gray-900">Processing Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="font-medium text-gray-700">Sum of POs Processed</span>
                  </div>
                  <span className="text-lg font-bold text-gray-900">1.20K</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="font-medium text-gray-700">Error Rate</span>
                  </div>
                  <span className="text-lg font-bold text-gray-900">0.02%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
