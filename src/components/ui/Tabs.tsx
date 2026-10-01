"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useId,
  useState,
} from "react";

interface TabsState {
  id: string;
  select: (value: string) => void;
  value: string;
}
const TabsContext = createContext<TabsState | null>(null);
function useTabs() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be inside Tabs.Root");
  }
  return context;
}
function Root({
  children,
  defaultValue,
}: {
  children: ReactNode;
  defaultValue: string;
}) {
  const [value, select] = useState(defaultValue);
  const id = useId();
  return (
    <TabsContext.Provider value={{ id, select, value }}>
      {children}
    </TabsContext.Provider>
  );
}
function List({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div aria-label={label} className="flex flex-wrap gap-3" role="tablist">
      {children}
    </div>
  );
}
function Trigger({ children, value }: { children: ReactNode; value: string }) {
  const tabs = useTabs();
  return (
    <button
      aria-controls={`${tabs.id}-panel-${value}`}
      aria-selected={tabs.value === value}
      className={`min-h-11 rounded-full px-5 text-sm transition-colors ${tabs.value === value ? "bg-brand-secondary text-brand-text" : "bg-brand-bg-muted text-brand-text-secondary hover:bg-brand-gray-100"}`}
      id={`${tabs.id}-tab-${value}`}
      onClick={() => tabs.select(value)}
      onKeyDown={(event) => {
        if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) {
          return;
        }
        event.preventDefault();
        const triggers = Array.from(
          event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>(
            '[role="tab"]'
          ) ?? []
        );
        const index = triggers.indexOf(event.currentTarget);
        let next =
          event.key === "ArrowRight"
            ? (index + 1) % triggers.length
            : (index - 1 + triggers.length) % triggers.length;
        if (event.key === "Home") {
          next = 0;
        }
        if (event.key === "End") {
          next = triggers.length - 1;
        }
        triggers[next]?.focus();
        triggers[next]?.click();
      }}
      role="tab"
      tabIndex={tabs.value === value ? 0 : -1}
      type="button"
    >
      {children}
    </button>
  );
}
function Panel({ children, value }: { children: ReactNode; value: string }) {
  const tabs = useTabs();
  return (
    <div
      aria-labelledby={`${tabs.id}-tab-${value}`}
      className="mt-10 focus-visible:outline-brand-primary"
      hidden={tabs.value !== value}
      id={`${tabs.id}-panel-${value}`}
      role="tabpanel"
    >
      {children}
    </div>
  );
}
export const Tabs = { List, Panel, Root, Trigger };
