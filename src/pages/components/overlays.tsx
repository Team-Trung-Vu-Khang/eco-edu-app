import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CodeBlock } from "@/components/code-block";
import { Map, Tractor, Droplets } from "lucide-react";

export function OverlaysDemo() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Overlays</h1>
        <p className="text-lg text-muted-foreground">Dialogs, popovers, and context menus.</p>
      </div>

      <section id="dialog" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Dialog</h2>
        <div className="p-6 border rounded-lg bg-card">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Add New Crop</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Crop</DialogTitle>
                <DialogDescription>
                  Enter details for the new crop planting. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Crop Type</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="e.g. Winter Wheat" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Expected Yield (tons)</label>
                  <input type="number" className="w-full p-2 border rounded-md" placeholder="0.0" />
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <CodeBlock code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Add New Crop</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add New Crop</DialogTitle>
      <DialogDescription>
        Enter details for the new crop planting.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`} />
      </section>

      <section id="alert-dialog" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Alert Dialog</h2>
        <div className="p-6 border rounded-lg bg-card">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Complete Harvest</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirm Harvest &mdash; Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will mark Wheat Field A3 as fully harvested and update inventory records. This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Confirm Harvest</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <CodeBlock code={`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Complete Harvest</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Confirm Harvest &mdash; Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This will mark Wheat Field A3 as fully harvested.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Confirm Harvest</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`} />
      </section>

      <section id="drawer" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Drawer</h2>
        <div className="p-6 border rounded-lg bg-card">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Assign Equipment</Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>Assign Equipment</DrawerTitle>
                  <DrawerDescription>Select machinery for Field A3.</DrawerDescription>
                </DrawerHeader>
                <div className="p-4 pb-0">
                  <div className="flex items-center justify-center space-x-2 py-8 text-muted-foreground">
                    <Tractor className="w-12 h-12" />
                  </div>
                </div>
                <DrawerFooter>
                  <Button>Assign</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
        <CodeBlock code={`<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Assign Equipment</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Assign Equipment</DrawerTitle>
      <DrawerDescription>Select machinery for Field A3.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Assign</Button>
      <DrawerClose asChild>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`} />
      </section>

      <section id="sheet" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Sheet</h2>
        <div className="p-6 border rounded-lg bg-card">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Field Details</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Wheat Field A3</SheetTitle>
                <SheetDescription>
                  Detailed history and current status.
                </SheetDescription>
              </SheetHeader>
              <div className="py-6 space-y-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-medium text-muted-foreground">Crop</h4>
                  <p>Winter Wheat</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium text-muted-foreground">Area</h4>
                  <p>12 Hectares</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium text-muted-foreground">Status</h4>
                  <p>Growing (Week 6)</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <CodeBlock code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Field Details</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Wheat Field A3</SheetTitle>
      <SheetDescription>Detailed history and current status.</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`} />
      </section>

      <section id="popover" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Popover</h2>
        <div className="p-6 border rounded-lg bg-card">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Droplets className="w-4 h-4" />
                Irrigation Schedule
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Next Watering</h4>
                  <p className="text-sm text-muted-foreground">
                    Today at 18:00 (45 mins)
                  </p>
                </div>
                <div className="space-y-2 pt-2 border-t">
                  <h4 className="font-medium leading-none">Moisture Level</h4>
                  <p className="text-sm text-muted-foreground">
                    42% (Optimal)
                  </p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <CodeBlock code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Irrigation Schedule</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="space-y-2">
      <h4 className="font-medium leading-none">Next Watering</h4>
      <p className="text-sm text-muted-foreground">Today at 18:00 (45 mins)</p>
    </div>
  </PopoverContent>
</Popover>`} />
      </section>

      <section id="hover-card" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Hover Card</h2>
        <div className="p-6 border rounded-lg bg-card flex justify-center">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">Field A3</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Map className="w-10 h-10 text-muted-foreground" />
                <div className="space-y-1 flex-1">
                  <h4 className="text-sm font-semibold">Wheat Field A3</h4>
                  <p className="text-sm text-muted-foreground">
                    12ha &bull; Winter Wheat
                  </p>
                  <div className="flex items-center pt-2">
                    <span className="text-xs text-muted-foreground">Planted Oct 15</span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <CodeBlock code={`<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">Field A3</Button>
  </HoverCardTrigger>
  <HoverCardContent>
    <h4 className="text-sm font-semibold">Wheat Field A3</h4>
    <p className="text-sm">12ha &bull; Winter Wheat</p>
  </HoverCardContent>
</HoverCard>`} />
      </section>

      <section id="tooltip" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Tooltip</h2>
        <div className="p-6 border rounded-lg bg-card flex justify-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Map className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>View satellite imagery</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <CodeBlock code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline" size="icon"><Map className="h-4 w-4" /></Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>View satellite imagery</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`} />
      </section>

      <section id="context-menu" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Context Menu</h2>
        <div className="p-6 border rounded-lg bg-card">
          <ContextMenu>
            <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
              Right click here (Farm Map)
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuItem inset>
                Add Marker
              </ContextMenuItem>
              <ContextMenuItem inset>
                Measure Area
              </ContextMenuItem>
              <ContextMenuItem inset>
                View Soil Data
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </div>
        <CodeBlock code={`<ContextMenu>
  <ContextMenuTrigger className="h-[150px] border border-dashed">
    Right click here (Farm Map)
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Add Marker</ContextMenuItem>
    <ContextMenuItem>Measure Area</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`} />
      </section>

      <section id="dropdown-menu" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Dropdown Menu</h2>
        <div className="p-6 border rounded-lg bg-card">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Field Actions</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Wheat Field A3</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View Details</DropdownMenuItem>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Export Data</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Archive</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">Delete Record</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <CodeBlock code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Field Actions</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Wheat Field A3</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>View Details</DropdownMenuItem>
    <DropdownMenuItem>Edit</DropdownMenuItem>
    <DropdownMenuItem>Export Data</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Archive</DropdownMenuItem>
    <DropdownMenuItem className="text-destructive">Delete Record</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`} />
      </section>
    </div>
  );
}
