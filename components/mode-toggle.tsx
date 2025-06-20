"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <div className="relative">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
        <Moon className="absolute h-5 w-5 top-2 left-2 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
        <span className="sr-only">Toggle theme</span>
      </button>
    </div>
  )
}
