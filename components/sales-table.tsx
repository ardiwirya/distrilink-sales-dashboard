import { SalesPerformance } from "@/data/sales-performance";
import { formatPercent, formatRupiah } from "@/lib/format";

interface SalesTableProps {
  data: SalesPerformance[];
}

export function SalesTable({ data }: SalesTableProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-surface">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="border-b border-border text-muted">
              <th className="px-4 py-3 font-medium">Nama Sales</th>
              <th className="px-4 py-3 font-medium">Area</th>
              <th className="px-4 py-3 font-medium">
                Kunjungan (Realisasi/Target)
              </th>
              <th className="px-4 py-3 font-medium">Efektivitas</th>
              <th className="px-4 py-3 font-medium">Total Order</th>
              <th className="px-4 py-3 font-medium">Order OOS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((sales) => (
              <tr
                key={sales.namaSales}
                className="border-b border-border last:border-0"
              >
                <td className="px-4 py-3 font-medium text-foreground">
                  {sales.namaSales}
                </td>
                <td className="px-4 py-3 text-muted">{sales.area}</td>
                <td className="px-4 py-3 text-muted">
                  {sales.kunjunganRealisasi} / {sales.kunjunganPlanned}
                </td>
                <td className="px-4 py-3">
                  <EfektivitasBadge value={sales.efektivitasVisitPersen} />
                </td>
                <td className="px-4 py-3 text-muted">
                  {formatRupiah(sales.totalOrderRp)}
                </td>
                <td className="px-4 py-3">
                  <OosBadge count={sales.jumlahOrderOos} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {data.length === 0 && (
        <p className="px-4 py-8 text-center text-sm text-muted">
          Tidak ada sales yang cocok dengan pencarian/filter.
        </p>
      )}
    </div>
  );
}

// Threshold sederhana: di bawah 70% = perlu perhatian, 70-84% = cukup,
// 85% ke atas = bagus. Angka batasnya asumsi saya sendiri (tidak diatur di
// dokumen test case), cukup untuk kebutuhan prototype ini.
function EfektivitasBadge({ value }: { value: number }) {
  const colorClass =
    value < 70
      ? "bg-warning/10 text-warning"
      : value < 85
        ? "bg-brand-500/10 text-brand-700"
        : "bg-success/10 text-success";

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${colorClass}`}
    >
      {formatPercent(value)}
    </span>
  );
}

function OosBadge({ count }: { count: number }) {
  if (count === 0) {
    return (
      <span className="inline-flex rounded-full bg-success/10 px-2.5 py-0.5 text-xs font-medium text-success">
        0
      </span>
    );
  }

  return (
    <span className="inline-flex rounded-full bg-warning/10 px-2.5 py-0.5 text-xs font-medium text-warning">
      {count}
    </span>
  );
}
