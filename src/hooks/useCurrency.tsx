
import { createContext, useContext, useState, ReactNode } from 'react';

type Currency = 'EUR' | 'CHF' | 'GBP' | 'USD';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (price: number) => string;
}

const currencySymbols: Record<Currency, string> = {
  EUR: '€',
  CHF: 'CHF',
  GBP: '£',
  USD: '$'
};

const exchangeRates: Record<Currency, number> = {
  EUR: 1,
  CHF: 0.95,
  GBP: 1.15,
  USD: 1.08
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>('EUR');

  const formatPrice = (price: number): string => {
    const convertedPrice = price * exchangeRates[currency];
    const symbol = currencySymbols[currency];
    
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      currencyDisplay: 'symbol'
    }).format(convertedPrice).replace(/[A-Z]{3}/, symbol);
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
