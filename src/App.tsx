import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { AnalyticsTracker } from "@/components/layout/AnalyticsTracker";
import Home from "@/pages/Home";
import PricingPage from "@/pages/Pricing";
import RefundPolicy from "@/pages/RefundPolicy";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import SupportCenter from "@/pages/SupportCenter";
import Documentation from "@/pages/Documentation";
import Blog from "@/pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnalyticsTracker />
      <MainLayout>
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
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
