
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/landing/Hero';
import FeaturesSection from '@/components/landing/FeaturesSection';
import ProductShowcase from '@/components/landing/ProductShowcase';
import Footer from '@/components/layout/Footer';
import AuthModal from '@/components/auth/AuthModal';
import { useAuth } from '@/hooks/useAuth';

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Header onAuthClick={() => setIsAuthModalOpen(true)} />
      <main>
        <Hero onGetStarted={() => setIsAuthModalOpen(true)} />
        <FeaturesSection />
        <ProductShowcase />
      </main>
      <Footer />
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
