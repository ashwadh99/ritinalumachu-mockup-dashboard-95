import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProcessingSummary = () => {
  return (
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
  );
};

export default ProcessingSummary;