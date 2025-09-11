import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Target,
  Heart,
  Award,
  Globe,
  ShoppingBag,
  Shield,
  Star,
  Calendar,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export default function AboutUsPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description:
        "Visionary leader with 15+ years in e-commerce and retail innovation.",
      image: "SJ",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      description:
        "Tech expert specializing in scalable platforms and user experience.",
      image: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Operations",
      description:
        "Operations specialist ensuring smooth delivery and customer satisfaction.",
      image: "ER",
    },
    {
      name: "David Kim",
      role: "Marketing Director",
      description:
        "Creative strategist driving brand growth and customer engagement.",
      image: "DK",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Every decision we make puts our customers' needs and satisfaction at the center.",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description:
        "We maintain the highest standards of security and transparency in all transactions.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Connecting customers worldwide with quality products and reliable service.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Committed to delivering exceptional quality in products, service, and experience.",
    },
  ];

  const achievements = [
    {
      number: "2M+",
      label: "Happy Customers",
      icon: Users,
    },
    {
      number: "50K+",
      label: "Products Delivered",
      icon: ShoppingBag,
    },
    {
      number: "25+",
      label: "Countries Served",
      icon: Globe,
    },
    {
      number: "99.8%",
      label: "Customer Satisfaction",
      icon: Star,
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <Badge variant="secondary" className="mb-4">
            <Calendar className="mr-2 h-4 w-4" />
            Established 2018
          </Badge>
          <h1 className="text-foreground mb-6 text-4xl font-bold md:text-5xl">
            About New Market
          </h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-xl leading-relaxed">
            We're more than just an e-commerce platform. We're a community of
            innovators, dreamers, and problem-solvers dedicated to
            revolutionizing the way people shop and connect with quality
            products worldwide.
          </p>
        </div>

        {/* Company Story */}
        <div className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground flex items-center text-2xl">
                <Target className="text-primary mr-3 h-6 w-6" />
                Our Story
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2018 by a team of passionate entrepreneurs, New
                Market began as a simple idea: to create a marketplace that
                truly serves both customers and sellers. What started in a small
                garage has grown into a global platform connecting millions of
                people with the products they love.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our journey hasn't always been easy, but every challenge has
                made us stronger and more committed to our mission. From our
                first sale to our millionth customer, we've remained focused on
                building trust, delivering quality, and creating meaningful
                connections in the digital marketplace.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we're proud to serve customers in over 25 countries,
                working with thousands of trusted sellers to bring you the best
                products at competitive prices, backed by exceptional customer
                service.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mission & Vision */}
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground text-xl">
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To democratize commerce by providing a platform where anyone can
                discover, buy, and sell quality products while building lasting
                relationships based on trust and mutual success.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground text-xl">
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To become the world's most trusted and innovative marketplace,
                where every transaction creates value, every interaction builds
                community, and every customer feels valued and empowered.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="text-foreground mb-4 text-3xl font-bold">
              Our Values
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              These core principles guide everything we do and shape the way we
              serve our customers and community.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mb-4 flex justify-center">
                      <div className="bg-primary/10 rounded-full p-3">
                        <IconComponent className="text-primary h-6 w-6" />
                      </div>
                    </div>
                    <CardTitle className="text-foreground text-lg">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="text-foreground mb-4 text-3xl font-bold">
              Our Achievements
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Numbers that reflect our commitment to excellence and the trust
              our customers place in us.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">
                      <IconComponent className="text-primary h-8 w-8" />
                    </div>
                    <div className="text-primary mb-2 text-3xl font-bold">
                      {achievement.number}
                    </div>
                    <p className="text-muted-foreground text-sm font-medium">
                      {achievement.label}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="text-foreground mb-4 text-3xl font-bold">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              The passionate individuals behind New Market, working tirelessly
              to bring you the best shopping experience.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mb-4 flex justify-center">
                    <div className="bg-primary text-primary-foreground flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold">
                      {member.image}
                    </div>
                  </div>
                  <CardTitle className="text-foreground text-lg">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground mb-4 text-2xl">
                Get in Touch
              </CardTitle>
              <CardDescription className="text-muted-foreground text-lg">
                Have questions or want to learn more about New Market? We'd love
                to hear from you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2">
                  <MapPin className="text-primary h-5 w-5" />
                  <span className="text-muted-foreground">
                    San Francisco, CA
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="text-primary h-5 w-5" />
                  <span className="text-muted-foreground">
                    hello@newmarket.com
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="text-primary h-5 w-5" />
                  <span className="text-muted-foreground">
                    +1 (555) 123-4567
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
                <Button variant="outline" size="lg">
                  <Users className="mr-2 h-4 w-4" />
                  Join Our Team
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
