import pastelPosy from "@/assets/product-pastel-posy.jpg?photo";
import envelope from "@/assets/product-envelope.jpg?photo";
import tulipCard from "@/assets/product-tulip-card.jpg?photo";
import blueBirthday from "@/assets/product-blue-birthday.jpg?photo";
import sunflower from "@/assets/product-sunflower.jpg?photo";
import pastelPosyBlur from "@/assets/product-pastel-posy.jpg?lqip";
import envelopeBlur from "@/assets/product-envelope.jpg?lqip";
import tulipCardBlur from "@/assets/product-tulip-card.jpg?lqip";
import blueBirthdayBlur from "@/assets/product-blue-birthday.jpg?lqip";
import sunflowerBlur from "@/assets/product-sunflower.jpg?lqip";
import type { PictureData } from "@/components/Photo";

export const WHATSAPP_NUMBER = "918121086026";

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: PictureData;
  placeholder: string;
  /** Describes the photo for screen readers. */
  alt: string;
  tag?: string;
};

export const products: Product[] = [
  {
    id: "pastel-dream",
    name: "Pastel Dream Bouquet",
    price: 1499,
    tag: "Bestseller",
    description:
      "Lilac and blush blossoms around a golden sunflower, with a little grey woodland friend peeking out. Wrapped in ivory and tied with a pastel bow.",
    image: pastelPosy,
    placeholder: pastelPosyBlur,
    alt: "Pastel handmade bouquet of lilac and pink blossoms with a yellow sunflower and a small grey character, wrapped in cream paper",
  },
  {
    id: "bloom-letter",
    name: "Bloom Letter Envelope",
    price: 1599,
    tag: "For gifting",
    description:
      "A kraft envelope overflowing with peony, iris, lily, roses and bluebells — a letter that says everything without a single word.",
    image: envelope,
    placeholder: envelopeBlur,
    alt: "Kraft paper envelope filled with colourful handmade flowers including a pink peony, purple iris, yellow roses and blue bluebells",
  },
  {
    id: "tulip-keepsake",
    name: "Single Tulip Keepsake Card",
    price: 349,
    tag: "Little gift",
    description:
      "One tulip and a sprig of lily-of-the-valley on a printed keepsake card, finished with an organza bow. In red, pink or white.",
    image: tulipCard,
    placeholder: tulipCardBlur,
    alt: "Three keepsake cards, each with a single handmade tulip in red, pink or white tied with a cream organza bow",
  },
  {
    id: "birthday-blue",
    name: "Birthday Blue Bouquet",
    price: 999,
    tag: "New",
    description:
      "Deep blue tulips and a two-tone lily with a birthday card tucked behind, in frosted wrap and a sheer blue ribbon.",
    image: blueBirthday,
    placeholder: blueBirthdayBlur,
    alt: "Handmade bouquet of deep blue tulips and a blue lily with a Happy Birthday card, in white frosted wrap with a blue ribbon",
  },
  {
    id: "sunshine-sunflower",
    name: "Sunshine Sunflower Bouquet",
    price: 1199,
    description:
      "Sunflowers, cream lilies and tiny daisies in peach and newsprint wrap — instant sunshine for any corner of the home.",
    image: sunflower,
    placeholder: sunflowerBlur,
    alt: "Handmade bouquet of yellow sunflowers, cream lilies and small white daisies wrapped in peach paper and newsprint",
  },
];

export function formatPrice(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`;
}

export function whatsappOrderLink(product?: Product): string {
  const text = product
    ? `Hi Craftora! I'd love to order the *${product.name}* (${formatPrice(product.price)}). Is it available?`
    : "Hi Craftora! I'd love to place an order for a handmade bouquet.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
