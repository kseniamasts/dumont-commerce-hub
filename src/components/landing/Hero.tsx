
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero = ({ onGetStarted }: HeroProps) => {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t('heroTitle')}
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={onGetStarted}
                className="text-primary hover:text-primary/80"
              >
                {t('getStarted')}
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                {t('browseProducts')}
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white/80">{t('totalProducts')}</span>
                  <span className="text-2xl font-bold">2000+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">{t('countries')}</span>
                  <span className="text-2xl font-bold">25+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">{t('languages')}</span>
                  <span className="text-2xl font-bold">6</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">{t('currencies')}</span>
                  <span className="text-2xl font-bold">4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
