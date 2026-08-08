import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { AnalyticsTracker } from "@/components/layout/AnalyticsTracker";
import { CLIENT_ROUTES, type AppRoute } from "@/routes";

function RouteFallback() {
  return <div className="min-h-[60vh] bg-brand-ink" />;
}

interface AppRoutesProps {
  routes?: AppRoute[];
}

/** Router-agnostic app body: BrowserRouter on the client, StaticRouter when prerendering. */
export function AppRoutes({ routes = CLIENT_ROUTES }: AppRoutesProps) {
  return (
    <>
      <ScrollToTop />
      <AnalyticsTracker />
      <MainLayout>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Routes>
        </Suspense>
      </MainLayout>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
