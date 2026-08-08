export function DashboardMockup() {
  return (
    <div
      className="enter-scale relative mx-auto w-full max-w-xl"
      style={{ animationDelay: "0.3s" }}
    >
      <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-brand-violet/20 blur-[80px]" />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-2 shadow-2xl shadow-black/40 backdrop-blur-sm">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/auto_reply-poster.jpg"
          width={640}
          height={360}
          aria-label="QueryReply AI auto reply demo"
          className="w-full rounded-xl"
        >
          <source src="/auto_reply.webm" type="video/webm" />
          <source src="/auto_reply.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
