import { useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const CATEGORIES = [
  {
    title: "Buttons & Actions",
    href: "/components/buttons",
    items: ["Button", "Button Group", "Toggle", "Toggle Group", "Badge"],
  },
  {
    title: "Form Controls",
    href: "/components/form-controls",
    items: ["Input", "Textarea", "Select", "Checkbox", "Radio Group", "Switch", "Slider", "Input OTP", "Calendar", "Date Picker"],
  },
  {
    title: "Layout",
    href: "/components/layout",
    items: ["Card", "Separator", "Resizable", "Scroll Area", "Aspect Ratio", "Collapsible"],
  },
  {
    title: "Navigation",
    href: "/components/navigation",
    items: ["Navigation Menu", "Breadcrumb", "Pagination", "Tabs", "Menubar"],
  },
  {
    title: "Overlays",
    href: "/components/overlays",
    items: ["Dialog", "Alert Dialog", "Drawer", "Sheet", "Popover", "Hover Card", "Tooltip", "Context Menu", "Dropdown Menu"],
  },
  {
    title: "Feedback",
    href: "/components/feedback",
    items: ["Alert", "Toast/Sonner", "Progress", "Skeleton", "Spinner"],
  },
  {
    title: "Data Display",
    href: "/components/data-display",
    items: ["Table", "Avatar", "Kbd", "Empty State", "Item"],
  },
  {
    title: "Typography & Misc",
    href: "/components/misc",
    items: ["Label", "Accordion", "Command", "Carousel", "Chart"],
  },
  {
    title: "Shared Components",
    href: "/components/shared",
    items: ["StatsCard", "DataTable", "FormDialog", "DeleteDialog", "StepperForm"],
  },
];

export function ComponentSidebar() {
  const [location] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = CATEGORIES.map(category => ({
    ...category,
    items: category.items.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
  })).filter(category => category.items.length > 0 || category.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block md:w-[240px] lg:w-[280px] border-r">
      <div className="h-full py-6 pl-8 pr-6">
        <div className="relative mb-4">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search components..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <ScrollArea className="h-[calc(100vh-10rem)]">
          <div className="flex flex-col gap-6">
            {filteredCategories.map((category) => (
              <div key={category.title} className="flex flex-col gap-1">
                <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
                  {category.title}
                </h4>
                <div className="grid grid-flow-row auto-rows-max text-sm">
                  <Link
                    href={category.href}
                    className={cn(
                      "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
                      location === category.href
                        ? "font-medium text-foreground bg-muted"
                        : "text-muted-foreground"
                    )}
                  >
                    Overview
                  </Link>
                  {category.items.map((item) => (
                    <Link
                      key={item}
                      href={`${category.href}#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 text-muted-foreground hover:underline"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </aside>
  );
}
