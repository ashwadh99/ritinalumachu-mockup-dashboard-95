import { useState } from "react";
import { Eye, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

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

const PurchaseOrdersTable = () => {
  const [selectedPO, setSelectedPO] = useState<any>(null);

  return (
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
  );
};

export default PurchaseOrdersTable;