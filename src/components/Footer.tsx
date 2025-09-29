import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-earth-brown text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-sunset rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">A</span>
              </div>
              <span className="font-bold text-xl text-primary-foreground">Afrik</span>
              <span className="font-bold text-xl text-secondary">Store</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Authentic African crafts and cultural treasures. Supporting artisans and preserving traditions one beautiful piece at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors hover-scale">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors hover-scale">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors hover-scale">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-primary-foreground">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: "Shop All", path: "/shop" },
                { name: "Blog", path: "/blog" },
                { name: "Events", path: "/events" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-primary-foreground/80 hover:text-secondary transition-colors hover:translate-x-1 transform duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-primary-foreground">Categories</h3>
            <div className="space-y-2">
              {[
                { name: "Textiles", path: "/shop?category=textiles" },
                { name: "Sculptures", path: "/shop?category=sculptures" },
                { name: "Jewelry", path: "/shop?category=jewelry" },
                { name: "Pottery", path: "/shop?category=pottery" },
              ].map((category) => (
                <Link
                  key={category.name}
                  to={category.path}
                  className="block text-primary-foreground/80 hover:text-secondary transition-colors hover:translate-x-1 transform duration-200"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-primary-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-secondary" />
                <span className="text-primary-foreground/80">hello@afrikstore.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-primary-foreground/80">Cultural District, Arts Quarter</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 AfrikStore. All rights reserved. Made with ❤️ for African culture.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/shipping" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
              Shipping Info
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;