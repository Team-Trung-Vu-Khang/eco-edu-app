import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/code-block";
import { StatsCard } from "@/components/shared/StatsCard";
import { DataTable } from "@/components/shared/DataTable";
import { FormDialog } from "@/components/shared/FormDialog";
import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { StepperForm } from "@/components/shared/StepperForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Sprout,
  Wheat,
  Tractor,
  Users,
  TrendingUp,
  TrendingDown,
  Droplets,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

// ─── StatsCard demo data ──────────────────────────────────────────────────────
const statsData = [
  {
    title: "Tổng diện tích",
    value: "142 ha",
    change: "+12 ha so với tháng trước",
    changeType: "positive" as const,
    icon: Sprout,
    iconColor: "bg-green-100 text-green-700",
  },
  {
    title: "Mùa vụ đang trồng",
    value: 8,
    change: "2 mùa sắp thu hoạch",
    changeType: "neutral" as const,
    icon: Wheat,
    iconColor: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "Thiết bị hoạt động",
    value: "12 / 15",
    change: "3 thiết bị cần bảo trì",
    changeType: "negative" as const,
    icon: Tractor,
    iconColor: "bg-orange-100 text-orange-700",
  },
  {
    title: "Nhân viên",
    value: 34,
    change: "+4 so với quý trước",
    changeType: "positive" as const,
    icon: Users,
    iconColor: "bg-blue-100 text-blue-700",
  },
];

// ─── DataTable demo data ──────────────────────────────────────────────────────
type CropRow = {
  id: number;
  crop: string;
  field: string;
  area: string;
  status: "Growing" | "Harvested" | "Pending";
  planted: string;
  harvest: string;
};

const cropData: CropRow[] = [
  {
    id: 1,
    crop: "Wheat",
    field: "Field A1",
    area: "12 ha",
    status: "Growing",
    planted: "15/01/2024",
    harvest: "20/06/2024",
  },
  {
    id: 2,
    crop: "Rice",
    field: "Field B2",
    area: "8 ha",
    status: "Harvested",
    planted: "10/05/2023",
    harvest: "05/10/2023",
  },
  {
    id: 3,
    crop: "Corn",
    field: "Field C1",
    area: "25 ha",
    status: "Pending",
    planted: "—",
    harvest: "—",
  },
  {
    id: 4,
    crop: "Soybeans",
    field: "Field A3",
    area: "15 ha",
    status: "Growing",
    planted: "02/11/2023",
    harvest: "15/07/2024",
  },
  {
    id: 5,
    crop: "Cotton",
    field: "Field D4",
    area: "30 ha",
    status: "Harvested",
    planted: "20/04/2023",
    harvest: "10/11/2023",
  },
  {
    id: 6,
    crop: "Sunflower",
    field: "Field E2",
    area: "9 ha",
    status: "Growing",
    planted: "01/03/2024",
    harvest: "30/08/2024",
  },
  {
    id: 7,
    crop: "Barley",
    field: "Field B4",
    area: "18 ha",
    status: "Pending",
    planted: "—",
    harvest: "—",
  },
];

