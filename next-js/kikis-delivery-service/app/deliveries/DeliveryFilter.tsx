"use client";

import { useState } from "react";
import type { DeliveryRequest } from "@/lib/services/deliveriesService";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function DeliveryFilter({
  deliveries,
}: {
  deliveries: DeliveryRequest[];
}) {
  const [status, setStatus] = useState("all");

  const visible =
    status === "all"
      ? deliveries
      : deliveries.filter((d) => d.status === status);

  return (
    <div>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="accepted">Accepted</option>
        <option value="denied">Denied</option>
        <option value="fulfilled">Fulfilled</option>
      </select>

      <div className="grid gap-4 py-4">
        {visible.map((d) => (
          <Card key={d.id}>
            <CardHeader>
              <CardTitle>
                {d.pickup} to {d.destination}
              </CardTitle>
            </CardHeader>
            <CardContent>Status: ({d.status})</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
