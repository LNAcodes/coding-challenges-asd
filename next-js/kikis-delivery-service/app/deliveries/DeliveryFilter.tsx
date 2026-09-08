"use client";

import { useState } from "react";
import type { DeliveryRequest } from "@/lib/services/deliveriesService";

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
      <ul>
        {visible.map((d) => (
          <li key={d.id}>
            {d.pickup} to {d.destination} ({d.status})
          </li>
        ))}
      </ul>
    </div>
  );
}
