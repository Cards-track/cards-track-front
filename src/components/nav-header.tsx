"use client";

import { SidebarMenuButton } from "@/components/ui/sidebar";
import { GalleryVerticalEnd } from "lucide-react";
import Link from "next/link";

export function NavHeader() {
  return (
    <SidebarMenuButton size="lg" asChild>
      <Link href="/">
        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
          <GalleryVerticalEnd className="size-4" />
        </div>
        <div className="flex flex-col gap-0.5 leading-none">
          <span className="font-semibold">Cards Track</span>
        </div>
      </Link>
    </SidebarMenuButton>
  );
}
