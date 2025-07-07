
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/hooks/useLanguage';
import { useCurrency } from '@/hooks/useCurrency';

const ProductShowcase = () => {
  const { t } = useLanguage();
  const { formatPrice } = useCurrency();

  const products = [
    {
      id: 1,
      name: 'Precision Tweezers Set',
      code: 'DU-TW-001',
      price: 89.99,
      image: '/placeholder.svg',
      category: 'Tweezers',
      inStock: true
    },
    {
      id: 2,
      name: 'Professional Pliers Kit',
      code: 'DU-PL-045',
      price: 156.50,
      image: '/placeholder.svg',
      category: 'Pliers',
      inStock: true
    },
    {
      id: 3,
      name: 'Micro Cutting Tools',
      code: 'DU-CT-023',
      price: 234.75,
      image: '/placeholder.svg',
      category: 'Cutting Tools',
      inStock: false
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('featuredProducts')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('featuredProductsSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-shadow">
              <CardHeader className="p-0">
                <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary">{product.category}</Badge>
                  <Badge variant={product.inStock ? "default" : "destructive"}>
                    {product.inStock ? t('inStock') : t('outOfStock')}
                  </Badge>
                </div>
                <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                <p className="text-gray-600 text-sm mb-4">Code: {product.code}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">
                    {formatPrice(product.price)}
                  </span>
                  <Button size="sm" disabled={!product.inStock}>
                    {t('addToCart')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            {t('viewAllProducts')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
