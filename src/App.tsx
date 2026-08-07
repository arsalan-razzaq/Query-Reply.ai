import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { AnalyticsTracker } from "@/components/layout/AnalyticsTracker";
import Home from "@/pages/Home";

const PricingPage = lazy(() => import("@/pages/Pricing"));
const RefundPolicy = lazy(() => import("@/pages/RefundPolicy"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));
const SupportCenter = lazy(() => import("@/pages/SupportCenter"));
const Documentation = lazy(() => import("@/pages/Documentation"));
const Blog = lazy(() => import("@/pages/Blog"));

function RouteFallback() {
  return <div className="min-h-[60vh] bg-brand-ink" />;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnalyticsTracker />
      <MainLayout>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/support" element={<SupportCenter />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
