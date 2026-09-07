import { getAllDeliveries } from "@/lib/services/deliveriesService";

export default async function HomePage() {
  const deliveries = await getAllDeliveries();
  const firstDelivery = deliveries[0];

  return (
    <div>
      <h1>Kiki's Delivery Service</h1>
      <p>
        {firstDelivery.pickup} to {firstDelivery.destination}
      </p>
    </div>
  );
}
