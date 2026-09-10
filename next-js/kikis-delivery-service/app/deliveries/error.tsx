"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Could not load this delivery.</h2>
      <p>{error.message}</p>
      <Button onClick={reset}>Try again</Button>
      <Button asChild variant="outline">
        <Link href="/deliveries">← Back to all deliveries</Link>
      </Button>
    </div>
  );
}

// Try again is a function, not a navigation objective that's why a normal button with onClick
// second Button = real Link to another route
