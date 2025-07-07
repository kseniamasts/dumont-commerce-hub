
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, ShoppingCart, User, Menu, X, Bell, Globe } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useCart } from '@/hooks/useCart';
import { useLanguage } from '@/hooks/useLanguage';
import { useCurrency } from '@/hooks/useCurrency';

interface HeaderProps {
  onAuthClick: () => void;
}

const Header = ({ onAuthClick }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const { itemCount } = useCart();
  const { language, setLanguage, t } = useLanguage();
  const { currency, setCurrency } = useCurrency();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'jp', name: '日本語', flag: '🇯🇵' }
  ];

  const currencies = [
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'CHF', symbol: 'CHF', name: 'Swiss Franc' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'USD', symbol: '$', name: 'US Dollar' }
  ];

  const handleSearch = () => {
    console.log('Search clicked');
  };

  const handleNotifications = () => {
    console.log('Notifications clicked');
  };

  return (
    <header className="bg-white/95 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
      {/* Top bar with enhanced styling */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center text-sm">
            <div className="text-gray-300 flex items-center space-x-4">
              <span className="flex items-center">
                <Globe className="h-4 w-4 mr-2" />
                {t('welcomeMessage')}
              </span>
              <span className="text-white/60">|</span>
              <span className="text-white font-medium">Phone: +41 32 475 21 21</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-32 h-9 bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200">
                  {languages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code} className="hover:bg-gray-50">
                      <span className="flex items-center">
                        <span className="mr-2">{lang.flag}</span>
                        {lang.name}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={currency} onValueChange={setCurrency}>
                <SelectTrigger className="w-28 h-9 bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200">
                  {currencies.map((curr) => (
                    <SelectItem key={curr.code} value={curr.code} className="hover:bg-gray-50">
                      <span className="flex items-center">
                        <span className="font-mono mr-2">{curr.symbol}</span>
                        {curr.name}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Main header with premium styling */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="flex items-center cursor-pointer group">
            <div className="bg-gradient-to-br from-primary to-primary/80 p-3 rounded-xl mr-4 group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                DUMONT
              </h1>
              <span className="text-sm text-gray-600 hidden md:block font-medium">
                Professional Tools & Equipment
              </span>
            </div>
          </div>

          {/* Enhanced Search bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-gray-50/50 hover:bg-white focus:bg-white text-lg"
                onFocus={handleSearch}
              />
              <Button 
                size="sm" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/90 rounded-lg"
                onClick={handleSearch}
              >
                Search
              </Button>
            </div>
          </div>

          {/* Enhanced Actions */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative hover:bg-gray-100 rounded-xl transition-colors"
              onClick={handleNotifications}
            >
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-red-500">
                3
              </Badge>
            </Button>

            {/* Enhanced Cart */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative hover:bg-gray-100 rounded-xl transition-colors group"
            >
              <ShoppingCart className="h-5 w-5 group-hover:scale-110 transition-transform" />
              {itemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center text-xs bg-gradient-to-r from-primary to-primary/80 shadow-lg">
                  {itemCount}
                </Badge>
              )}
            </Button>

            {/* Enhanced User account */}
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 bg-gray-50 rounded-xl px-4 py-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <span className="hidden md:inline font-medium text-gray-700">{user.name}</span>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={logout}
                  className="hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-colors rounded-xl"
                >
                  {t('logout')}
                </Button>
              </div>
            ) : (
              <Button 
                onClick={onAuthClick} 
                size="sm"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 rounded-xl px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {t('login')}
              </Button>
            )}

            {/* Mobile menu toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden hover:bg-gray-100 rounded-xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder={t('searchPlaceholder')}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50"
              onFocus={handleSearch}
            />
          </div>
        </div>
      </div>

      {/* Enhanced Navigation */}
      <nav className={`bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg ${isMobileMenuOpen ? 'block' : 'hidden md:block'}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-1 py-1">
            {[
              { key: 'products', label: t('products') },
              { key: 'configurator', label: t('configurator') },
              { key: 'industries', label: t('industries') },
              { key: 'support', label: t('support') },
              { key: 'about', label: t('about') }
            ].map((item) => (
              <a 
                key={item.key}
                href="#" 
                className="py-3 px-6 hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-105 font-medium"
                onClick={() => console.log(`${item.key} clicked`)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
