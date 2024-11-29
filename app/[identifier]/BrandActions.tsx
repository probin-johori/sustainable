'use client';
// app/[identifier]/BrandActions.tsx
import { SustainableBrand } from '@/lib/brands';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Mail } from "lucide-react";

interface BrandActionsProps {
  brand: SustainableBrand;
}

export function BrandActions({ brand }: BrandActionsProps) {
  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Quick Actions</h3>
      <div className="space-y-3">
        <Button
          variant="default"
          className="w-full"
          onClick={() => window.open(brand.url, '_blank')}
        >
          Visit Website
          <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => window.open(`mailto:${brand.contact.email}`)}
        >
          Contact Us
          <Mail className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </Card>
  );
}
