import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import Resources from "./components/Resources";
import { Section, Note } from "./components/Sections";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Roadmap />

      <Section id="rw-outline" title="Ringkasan Domain Reading & Writing (berdasarkan College Board)">
        <ul>
          <li>
            Craft and Structure: identifikasi tujuan penulis, pilihan kata, struktur, dan relasi antar bagian.
          </li>
          <li>
            Information and Ideas: gagasan utama, bukti pendukung, inferensi, dan interpretasi data.
          </li>
          <li>
            Standard English Conventions: tata bahasa, kesesuaian subjek-predikat, tanda baca.
          </li>
          <li>
            Expression of Ideas: kohesi, transisi, efektivitas kalimat, dan ringkasan.
          </li>
        </ul>
        <Note>
          Outline ini diringkas dari halaman resmi College Board. Untuk praktik soal, gunakan tautan resmi
          pada bagian Sumber.
        </Note>
      </Section>

      <Section id="math-outline" title="Ringkasan Domain Math (berdasarkan College Board)">
        <ul>
          <li>Algebra: persamaan/sistem linear, interpretasi dan pemodelan.</li>
          <li>Advanced Math: ekspresi kompleks, fungsi, transformasi, dan analisis.</li>
          <li>Problem-Solving and Data Analysis: proporsi, persentase, statistik dasar, dan data.</li>
          <li>Geometry & Trigonometry: panjang, sudut, area/volume, trigonometri dasar.</li>
        </ul>
      </Section>

      <Resources />

      <footer className="border-t border-gray-200 py-10">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-gray-500">
          Disusun untuk tujuan edukasi. SAT adalah merek dagang College Board. Konten diringkas ulang dan
          merujuk ke sumber resmi.
        </div>
      </footer>
    </div>
  );
}
