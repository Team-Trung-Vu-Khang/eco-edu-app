import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Kbd } from "@/components/ui/kbd";
import { Empty } from "@/components/ui/empty";
import { Item } from "@/components/ui/item";
import { CodeBlock } from "@/components/code-block";
import { Tractor, Sprout } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const crops = [
  {
    crop: "Wheat",
    field: "Field A1",
    area: "12ha",
    status: "Growing",
    planted: "Oct 15, 2023",
    harvest: "Jun 20, 2024",
  },
  {
    crop: "Rice",
    field: "Field B2",
    area: "8ha",
    status: "Harvested",
    planted: "May 10, 2023",
    harvest: "Oct 05, 2023",
  },
  {
    crop: "Corn",
    field: "Field C1",
    area: "25ha",
    status: "Pending",
    planted: "-",
    harvest: "-",
  },
  {
    crop: "Soybeans",
    field: "Field A3",
    area: "15ha",
    status: "Growing",
    planted: "Nov 02, 2023",
    harvest: "Jul 15, 2024",
  },
  {
    crop: "Cotton",
    field: "Field D4",
    area: "30ha",
    status: "Harvested",
    planted: "Apr 20, 2023",
    harvest: "Nov 10, 2023",
  },
];

export function DataDisplayDemo() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Data Display</h1>
        <p className="text-lg text-muted-foreground">Tables, avatars, and data presentation.</p>
      </div>

      <section id="table" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Table</h2>
        <div className="p-6 border rounded-lg bg-card overflow-hidden">
          <Table>
            <TableCaption>Farm crops table.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Crop</TableHead>
                <TableHead>Field</TableHead>
                <TableHead>Area</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Planted</TableHead>
                <TableHead className="text-right">Harvest</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {crops.map((crop) => (
                <TableRow key={crop.field}>
                  <TableCell className="font-medium">{crop.crop}</TableCell>
                  <TableCell>{crop.field}</TableCell>
                  <TableCell>{crop.area}</TableCell>
                  <TableCell>
                     <Badge variant={crop.status === "Harvested" ? "secondary" : crop.status === "Pending" ? "outline" : "default"}>
                       {crop.status}
                     </Badge>
                  </TableCell>
                  <TableCell>{crop.planted}</TableCell>
                  <TableCell className="text-right">{crop.harvest}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <CodeBlock code={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Crop</TableHead>
      <TableHead>Field</TableHead>
      <TableHead>Area</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">Wheat</TableCell>
      <TableCell>Field A1</TableCell>
      <TableCell>12ha</TableCell>
      <TableCell><Badge>Growing</Badge></TableCell>
    </TableRow>
  </TableBody>
</Table>`} />
      </section>

      <section id="avatar" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Avatar</h2>
        <div className="p-6 border rounded-lg bg-card flex gap-4 items-center">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback className="bg-primary/20 text-primary">NA</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">Nguyen Van A</div>
              <div className="text-sm text-muted-foreground">Farm Manager</div>
            </div>
          </div>
        </div>
        <CodeBlock code={`<div className="flex items-center gap-3">
  <Avatar>
    <AvatarFallback>NA</AvatarFallback>
  </Avatar>
  <div>
    <div className="font-medium">Nguyen Van A</div>
    <div className="text-sm text-muted-foreground">Farm Manager</div>
  </div>
</div>`} />
      </section>

      <section id="kbd" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Kbd</h2>
        <div className="p-6 border rounded-lg bg-card space-y-2">
          <p className="text-sm text-muted-foreground">
            Press <Kbd>Ctrl</Kbd>+<Kbd>S</Kbd> to save field data.
          </p>
          <p className="text-sm text-muted-foreground">
            Press <Kbd>F</Kbd> to filter crops.
          </p>
        </div>
        <CodeBlock code={`<p>Press <Kbd>Ctrl</Kbd>+<Kbd>S</Kbd> to save field data.</p>
<p>Press <Kbd>F</Kbd> to filter crops.</p>`} />
      </section>

      <section id="empty-state" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Empty State</h2>
        <div className="p-6 border rounded-lg bg-card">
          <Empty
            icon={<Sprout className="w-12 h-12 text-muted-foreground" />}
            title="No crops planted yet"
            description="Add your first field to start tracking."
            action={{
              label: "Add Field",
              onClick: () => console.log("clicked")
            }}
          />
        </div>
        <CodeBlock code={`<Empty
  icon={<Sprout className="w-12 h-12 text-muted-foreground" />}
  title="No crops planted yet"
  description="Add your first field to start tracking."
  action={{
    label: "Add Field",
    onClick: () => {}
  }}
/>`} />
      </section>

      <section id="item" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Item</h2>
        <div className="p-6 border rounded-lg bg-card space-y-2 max-w-sm">
          <Item>
            <div className="flex items-center gap-3">
              <div className="bg-muted p-2 rounded-md">
                <Tractor className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <div className="font-medium text-sm">Cattle</div>
                <div className="text-xs text-muted-foreground">45 head &bull; Barn B2</div>
              </div>
            </div>
          </Item>
        </div>
        <CodeBlock code={`<Item>
  <div className="flex items-center gap-3">
    <div className="bg-muted p-2 rounded-md">
      <Tractor className="w-5 h-5" />
    </div>
    <div>
      <div className="font-medium text-sm">Cattle</div>
      <div className="text-xs text-muted-foreground">45 head &bull; Barn B2</div>
    </div>
  </div>
</Item>`} />
      </section>
    </div>
  );
}
