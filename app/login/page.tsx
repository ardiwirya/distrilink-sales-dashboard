import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm rounded-lg border border-border bg-surface p-8 shadow-sm">
        <div className="mb-6 text-center">
          <p className="text-sm font-medium tracking-wide text-brand-600">
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
    </main>
  );
}
