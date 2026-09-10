"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { SalesPerformance } from "@/data/sales-performance";

interface EffectivenessChartProps {
  data: SalesPerformance[];
}

export function EffectivenessChart({ data }: EffectivenessChartProps) {
  const chartData = data.map((sales) => ({
    nama: sales.namaSales.split(" ")[0],
    efektivitas: sales.efektivitasVisitPersen,
  }));

  return (
    <div className="rounded-lg border border-border bg-surface p-5">
      <p className="text-sm font-medium text-foreground">
        Efektivitas Kunjungan per Sales
      </p>
      <p className="mt-0.5 text-xs text-muted">
        Realisasi kunjungan dibanding target kunjungan harian (%)
      </p>

      {chartData.length === 0 ? (
        <p className="mt-8 text-center text-sm text-muted">
          Tidak ada data untuk ditampilkan.
        </p>
      ) : (
        <div className="mt-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ left: -20 }}>
              <CartesianGrid vertical={false} stroke="var(--border)" />
              <XAxis
                dataKey="nama"
                tick={{ fontSize: 12, fill: "var(--muted)" }}
                axisLine={{ stroke: "var(--border)" }}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "var(--muted)" }}
                axisLine={false}
                tickLine={false}
                domain={[0, 100]}
              />
              <Tooltip
                formatter={(value) => [`${value}%`, "Efektivitas"]}
                cursor={{ fill: "var(--background)" }}
              />
              <Bar
                dataKey="efektivitas"
                fill="var(--brand-500)"
                radius={[4, 4, 0, 0]}
                barSize={36}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
