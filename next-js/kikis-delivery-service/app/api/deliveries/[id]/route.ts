import { getDeliveryById } from "@/lib/services/deliveriesService";
// import Link from "next/link";

// export default async function DeliveryDetailPage({
//   params,
// }: PageProps<"/deliveries/[id]">) {
// params is Promise, need to await it -> Next builds it during runtime from URL, pulling id
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  // id search for fitting delivery
  const delivery = await getDeliveryById(id);

  if (!delivery) {
    // no return, with throw the whole function will be closed at exactly this point and error message shows
    // throw new Error(`Delivery ${id} not found`); new:
    return Response.json({ error: "Delivery not found" }, { status: 404 });
  }

  // return (
  //   <div>
  //     <h1>Delivery {id}</h1>
  //     <p>
  //       From {delivery.pickup} to {delivery.destination}
  //     </p>
  //     <p>Status: {delivery.status}</p>
  //     <Link href="/deliveries">← Back to all deliveries</Link>
  //   </div>
  // );
  return Response.json(delivery);
}
