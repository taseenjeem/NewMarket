import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import {
  Shield,
  Lock,
  Eye,
  Users,
  Cookie,
  Mail,
  Phone,
  Calendar,
  FileText,
  AlertCircle,
  CheckCircle,
  Globe,
  Database,
  Settings,
  UserCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - New Market | Data Protection & User Rights",
  description: "Learn how New Market protects your privacy and personal data. Our comprehensive privacy policy covers data collection, usage, security measures, user rights, and cookie policies.",
  keywords: [
    "privacy policy",
    "data protection",
    "user privacy",
    "GDPR compliance",
    "data security",
    "personal information",
    "cookie policy",
    "user rights",
    "data retention",
    "privacy rights",
    "data collection",
    "information security"
  ],
  authors: [{ name: "New Market Legal Team" }],
  creator: "New Market",
  publisher: "New Market",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://newmarket.com/privacy-and-policy",
    title: "Privacy Policy - New Market | Data Protection & User Rights",
    description: "Learn how New Market protects your privacy and personal data. Comprehensive privacy policy covering data collection, usage, and security.",
    siteName: "New Market",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - New Market | Data Protection & User Rights",
    description: "Learn how New Market protects your privacy and personal data. Comprehensive privacy policy covering data collection, usage, and security.",
    creator: "@newmarket",
  },
};

