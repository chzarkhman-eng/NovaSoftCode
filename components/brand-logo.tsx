"use client"

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

type BrandLogoProps = {
  useSolidHeader: boolean
}

export function BrandLogo({ useSolidHeader }: BrandLogoProps) {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center gap-2 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      aria-label="NovaSoftCode — Home"
    >
      <span
        className={cn(
          "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full shadow-lg ring-2",
          useSolidHeader ? "ring-border/40" : "ring-white/25",
        )}
      >
        <Image
          src="/favicon.png"
          alt=""
          width={40}
          height={40}
          className="object-cover"
          priority
        />
      </span>
      <span
        className={cn(
          "text-xl font-bold tracking-tight",
          useSolidHeader ? "text-foreground" : "text-white drop-shadow-sm",
        )}
      >
        Nova
        <span className={cn("text-primary", !useSolidHeader && "drop-shadow-sm")}>SoftCode</span>
      </span>
    </Link>
  )
}
