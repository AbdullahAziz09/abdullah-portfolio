export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row">
        <p>&copy; 2026 Abdullah Aziz. All rights reserved.</p>
        <p className="flex items-center gap-4">
          <a href="mailto:abdullah009aziz@gmail.com" className="hover:text-accent">
            abdullah009aziz@gmail.com
          </a>
          <span className="text-border">|</span>
          <a href="https://wa.me/923455550677" className="hover:text-accent">
            0345 5550677
          </a>
        </p>
      </div>
    </footer>
  );
}
