export default function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-[#0c1420]/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <b>JollyBots</b>
        <nav className="flex gap-4 text-sm text-muted">
          <a href="/apps/jollyshare/" className="hover:text-white">JollyShare</a>
          <a href="/apps/jollyworld/" className="hover:text-white">JollyWorld</a>
        </nav>
      </div>
    </header>
  );
}
