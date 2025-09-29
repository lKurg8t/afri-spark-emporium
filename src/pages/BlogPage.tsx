import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Calendar, User, ArrowRight, Search } from "lucide-react";
import { mockBlogPosts } from "@/data/mockData";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = mockBlogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = Array.from(new Set(mockBlogPosts.map(post => post.category)));

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-earth-sand/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h1 className="text-4xl font-bold text-primary mb-4">Cultural Stories</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the rich traditions, stories, and heritage behind African crafts and culture.
            Learn about the artisans and their incredible techniques.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8 animate-fadeInUp">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex justify-center mb-8 animate-fadeInUp">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              All Posts
            </Badge>
            {categories.map(category => (
              <Badge key={category} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card key={post.id} className={`hover-lift group animate-fadeInUp`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <h2 className="font-bold text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <Button asChild variant="ghost" className="p-0 h-auto font-semibold text-primary hover:text-secondary">
                      <Link to={`/blog/${post.id}`}>
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 animate-fadeInUp">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-muted-foreground mb-2">No articles found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms
            </p>
            <Button 
              onClick={() => setSearchTerm("")}
              variant="outline"
            >
              Clear Search
            </Button>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 text-center animate-fadeInUp">
          <Card className="max-w-2xl mx-auto bg-gradient-sunset text-primary-foreground">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
              <p className="mb-6 text-primary-foreground/90">
                Subscribe to our newsletter for the latest stories about African culture and new product arrivals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/70"
                />
                <Button variant="secondary" className="hover-scale">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;