
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/hooks/useLanguage';
import { useCurrency } from '@/hooks/useCurrency';
import { ShoppingCart, Eye, Heart, Star } from 'lucide-react';

const ProductShowcase = () => {
  const { t } = useLanguage();
  const { formatPrice } = useCurrency();

  const products = [
    {
      id: 1,
      name: 'Precision Tweezers Set',
      code: 'DU-TW-001',
      price: 89.99,
      originalPrice: 129.99,
      image: '/placeholder.svg',
      category: 'Tweezers',
      inStock: true,
      rating: 4.9,
      reviews: 127,
      isNew: true
    },
    {
      id: 2,
      name: 'Professional Pliers Kit',
      code: 'DU-PL-045',
      price: 156.50,
      originalPrice: 199.99,
      image: '/placeholder.svg',
      category: 'Pliers',
      inStock: true,
      rating: 4.8,
      reviews: 89,
      isNew: false
    },
    {
      id: 3,
      name: 'Micro Cutting Tools',
      code: 'DU-CT-023',
      price: 234.75,
      originalPrice: 289.99,
      image: '/placeholder.svg',
      category: 'Cutting Tools',
      inStock: false,
      rating: 4.7,
      reviews: 203,
      isNew: false
    }
  ];

  const handleProductClick = (product: any) => {
    console.log('Product clicked:', product.name);
  };

  const handleAddToCart = (product: any, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Added to cart:', product.name);
  };

  const handleQuickView = (product: any, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Quick view:', product.name);
  };

  const handleWishlist = (product: any, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Added to wishlist:', product.name);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 text-primary font-medium mb-6">
            Featured Collection
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
            {t('featuredProducts')}
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('featuredProductsSubtitle')} Discover our premium selection of professional-grade tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <CardHeader className="p-0 relative">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-2xl overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      <Button 
                        size="sm" 
                        variant="secondary"
                        className="rounded-full shadow-lg backdrop-blur-sm bg-white/90"
                        onClick={(e) => handleQuickView(product, e)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      
                      <Button 
                        size="sm" 
                        variant="secondary"
                        className="rounded-full shadow-lg backdrop-blur-sm bg-white/90"
                        onClick={(e) => handleWishlist(product, e)}
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    <Badge variant="secondary" className="bg-white/90 text-gray-700 font-medium">
                      {product.category}
                    </Badge>
                    {product.isNew && (
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                        New
                      </Badge>
                    )}
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <Badge variant={product.inStock ? "default" : "destructive"} className="shadow-lg">
                      {product.inStock ? t('inStock') : t('outOfStock')}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>
                
                <p className="text-gray-600 text-sm font-mono">
                  Code: {product.code}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-primary">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                    
                    {product.originalPrice && (
                      <div className="text-xs text-green-600 font-medium">
                        Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                      </div>
                    )}
                  </div>
                  
                  <Button 
                    size="sm" 
                    disabled={!product.inStock}
                    className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 disabled:from-gray-300 disabled:to-gray-300 transition-all duration-300 hover:scale-105 shadow-lg"
                    onClick={(e) => handleAddToCart(product, e)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {t('addToCart')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-6">
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {t('viewAllProducts')}
          </Button>
          
          <p className="text-gray-600">
            Over 2000+ professional tools available in our catalog
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
