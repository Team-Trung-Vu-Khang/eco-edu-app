import { useLocation } from "wouter";
import { ComponentSidebar } from "@/components/layout/Sidebar";
import { ButtonsDemo } from "./buttons";
import { FormControlsDemo } from "./form-controls";
import { LayoutDemo } from "./layout";
import { NavigationDemo } from "./navigation";
import { OverlaysDemo } from "./overlays";
import { FeedbackDemo } from "./feedback";
import { DataDisplayDemo } from "./data-display";
import { MiscDemo } from "./misc";
import { SharedDemo } from "./shared";

export function ComponentsLayout() {
  const [location] = useLocation();
  const category = location.replace(/^\/components\/?/, "") || "buttons";

  const renderDemo = () => {
    switch (category) {
      case "buttons": return <ButtonsDemo />;
      case "form-controls": return <FormControlsDemo />;
      case "layout": return <LayoutDemo />;
      case "navigation": return <NavigationDemo />;
      case "overlays": return <OverlaysDemo />;
      case "feedback": return <FeedbackDemo />;
      case "data-display": return <DataDisplayDemo />;
      case "misc": return <MiscDemo />;
      case "shared": return <SharedDemo />;
      default: return <ButtonsDemo />;
    }
  };

  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] lg:grid-cols-[280px_minmax(0,1fr)] mx-auto px-4 md:px-8">
      <ComponentSidebar />
      <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px] px-4 md:px-8">
        <div className="mx-auto w-full min-w-0">
          {renderDemo()}
        </div>
      </main>
    </div>
  );
}
