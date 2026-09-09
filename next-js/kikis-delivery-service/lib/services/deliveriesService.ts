import sql from "@/lib/db";

export type DeliveryStatus = "active" | "accepted" | "denied" | "fulfilled";

export type DeliveryRequest = {
  id: string;
  pickup: string;
  destination: string;
  status: DeliveryStatus;
};

// const deliveries: DeliveryRequest[] = [
//   { id: "1", pickup: "Bakery", destination: "Clock Tower", status: "active" },
//   {
//     id: "2",
//     pickup: "Harbour",
//     destination: "Hillside Cafe",
//     status: "accepted",
//   },
//   { id: "3", pickup: "Bookshop", destination: "Lighthouse", status: "denied" },
//   {
//     id: "4",
//     pickup: "Market Square",
//     destination: "Train Station",
//     status: "fulfilled",
//   },
// ];

export async function getAllDeliveries(): Promise<DeliveryRequest[]> {
  return sql<DeliveryRequest[]>`SELECT * FROM deliveries`;
}

// export function getDeliveryById(id: string): DeliveryRequest | null {
//   const deliveries: DeliveryRequest[] = [];
//   return deliveries.find((d) => d.id === id) || null;
// }
export async function getDeliveryById(
  id: string,
): Promise<DeliveryRequest | null> {
  const [delivery] = await sql<DeliveryRequest[]>`
  SELECT * FROM deliveries WHERE id = ${id}
  `;
  return delivery ?? null;
}

export async function createDelivery({
  pickup,
  destination,
}: {
  pickup: string;
  destination: string;
}): Promise<DeliveryRequest> {
  const [created] = await sql<DeliveryRequest[]>`
  INSERT INTO deliveries (pickup, destination, status)
  VALUES (${pickup}, ${destination}, 'active')
  RETURNING *
  `;
  return created;
}
// function that takes an object als only parameter, destructering into pickup and destination
// DeliveryRequest-object: Array, id: String(... +1) > number to string +1up, pickup+destination variable keys, status: every delivery starts with status active
// const newDelivery: DeliveryRequest = {
//   // id: String(deliveries.length + 1),
//   id: "temp",
//   pickup,
//   destination,
//   status: "active",
// };
// // pushes new object at the end of the array > not with postgres
// // deliveries.push(newDelivery);
//   return newDelivery;
// }
