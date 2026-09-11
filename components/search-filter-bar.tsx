interface SearchFilterBarProps {
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
  selectedArea: string;
  onSelectedAreaChange: (value: string) => void;
  areaOptions: string[];
}

export function SearchFilterBar({
  searchTerm,
  onSearchTermChange,
  selectedArea,
  onSelectedAreaChange,
  areaOptions,
}: SearchFilterBarProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => onSearchTermChange(event.target.value)}
        placeholder="Cari nama sales..."
        className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 sm:max-w-xs"
      />

      <select
        value={selectedArea}
        onChange={(event) => onSelectedAreaChange(event.target.value)}
        className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 sm:w-52"
      >
        {areaOptions.map((area) => (
          <option key={area} value={area}>
            {area}
          </option>
        ))}
      </select>
    </div>
  );
}
