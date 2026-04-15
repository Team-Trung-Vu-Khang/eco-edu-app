import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/code-block";
import { Droplets } from "lucide-react";

export function ButtonsDemo() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Buttons & Actions</h1>
        <p className="text-lg text-muted-foreground">Displays a button or a component that looks like a button.</p>
      </div>

      {/* Button */}
      <section id="button" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Button</h2>
        <div className="flex flex-wrap gap-4 items-center p-6 border rounded-lg bg-card">
          <Button variant="default">Plant Crop</Button>
          <Button variant="secondary">Schedule Harvest</Button>
          <Button variant="outline">Add Livestock</Button>
          <Button variant="ghost">View Field</Button>
          <Button variant="link">Learn More</Button>
          <Button variant="destructive">Delete Record</Button>
        </div>
        <CodeBlock code={`<Button variant="default">Plant Crop</Button>
<Button variant="secondary">Schedule Harvest</Button>
<Button variant="outline">Add Livestock</Button>
<Button variant="ghost">View Field</Button>
<Button variant="link">Learn More</Button>
<Button variant="destructive">Delete Record</Button>`} />
      </section>

      {/* Button Group */}
      <section id="button-group" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Button Group</h2>
        <div className="flex flex-wrap gap-4 p-6 border rounded-lg bg-card">
          <ButtonGroup>
            <Button variant="outline">Seed</Button>
            <Button variant="outline">Grow</Button>
            <Button variant="outline">Harvest</Button>
          </ButtonGroup>
        </div>
        <CodeBlock code={`<ButtonGroup>
  <Button variant="outline">Seed</Button>
  <Button variant="outline">Grow</Button>
  <Button variant="outline">Harvest</Button>
</ButtonGroup>`} />
      </section>

      {/* Toggle */}
      <section id="toggle" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Toggle</h2>
        <div className="flex flex-wrap gap-4 p-6 border rounded-lg bg-card">
          <Toggle aria-label="Toggle irrigation" className="gap-2">
            <Droplets className="h-4 w-4" />
            Irrigation
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle irrigation" className="gap-2">
            <Droplets className="h-4 w-4" />
            Irrigation
          </Toggle>
        </div>
        <CodeBlock code={`<Toggle aria-label="Toggle irrigation" className="gap-2">
  <Droplets className="h-4 w-4" />
  Irrigation
</Toggle>`} />
      </section>

      {/* Badge */}
      <section id="badge" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Badge</h2>
        <div className="flex flex-wrap gap-4 items-center p-6 border rounded-lg bg-card">
          <Badge>Harvested</Badge>
          <Badge variant="secondary">Growing</Badge>
          <Badge variant="outline">Pending</Badge>
          <Badge variant="destructive">Alert</Badge>
        </div>
        <CodeBlock code={`<Badge>Harvested</Badge>
<Badge variant="secondary">Growing</Badge>
<Badge variant="outline">Pending</Badge>
<Badge variant="destructive">Alert</Badge>`} />
      </section>
    </div>
  );
}
