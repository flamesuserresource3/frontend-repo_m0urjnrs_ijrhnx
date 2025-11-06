import { ExternalLink, Link as LinkIcon } from "lucide-react";

const resources = [
  {
    title: "Digital SAT Suite – College Board (Official)",
    url: "https://satsuite.collegeboard.org/digital",
    desc:
      "Halaman utama Digital SAT: struktur ujian, domain keterampilan, contoh soal, dan FAQ resmi.",
  },
  {
    title: "Digital SAT – Reading and Writing",
    url: "https://satsuite.collegeboard.org/sat/whats-on-the-test/reading-writing",
    desc:
      "Rincian domain RW: Craft & Structure, Information & Ideas, Standard English Conventions, Expression of Ideas.",
  },
  {
    title: "Digital SAT – Math",
    url: "https://satsuite.collegeboard.org/sat/whats-on-the-test/math",
    desc:
      "Rincian domain Math: Algebra, Advanced Math, Problem-Solving and Data Analysis, Geometry & Trigonometry.",
  },
  {
    title: "Official Digital SAT Practice (Bluebook/Practice)",
    url: "https://satsuite.collegeboard.org/digital/practice-preparation",
    desc:
      "Akses simulasi resmi dan panduan persiapan dari College Board.",
  },
];

export default function Resources() {
  return (
    <section id="resources" className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 sm:mb-14">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Sumber Resmi College Board
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-gray-600 sm:text-base">
            Materi di situs ini dirangkum dari dokumentasi resmi. Gunakan tautan berikut untuk membaca
            orisinalnya dan berlatih langsung.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((r) => (
            <a
              key={r.url}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-sky-300 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-base font-semibold text-gray-900">{r.title}</h3>
                <ExternalLink className="text-gray-400 transition group-hover:text-sky-600" size={18} />
              </div>
              <p className="mt-2 text-sm text-gray-600">{r.desc}</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-sky-700">
                <LinkIcon size={14} /> Kunjungi
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
