import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Globe, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-sunset.jpg";
import artisanImage from "@/assets/blog-artisan.jpg";

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Authentic Craftsmanship",
      description: "Every piece is handcrafted by skilled artisans using traditional techniques passed down through generations."
    },
    {
      icon: Users,
      title: "Community Support",
      description: "We work directly with artisan communities, ensuring fair wages and sustainable livelihoods."
    },
    {
      icon: Globe,
      title: "Cultural Preservation",
      description: "By sharing these beautiful crafts, we help preserve and celebrate African cultural heritage."
    },
    {
      icon: Award,
      title: "Quality Promise",
      description: "Each item is carefully selected for its quality, authenticity, and cultural significance."
    }
  ];

  const stats = [
    { number: "500+", label: "Artisan Partners" },
    { number: "15", label: "African Countries" },
    { number: "10,000+", label: "Happy Customers" },
    { number: "3", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage})` }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Connecting authentic African craftsmanship with the world, 
              one beautiful piece at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <Badge variant="secondary" className="mb-4">Our Mission</Badge>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Preserving Heritage Through Commerce
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                AfrikStore was born from a passion for African culture and a desire to create 
                meaningful connections between talented artisans and art lovers worldwide. 
                We believe that every handcrafted piece tells a story - of tradition, skill, 
                and cultural pride.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our platform not only showcases the incredible diversity of African craftsmanship 
                but also ensures that artisans receive fair compensation for their work, 
                helping to sustain their communities and preserve ancient techniques.
              </p>
              <Button asChild variant="vibrant" size="lg">
                <Link to="/shop">
                  Explore Our Collection <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="animate-slideInRight">
              <img 
                src={artisanImage} 
                alt="African artisan at work"
                className="rounded-lg shadow-warm w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-b from-earth-sand/20 to-background pattern-geometric">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do, from selecting artisan partners 
              to delivering exceptional customer experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className={`hover-lift text-center animate-fadeInUp`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-gentle">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg text-primary mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-vibrant text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Together, we're making a difference in artisan communities across Africa
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center animate-fadeInUp`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold mb-2 animate-pulse-glow">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-primary mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate group of individuals dedicated to celebrating African culture 
              and supporting artisan communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Amara Johnson", role: "Founder & CEO", description: "Cultural enthusiast with 10+ years in fair trade" },
              { name: "Kofi Asante", role: "Artisan Relations", description: "Native Ghanaian connecting traditional and modern markets" },
              { name: "Fatima Okonkwo", role: "Head of Curation", description: "Art historian specializing in African craftsmanship" }
            ].map((member, index) => (
              <Card key={index} className={`hover-lift text-center animate-fadeInUp`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-earth rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg text-primary mb-1">{member.name}</h3>
                  <p className="text-secondary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 pattern-tribal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-sunset text-primary-foreground text-center animate-fadeInUp">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Be part of a movement that celebrates African heritage while supporting 
                artisan communities. Every purchase makes a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="secondary" size="lg" className="hover-scale">
                  <Link to="/shop">
                    Start Shopping
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/events">
                    Attend an Event
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;