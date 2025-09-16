"use client";

import { useState, useEffect, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import DiscountCard from "./DiscountCard";
import DiscountModal from "./DiscountModal";

interface DiscountData {
  id: string;
  title: string;
  description: string;
  discountType: "percentage" | "fixed" | "shipping" | "bogo";
  discountValue: number;
  code: string;
  image: string;
  category: string;
  validUntil: string;
  minPurchase: number;
  maxDiscount: number | null;
  terms: string[];
  featured: boolean;
  status: string;
}

export default function DiscountsContainer() {
  const [discounts, setDiscounts] = useState<DiscountData[]>([]);

  const [selectedDiscount, setSelectedDiscount] = useState<DiscountData | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [loading, setLoading] = useState(true);

  // Load discount data
  useEffect(() => {
    const loadDiscounts = async () => {
      try {
        const response = await fetch("/json/discounts-coupons.json");
        const data = await response.json();
        setDiscounts(data);
      } catch (error) {
        setDiscounts([]);
      } finally {
        setLoading(false);
      }
    };

    loadDiscounts();
  }, []);

  // Filter discounts with useMemo for better performance
  const filteredDiscounts = useMemo(() => {
    return discounts.filter((discount) => {
      const matchesSearch =
        discount.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        discount.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        discount.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || discount.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [discounts, searchTerm, selectedCategory]);

  const handleCardClick = (discount: DiscountData) => {
    setSelectedDiscount(discount);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDiscount(null);
  };

  const categories = useMemo(() => Array.from(new Set(discounts.map((d) => d.category))), [discounts]);
  const activeDiscounts = filteredDiscounts.filter(
    (d) => d.status === "active" && new Date(d.validUntil) > new Date(),
  );
  const expiredDiscounts = filteredDiscounts.filter(
    (d) => d.status === "expired" || new Date(d.validUntil) <= new Date(),
  );

  if (loading) {
    return (
      <div className="from-primary/5 via-background to-secondary/5 min-h-screen bg-gradient-to-br">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-8">
            <div className="bg-muted h-12 w-1/3 rounded-lg"></div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-muted h-80 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold">Discounts & Coupons</h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Discover amazing deals and save money on your favorite products.
            Click on any card to view details and copy the coupon code.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-card mb-8 rounded-lg border p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="text-muted-foreground absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
              <Input
                placeholder="Search discounts, categories, or descriptions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-full lg:w-48">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Stats */}
          <div className="mt-4 flex flex-wrap gap-4 border-t pt-4">
            <Badge variant="outline" className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              {activeDiscounts.length} Active Offers
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              {expiredDiscounts.length} Expired
            </Badge>
            <Badge variant="outline">
              {filteredDiscounts.filter((d) => d.featured).length} Featured
            </Badge>
          </div>
        </div>

        {/* Results */}
        {filteredDiscounts.length === 0 ? (
          <div className="py-12 text-center">
            <div className="bg-muted mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full">
              <Search className="text-muted-foreground h-8 w-8" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">No discounts found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or filters to find what you're
              looking for.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <>
            {/* Active Offers Section */}
            <div className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <h2 className="text-2xl font-bold">
                  Active Offers ({activeDiscounts.length})
                </h2>
              </div>
              {activeDiscounts.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {activeDiscounts.map((discount) => (
                    <DiscountCard
                      key={discount.id}
                      discount={discount}
                      onClick={() => handleCardClick(discount)}
                    />
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center">
                  <p className="text-gray-500">
                    No active offers available at the moment.
                  </p>
                </div>
              )}
            </div>

            {/* Expired Offers Section */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <h2 className="text-2xl font-bold">
                  Expired Offers ({expiredDiscounts.length})
                </h2>
              </div>
              {expiredDiscounts.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {expiredDiscounts.map((discount) => (
                    <DiscountCard
                      key={discount.id}
                      discount={discount}
                      onClick={() => handleCardClick(discount)}
                    />
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center">
                  <p className="text-gray-500">No expired offers to display.</p>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      {/* Modal */}
      <DiscountModal
        discount={selectedDiscount}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
