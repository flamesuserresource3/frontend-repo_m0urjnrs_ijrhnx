import { CheckCircle2 } from "lucide-react";

const modules = [
  {
    id: "rw-foundation",
    title: "Reading & Writing: Fondasi",
    items: [
      "Pemahaman gagasan utama dan detail",
      "Struktur teks & tujuan penulis",
      "Retorika: transisi, koherensi, nada",
      "Standar Bahasa: tata bahasa, tanda baca",
    ],
  },
  {
    id: "rw-advanced",
    title: "Reading & Writing: Lanjutan",
    items: [
      "Sintesis informasi lintas paragraf",
      "Analisis bukti & data (grafik/tabel)",
      "Efektivitas kalimat & pilihan kata",
      "Ringkasan dan parafrase akurat",
    ],
  },
  {
    id: "math-foundation",
    title: "Math: Fondasi",
    items: [
      "Algebra: persamaan linear & sistem",
      "Aritmetika & proporsi, persentase",
      "Ekspresi & manipulasi aljabar",
      "Fungsi dasar & interpretasi grafik",
    ],
  },
  {
    id: "math-advanced",
    title: "Math: Lanjutan",
    items: [
      "Fungsi non-linear (kuadrat, eksponensial)",
      "Geometri & pengukuran",
      "Statistika: mean, median, deviasi, regresi",
      "Pemodelan & pemecahan masalah multi-langkah",
    ],
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 sm:mb-14">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Roadmap Belajar Terstruktur
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-gray-600 sm:text-base">
            Disusun mengikuti domain keterampilan resmi College Board untuk Digital SAT. Mulai dari
            fondasi sebelum naik ke konsep lanjutan.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((m) => (
            <div key={m.id} className="rounded-xl border border-gray-200 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{m.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {m.items.map((it, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 text-sky-600" size={18} />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
