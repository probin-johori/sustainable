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
          <div className="text-sm">
            <span className="text-neutral-500">
              © 2024 Eco Stamped.
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex gap-4">
              <Button asChild variant="link" className="h-auto p-0 text-sm text-[#163400]">
                <Link href="/terms">Terms</Link>
              </Button>
              <Button asChild variant="link" className="h-auto p-0 text-sm text-[#163400]">
                <Link href="/privacy">Privacy</Link>
              </Button>
              <Button asChild variant="link" className="h-auto p-0 text-sm text-[#163400]">
                <Link href="/cookies">Cookies</Link>
              </Button>
            </div>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full bg-neutral-100 hover:bg-neutral-50"
                asChild
              >
                <Link href="https://instagram.com/sustainablebrands.in" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full bg-neutral-100 hover:bg-neutral-50"
                asChild
              >
                <Link href="mailto:connect@sustainablebrands.in">
                  <Mail className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
