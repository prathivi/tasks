import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";
import { Loading } from "../common/loading";
import { ThemeProvider } from "./theme.provider";

export function AppProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <ClerkProvider>
        <ClerkLoading>
          <Loading />
        </ClerkLoading>
        <ClerkLoaded>{children}</ClerkLoaded>
      </ClerkProvider>
    </ThemeProvider>
  );
}
