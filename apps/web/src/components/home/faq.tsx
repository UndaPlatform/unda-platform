import { Reveal } from "@/components/ui/reveal";

const FAQS = [
  {
    question: "Do you work with clients directly, or only through one division?",
    answer:
      "Directly. Every engagement starts with Unda Solutions and is staffed from whichever division — Technologies, Studio, or Travel — fits the problem.",
    defaultOpen: true,
  },
  {
    question: "Can one project span more than one division?",
    answer: "Yes — that's the most common case, and how the ecosystem is designed to work.",
  },
  {
    question: "What does a typical engagement timeline look like?",
    answer:
      "Most projects move from discovery to launch in 8–16 weeks, depending on scope. Travel programs can be live within days.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. Every engagement includes a scale phase covering maintenance, optimization, and continued growth.",
  },
];

export function FAQ() {
  return (
    <Reveal>
      <section className="sec">
        <div className="lb mb-4">FAQ</div>
        <h2 className="h2 mb-9 max-w-[20ch]">Questions we hear the most.</h2>
        <div>
          {FAQS.map((faq) => (
            <details key={faq.question} className="faq-item" open={faq.defaultOpen}>
              <summary>
                {faq.question}
                <span className="faq-plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
