'use client'

import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Something went wrong!</h2>
        <p className="text-muted-foreground">
          {error.message || "There was an error loading this page."}
        </p>
        <Button
          onClick={reset}
          className="bg-black text-white hover:bg-neutral-900 rounded-full px-8"
        >
          Try again
        </Button>
      </div>
    </div>
  )
}
