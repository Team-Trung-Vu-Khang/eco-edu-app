import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { CodeBlock } from "@/components/code-block";
import { Tractor, Sprout, CloudRain } from "lucide-react";

export function NavigationDemo() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Navigation</h1>
        <p className="text-lg text-muted-foreground">Menus, breadcrumbs, and pagination.</p>
      </div>

      <section id="navigation-menu" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Navigation Menu</h2>
        <div className="p-6 border rounded-lg bg-card overflow-visible z-10 flex justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Operations</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/20 to-primary/10 p-6 no-underline outline-none focus:shadow-md border"
                          href="#"
                        >
                          <Tractor className="h-8 w-8 text-primary mb-4" />
                          <div className="mb-2 text-lg font-medium">
                            Farm Control
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Manage all active operations, equipment, and field assignments.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none flex items-center gap-2">
                            <Sprout className="h-4 w-4 text-primary" /> Crops
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                            Planting schedules and yield tracking.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none flex items-center gap-2">
                            <CloudRain className="h-4 w-4 text-primary" /> Irrigation
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                            Water management and sensors.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#" className={navigationMenuTriggerStyle()}>
                  Reports
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <CodeBlock code={`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Operations</NavigationMenuTrigger>
      <NavigationMenuContent>
        {/* Farm operation links */}
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        Reports
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`} />
      </section>

      <section id="breadcrumb" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Breadcrumb</h2>
        <div className="p-6 border rounded-lg bg-card">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Fields</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Wheat Field A3</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <CodeBlock code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Fields</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Wheat Field A3</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`} />
      </section>

      <section id="pagination" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Pagination</h2>
        <div className="p-6 border rounded-lg bg-card">
          <div className="mb-4 text-sm text-muted-foreground font-medium">Field Records</div>
          <Pagination className="justify-start">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
        <CodeBlock code={`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`} />
      </section>

      <section id="tabs" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Tabs</h2>
        <div className="p-6 border rounded-lg bg-card w-full">
          <Tabs defaultValue="crops" className="w-full max-w-md">
            <TabsList className="w-full grid grid-cols-4">
              <TabsTrigger value="crops">Crops</TabsTrigger>
              <TabsTrigger value="livestock">Livestock</TabsTrigger>
              <TabsTrigger value="equipment">Equipment</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="crops" className="p-4 border rounded-md mt-2 bg-background">Manage crop rotations and planting schedules.</TabsContent>
            <TabsContent value="livestock" className="p-4 border rounded-md mt-2 bg-background">Track animal health and feeding routines.</TabsContent>
            <TabsContent value="equipment" className="p-4 border rounded-md mt-2 bg-background">Maintenance logs for farm machinery.</TabsContent>
            <TabsContent value="reports" className="p-4 border rounded-md mt-2 bg-background">Yield and financial reporting.</TabsContent>
          </Tabs>
        </div>
        <CodeBlock code={`<Tabs defaultValue="crops" className="w-full">
  <TabsList className="grid grid-cols-4">
    <TabsTrigger value="crops">Crops</TabsTrigger>
    <TabsTrigger value="livestock">Livestock</TabsTrigger>
    <TabsTrigger value="equipment">Equipment</TabsTrigger>
    <TabsTrigger value="reports">Reports</TabsTrigger>
  </TabsList>
  <TabsContent value="crops">Manage crop rotations...</TabsContent>
  <TabsContent value="livestock">Track animal health...</TabsContent>
</Tabs>`} />
      </section>

      <section id="menubar" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Menubar</h2>
        <div className="p-6 border rounded-lg bg-card max-w-md">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Record</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Harvest <MenubarShortcut>⌘H</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  New Planting <MenubarShortcut>⌘P</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Export Data</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print Report</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Satellite Map
                </MenubarItem>
                <MenubarItem>
                  Moisture Sensors
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
        <CodeBlock code={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>Record</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Harvest <MenubarShortcut>⌘H</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>New Planting</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Export Data</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`} />
      </section>
    </div>
  );
}
