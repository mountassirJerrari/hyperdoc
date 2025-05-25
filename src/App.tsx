import { Switch, Route, useLocation, useRoute } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Journey from "@/pages/Journey";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Hobbies from "@/pages/Hobbies";
import Contact from "@/pages/Contact";
import Certifications from "@/pages/Certifications";
import StarBackground from "@/components/StarBackground";
import BackButton from "@/components/ui/BackButton";

function Router() {
  const [location] = useLocation();
  const [isHomeRoute] = useRoute("/");
  
  return (
    <>
      <StarBackground />
      {!isHomeRoute && <BackButton />}
      
      <AnimatePresence mode="wait">
        <Switch key={location}>
          <Route path="/" component={Home} />
          <Route path="/journey" component={Journey} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/hobbies" component={Hobbies} />
          <Route path="/certifications" component={Certifications} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
