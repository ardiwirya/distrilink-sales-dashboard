"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { DashboardHeader } from "@/components/dashboard-header";
import { SummaryCards } from "@/components/summary-cards";
import { EffectivenessChart } from "@/components/effectiveness-chart";
import { SearchFilterBar } from "@/components/search-filter-bar";
import { SalesTable } from "@/components/sales-table";
import { salesPerformance } from "@/data/sales-performance";
import { clearSession, getSession, Session } from "@/lib/session";
import {
  calculateSalesSummary,
  filterSalesPerformance,
  getAreaOptions,
} from "@/lib/sales-summary";

export default function DashboardPage() {
  const router = useRouter();
  // undefined = belum dicek, null = tidak ada session, Session = sudah login.
  const [session, setSession] = useState<Session | null | undefined>(undefined);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArea, setSelectedArea] = useState("Semua Area");

  // Dashboard ini hanya boleh diakses setelah login. Karena session disimpan di
  // localStorage (client-side), pengecekan juga dilakukan di client saat halaman
  // dimuat, lalu redirect ke /login kalau session tidak ditemukan.
  useEffect(() => {
    // Membaca localStorage (sumber di luar React) saat halaman pertama kali
    // dimuat, bukan menurunkan state dari props/state lain — jadi pola effect
    // ini memang tepat, meski lint rule di bawah menganggapnya mencurigakan.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSession(getSession());
  }, []);

  useEffect(() => {
    if (session === null) {
      router.replace("/login");
    }
  }, [session, router]);

  const summary = useMemo(
    () => calculateSalesSummary(salesPerformance),
    []
  );
  const areaOptions = useMemo(
    () => getAreaOptions(salesPerformance),
    []
  );
  const filteredSales = useMemo(
    () => filterSalesPerformance(salesPerformance, searchTerm, selectedArea),
    [searchTerm, selectedArea]
  );

  function handleLogout() {
    clearSession();
    router.replace("/login");
  }

  if (!session) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-sm text-muted">Memuat...</p>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader
        userFullName={`${session.firstName} ${session.lastName}`}
        onLogout={handleLogout}
      />

      <main className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6">
        <SummaryCards summary={summary} />

        <EffectivenessChart data={filteredSales} />

        <section className="flex flex-col gap-4">
          <SearchFilterBar
            searchTerm={searchTerm}
            onSearchTermChange={setSearchTerm}
            selectedArea={selectedArea}
            onSelectedAreaChange={setSelectedArea}
            areaOptions={areaOptions}
          />
          <SalesTable data={filteredSales} />
        </section>
      </main>
    </div>
  );
}
