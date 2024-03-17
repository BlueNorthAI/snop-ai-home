import { ClientOnly } from "remix-utils";

import { TooltipProvider } from "~/components/ui/tooltip";
import { ThemeProvider as NextThemesProvider } from "~/context/theme-context";
// import { ThemeProviderProps } from 'next-themes/dist/types'
import { SidebarProvider } from "~/lib/hooks/use-sidebar";

export function Providers({ children, ...props }) {
  return (
    <ClientOnly>
      {() => (
        <NextThemesProvider {...props}>
          <SidebarProvider>
            <TooltipProvider>{children}</TooltipProvider>
          </SidebarProvider>
        </NextThemesProvider>
      )}
    </ClientOnly>
  );
}
