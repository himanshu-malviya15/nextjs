"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function ButtonNavigation({ userId }: { userId: string }) {
  const router = useRouter();

  return (
    <Button variant="default" onClick={() => router.push(`/users/${userId}`)}>
      View Details
    </Button>
  );
}
