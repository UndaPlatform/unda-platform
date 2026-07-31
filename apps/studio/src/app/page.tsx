export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-white px-6 dark:bg-black">
      <main className="flex max-w-xl flex-col items-center gap-4 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          Coming soon
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
          Unda Studio
        </h1>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Brand identity, product design, UI/UX, graphic design, motion design, photography, and
          video editing.
        </p>
      </main>
    </div>
  );
}
