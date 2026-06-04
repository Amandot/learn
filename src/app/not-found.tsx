import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="p-4 md:p-6 lg:p-8 pt-16 lg:pt-8 min-h-[70vh] flex items-center justify-center">
      <div className="glass-card p-10 md:p-14 text-center max-w-md w-full">
        <p className="text-6xl font-bold gradient-text mb-2">404</p>
        <h1 className="text-lg font-semibold mb-2">Page not found</h1>
        <p className="text-sm text-muted-foreground mb-8">
          The page you&apos;re looking for doesn&apos;t exist or was moved.
        </p>
        <Link href="/" className="btn-primary justify-center inline-flex">
          <Home size={16} />
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
