import Link from "next/link";
import { ImageSlot } from "@/components/ui/image-slot";
import { Reveal } from "@/components/ui/reveal";
import { resolvePhoto } from "@/lib/photo";

const ARTICLES = [
  {
    slug: "future-of-ai-in-african-businesses",
    tag: "Technology",
    title: "The Future of AI in African Businesses",
    date: "May 12, 2024 · 5 min read",
    placeholder: "Article image — AI / Africa map graphic",
  },
  {
    slug: "designing-systems-people-love",
    tag: "Design",
    title: "Designing systems people love to use",
    date: "April 24, 2024 · 4 min read",
    placeholder: "Article image — design systems workspace",
  },
  {
    slug: "digital-transformation-leadership-priority",
    tag: "Business",
    title: "Why digital transformation is a leadership priority",
    date: "April 19, 2024 · 6 min read",
    placeholder: "Article image — leadership team meeting",
  },
];

export function Insights() {
  return (
    <Reveal>
      <section id="insights" className="sec">
        <div className="mb-12 flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <div className="lb mb-4">Latest Insights</div>
            <h2 className="h2 mb-0">Ideas, stories and insights from our team.</h2>
          </div>
          <Link href="/insights" className="whitespace-nowrap text-sm font-semibold">
            View all articles →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {ARTICLES.map((article) => (
            <div key={article.slug} className="card overflow-hidden">
              <ImageSlot
                src={resolvePhoto(`insights/${article.slug}.jpg`)}
                alt={article.placeholder}
                className="h-[170px] w-full"
              />
              <div className="p-[22px]">
                <div className="lb mb-3">{article.tag}</div>
                <div className="mb-2.5 font-display text-[16.5px] font-semibold leading-[1.35]">
                  {article.title}
                </div>
                <div className="text-[12.5px] text-body-on-dark">{article.date}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
