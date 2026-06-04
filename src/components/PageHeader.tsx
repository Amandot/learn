import SearchBar from "@/components/SearchBar";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  searchPlaceholder?: string;
}

export default function PageHeader({
  title,
  subtitle,
  searchPlaceholder,
}: PageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
      <div>
        <h1 className="text-2xl font-bold gradient-text">{title}</h1>
        {subtitle && (
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        )}
      </div>
      <SearchBar placeholder={searchPlaceholder} />
    </div>
  );
}
