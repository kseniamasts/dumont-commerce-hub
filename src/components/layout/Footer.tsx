
import { useLanguage } from '@/hooks/useLanguage';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">DUMONT</h3>
            <p className="text-gray-400 mb-4">
              {t('footerDescription')}
            </p>
            <div className="text-sm text-gray-400">
              <p>Manufactures d'Outils DUMONT SA</p>
              <p>Rue Théodore Dumont 1</p>
              <p>2924 Montignez - Switzerland</p>
              <p className="mt-2">Phone: +41 32 475 21 21</p>
              <p>Email: info@dumont.swiss</p>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('products')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">{t('tweezers')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('pliers')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('cuttingTools')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('configurator')}</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('support')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">{t('documentation')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('technicalSupport')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('warranty')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('returns')}</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('legal')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">{t('privacyPolicy')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('termsOfService')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('gdprCompliance')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('cookiePolicy')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Manufactures d'Outils DUMONT SA. {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
