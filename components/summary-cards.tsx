import { SalesSummary } from "@/lib/sales-summary";
import { formatPercent, formatRupiah } from "@/lib/format";

interface SummaryCardsProps {
  summary: SalesSummary;
}

export function SummaryCards({ summary }: SummaryCardsProps) {
  const cards = [
    {
      label: "Total Kunjungan Hari Ini",
      value: `${summary.totalKunjunganRealisasi} kunjungan`,
    },
    {
      label: "Rata-rata Efektivitas Kunjungan",
      value: formatPercent(summary.rataRataEfektivitas),
    },
    {
      label: "Total Nilai Order",
      value: formatRupiah(summary.totalNilaiOrder),
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.label}
          className="rounded-lg border border-border bg-surface p-5"
        >
          <p className="text-sm text-muted">{card.label}</p>
          <p className="mt-2 text-2xl font-semibold text-foreground">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
}
