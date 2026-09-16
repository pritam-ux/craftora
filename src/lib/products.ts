import autumn from "@/assets/product-autumn.jpg";
import rose from "@/assets/product-rose.jpg";
import sunflower from "@/assets/product-sunflower.jpg";
import lavender from "@/assets/product-lavender.jpg";
import tulip from "@/assets/product-tulip.jpg";
import daisy from "@/assets/product-daisy.jpg";

export const WHATSAPP_NUMBER = "918121086026";

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  tag?: string;
};

export const products: Product[] = [
  {
    id: "autumn-meadow",
    name: "Autumn Meadow Bouquet",
    price: 1499,
    tag: "Bestseller",
    description:
      "Rust, marigold and terracotta blooms with leafy greens — a warm hug in bouquet form.",
    image: autumn,
  },
  {
    id: "blush-rose",
    name: "Blush Rose Bouquet",
    price: 1299,
    tag: "For gifting",
    description:
      "Soft pink woollen roses tied with a satin ribbon. The bouquet that says it all, forever.",
    image: rose,
  },
  {
    id: "sunflower-sunshine",
    name: "Sunflower Sunshine Bunch",
    price: 999,
    description:
      "Three bright sunflowers that never droop — instant sunshine for any corner of the home.",
    image: sunflower,
  },
  {
    id: "lavender-dream",
    name: "Lavender Dream Bouquet",
    price: 1199,
    description:
      "Calming sprigs of purple lavender, handwoven stem by stem. Zero upkeep, all serenity.",
    image: lavender,
  },
  {
    id: "rainbow-tulip",
    name: "Rainbow Tulip Bouquet",
    price: 1099,
    tag: "New",
    description:
      "A joyful mix of coral, butter yellow, lilac and mint tulips — spring that never ends.",
    image: tulip,
  },
  {
    id: "pastel-daisy",
    name: "Pastel Daisy Posy",
    price: 899,
    description:
      "A dainty posy of cream, blush and lilac daisies — the sweetest little thank-you gift.",
    image: daisy,
  },
];

export function formatPrice(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`;
}

export function whatsappOrderLink(product?: Product): string {
  const text = product
    ? `Hi Craftora! I'd love to order the *${product.name}* (${formatPrice(product.price)}). Is it available?`
    : "Hi Craftora! I'd love to place an order for a handmade woollen bouquet.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
