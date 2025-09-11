import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Users,
  ShoppingCart,
  CreditCard,
  Truck,
  Shield,
  ChevronRight,
  HelpCircle,
  BookOpen,
  Headphones,
} from "lucide-react";

export default function HelpAdSupportPage() {
  const supportCategories = [
    {
      icon: ShoppingCart,
      title: "Orders & Shopping",
      description: "Track orders, modify purchases, and shopping assistance",
      articles: 12,
      color: "bg-primary/10 text-primary",
    },
    {
      icon: CreditCard,
      title: "Payment & Billing",
      description: "Payment methods, refunds, and billing inquiries",
      articles: 8,
      color: "bg-secondary/10 text-secondary-foreground",
    },
    {
      icon: Truck,
      title: "Shipping & Delivery",
      description: "Delivery options, tracking, and shipping policies",
      articles: 15,
      color: "bg-accent text-accent-foreground",
    },
    {
      icon: Shield,
      title: "Account & Security",
      description: "Account settings, privacy, and security features",
      articles: 10,
      color: "bg-muted text-muted-foreground",
    },
  ];

  const faqs = [
    {
      question: "How do I track my order?",
      answer:
        "You can track your order by visiting the 'Track Order' page and entering your order number and email address. You'll receive real-time updates on your shipment status.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers for eligible customers.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Standard shipping takes 3-5 business days, while express shipping takes 1-2 business days. International orders may take 7-14 business days depending on the destination.",
    },
    {
      question: "Can I return or exchange items?",
      answer:
        "Yes, we offer a 30-day return policy for most items. Items must be in original condition with tags attached. Some restrictions apply to certain product categories.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach our customer support team via live chat, email at support@newmarket.com, or phone at 1-800-NEWMARKET. We're available 24/7 to assist you.",
    },
  ];

  const contactOptions = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with a support representative",
      availability: "Mon-Fri 9AM-6PM EST",
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message about your issue",
      availability: "Response within 24 hours",
      action: "Send Email",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center">
            <div className="bg-secondary rounded-full p-3">
              <HelpCircle className="text-primary h-8 w-8" />
            </div>
          </div>
          <h1 className="text-foreground mb-4 text-4xl font-bold">
            How can we help you?
          </h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
            Find answers to your questions, get support, and learn more about
            our services
          </p>
        </div>

        {/* Quick Contact Options */}
        <div className="mx-auto mb-16 grid max-w-4xl gap-6 md:grid-cols-2">
          {contactOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <Card key={index}>
                <CardHeader className="text-center">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="bg-muted rounded-full p-3">
                      <IconComponent className="text-muted-foreground h-6 w-6" />
                    </div>
                  </div>
                  <CardTitle className="text-foreground text-xl">
                    {option.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4 flex items-center justify-center">
                    <Clock className="text-muted-foreground mr-2 h-4 w-4" />
                    <span className="text-muted-foreground text-sm">
                      {option.availability}
                    </span>
                  </div>
                  <Button variant="secondary" className="w-full">
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Support Categories */}
        <div className="mb-16">
          <div className="mb-8 flex items-center">
            <h2 className="text-foreground text-3xl font-bold">
              Browse by Category
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {supportCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card
                  key={index}
                  className="hover:bg-accent group cursor-pointer transition-all duration-300"
                >
                  <CardHeader>
                    <div className="mb-4 flex items-center justify-between">
                      <div className={`rounded-lg p-3 ${category.color}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <ChevronRight className="text-muted-foreground group-hover:text-foreground h-5 w-5 transition-colors" />
                    </div>
                    <CardTitle className="text-foreground text-lg">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-sm">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary">
                      {category.articles} articles
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="mb-8 flex items-center">
            <h2 className="text-foreground text-3xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center text-lg">
                    <HelpCircle className="text-primary mr-3 h-5 w-5" />
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="mx-auto max-w-4xl">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-foreground mb-4 text-2xl">
                Contact Support
              </CardTitle>
              <CardDescription className="text-muted-foreground text-lg">
                Can't find what you're looking for? Send us a message and we'll
                get back to you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                    className="w-full"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="category" className="text-foreground">
                    Category
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="orders">Orders & Shopping</SelectItem>
                      <SelectItem value="payment">Payment & Billing</SelectItem>
                      <SelectItem value="shipping">
                        Shipping & Delivery
                      </SelectItem>
                      <SelectItem value="account">
                        Account & Security
                      </SelectItem>
                      <SelectItem value="technical">
                        Technical Support
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="subject" className="text-foreground">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Brief description of your issue"
                    required
                    className="w-full"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="message" className="text-foreground">
                    Message
                  </Label>
                  <textarea
                    id="message"
                    placeholder="Please describe your issue in detail..."
                    className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring min-h-[120px] w-full resize-none rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label className="text-foreground">
                    Preferred Contact Method
                  </Label>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex cursor-pointer items-center space-x-2">
                      <input
                        type="radio"
                        name="contact"
                        value="email"
                        className="text-primary"
                        defaultChecked
                      />
                      <span className="text-muted-foreground text-sm">
                        Email
                      </span>
                    </label>
                    <label className="flex cursor-pointer items-center space-x-2">
                      <input
                        type="radio"
                        name="contact"
                        value="phone"
                        className="text-primary"
                      />
                      <span className="text-muted-foreground text-sm">
                        Phone
                      </span>
                    </label>
                    <label className="flex cursor-pointer items-center space-x-2">
                      <input
                        type="radio"
                        name="contact"
                        value="chat"
                        className="text-primary"
                      />
                      <span className="text-muted-foreground text-sm">
                        Live Chat
                      </span>
                    </label>
                  </div>
                </div>

                <div className="flex flex-col gap-4 pt-4 sm:flex-row md:col-span-2">
                  <Button type="submit" className="w-full flex-1">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full flex-1"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Start Live Chat
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
