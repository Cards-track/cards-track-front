"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto flex h-screen flex-col items-center justify-center">
      <div className="flex items-center gap-2 px-4 mb-5">
        <p className="text-3xl font-bold">404</p>
        <Separator orientation="vertical" className="mx-2 h-10" />
        <p className="text-xl">Resource Not Found</p>
      </div>
      <Link href="/">
        <Button variant="ghost">
          <MoveLeft />
          Return Home
        </Button>
      </Link>
    </div>
  );
}
