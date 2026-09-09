// Dataset performa harian tim sales, sesuai contoh dataset pada dokumen test case.
// Disimpan sebagai file lokal karena data ini memang tidak tersedia di API publik mana pun.
//
// Catatan: dokumen test case menyebutkan field "kunjungan_unplanned" pada tabel deskripsi
// field, tapi field tersebut tidak muncul di contoh dataset JSON. Karena tidak ada nilainya,
// field ini tidak diikutsertakan di sini maupun di tampilan dashboard.

export interface SalesPerformance {
  namaSales: string;
  area: string;
  kunjunganPlanned: number;
  kunjunganRealisasi: number;
  efektivitasVisitPersen: number;
  totalOrderRp: number;
  jumlahOrderOos: number;
}

export const salesPerformance: SalesPerformance[] = [
  {
    namaSales: "Dimas Rasyid",
    area: "Bandung Kota",
    kunjunganPlanned: 18,
    kunjunganRealisasi: 15,
    efektivitasVisitPersen: 83,
    totalOrderRp: 6880002,
    jumlahOrderOos: 2,
  },
  {
    namaSales: "Siti Aminah",
    area: "Bandung Barat",
    kunjunganPlanned: 20,
    kunjunganRealisasi: 20,
    efektivitasVisitPersen: 100,
    totalOrderRp: 9250000,
    jumlahOrderOos: 0,
  },
  {
    namaSales: "Andi Wijaya",
    area: "Cimahi",
    kunjunganPlanned: 15,
    kunjunganRealisasi: 10,
    efektivitasVisitPersen: 67,
    totalOrderRp: 4100000,
    jumlahOrderOos: 4,
  },
  {
    namaSales: "Rina Puspita",
    area: "Bandung Timur",
    kunjunganPlanned: 22,
    kunjunganRealisasi: 19,
    efektivitasVisitPersen: 86,
    totalOrderRp: 7600000,
    jumlahOrderOos: 1,
  },
  {
    namaSales: "Fajar Nugroho",
    area: "Soreang",
    kunjunganPlanned: 16,
    kunjunganRealisasi: 12,
    efektivitasVisitPersen: 75,
    totalOrderRp: 5300000,
    jumlahOrderOos: 3,
  },
];
