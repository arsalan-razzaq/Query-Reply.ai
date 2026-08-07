import { motion } from "framer-motion";

export function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
      className="relative mx-auto w-full max-w-xl"
    >
      <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-brand-violet/20 blur-[80px]" />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-2 shadow-2xl shadow-black/40 backdrop-blur-sm">
        <img
          src="/auto_reply.gif"
          alt="QueryReply AI auto reply demo"
          width={640}
          height={360}
          fetchPriority="high"
          className="w-full rounded-xl"
        />
      </div>
    </motion.div>
  );
}
