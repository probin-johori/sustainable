"use client"
import { Button } from "@/components/ui/button";
import { Instagram, Mail } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="px-20 py-8">
        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
            <span className="text-neutral-600">
              © 2024 Sustainable Brands India. All rights reserved
            </span>
            <div className="flex gap-4">
              <Button asChild variant="link" className="h-auto p-0 text-sm text-[#41414F]">
                <Link href="/terms">Terms</Link>
              </Button>
              <Button asChild variant="link" className="h-auto p-0 text-sm text-[#41414F]">
                <Link href="/privacy">Privacy</Link>
              </Button>
              <Button asChild variant="link" className="h-auto p-0 text-sm text-[#41414F]">
                <Link href="/cookies">Cookies</Link>
              </Button>
            </div>
          </div>
          <div className="flex gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              asChild
            >
              <Link href="https://instagram.com/sustainablebrands.in" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              asChild
            >
              <Link href="mailto:connect@sustainablebrands.in">
                <Mail className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
