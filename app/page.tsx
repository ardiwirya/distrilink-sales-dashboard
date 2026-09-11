import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen bg-background">
      {/* Panel kiri, disembunyikan di layar kecil supaya form login tetap jadi
          fokus utama di mobile. Cuma pakai warna brand yang sudah ada di
          globals.css, tidak ada gambar/aset baru. */}
      <div className="hidden w-1/2 flex-col justify-between bg-brand-900 p-12 text-white lg:flex">
        <p className="text-lg font-semibold tracking-wide">Distrilink SAP</p>
        <div>
          <h2 className="text-3xl font-semibold leading-tight">
            Pantau performa
            <br />
            tim sales setiap hari.
          </h2>
          <p className="mt-4 max-w-sm text-sm text-white/70">
            Kunjungan, efektivitas, dan order dari seluruh tim sales — dalam
            satu dashboard.
          </p>
        </div>
        <p className="text-xs text-white/50">Sales Automation Platform</p>
      </div>

      <div className="flex w-full items-center justify-center px-4 lg:w-1/2">
        <div className="w-full max-w-sm rounded-lg border border-border bg-surface p-8 shadow-sm">
          <div className="mb-6 text-center">
            <p className="text-sm font-medium tracking-wide text-brand-600 lg:hidden">
              Distrilink SAP
            </p>
            <h1 className="mt-1 text-xl font-semibold text-foreground">
              Dashboard Analisa Performa Salesman
            </h1>
            <p className="mt-2 text-sm text-muted">
              Masuk untuk memantau performa kunjungan dan order tim sales.
            </p>
          </div>

          <LoginForm />

          <p className="mt-6 text-center text-xs text-muted">
            Gunakan akun DummyJSON, contoh: username{" "}
            <span className="font-mono">emilys</span>, password{" "}
            <span className="font-mono">emilyspass</span>.
          </p>
        </div>
      </div>
    </main>
  );
}
