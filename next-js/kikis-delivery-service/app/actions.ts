"use server";

import { createDelivery } from "@/lib/services/deliveriesService";
import { revalidatePath } from "next/cache";

export async function addDelivery(formData: FormData) {
  const pickup = formData.get("pickup") as string;
  const destination = formData.get("destination") as string;
  await createDelivery({ pickup, destination });
  // /deliveries page is old, build new with next visit
  revalidatePath("/deliveries");
}
