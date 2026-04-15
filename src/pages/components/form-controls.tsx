import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { CodeBlock } from "@/components/code-block";
import { useState } from "react";

export function FormControlsDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Form Controls</h1>
        <p className="text-lg text-muted-foreground">Inputs, selects, and controls to capture user data.</p>
      </div>

      <section id="input" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Input</h2>
        <div className="p-6 border rounded-lg bg-card max-w-sm space-y-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="farmName">Farm Name</Label>
            <Input type="text" id="farmName" placeholder="e.g. Sunny Ridge Farm" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="fieldArea">Field Area (hectares)</Label>
            <Input type="number" id="fieldArea" placeholder="0.00" />
          </div>
        </div>
        <CodeBlock code={`<div className="grid w-full items-center gap-1.5">
  <Label htmlFor="farmName">Farm Name</Label>
  <Input type="text" id="farmName" placeholder="e.g. Sunny Ridge Farm" />
</div>`} />
      </section>

      <section id="textarea" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Textarea</h2>
        <div className="p-6 border rounded-lg bg-card max-w-sm">
          <div className="grid w-full gap-1.5">
            <Label htmlFor="cropNotes">Crop Notes</Label>
            <Textarea placeholder="Soil condition, weather notes..." id="cropNotes" />
          </div>
        </div>
        <CodeBlock code={`<div className="grid w-full gap-1.5">
  <Label htmlFor="cropNotes">Crop Notes</Label>
  <Textarea placeholder="Soil condition, weather notes..." id="cropNotes" />
</div>`} />
      </section>

      <section id="select" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Select</h2>
        <div className="p-6 border rounded-lg bg-card max-w-sm">
          <div className="grid w-full gap-1.5">
            <Label htmlFor="cropType">Crop Type</Label>
            <Select>
              <SelectTrigger id="cropType" className="w-[180px]">
                <SelectValue placeholder="Select Crop" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="wheat">Wheat</SelectItem>
                <SelectItem value="rice">Rice</SelectItem>
                <SelectItem value="corn">Corn</SelectItem>
                <SelectItem value="soybeans">Soybeans</SelectItem>
                <SelectItem value="cotton">Cotton</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <CodeBlock code={`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select Crop" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="wheat">Wheat</SelectItem>
    <SelectItem value="rice">Rice</SelectItem>
    <SelectItem value="corn">Corn</SelectItem>
    <SelectItem value="soybeans">Soybeans</SelectItem>
    <SelectItem value="cotton">Cotton</SelectItem>
  </SelectContent>
</Select>`} />
      </section>

      <section id="checkbox" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Checkbox</h2>
        <div className="p-6 border rounded-lg bg-card max-w-sm space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="organic" />
            <Label htmlFor="organic">Organic Certified</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="irrigation" />
            <Label htmlFor="irrigation">Irrigation Available</Label>
          </div>
        </div>
        <CodeBlock code={`<div className="flex items-center space-x-2">
  <Checkbox id="organic" />
  <Label htmlFor="organic">Organic Certified</Label>
</div>`} />
      </section>

      <section id="radio-group" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Radio Group</h2>
        <div className="p-6 border rounded-lg bg-card max-w-sm">
          <RadioGroup defaultValue="medium">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="small" id="r1" />
              <Label htmlFor="r1">Small Farm (&lt;10ha)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="medium" id="r2" />
              <Label htmlFor="r2">Medium (10-50ha)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="large" id="r3" />
              <Label htmlFor="r3">Large (&gt;50ha)</Label>
            </div>
          </RadioGroup>
        </div>
        <CodeBlock code={`<RadioGroup defaultValue="medium">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="small" id="r1" />
    <Label htmlFor="r1">Small Farm (&lt;10ha)</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="medium" id="r2" />
    <Label htmlFor="r2">Medium (10-50ha)</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="large" id="r3" />
    <Label htmlFor="r3">Large (&gt;50ha)</Label>
  </div>
</RadioGroup>`} />
      </section>

      <section id="switch" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Switch</h2>
        <div className="p-6 border rounded-lg bg-card max-w-sm space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="weather-alerts">Enable weather alerts</Label>
            <Switch id="weather-alerts" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="auto-irrigation">Auto-schedule irrigation</Label>
            <Switch id="auto-irrigation" />
          </div>
        </div>
        <CodeBlock code={`<div className="flex items-center justify-between">
  <Label htmlFor="weather-alerts">Enable weather alerts</Label>
  <Switch id="weather-alerts" />
</div>`} />
      </section>

      <section id="slider" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Slider</h2>
        <div className="p-6 border rounded-lg bg-card max-w-sm space-y-4">
          <div className="flex items-center justify-between">
            <Label>Fertilizer amount (kg/ha)</Label>
            <span className="text-sm text-muted-foreground">150 kg/ha</span>
          </div>
          <Slider defaultValue={[150]} max={300} step={5} />
        </div>
        <CodeBlock code={`<Slider defaultValue={[150]} max={300} step={5} />`} />
      </section>

      <section id="calendar" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Calendar</h2>
        <div className="p-6 border rounded-lg bg-card inline-block space-y-4">
          <Label className="block mb-2">Select harvest date</Label>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border bg-background"
          />
        </div>
        <CodeBlock code={`import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"

const [date, setDate] = useState<Date | undefined>(new Date())

return (
  <div className="space-y-2">
    <Label>Select harvest date</Label>
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  </div>
)`} />
      </section>

      <section id="input-otp" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Input OTP</h2>
        <div className="p-6 border rounded-lg bg-card max-w-sm space-y-4">
          <Label className="block mb-2">Farm Access Code</Label>
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <CodeBlock code={`<div className="space-y-2">
  <Label>Farm Access Code</Label>
  <InputOTP maxLength={6}>
    <InputOTPGroup>
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
      <InputOTPSlot index={3} />
      <InputOTPSlot index={4} />
      <InputOTPSlot index={5} />
    </InputOTPGroup>
  </InputOTP>
</div>`} />
      </section>
    </div>
  );
}
