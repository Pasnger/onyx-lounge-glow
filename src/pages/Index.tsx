import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Lounge from "@/components/Lounge";
import Gallery from "@/components/Gallery";

// Lazy load below-the-fold components
const Services = lazy(() => import("@/components/Services"));
const Reviews = lazy(() => import("@/components/Reviews"));
const Location = lazy(() => import("@/components/Location"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Lounge />
      <Gallery />
      <Suspense fallback={<div className="h-96" />}>
        <Services />
        <Reviews />
        <Location />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
