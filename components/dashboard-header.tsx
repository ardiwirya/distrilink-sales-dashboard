interface DashboardHeaderProps {
  userFullName: string;
  onLogout: () => void;
}

export function DashboardHeader({ userFullName, onLogout }: DashboardHeaderProps) {
  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="text-sm font-medium tracking-wide text-brand-600">
            Distrilink SAP
          </p>
          <h1 className="text-lg font-semibold text-foreground">
            Dashboard Analisa Performa Salesman
          </h1>
        </div>

        <div className="flex items-center justify-between gap-4 sm:justify-end">
          <p className="text-sm text-muted">
            Masuk sebagai <span className="font-medium text-foreground">{userFullName}</span>
          </p>
          <button
            type="button"
            onClick={onLogout}
            className="rounded-md border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-background"
          >
            Keluar
          </button>
        </div>
      </div>
    </header>
  );
}
