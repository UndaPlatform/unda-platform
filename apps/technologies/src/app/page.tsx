export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-white px-6 dark:bg-black">
      <main className="flex max-w-xl flex-col items-center gap-4 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          Coming soon
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
          Unda Technologies
        </h1>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Software engineering, artificial intelligence, automation, and SaaS products.
        </p>
      </main>
    </div>
  );
}
