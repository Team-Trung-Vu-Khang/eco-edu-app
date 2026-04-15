import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CodeBlock } from "@/components/code-block";
import { Map, Tractor, CloudRain, BarChart3 } from "lucide-react";

const chartData = [
  { month: "Jan", wheat: 186, corn: 80 },
  { month: "Feb", wheat: 305, corn: 200 },
  { month: "Mar", wheat: 237, corn: 120 },
  { month: "Apr", wheat: 73, corn: 190 },
  { month: "May", wheat: 209, corn: 130 },
  { month: "Jun", wheat: 214, corn: 140 },
];

const chartConfig = {
  wheat: {
    label: "Wheat Yield",
    color: "hsl(var(--chart-1))",
  },
  corn: {
    label: "Corn Yield",
    color: "hsl(var(--chart-2))",
  },
};

export function MiscDemo() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Typography & Misc
        </h1>
        <p className="text-lg text-muted-foreground">
          Accordions, commands, carousels, and charts.
        </p>
      </div>

      <section id="accordion" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
          Accordion
        </h2>
        <div className="p-6 border rounded-lg bg-card">
          <Accordion type="single" collapsible className="w-full max-w-md">
            <AccordionItem value="item-1">
              <AccordionTrigger>How to track multiple fields?</AccordionTrigger>
              <AccordionContent>
                You can group fields by zone and assign different crops to each.
                Use the layout view to see them side-by-side.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Setting up harvest schedules</AccordionTrigger>
              <AccordionContent>
                Go to the calendar component, select your crop type, and the
                system will automatically project the ideal harvest window based
                on historical weather data.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Export data</AccordionTrigger>
              <AccordionContent>
                All tables and charts support one-click CSV and PDF export for
                easy reporting to agricultural authorities.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <CodeBlock
          code={`<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>How to track multiple fields?</AccordionTrigger>
    <AccordionContent>
      You can group fields by zone and assign different crops.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        />
      </section>

      <section id="command" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
          Command
        </h2>
        <div className="p-6 border rounded-lg bg-card flex justify-center">
          <Command className="rounded-lg border shadow-md max-w-[450px]">
            <CommandInput placeholder="Search crops, fields, equipment..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Fields">
                <CommandItem>
                  <Map className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>Wheat Field A3</span>
                </CommandItem>
                <CommandItem>
                  <Map className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>Rice Field B2</span>
                </CommandItem>
              </CommandGroup>
              <CommandGroup heading="Equipment">
                <CommandItem>
                  <Tractor className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>Tractor T-42</span>
                </CommandItem>
                <CommandItem>
                  <CloudRain className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>Irrigation System</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
        <CodeBlock
          code={`<Command>
  <CommandInput placeholder="Search crops, fields, equipment..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Fields">
      <CommandItem>Wheat Field A3</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
        />
      </section>

      <section id="carousel" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
          Carousel
        </h2>
        <div className="p-6 border rounded-lg bg-card flex justify-center px-12">
          <Carousel className="w-full max-w-sm">
            <CarouselContent>
              {[
                { title: "Field Mapping", icon: Map },
                { title: "Yield Prediction", icon: BarChart3 },
                { title: "Weather Integration", icon: CloudRain },
                { title: "Equipment Tracking", icon: Tractor },
              ].map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col aspect-square items-center justify-center p-6 text-center">
                        <item.icon className="w-12 h-12 text-primary mb-4" />
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <CodeBlock
          code={`<Carousel>
  <CarouselContent>
    <CarouselItem>
      <Card>
        <CardContent>Field Mapping</CardContent>
      </Card>
    </CarouselItem>
    {/* More items */}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
        />
      </section>

      <section id="chart" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
          Chart
        </h2>
        <div className="p-6 border rounded-lg bg-card">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Yield (tons)</CardTitle>
              <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <BarChart accessibilityLayer data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dashed" />}
                  />
                  <Bar dataKey="wheat" fill="var(--color-wheat)" radius={4} />
                  <Bar dataKey="corn" fill="var(--color-corn)" radius={4} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
        <CodeBlock
          code={`<ChartContainer config={chartConfig}>
  <BarChart accessibilityLayer data={chartData}>
    <CartesianGrid vertical={false} />
    <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
    <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
    <Bar dataKey="wheat" fill="var(--color-wheat)" radius={4} />
    <Bar dataKey="corn" fill="var(--color-corn)" radius={4} />
  </BarChart>
</ChartContainer>`}
        />
      </section>
    </div>
  );
}
