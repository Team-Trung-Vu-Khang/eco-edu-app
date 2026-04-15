import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { CodeBlock } from "@/components/code-block";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronsUpDown, Settings2 } from "lucide-react";
import { useState } from "react";

export function LayoutDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Layout</h1>
        <p className="text-lg text-muted-foreground">Components used for structuring content.</p>
      </div>

      <section id="card" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Card</h2>
        <div className="p-6 border rounded-lg bg-background flex justify-center">
          <Card className="w-[350px]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle>Field Overview</CardTitle>
              <Badge variant="secondary">Growing</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Wheat Field A3</div>
              <p className="text-sm text-muted-foreground mt-1">
                Crop: Winter Wheat &bull; Area: 12ha
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="w-full">View Details</Button>
            </CardFooter>
          </Card>
        </div>
        <CodeBlock code={`<Card className="w-[350px]">
  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
    <CardTitle>Field Overview</CardTitle>
    <Badge variant="secondary">Growing</Badge>
  </CardHeader>
  <CardContent>
    <div className="text-2xl font-bold">Wheat Field A3</div>
    <p className="text-sm text-muted-foreground mt-1">
      Crop: Winter Wheat &bull; Area: 12ha
    </p>
  </CardContent>
  <CardFooter>
    <Button variant="outline" className="w-full">View Details</Button>
  </CardFooter>
</Card>`} />
      </section>

      <section id="separator" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Separator</h2>
        <div className="p-6 border rounded-lg bg-card max-w-md mx-auto">
          <div>
            <div className="space-y-1">
              <h4 className="text-sm font-medium leading-none">Farm Settings</h4>
              <p className="text-sm text-muted-foreground">
                Manage your agricultural platform preferences.
              </p>
            </div>
            <Separator className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-sm">
              <div>Account</div>
              <Separator orientation="vertical" />
              <div>Billing</div>
              <Separator orientation="vertical" />
              <div>Notifications</div>
            </div>
          </div>
        </div>
        <CodeBlock code={`<div>
  <div className="space-y-1">
    <h4 className="text-sm font-medium leading-none">Farm Settings</h4>
    <p className="text-sm text-muted-foreground">
      Manage your agricultural platform preferences.
    </p>
  </div>
  <Separator className="my-4" />
  <div className="flex h-5 items-center space-x-4 text-sm">
    <div>Account</div>
    <Separator orientation="vertical" />
    <div>Billing</div>
    <Separator orientation="vertical" />
    <div>Notifications</div>
  </div>
</div>`} />
      </section>

      <section id="resizable" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Resizable</h2>
        <div className="p-6 border rounded-lg bg-card max-w-3xl mx-auto h-[400px]">
          <ResizablePanelGroup direction="horizontal" className="rounded-lg border">
            <ResizablePanel defaultSize={30} minSize={20}>
              <div className="flex h-full flex-col p-4 bg-muted/20">
                <div className="font-semibold mb-4 border-b pb-2">Field List</div>
                <div className="space-y-2">
                  <div className="p-2 bg-background border rounded text-sm font-medium">Wheat Field A1</div>
                  <div className="p-2 hover:bg-muted/50 rounded text-sm cursor-pointer">Rice Field B2</div>
                  <div className="p-2 hover:bg-muted/50 rounded text-sm cursor-pointer">Corn Field C1</div>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={70}>
              <div className="flex h-full flex-col p-6 bg-background">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold">Wheat Field A1</h3>
                    <p className="text-muted-foreground">Planted: Oct 15, 2023 &bull; 12 Hectares</p>
                  </div>
                  <Badge>Growing</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 flex-1">
                  <div className="border rounded-lg p-4 bg-muted/10">
                    <h4 className="text-sm font-medium mb-2 text-muted-foreground">Soil Moisture</h4>
                    <div className="text-2xl">42%</div>
                  </div>
                  <div className="border rounded-lg p-4 bg-muted/10">
                    <h4 className="text-sm font-medium mb-2 text-muted-foreground">Est. Yield</h4>
                    <div className="text-2xl">3.2 t/ha</div>
                  </div>
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
        <CodeBlock code={`<ResizablePanelGroup direction="horizontal" className="rounded-lg border">
  <ResizablePanel defaultSize={30}>
    <div className="p-4">
      <div className="font-semibold mb-4">Field List</div>
      {/* List content */}
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={70}>
    <div className="p-6">
      <h3 className="text-2xl font-bold">Wheat Field A1</h3>
      {/* Detail content */}
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`} />
      </section>

      <section id="scroll-area" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Scroll Area</h2>
        <div className="p-6 border rounded-lg bg-card">
          <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4 bg-background">
            <h4 className="mb-4 text-sm font-medium leading-none">Farm Plots</h4>
            <div className="space-y-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="text-sm border-b pb-2 last:border-0 last:pb-0">
                  <div className="font-medium">Plot {i + 1}</div>
                  <div className="text-muted-foreground text-xs">Area: {(Math.random() * 10 + 1).toFixed(1)} ha</div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
        <CodeBlock code={`<ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
  <h4 className="mb-4 text-sm font-medium">Farm Plots</h4>
  <div className="space-y-4">
    {plots.map(plot => (
      <div key={plot.id} className="text-sm border-b pb-2">
        <div className="font-medium">{plot.name}</div>
      </div>
    ))}
  </div>
</ScrollArea>`} />
      </section>

      <section id="aspect-ratio" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Aspect Ratio</h2>
        <div className="p-6 border rounded-lg bg-card max-w-sm">
          <AspectRatio ratio={16 / 9} className="bg-muted rounded-md flex items-center justify-center border overflow-hidden">
             <div className="bg-secondary w-full h-full flex items-center justify-center text-secondary-foreground font-medium">
               Field Map Imagery
             </div>
          </AspectRatio>
        </div>
        <CodeBlock code={`<AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
  <img src="/field-map.jpg" alt="Field Map" className="object-cover w-full h-full" />
</AspectRatio>`} />
      </section>

      <section id="collapsible" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Collapsible</h2>
        <div className="p-6 border rounded-lg bg-card max-w-sm">
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-full space-y-2"
          >
            <div className="flex items-center justify-between space-x-4 px-4 py-2 border rounded-md bg-background">
              <div className="flex items-center gap-2">
                <Settings2 className="w-4 h-4 text-muted-foreground" />
                <h4 className="text-sm font-semibold">
                  Advanced irrigation settings
                </h4>
              </div>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="w-9 p-0">
                  <ChevronsUpDown className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-2">
              <div className="rounded-md border px-4 py-3 text-sm bg-background">
                <div className="flex justify-between py-1 border-b">
                  <span className="text-muted-foreground">Flow Rate</span>
                  <span className="font-medium">15 L/min</span>
                </div>
                <div className="flex justify-between py-1 border-b">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-medium">45 mins</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Frequency</span>
                  <span className="font-medium">Every 2 days</span>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
        <CodeBlock code={`<Collapsible>
  <div className="flex items-center justify-between border rounded-md px-4 py-2">
    <h4 className="text-sm font-semibold">Advanced irrigation settings</h4>
    <CollapsibleTrigger asChild>
      <Button variant="ghost" size="sm" className="w-9 p-0">
        <ChevronsUpDown className="h-4 w-4" />
      </Button>
    </CollapsibleTrigger>
  </div>
  <CollapsibleContent className="space-y-2 mt-2">
    <div className="rounded-md border px-4 py-3 text-sm">
      {/* Settings list */}
    </div>
  </CollapsibleContent>
</Collapsible>`} />
      </section>
    </div>
  );
}
