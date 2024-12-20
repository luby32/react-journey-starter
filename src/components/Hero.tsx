import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="gradient-bg min-h-screen pt-16 flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to Your Next Project
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Build something amazing with modern web technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;