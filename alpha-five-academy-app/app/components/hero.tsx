export function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <h1 className="flex items-center text-5xl font-bold tracking-tight sm:text-7xl">
        Coming Soon
        <span className="ml-3 flex items-center" aria-hidden="true">
          <span className="animate-[blink_1.5s_steps(2,start)_infinite]">
            .
          </span>
          <span className="animate-[blink_1.5s_steps(2,start)_infinite] [animation-delay:0.3s]">
            .
          </span>
          <span className="animate-[blink_1.5s_steps(2,start)_infinite] [animation-delay:0.6s]">
            .
          </span>
        </span>
      </h1>
    </section>
  );
}
