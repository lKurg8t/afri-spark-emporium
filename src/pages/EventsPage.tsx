import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { mockEvents } from "@/data/mockData";
import { Link } from "react-router-dom";

const EventsPage = () => {
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");

  const filteredEvents = mockEvents.filter(event => {
    switch (filter) {
      case "upcoming":
        return event.isUpcoming;
      case "past":
        return !event.isUpcoming;
      default:
        return true;
    }
  });

  const upcomingCount = mockEvents.filter(e => e.isUpcoming).length;
  const pastCount = mockEvents.filter(e => !e.isUpcoming).length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-earth-sand/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h1 className="text-4xl font-bold text-primary mb-4">Cultural Events</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us for immersive cultural experiences, workshops, and celebrations that bring 
            African traditions to life. Learn, create, and connect with our community.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8 animate-fadeInUp">
          <div className="bg-card rounded-lg p-1 border">
            <Button
              variant={filter === "all" ? "default" : "ghost"}
              onClick={() => setFilter("all")}
              className="h-10"
            >
              All Events ({mockEvents.length})
            </Button>
            <Button
              variant={filter === "upcoming" ? "default" : "ghost"}
              onClick={() => setFilter("upcoming")}
              className="h-10"
            >
              Upcoming ({upcomingCount})
            </Button>
            <Button
              variant={filter === "past" ? "default" : "ghost"}
              onClick={() => setFilter("past")}
              className="h-10"
            >
              Past Events ({pastCount})
            </Button>
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <Card key={event.id} className={`hover-lift group animate-fadeInUp overflow-hidden`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-video overflow-hidden relative">
                  {event.isUpcoming && (
                    <Badge className="absolute top-3 left-3 z-10 bg-accent animate-pulse-glow">
                      Upcoming
                    </Badge>
                  )}
                  {!event.isUpcoming && (
                    <Badge className="absolute top-3 left-3 z-10 bg-muted text-muted-foreground">
                      Past Event
                    </Badge>
                  )}
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="font-bold text-xl line-clamp-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    
                    <p className="text-muted-foreground line-clamp-3">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        {new Date(event.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        {event.location}
                      </div>
                      
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        7:00 PM - 9:30 PM
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center">
                        <span className="text-2xl font-bold text-primary">
                          ${event.price}
                        </span>
                        <span className="text-sm text-muted-foreground ml-1">per person</span>
                      </div>
                      
                      {event.isUpcoming ? (
                        <Button asChild variant="vibrant" className="hover-scale">
                          <Link to={`/events/${event.id}`}>
                            Register Now
                          </Link>
                        </Button>
                      ) : (
                        <Button asChild variant="outline">
                          <Link to={`/events/${event.id}`}>
                            View Details
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 animate-fadeInUp">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-muted-foreground mb-2">No events found</h3>
            <p className="text-muted-foreground">
              Check back later for upcoming cultural events and workshops
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fadeInUp">
          <Card className="max-w-3xl mx-auto bg-gradient-vibrant text-primary-foreground overflow-hidden">
            <CardContent className="p-8 relative">
              <div className="pattern-geometric absolute inset-0 opacity-10"></div>
              <div className="relative z-10">
                <Users className="h-12 w-12 mx-auto mb-4 animate-bounce-gentle" />
                <h3 className="text-2xl font-bold mb-4">Host Your Own Event</h3>
                <p className="mb-6 text-primary-foreground/90 max-w-2xl mx-auto">
                  Interested in hosting a cultural workshop or organizing a community event? 
                  We'd love to partner with you to celebrate African heritage together.
                </p>
                <Button variant="secondary" size="lg" className="hover-scale">
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;