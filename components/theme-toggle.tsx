"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ThemeToggleProps = {
  /** When false, use light-on-dark styling (e.g. home hero header). */
  useSolidHeader: boolean
}

export function ThemeToggle({ useSolidHeader }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggle = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={cn(
        "relative h-9 w-9 shrink-0 rounded-lg",
        useSolidHeader
          ? "text-muted-foreground hover:bg-muted hover:text-foreground"
          : "text-white hover:bg-white/15 hover:text-white",
      )}
      onClick={toggle}
      aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      disabled={!mounted}
    >
      {!mounted ? (
        <span className="h-5 w-5" aria-hidden />
      ) : (
        <>
          <Sun className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        </>
      )}
    </Button>
  )
}
