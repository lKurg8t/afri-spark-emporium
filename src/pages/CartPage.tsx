import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { mockShippingOptions } from "@/data/mockData";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const CartPage = () => {
  const { items, updateQuantity, removeItem, getTotalPrice } = useCart();
  const [selectedShipping, setSelectedShipping] = useState(mockShippingOptions[0].id);
  const [promoCode, setPromoCode] = useState("");

  const selectedShippingOption = mockShippingOptions.find(option => option.id === selectedShipping);
  const subtotal = getTotalPrice();
  const shippingCost = selectedShippingOption?.price || 0;
  const total = subtotal + shippingCost;

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handlePromoCode = () => {
    if (promoCode.toLowerCase() === "welcome10") {
      toast.success("Promo code applied! 10% discount");
    } else {
      toast.error("Invalid promo code");
    }
  };

  const handleCheckout = () => {
    toast.success("Checkout simulation - Order placed successfully!", {
      description: `Total: $${total.toFixed(2)} - This is a demo checkout.`,
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-earth-sand/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center animate-fadeInUp">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-primary mb-4">Your cart is empty</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discover our beautiful collection of authentic African crafts
            </p>
            <Button asChild variant="vibrant" size="lg">
              <Link to="/shop">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-earth-sand/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 animate-fadeInUp">
          <h1 className="text-3xl font-bold text-primary mb-2">Shopping Cart</h1>
          <p className="text-muted-foreground">
            Review your items and proceed to checkout
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <Card key={item.product.id} className={`hover-lift animate-slideInLeft`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-24 h-24 flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <h3 className="font-semibold text-lg">{item.product.name}</h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {item.product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-primary">
                          ${item.product.price}
                        </span>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="destructive"
                            size="icon"
                            className="h-8 w-8 ml-4"
                            onClick={() => removeItem(item.product.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Shipping Options */}
            <Card className="animate-slideInRight">
              <CardHeader>
                <CardTitle>Shipping Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Select value={selectedShipping} onValueChange={setSelectedShipping}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {mockShippingOptions.map(option => (
                      <SelectItem key={option.id} value={option.id}>
                        <div className="flex justify-between w-full">
                          <span>{option.name}</span>
                          <span className="ml-4">${option.price}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">
                  Estimated delivery: {selectedShippingOption?.estimatedDays}
                </p>
              </CardContent>
            </Card>

            {/* Promo Code */}
            <Card className="animate-slideInRight" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle>Promo Code</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <Button variant="outline" onClick={handlePromoCode}>
                    Apply
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Try "WELCOME10" for a 10% discount
                </p>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card className="animate-slideInRight" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shippingCost.toFixed(2)}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>
                <Button 
                  className="w-full" 
                  variant="vibrant" 
                  size="lg"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/shop">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Continue Shopping
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;