import { createDelivery } from "@/lib/services/deliveriesService";
import { revalidatePath } from "next/cache";

// Server Compomnent
export default function NewDeliveryPage() {
  //server function: only this part is the function, not the whole file > even if browser calls it, execute it on server, formData object as string
  async function addDelivery(formData: FormData) {
    "use server";
    const pickup = formData.get("pickup") as string;
    const destination = formData.get("destination") as string;
    await createDelivery({ pickup, destination });
    // /deliveries page is old, build new with next visit
    revalidatePath("/deliveries");
  }

  //next.js recognizes server function: collects formData, sends to server, execute it on server, send results back ! no JS-Handler Functions, browser works it out itself
  return (
    <form action={addDelivery}>
      <input name="pickup" placeholder="Pickup" />
      <input name="destination" placeholder="Destination" />
      <button type="submit">Create request</button>
    </form>
  );
}
