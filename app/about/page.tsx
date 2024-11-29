// app/about/page.tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Heart, Users, Shield, Mail } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About Us - Sustainable Brands India",
  description: "Learn more about our mission to promote sustainable and eco-friendly brands in India",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary/5 border-b">
        <div className="container mx-auto py-16 px-4 sm:py-24">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              About Us
            </h1>
            <p className="mx-auto max-w-3xl text-muted-foreground text-lg sm:text-xl">
              Discover the story behind Sustainable Brands India and our mission to promote 
              eco-friendly and sustainable businesses across the country.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Mission & Vision */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-muted-foreground text-center">
              At Sustainable Brands India, we're committed to bridging the gap between 
              conscious consumers and eco-friendly businesses. Our platform showcases 
              brands that prioritize sustainability, ethical practices, and environmental 
              responsibility, making it easier for consumers to make informed choices 
              that benefit our planet.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Leaf,
                title: "Sustainability",
                description: "We promote brands that prioritize environmental sustainability in their practices."
              },
              {
                icon: Heart,
                title: "Community",
                description: "Building a community of conscious consumers and responsible businesses."
              },
              {
                icon: Users,
                title: "Transparency",
                description: "Ensuring clear and honest information about sustainable practices."
              },
              {
                icon: Shield,
                title: "Trust",
                description: "Building trust through verified sustainable brand partnerships."
              }
            ].map((value, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <value.icon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Impact Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Sustainable Brands</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Monthly Visitors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5</div>
              <div className="text-muted-foreground">Categories</div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="max-w-2xl mx-auto text-center">
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              Are you a sustainable brand looking to reach conscious consumers? 
              Partner with us to showcase your commitment to sustainability.
            </p>
            <Button asChild>
              <Link href="mailto:connect@sustainablebrands.in">
                Contact Us
                <Mail className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Card>
        </section>
      </div>
    </div>
  );
}