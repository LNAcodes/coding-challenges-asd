export type DeliveryStatus = "active" | "accepted" | "denied" | "fulfilled";

export type DeliveryRequest = {
  id: string;
  pickup: string;
  destination: string;
  status: DeliveryStatus;
};

const deliveries: DeliveryRequest[] = [
  { id: "1", pickup: "Bakery", destination: "Clock Tower", status: "active" },
  {
    id: "2",
    pickup: "Harbour",
    destination: "Hillside Cafe",
    status: "accepted",
  },
  { id: "3", pickup: "Bookshop", destination: "Lighthouse", status: "denied" },
  {
    id: "4",
    pickup: "Market Square",
    destination: "Train Station",
    status: "fulfilled",
  },
];

export function getAllDeliveries(): DeliveryRequest[] {
  return deliveries;
}

export function getDeliveryById(id: string): DeliveryRequest | null {
  return deliveries.find((d) => d.id === id) || null;
}

export async function createDelivery({
  // function that takes an object als only parameter, destructering into pickup and destination
  pickup,
  destination,
}: {
  pickup: string;
  destination: string;
}): Promise<DeliveryRequest> {
  // DeliveryRequest-object: Array, id: String(... +1) > number to string +1up, pickup+destination variable keys, status: every delivery starts with status active
  const newDelivery: DeliveryRequest = {
    id: String(deliveries.length + 1),
    pickup,
    destination,
    status: "active",
  };
  // pushes new object at the end of the array
  deliveries.push(newDelivery);
  return newDelivery;
}
