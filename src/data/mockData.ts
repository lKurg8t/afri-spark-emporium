import { Product, Category, BlogPost, Event, ShippingOption } from "@/types/product";

// Import generated images
import textileImage from "@/assets/product-textile.jpg";
import sculptureImage from "@/assets/product-sculpture.jpg";
import jewelryImage from "@/assets/product-jewelry.jpg";
import potteryImage from "@/assets/product-pottery.jpg";
import festivalImage from "@/assets/event-festival.jpg";
import workshopImage from "@/assets/event-workshop.jpg";
import marketImage from "@/assets/blog-market.jpg";
import artisanImage from "@/assets/blog-artisan.jpg";

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Handwoven Kente Textile",
    description: "Beautiful traditional Kente cloth with intricate geometric patterns in vibrant colors. Each piece tells a story through its unique design and represents centuries of African craftsmanship.",
    price: 89.99,
    image: textileImage,
    category: "Textiles",
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 24,
  },
  {
    id: "2",
    name: "Carved Wooden Elephant",
    description: "Exquisite hand-carved elephant sculpture made from sustainable dark wood. This masterpiece showcases the incredible skill of African artisans and brings the majesty of the savanna to your home.",
    price: 129.99,
    image: sculptureImage,
    category: "Sculptures",
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 18,
  },
  {
    id: "3",
    name: "Beaded Jewelry Set",
    description: "Stunning traditional beaded jewelry set including necklace and earrings. Made with authentic African beads in warm earth tones that complement any outfit with cultural elegance.",
    price: 45.99,
    image: jewelryImage,
    category: "Jewelry",
    inStock: true,
    featured: false,
    rating: 4.7,
    reviews: 31,
  },
  {
    id: "4",
    name: "Traditional Clay Pottery",
    description: "Authentic handcrafted pottery vase with traditional geometric patterns. Made using ancient techniques passed down through generations, perfect for displaying flowers or as decorative art.",
    price: 67.99,
    image: potteryImage,
    category: "Pottery",
    inStock: true,
    featured: true,
    rating: 4.6,
    reviews: 15,
  },
  {
    id: "5",
    name: "Ankara Print Fabric",
    description: "Vibrant Ankara wax print fabric with bold patterns and rich colors. Perfect for creating custom clothing, home decor, or craft projects. Sold per yard.",
    price: 24.99,
    image: textileImage,
    category: "Textiles",
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 42,
  },
  {
    id: "6",
    name: "Wooden Mask Collection",
    description: "Set of three authentic ceremonial masks representing different tribal traditions. Each mask is hand-carved with intricate details and tells a unique cultural story.",
    price: 199.99,
    image: sculptureImage,
    category: "Sculptures",
    inStock: false,
    featured: false,
    rating: 5.0,
    reviews: 8,
  },
];

export const mockCategories: Category[] = [
  {
    id: "textiles",
    name: "Textiles",
    description: "Beautiful handwoven fabrics and traditional textiles",
    image: textileImage,
  },
  {
    id: "sculptures",
    name: "Sculptures",
    description: "Hand-carved wooden sculptures and ceremonial items",
    image: sculptureImage,
  },
  {
    id: "jewelry",
    name: "Jewelry",
    description: "Traditional beaded jewelry and accessories",
    image: jewelryImage,
  },
  {
    id: "pottery",
    name: "Pottery",
    description: "Authentic clay pottery and ceramic art",
    image: potteryImage,
  },
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Art of African Markets: Where Culture Meets Commerce",
    excerpt: "Explore the vibrant world of African markets, where centuries-old traditions blend seamlessly with modern commerce, creating unique cultural experiences.",
    content: "African markets are more than just places of trade; they are the heartbeat of communities, where stories are shared, relationships are built, and cultural heritage is preserved...",
    image: marketImage,
    author: "Amara Johnson",
    publishedAt: "2024-01-15",
    category: "Culture",
  },
  {
    id: "2",
    title: "Master Craftsmen: The Artisans Behind African Beadwork",
    excerpt: "Meet the skilled artisans who create intricate beadwork patterns, each telling a story through color, design, and technique passed down through generations.",
    content: "Behind every piece of African beadwork lies hours of meticulous craftsmanship and generations of inherited knowledge. These master artisans...",
    image: artisanImage,
    author: "Kofi Asante",
    publishedAt: "2024-01-10",
    category: "Craftsmanship",
  },
  {
    id: "3",
    title: "Sustainable Fashion: The Future of African Textiles",
    excerpt: "Discover how African textile traditions are leading the way in sustainable fashion, combining ancient techniques with modern environmental consciousness.",
    content: "As the world becomes more conscious of environmental impact, African textile traditions offer valuable insights into sustainable production methods...",
    image: textileImage,
    author: "Fatima Okonkwo",
    publishedAt: "2024-01-05",
    category: "Sustainability",
  },
];

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "African Cultural Festival 2024",
    description: "Join us for a vibrant celebration of African culture featuring traditional music, dance, art exhibitions, and authentic cuisine. Experience the rich diversity of African traditions in one spectacular event.",
    image: festivalImage,
    date: "2024-03-15",
    location: "Cultural Center Plaza",
    price: 25,
    isUpcoming: true,
  },
  {
    id: "2",
    title: "Traditional Pottery Workshop",
    description: "Learn the ancient art of African pottery making with master craftsmen. Hands-on workshop where you'll create your own piece using traditional techniques and tools.",
    image: workshopImage,
    date: "2024-02-28",
    location: "Artisan Studio",
    price: 45,
    isUpcoming: true,
  },
  {
    id: "3",
    title: "Beadwork Masterclass",
    description: "Discover the intricate art of African beadwork in this comprehensive masterclass. Learn traditional patterns and create your own jewelry piece to take home.",
    image: jewelryImage,
    date: "2024-01-20",
    location: "Community Arts Center",
    price: 35,
    isUpcoming: false,
  },
];

export const mockShippingOptions: ShippingOption[] = [
  {
    id: "standard",
    name: "Standard Shipping",
    price: 9.99,
    estimatedDays: "5-7 business days",
  },
  {
    id: "express",
    name: "Express Shipping",
    price: 19.99,
    estimatedDays: "2-3 business days",
  },
  {
    id: "overnight",
    name: "Overnight Shipping",
    price: 29.99,
    estimatedDays: "1 business day",
  },
];