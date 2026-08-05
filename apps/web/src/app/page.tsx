import { UndaSymbol } from "@/components/brand/unda-symbol";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-bg-default px-6">
      <main className="flex max-w-xl flex-col items-center gap-4 text-center">
        <UndaSymbol className="mb-2 h-8 w-8 text-brand-primary" />
        <p className="text-sm font-medium uppercase tracking-widest text-text-secondary">
          Coming soon
        </p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
          Unda Solutions
        </h1>
        <p className="text-lg leading-8 text-text-secondary">
          Building digital products across creative, technology, and travel services.
        </p>
      </main>
    </div>
  );
}
