export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_10%,transparent_75%)]" />
      <div className="absolute top-[-10%] left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-brand-violet/30 blur-[140px]" />
      <div className="absolute right-[-10%] top-1/4 h-[26rem] w-[26rem] rounded-full bg-brand-blue/25 blur-[120px]" />
      <div className="absolute left-[-10%] bottom-0 h-[24rem] w-[24rem] rounded-full bg-brand-purple/20 blur-[120px]" />
    </div>
  );
}
