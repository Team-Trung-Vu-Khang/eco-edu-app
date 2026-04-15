import { AlertCircle, CloudRain, ShieldAlert } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { toast as sonnerToast } from "sonner";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import { CodeBlock } from "@/components/code-block";
import { useEffect, useState } from "react";

export function FeedbackDemo() {
  const { toast } = useToast();
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(67), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Feedback</h1>
        <p className="text-lg text-muted-foreground">Alerts, toasts, and loading states.</p>
      </div>

      <section id="alert" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Alert</h2>
        <div className="p-6 border rounded-lg bg-card space-y-4">
          <Alert>
            <CloudRain className="h-4 w-4" />
            <AlertTitle>Weather alert</AlertTitle>
            <AlertDescription>
              Heavy rain expected in 48 hours. Consider delaying harvest.
            </AlertDescription>
          </Alert>
          <Alert variant="default" className="border-warning text-warning-foreground bg-warning/10">
            <AlertCircle className="h-4 w-4 text-warning" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              Low soil moisture in Field A3.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <ShieldAlert className="h-4 w-4" />
            <AlertTitle>Action Required</AlertTitle>
            <AlertDescription>
              Equipment maintenance overdue for Tractor T-42.
            </AlertDescription>
          </Alert>
        </div>
        <CodeBlock code={`<Alert>
  <CloudRain className="h-4 w-4" />
  <AlertTitle>Weather alert</AlertTitle>
  <AlertDescription>Heavy rain expected in 48 hours.</AlertDescription>
</Alert>

<Alert variant="destructive">
  <ShieldAlert className="h-4 w-4" />
  <AlertTitle>Action Required</AlertTitle>
  <AlertDescription>Equipment maintenance overdue.</AlertDescription>
</Alert>`} />
      </section>

      <section id="toast-sonner" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Toast / Sonner</h2>
        <div className="p-6 border rounded-lg bg-card flex gap-4">
          <Button
            variant="outline"
            onClick={() => {
              toast({
                title: "Crop Planted",
                description: "Wheat planted in Field A3",
              })
            }}
          >
            Show Toast
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              sonnerToast("Irrigation Started", {
                description: "Field B2 is now being watered.",
              })
            }}
          >
            Show Sonner
          </Button>
        </div>
        <CodeBlock code={`import { useToast } from "@/hooks/use-toast"
import { toast as sonnerToast } from "sonner"

// Standard Toast
const { toast } = useToast()
toast({
  title: "Crop Planted",
  description: "Wheat planted in Field A3",
})

// Sonner Toast
sonnerToast("Irrigation Started", {
  description: "Field B2 is now being watered.",
})`} />
      </section>

      <section id="progress" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Progress</h2>
        <div className="p-6 border rounded-lg bg-card max-w-sm space-y-2">
          <div className="flex justify-between text-sm">
            <span>Harvest completion</span>
            <span className="font-medium">67%</span>
          </div>
          <Progress value={progress} className="w-full" />
        </div>
        <CodeBlock code={`<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span>Harvest completion</span>
    <span className="font-medium">67%</span>
  </div>
  <Progress value={67} />
</div>`} />
      </section>

      <section id="skeleton" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Skeleton</h2>
        <div className="p-6 border rounded-lg bg-card">
          <div className="space-y-4 max-w-sm">
            <div className="flex items-center gap-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[150px]" />
                <Skeleton className="h-4 w-[100px]" />
              </div>
            </div>
            <Skeleton className="h-[120px] w-full rounded-xl" />
            <div className="flex gap-2">
              <Skeleton className="h-10 w-24" />
              <Skeleton className="h-10 w-24" />
            </div>
          </div>
        </div>
        <CodeBlock code={`<div className="space-y-4">
  <div className="flex items-center gap-4">
    <Skeleton className="h-12 w-12 rounded-full" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-[150px]" />
      <Skeleton className="h-4 w-[100px]" />
    </div>
  </div>
  <Skeleton className="h-[120px] w-full rounded-xl" />
</div>`} />
      </section>

      <section id="spinner" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Spinner</h2>
        <div className="p-6 border rounded-lg bg-card flex flex-col gap-4">
          <div className="flex items-center gap-3">
             <Spinner size="sm" />
             <span className="text-sm text-muted-foreground">Syncing field data...</span>
          </div>
        </div>
        <CodeBlock code={`<div className="flex items-center gap-3">
  <Spinner size="sm" />
  <span className="text-sm text-muted-foreground">Syncing field data...</span>
</div>`} />
      </section>
    </div>
  );
}
