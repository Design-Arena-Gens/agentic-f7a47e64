import clsx from "clsx";

const muscleStacks = [
  { left: "18%", top: "22%", width: "34%", height: "26%", blur: "120px" },
  { left: "52%", top: "30%", width: "28%", height: "22%", blur: "90px" },
  { left: "28%", top: "48%", width: "44%", height: "28%", blur: "140px" },
  { left: "40%", top: "10%", width: "24%", height: "20%", blur: "80px" }
];

export function BioSculpture() {
  return (
    <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-[2.5rem] border border-white/10 bg-slateDeep shadow-[0_0_70px_rgba(253,58,105,0.15)]">
      <div className="absolute inset-0 bg-radial-grid" />
      <div className="absolute -left-5 top-8 h-32 w-32 rounded-full bg-white/8 blur-2xl" />
      <div className="absolute -right-16 bottom-12 h-40 w-40 rounded-full bg-muscle/30 blur-3xl" />

      <div className="relative h-full w-full px-8 py-6">
        <div className="relative mx-auto h-[88%] w-[78%]">
          <div className="absolute inset-x-0 top-4 h-[38%] rounded-full bg-gradient-to-b from-white/30 via-white/10 to-transparent blur-[2px]" />

          {muscleStacks.map((cluster, index) => (
            <div
              key={index}
              className="absolute rounded-full bg-muscle/40"
              style={{
                left: cluster.left,
                top: cluster.top,
                width: cluster.width,
                height: cluster.height,
                filter: `blur(${cluster.blur})`
              }}
            />
          ))}

          <div className="absolute left-[32%] top-[18%] h-[28%] w-[36%] -translate-x-1/2 rounded-full bg-gradient-to-br from-white/80 via-white/40 to-white/10" />
          <div className="absolute left-[68%] top-[18%] h-[28%] w-[36%] -translate-x-1/2 rounded-full bg-gradient-to-bl from-white/80 via-white/40 to-white/10" />

          <div className="absolute left-1/2 top-[38%] h-[46%] w-[62%] -translate-x-1/2 rounded-[45%_45%_40%_40%/55%_55%_45%_45%] bg-gradient-to-br from-white/80 via-white/20 to-white/10" />

          <div className="absolute left-1/2 top-[70%] h-[38%] w-[70%] -translate-x-1/2 rounded-[55%_55%_50%_50%/70%_70%_45%_45%] bg-gradient-to-t from-muscle/70 via-muscle/40 to-transparent" />

          <div className="absolute inset-x-[22%] top-[34%] h-[4px] rounded-full bg-white/80 blur-[0.5px]" />
          <div className="absolute inset-x-[36%] top-[36%] flex justify-between">
            <span className="h-2 w-8 rounded-full bg-white/90" />
            <span className="h-2 w-8 rounded-full bg-white/90" />
          </div>

          <div className="absolute inset-x-[36%] top-[44%] h-[12%] rounded-full bg-muscle/80 blur-lg opacity-75" />
          <div className="absolute inset-x-[18%] top-[58%] h-[18%] rounded-full bg-muscle/80 blur-[70px] opacity-80" />

          <div className="absolute left-1/2 top-[90%] h-[18%] w-[52%] -translate-x-1/2 rounded-full bg-gradient-to-t from-white/90 via-white/30 to-transparent opacity-70" />
          <div className="absolute left-1/2 top-[92%] h-[18%] w-[66%] -translate-x-1/2 overflow-hidden rounded-[50%_50%_30%_30%/60%_60%_40%_40%]">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
            <div className="absolute left-1/2 top-[10%] h-[40%] w-[60%] -translate-x-1/2 rounded-full bg-muscle/60 blur-[40px]" />
          </div>
        </div>
        <div
          className={clsx(
            "absolute inset-x-0 bottom-6 mx-auto flex w-11/12 flex-wrap justify-between gap-2 text-xs text-white/70"
          )}
        >
          <label className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-muscle" />
            <span>Myostatin Knockout</span>
          </label>
          <label className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-white/70" />
            <span>Dermal Micro-shave</span>
          </label>
        </div>
      </div>
    </div>
  );
}
