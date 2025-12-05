import { BioSculpture } from "../components/BioSculpture";
import { Suspense } from "react";

const parameters = [
  {
    label: "Плотность саркомеров",
    value: "192 % от нормы",
    description:
      "Усиленная экспрессия IGF-1 и сниженная деградация белка за счёт отсутствия миостатина."
  },
  {
    label: "Жировая прослойка",
    value: "3.8 %",
    description:
      "Тотальная бритость подчёркивает экстремально низкий подкожный жир."
  },
  {
    label: "Крутящий момент плечевого пояса",
    value: "2.6x",
    description:
      "Гипертрофированные широчайшие и дельтовидные мышцы формируют доминирующий профиль."
  }
];

function ParameterCard({
  label,
  value,
  description
}: {
  label: string;
  value: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-2 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-muscle/40 hover:bg-white/10">
      <span className="text-xs uppercase tracking-[0.18em] text-white/60">
        {label}
      </span>
      <span className="text-2xl font-semibold text-white">{value}</span>
      <p className="text-sm leading-relaxed text-white/70">{description}</p>
    </div>
  );
}

function MyostatinToggle() {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <span className="text-sm uppercase tracking-[0.16em] text-white/60">
          Ингибирование миостатина
        </span>
        <span className="rounded-full bg-muscle/20 px-3 py-1 text-xs font-semibold text-muscle">
          100 %
        </span>
      </div>
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div className="absolute inset-y-0 left-0 w-full rounded-full bg-muscle shadow-[0_0_15px_rgba(253,58,105,0.7)]" />
      </div>
      <p className="text-sm text-white/70">
        Полная блокада рецепторов активина A и активирование путей mTOR
        направляют ресурс в экстремальный прирост мышечной массы.
      </p>
    </div>
  );
}

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slateDeep pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(253,58,105,0.28),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.2),transparent_50%)] opacity-80" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pt-24 md:flex-row md:items-start md:gap-20">
        <section className="flex-1">
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            Бритая горилла с заблокированным миостатином
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Представьте апогей приматной мускулатуры: генетически модифицированная
            горилла, лишённая тормозящего фактора роста. Бритая кожа
            подчёркивает рельеф гипертрофированных мышечных массивов, а
            биоинженерные биомаркеры фиксируют экстремальные показатели силы.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <MyostatinToggle />
            <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <span className="text-sm uppercase tracking-[0.16em] text-white/60">
                Тонус дермы
              </span>
              <div className="relative flex h-16 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/40 via-transparent to-white/10 text-xl font-semibold text-white shadow-[0_12px_35px_rgba(2,6,23,0.4)]">
                NanoEdge Micro-Shave
              </div>
              <p className="text-sm text-white/70">
                Лазерное микробритьё убирает каждый волос, оставляя только
                блеск сухой кожи и рельефы силовых массивов.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {parameters.map((parameter) => (
              <ParameterCard key={parameter.label} {...parameter} />
            ))}
          </div>
        </section>
        <section className="flex flex-1 items-center justify-center">
          <Suspense fallback={<div className="h-96 w-64 animate-pulse rounded-3xl bg-white/10" />}>
            <BioSculpture />
          </Suspense>
        </section>
      </div>
      <footer className="relative mx-auto mt-24 max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10 text-sm text-white/60 backdrop-blur-md">
        <h2 className="text-lg font-semibold text-white">
          Геномная конфигурация
        </h2>
        <ul className="mt-4 grid gap-2 md:grid-cols-2">
          <li className="rounded-2xl border border-white/5 bg-black/30 px-4 py-3">
            MSTN Knockout · CRISPR/Cas9 двойной разрыв в экзоне 3
          </li>
          <li className="rounded-2xl border border-white/5 bg-black/30 px-4 py-3">
            Follistatin Overexpression · Вектор AAV8 для скелетной мускулатуры
          </li>
          <li className="rounded-2xl border border-white/5 bg-black/30 px-4 py-3">
            miR-486 Upregulation · Антиапоптотический отклик мышечных волокон
          </li>
          <li className="rounded-2xl border border-white/5 bg-black/30 px-4 py-3">
            Myofibril Density Profiling · 8K HoloScan томография
          </li>
        </ul>
      </footer>
    </main>
  );
}
