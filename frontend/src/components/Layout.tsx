import { Heart } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'waikiki-guide');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-xs sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🌺</span>
            <div>
              <h1 className="font-display text-xl font-bold text-foreground leading-tight">
                Getting Around Waikiki
              </h1>
              <p className="text-xs text-muted-foreground font-sans hidden sm:block">
                Your complete Oahu transportation guide
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-sans text-muted-foreground hidden md:block">
              🌊 Aloha, traveler!
            </span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
              <span className="text-2xl">🌺</span>
              <span className="font-display font-semibold text-foreground">Getting Around Waikiki</span>
              <span>·</span>
              <span>Your tropical travel companion</span>
            </div>
            <div className="flex flex-col items-center md:items-end gap-1">
              <p className="text-xs text-muted-foreground font-sans">
                © {year} Getting Around Waikiki. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground font-sans flex items-center gap-1">
                Built with{' '}
                <Heart className="w-3 h-3 fill-coral-500 text-coral-500" />
                {' '}using{' '}
                <a
                  href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  caffeine.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
