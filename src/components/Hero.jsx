import { Rocket, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 sm:pt-24 sm:pb-20">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-200">
            <BookOpen size={14} />
            Kurikulum SAT berbasis College Board
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Belajar SAT dari Dasar hingga Siap Ujian
          </h1>
          <p className="mt-5 max-w-2xl text-base text-gray-600 sm:text-lg">
            Panduan belajar terstruktur yang dirangkum dari outline resmi College Board untuk Digital
            SAT: Reading & Writing dan Math. Materi di sini diringkas ulang dalam bahasa sederhana dan
            disertai rujukan langsung ke sumber resmi.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#roadmap"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-5 py-3 text-white shadow-sm transition hover:bg-sky-700"
            >
              <Rocket size={18} /> Mulai dari Dasar
            </a>
            <a
              href="#resources"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 shadow-sm transition hover:bg-gray-50"
            >
              Lihat Sumber Resmi
            </a>
          </div>
          <p className="mt-6 text-xs text-gray-500">
            Catatan: Materi disusun ulang berdasarkan pedoman resmi College Board. Silakan gunakan tautan
            resmi untuk latihan dan detail kebijakan terbaru.
          </p>
        </div>
      </div>
    </section>
  );
}
