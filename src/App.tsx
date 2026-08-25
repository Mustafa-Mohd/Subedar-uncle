import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import Story from "./pages/Story";
import ServiceDetail from "./pages/ServiceDetail";
import ScrollToTopOnNavigate from "./components/ScrollToTopOnNavigate";
import ContactPopup from "./components/ContactPopup";

import { ThemeProvider } from "./components/ThemeProvider";
import { ReactLenis } from 'lenis/react';

const queryClient = new QueryClient();

const App = () => (
  <ReactLenis root>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="nexlane-theme">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTopOnNavigate />
            <ContactPopup />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/service/:id" element={<ServiceDetail />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/story" element={<Story />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </ReactLenis>
);

export default App;
