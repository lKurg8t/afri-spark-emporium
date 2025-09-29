import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Star, ShoppingCart, Calendar, BookOpen } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { mockProducts, mockBlogPosts, mockEvents } from "@/data/mockData";
import heroImage from "@/assets/hero-sunset.jpg";

const HomePage = () => {
  const { addItem } = useCart();
  
  const featuredProducts = mockProducts.filter(product => product.featured);
  const latestPosts = mockBlogPosts.slice(0, 2);
  const upcomingEvents = mockEvents.filter(event => event.isUpcoming).slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[90vh] flex items-center justify-center text-center bg-cover bg-center pattern-geometric"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroImage})` }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Discover
              <span className="block text-secondary animate-bounce-gentle">African</span>
              <span className="text-accent">Treasures</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Authentic handcrafted goods from master artisans across Africa. 
              Each piece tells a story of tradition, culture, and incredible craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl" className="animate-pulse-glow">
                <Link to="/shop">
                  Explore Collection <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/about">
                  Our Story
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gradient-to-b from-background to-earth-sand/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-primary mb-4">Featured Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked collection of authentic African crafts, each piece carefully selected for its quality and cultural significance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <Card key={product.id} className={`hover-lift group animate-fadeInUp`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {product.category}
                    </Badge>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-secondary text-secondary" />
                      <span className="text-sm text-muted-foreground ml-1">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    <Button 
                      size="sm" 
                      onClick={() => addItem(product)}
                      className="hover-scale"
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="vibrant" size="lg">
              <Link to="/shop">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 pattern-tribal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-primary mb-4">Shop by Category</h2>
            <p className="text-lg text-muted-foreground">
              Explore our diverse collection organized by traditional craft categories
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {['Textiles', 'Sculptures', 'Jewelry', 'Pottery'].map((category, index) => (
              <Link
                key={category}
                to={`/shop?category=${category.toLowerCase()}`}
                className={`group hover-lift animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card rounded-lg p-6 text-center shadow-warm hover:shadow-glow">
                  <div className="w-16 h-16 bg-gradient-sunset rounded-full mx-auto mb-4 flex items-center justify-center group-hover:animate-bounce-gentle">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {category[0]}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg text-primary group-hover:text-secondary transition-colors">
                    {category}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 bg-gradient-to-b from-earth-sand/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-primary mb-4">Latest Stories</h2>
            <p className="text-lg text-muted-foreground">
              Discover the rich culture and traditions behind our beautiful crafts
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {latestPosts.map((post, index) => (
              <Card key={post.id} className={`hover-lift group animate-slideInLeft`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <BookOpen className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm text-muted-foreground">{post.category}</span>
                    <span className="mx-2 text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{post.publishedAt}</span>
                  </div>
                  <h3 className="font-semibold text-xl mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <Button asChild variant="ghost" className="p-0 h-auto font-semibold text-primary hover:text-secondary">
                    <Link to={`/blog/${post.id}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="earth" size="lg">
              <Link to="/blog">
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 pattern-geometric">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-primary mb-4">Upcoming Events</h2>
            <p className="text-lg text-muted-foreground">
              Join us for cultural celebrations and hands-on workshops
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={event.id} className={`hover-lift group animate-slideInRight`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm text-muted-foreground">{event.date}</span>
                    <span className="mx-2 text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{event.location}</span>
                  </div>
                  <h3 className="font-semibold text-xl mb-3">{event.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">${event.price}</span>
                    <Button asChild variant="vibrant" size="sm">
                      <Link to={`/events/${event.id}`}>
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="secondary" size="lg">
              <Link to="/events">
                View All Events <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;