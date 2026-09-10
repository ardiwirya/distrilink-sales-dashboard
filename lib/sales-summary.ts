import { SalesPerformance } from "@/data/sales-performance";

export interface SalesSummary {
  totalKunjunganRealisasi: number;
  rataRataEfektivitas: number;
  totalNilaiOrder: number;
}

// Summary selalu dihitung dari seluruh dataset (bukan hasil filter), karena summary
// merepresentasikan performa tim secara keseluruhan, bukan performa hasil pencarian.
export function calculateSalesSummary(data: SalesPerformance[]): SalesSummary {
  const totalKunjunganRealisasi = data.reduce(
    (sum, sales) => sum + sales.kunjunganRealisasi,
    0
  );

  const totalEfektivitas = data.reduce(
    (sum, sales) => sum + sales.efektivitasVisitPersen,
    0
  );
  const rataRataEfektivitas =
    data.length > 0 ? Math.round(totalEfektivitas / data.length) : 0;

  const totalNilaiOrder = data.reduce(
    (sum, sales) => sum + sales.totalOrderRp,
    0
  );

  return { totalKunjunganRealisasi, rataRataEfektivitas, totalNilaiOrder };
}

export function filterSalesPerformance(
  data: SalesPerformance[],
  searchTerm: string,
  area: string
): SalesPerformance[] {
  return data.filter((sales) => {
    const matchesSearch = sales.namaSales
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase());
    const matchesArea = area === "Semua Area" || sales.area === area;
    return matchesSearch && matchesArea;
  });
}

export function getAreaOptions(data: SalesPerformance[]): string[] {
  const areas = Array.from(new Set(data.map((sales) => sales.area)));
  return ["Semua Area", ...areas];
}