export default function PrivacyAndPolicyPage() {
  const dataTypes = [
    {
      category: "Personal Information",
      description: "Name, email address, phone number, billing and shipping addresses",
      icon: Users,
      purpose: "Account creation, order processing, and customer support",
    },
    {
      category: "Payment Information",
      description: "Credit card details, billing information (processed securely by third-party providers)",
      icon: Lock,
      purpose: "Transaction processing and fraud prevention",
    },
    {
      category: "Usage Data",
      description: "Browsing behavior, search queries, product preferences, and interaction patterns",
      icon: Eye,
      purpose: "Improving user experience and personalizing recommendations",
    },
    {
      category: "Device Information",
      description: "IP address, browser type, device identifiers, and operating system",
      icon: Settings,
      purpose: "Security, analytics, and technical optimization",
    },
  ];

  const userRights = [
    {
      right: "Access Your Data",
      description: "Request a copy of all personal data we have about you",
      icon: FileText,
    },
    {
      right: "Correct Information",
      description: "Update or correct any inaccurate personal information",
      icon: CheckCircle,
    },
    {
      right: "Delete Your Data",
      description: "Request deletion of your personal data (subject to legal requirements)",
      icon: UserCheck,
    },
    {
      right: "Data Portability",
      description: "Receive your data in a structured, machine-readable format",
      icon: Database,
    },
    {
      right: "Opt-Out",
      description: "Unsubscribe from marketing communications at any time",
      icon: Mail,
    },
    {
      right: "Restrict Processing",
      description: "Limit how we process your personal information",
      icon: Settings,
    },
  ];

  const cookieTypes = [
    {
      type: "Essential Cookies",
      description: "Required for basic website functionality and security",
      required: true,
    },
    {
      type: "Analytics Cookies",
      description: "Help us understand how visitors interact with our website",
      required: false,
    },
    {
      type: "Marketing Cookies",
      description: "Used to deliver personalized advertisements and track campaign effectiveness",
      required: false,
    },
    {
      type: "Preference Cookies",
      description: "Remember your settings and preferences for a better experience",
      required: false,
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <Badge variant="secondary" className="mb-4">
            <Shield className="mr-2 h-4 w-4" />
            Your Privacy Matters
          </Badge>
          <h1 className="text-foreground mb-6 text-4xl font-bold md:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-xl leading-relaxed">
            We are committed to protecting your privacy and ensuring the security of your
            personal information. This policy explains how we collect, use, and safeguard
            your data when you use New Market.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Last Updated: December 2024</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span>Effective Globally</span>
            </div>
          </div>
        </div>

        {/* Quick Overview Alert */}
        <div className="mb-12">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-base">
              <strong>Quick Summary:</strong> We collect only necessary information to provide
              our services, never sell your data to third parties, and give you full control
              over your privacy settings.
            </AlertDescription>
          </Alert>
        </div>

        {/* Information We Collect */}
        <div className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="text-foreground mb-4 text-3xl font-bold">
              Information We Collect
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              We collect information to provide better services to all our users. Here's what
              we collect and why.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {dataTypes.map((data, index) => {
              const IconComponent = data.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-foreground flex items-center gap-2 text-lg">
                      <div className="bg-primary/10 rounded-full p-2">
                        <IconComponent className="text-primary h-5 w-5" />
                      </div>
                      {data.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      <strong>What we collect:</strong> {data.description}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      <strong>Why we collect it:</strong> {data.purpose}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* How We Use Your Information */}
        <div className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2 text-2xl">
                <Database className="text-primary h-6 w-6" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="text-foreground font-semibold">Service Delivery</h4>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 mt-0.5 h-4 w-4 flex-shrink-0" />
                      Process and fulfill your orders
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 mt-0.5 h-4 w-4 flex-shrink-0" />
                      Provide customer support and assistance
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 mt-0.5 h-4 w-4 flex-shrink-0" />
                      Send order confirmations and updates
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 mt-0.5 h-4 w-4 flex-shrink-0" />
                      Manage your account and preferences
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-foreground font-semibold">Improvement & Security</h4>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 mt-0.5 h-4 w-4 flex-shrink-0" />
                      Improve our products and services
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 mt-0.5 h-4 w-4 flex-shrink-0" />
                      Personalize your shopping experience
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 mt-0.5 h-4 w-4 flex-shrink-0" />
                      Prevent fraud and ensure security
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 mt-0.5 h-4 w-4 flex-shrink-0" />
                      Analyze usage patterns and trends
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Your Rights */}
        <div className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="text-foreground mb-4 text-3xl font-bold">
              Your Privacy Rights
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              You have full control over your personal information. Here are the rights you
              can exercise at any time.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {userRights.map((right, index) => {
              const IconComponent = right.icon;
              return (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="bg-primary/10 rounded-full p-2">
                        <IconComponent className="text-primary h-4 w-4" />
                      </div>
                      <h4 className="text-foreground font-medium">{right.right}</h4>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {right.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Data Security */}
        <div className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2 text-2xl">
                <Lock className="text-primary h-6 w-6" />
                Data Security & Protection
              </CardTitle>
              <CardDescription>
                We implement industry-standard security measures to protect your information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="text-foreground font-semibold">Technical Safeguards</h4>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>• SSL/TLS encryption for data transmission</li>
                    <li>• Secure data centers with 24/7 monitoring</li>
                    <li>• Regular security audits and penetration testing</li>
                    <li>• Multi-factor authentication for admin access</li>
                    <li>• Automated backup and disaster recovery systems</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-foreground font-semibold">Organizational Measures</h4>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>• Employee privacy training and background checks</li>
                    <li>• Strict access controls and need-to-know basis</li>
                    <li>• Regular privacy impact assessments</li>
                    <li>• Incident response and breach notification procedures</li>
                    <li>• Compliance with GDPR, CCPA, and other regulations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Cookies Policy */}
        <div className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="text-foreground mb-4 text-3xl font-bold">
              Cookie Policy
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              We use cookies to enhance your browsing experience and provide personalized
              services. You can control cookie settings in your browser.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {cookieTypes.map((cookie, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Cookie className="text-primary h-5 w-5" />
                      <h4 className="text-foreground font-medium">{cookie.type}</h4>
                    </div>
                    <Badge variant={cookie.required ? "default" : "secondary"}>
                      {cookie.required ? "Required" : "Optional"}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cookie.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Data Retention */}
        <div className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2 text-2xl">
                <Calendar className="text-primary h-6 w-6" />
                Data Retention
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information only as long as necessary to provide our
                services and comply with legal obligations. Here are our retention periods:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border p-4">
                  <h4 className="text-foreground mb-2 font-medium">Account Information</h4>
                  <p className="text-muted-foreground text-sm">
                    Retained while your account is active, plus 3 years after account closure
                    for legal compliance.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h4 className="text-foreground mb-2 font-medium">Transaction Records</h4>
                  <p className="text-muted-foreground text-sm">
                    Kept for 7 years to comply with financial regulations and tax requirements.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h4 className="text-foreground mb-2 font-medium">Marketing Data</h4>
                  <p className="text-muted-foreground text-sm">
                    Deleted immediately upon unsubscribe or after 2 years of inactivity.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h4 className="text-foreground mb-2 font-medium">Analytics Data</h4>
                  <p className="text-muted-foreground text-sm">
                    Anonymized after 26 months and used only for statistical purposes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact & Updates */}
        <div className="text-center">
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground mb-4 text-2xl">
                Questions About Privacy?
              </CardTitle>
              <CardDescription className="text-muted-foreground text-lg">
                We're here to help you understand how we protect your privacy.
                Contact our Data Protection Officer for any privacy-related questions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2">
                  <Mail className="text-primary h-5 w-5" />
                  <span className="text-muted-foreground">privacy@newmarket.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="text-primary h-5 w-5" />
                  <span className="text-muted-foreground">1-800-PRIVACY-1</span>
                </div>
              </div>
              <div className="mb-6">
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Policy Updates:</strong> We may update this privacy policy from time
                    to time. We'll notify you of any significant changes via email or website
                    notification.
                  </AlertDescription>
                </Alert>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Privacy Team
                </Button>
                <Button variant="outline" size="lg">
                  <Settings className="mr-2 h-4 w-4" />
                  Manage Privacy Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
