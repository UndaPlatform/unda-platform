import { TestimonialsCarousel } from "@/components/home/testimonials-carousel";
import { getPayloadClient, type Testimonial } from "@/lib/payload";

async function getFeaturedTestimonials() {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "testimonials",
    where: { featured: { equals: true } },
    depth: 1,
    sort: "-createdAt",
  });
  return docs as unknown as Testimonial[];
}

export async function Testimonials() {
  const testimonials = await getFeaturedTestimonials();

  if (testimonials.length === 0) {
    return null;
  }

  return <TestimonialsCarousel testimonials={testimonials} />;
}
