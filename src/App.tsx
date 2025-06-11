import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ImmobilienPortfolio from './pages/ImmobilienPortfolio';
import Immobilienverkauf from './pages/Immobilienverkauf';
import Vermietung from './pages/Vermietung';
import Immobilienbewertung from './pages/Immobilienbewertung';
import Einkauf from './pages/Einkauf';
import DiscreteSale from './pages/DiscreteSale';
import Provision from './pages/Provision';
import UeberKarimImmobilien from './pages/UeberKarimImmobilien';
import Kontakt from './pages/Kontakt';
import ImmobilienDetail from './pages/ImmobilienDetail';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/startseite" element={<Index />} />
          <Route path="/immobilien-portfolio" element={<ImmobilienPortfolio />} />
          <Route path="/immobilienverkauf" element={<Immobilienverkauf />} />
          <Route path="/vermietung" element={<Vermietung />} />
          <Route path="/immobilienbewertung" element={<Immobilienbewertung />} />
          <Route path="/einkauf" element={<Einkauf />} />
          <Route path="/discrete-sale" element={<DiscreteSale />} />
          <Route path="/provision" element={<Provision />} />
          <Route path="/ueber-karim-immobilien" element={<UeberKarimImmobilien />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/immobilien/:id" element={<ImmobilienDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