const cropColumns = [
  { key: "crop", label: "Cây trồng", sortable: true },
  { key: "field", label: "Cánh đồng", sortable: true },
  { key: "area", label: "Diện tích" },
  {
    key: "status",
    label: "Trạng thái",
    render: (value: string) => {
      const colors: Record<string, string> = {
        Growing: "bg-green-100 text-green-700 border-green-200",
        Harvested: "bg-blue-100 text-blue-700 border-blue-200",
        Pending: "bg-yellow-100 text-yellow-700 border-yellow-200",
      };
      return (
        <span
          className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${colors[value] || ""}`}
        >
          {value}
        </span>
      );
    },
  },
  { key: "planted", label: "Ngày trồng" },
  { key: "harvest", label: "Ngày thu hoạch" },
];

const cropFilters = [
  {
    key: "status",
    label: "Trạng thái",
    options: [
      { label: "Đang trồng", value: "Growing" },
      { label: "Đã thu hoạch", value: "Harvested" },
      { label: "Chờ trồng", value: "Pending" },
    ],
  },
];

// ─── StepperForm steps ────────────────────────────────────────────────────────
function Step1() {
  return (
    <div className="space-y-4 max-w-md mx-auto">
      <h3 className="font-semibold text-lg">Thông tin cơ bản</h3>
      <div className="space-y-2">
        <Label>Tên cánh đồng</Label>
        <Input placeholder="Ví dụ: Cánh đồng A1" />
      </div>
      <div className="space-y-2">
        <Label>Diện tích (ha)</Label>
        <Input type="number" placeholder="Ví dụ: 12" />
      </div>
      <div className="space-y-2">
        <Label>Khu vực</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Chọn khu vực" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="north">Khu Bắc</SelectItem>
            <SelectItem value="south">Khu Nam</SelectItem>
            <SelectItem value="east">Khu Đông</SelectItem>
            <SelectItem value="west">Khu Tây</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

function Step2() {
  return (
    <div className="space-y-4 max-w-md mx-auto">
      <h3 className="font-semibold text-lg">Thông tin mùa vụ</h3>
      <div className="space-y-2">
        <Label>Loại cây trồng</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Chọn cây trồng" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="wheat">Lúa mì</SelectItem>
            <SelectItem value="rice">Lúa gạo</SelectItem>
            <SelectItem value="corn">Bắp ngô</SelectItem>
            <SelectItem value="soybean">Đậu nành</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Ngày gieo trồng</Label>
        <Input type="date" />
      </div>
      <div className="space-y-2">
        <Label>Ngày dự kiến thu hoạch</Label>
        <Input type="date" />
      </div>
    </div>
  );
}

function Step3() {
  return (
    <div className="space-y-4 max-w-md mx-auto">
      <h3 className="font-semibold text-lg">Ghi chú & xác nhận</h3>
      <div className="space-y-2">
        <Label>Ghi chú thêm</Label>
        <Textarea
          placeholder="Điều kiện đất, nguồn nước, lưu ý đặc biệt..."
          rows={4}
        />
      </div>
      <div className="p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg flex gap-3">
        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
        <div>
          <p className="font-medium text-green-800 dark:text-green-300 text-sm">
            Sẵn sàng đăng ký
          </p>
          <p className="text-green-700 dark:text-green-400 text-xs mt-0.5">
            Kiểm tra lại thông tin và nhấn Hoàn thành.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Main Demo Component ──────────────────────────────────────────────────────
export function SharedDemo() {
  const [formOpen, setFormOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [stepperDone, setStepperDone] = useState(false);

  const handleFormSubmit = () => {
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      setFormOpen(false);
    }, 1500);
  };

  const handleDelete = () => {
    setDeleteLoading(true);
    setTimeout(() => {
      setDeleteLoading(false);
      setDeleteOpen(false);
    }, 1200);
  };

  const steps = [
    {
      id: "basic",
      title: "Thông tin cơ bản",
      description: "Tên, diện tích, vị trí",
      content: <Step1 />,
    },
    {
      id: "crop",
      title: "Mùa vụ",
      description: "Loại cây, lịch trình",
      content: <Step2 />,
    },
    {
      id: "confirm",
      title: "Xác nhận",
      description: "Kiểm tra và lưu",
      content: <Step3 />,
    },
  ];

  return (
    <div className="space-y-16">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Shared Components
        </h1>
        <p className="text-lg text-muted-foreground">
          Reusable components are built-in for the farm management
          application—statistics, data tables, dialog boxes, and multi-step
          forms.
        </p>
      </div>

      {/* ── StatsCard ─────────────────────────────────────────────────────── */}
      <section id="statscard" className="space-y-4 scroll-mt-20">
        <div className="border-b pb-2">
          <h2 className="text-2xl font-semibold tracking-tight">StatsCard</h2>
          <p className="text-muted-foreground text-sm mt-1">
            Display a key indicator along with an icon, value, and indicator
            change (increase/decrease/neutral).
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {statsData.map((s) => (
            <StatsCard key={s.title} {...s} />
          ))}
        </div>
        <CodeBlock
          code={`import { StatsCard } from "@/components/shared/StatsCard";
import { Sprout } from "lucide-react";

<StatsCard
  title="Tổng diện tích"
  value="142 ha"
  change="+12 ha so với tháng trước"
  changeType="positive"
  icon={Sprout}
  iconColor="bg-green-100 text-green-700"
/>`}
        />
      </section>

      {/* ── DataTable ─────────────────────────────────────────────────────── */}
      <section id="datatable" className="space-y-4 scroll-mt-20">
        <div className="border-b pb-2">
          <h2 className="text-2xl font-semibold tracking-tight">DataTable</h2>
          <p className="text-muted-foreground text-sm mt-1">
            The data table is fully featured: search, column filtering,
            pagination, multiple row selection, column hiding/showing, and
            action menus (view, edit, delete).
          </p>
        </div>
        <div>
          <DataTable
            columns={cropColumns}
            data={cropData}
            searchable
            searchPlaceholder="Tìm kiếm cây trồng, cánh đồng..."
            selectable
            filters={cropFilters}
            onView={(row) => alert(`Xem: ${row.crop}`)}
            onEdit={(row) => alert(`Sửa: ${row.crop}`)}
            onDelete={(row) => alert(`Xóa: ${row.crop}`)}
            pageSize={5}
          />
        </div>
        <CodeBlock
          code={`import { DataTable } from "@/components/shared/DataTable";

const columns = [
  { key: "crop", label: "Cây trồng", sortable: true },
  { key: "field", label: "Cánh đồng" },
  { key: "area", label: "Diện tích" },
  { key: "status", label: "Trạng thái", render: (value) => <Badge>{value}</Badge> },
];

<DataTable
  columns={columns}
  data={cropData}
  searchable
  selectable
  filters={[{ key: "status", label: "Trạng thái", options: [...] }]}
  onView={(row) => handleView(row)}
  onEdit={(row) => handleEdit(row)}
  onDelete={(row) => handleDelete(row)}
  pageSize={10}
/>`}
        />
      </section>

      {/* ── FormDialog ────────────────────────────────────────────────────── */}
      <section id="formdialog" className="space-y-4 scroll-mt-20">
        <div className="border-b pb-2">
          <h2 className="text-2xl font-semibold tracking-tight">FormDialog</h2>
          <p className="text-muted-foreground text-sm mt-1">
            The dialog box includes a header, footer with a Cancel/Save button,
            supports a loading state, and has 4 sizes (sm, md, lg, xl).
          </p>
        </div>
        <div className="p-6 border rounded-lg bg-card flex flex-col items-start gap-4">
          <Button onClick={() => setFormOpen(true)}>
            <Sprout className="w-4 h-4 mr-2" />
            Adding a new season
          </Button>
          <p className="text-sm text-muted-foreground">
            Press the button above to open the FormDialog.
          </p>
        </div>
        <FormDialog
          open={formOpen}
          onOpenChange={setFormOpen}
          title="Adding a new season"
          description="Fill in the information for the crop you wish to register for in the field."
          onSubmit={handleFormSubmit}
          submitLabel="Seasonal registration"
          loading={formLoading}
          size="lg"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Type of crop</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn cây trồng" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wheat">Wheat</SelectItem>

                  <SelectItem value="rice">Rice</SelectItem>

                  <SelectItem value="corn">Corn</SelectItem>

                  <SelectItem value="soybean">Soybean</SelectItem>

                  <SelectItem value="cotton">Cotton</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Field</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select field" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a1">Field A1 (12 hectares)</SelectItem>
                    <SelectItem value="b2">Field B2 (8 hectares)</SelectItem>
                    <SelectItem value="c1">Field C1 (25 hectares)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Planting Date</Label>
                <Input type="date" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Notes</Label>

              <Textarea
                placeholder="Notes on soil conditions, fertilizers..."
                rows={3}
              />
            </div>
          </div>
        </FormDialog>

        <CodeBlock
          code={`import { FormDialog } from "@/components/shared/FormDialog";

<FormDialog

open={open}

onOpenChange={setOpen}

title="Add new crop"

description="Fill in crop information."

onSubmit={handleSubmit}

submitLabel="Season Registration"

loading={isLoading}

size="lg"

>
{/* Form fields */}
</FormDialog>`}
        />
      </section>

      {/* ── DeleteDialog ─────────────────────────────────────────────────────────────── */}

      <section id="deletedialog" className="space-y-4 scroll-mt-20">
        <div className="border-b pb-2">
          <h2 className="text-2xl font-semibold tracking-tight">
            DeleteDialog
          </h2>

          <p className="text-muted-foreground text-sm mt-1">
            A delete confirmation dialog using AlertDialog, with a Cancel/Delete
            button and a loading status. By default, it has a title and
            description appropriate for the delete action.
          </p>
        </div>

        <div className="p-6 border rounded-lg bg-card flex flex-col items-start gap-4">
          <Button variant="destructive" onClick={() => setDeleteOpen(true)}>
            <AlertTriangle className="w-4 h-4 mr-2" />
            Delete crop
          </Button>

          <p className="text-sm text-muted-foreground">
            Click the button above to see the delete confirmation dialog.
          </p>
        </div>

        <DeleteDialog
          open={deleteOpen}
          onOpenChange={setDeleteOpen}
          title="Delete wheat crop?"
          description="The crop at Field A1 will be permanently deleted. Harvest data and history cannot be recovered."
          onConfirm={handleDelete}
          loading={deleteLoading}
        />
        <CodeBlock
          code={`import { DeleteDialog } from "@/components/shared/DeleteDialog";

<DeleteDialog

open={open}

onOpenChange={setOpen}

title="Delete wheat crop?"

description="Data cannot be recovered after deletion."

onConfirm={handleConfirm} 
loading={isLoading}
/>`}
        />
      </section>

      {/* ── StepperForm ────────────────────────── ─────────────────────────── */}
      <section id="stepperform" className="space-y-4 scroll-mt-20">
        <div className="border-b pb-2">
          <h2 className="text-2xl font-semibold tracking-tight">StepperForm</h2>

          <p className="text-muted-foreground text-sm mt-1">
            Multi-step form with progress bar, Next/Back button and Completed
            status. Each step receives a React node as content.
          </p>
        </div>

        <div className="border rounded-lg p-6 bg-card">
          {stepperDone ? (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-950/40 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>

              <div>
                <p className="text-xl font-semibold">
                  Registration successful!
                </p>

                <p className="text-muted-foreground text-sm mt-1">
                  The season has been added to the system.
                </p>
              </div>

              <Button variant="outline" onClick={() => setStepperDone(false)}>
                Register another season
              </Button>
            </div>
          ) : (
            <StepperForm
              steps={steps}
              onComplete={() => setStepperDone(true)}
              onCancel={() => setStepperDone(false)}
              completeLabel="Registration Completed"
            />
          )}
        </div>

        <CodeBlock
          code={`import { StepperForm, Step } from "@/components/shared/StepperForm";

const steps: Step[] = [
{ id: "basic", title: "Basic Information", content: <Step1 /> },

{ id: "crop", title: "Season", content: <Step2 /> },

{ id: "confirm", title: "Confirm", content: <Step3 /> },

];

<StepperForm

steps={steps}

onComplete={handleComplete}

onCancel={handleCancel}
completeLabel="Registration Completed"

/>`}
        />
      </section>
    </div>
  );
}
