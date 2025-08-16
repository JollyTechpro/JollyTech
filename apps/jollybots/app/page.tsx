import StatCard from "../components/StatCard";

export default function Page() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <StatCard title="Active Bots" value="0" hint="Start from Settings" />
      <StatCard title="24h PnL" value="€0.00" hint="Connect exchange" />
      <StatCard title="Uptime" value="—" hint="Service offline" />
      <div className="md:col-span-3 rounded-2xl border border-slate-700 bg-panel p-4">
        <h2 className="mb-2 text-lg font-semibold">Welcome to JollyBots</h2>
        <p className="text-muted">
          Minimal starter. Connect API keys (Binance/Alpaca) in the backend and fetch status here.
        </p>
      </div>
    </div>
  );
}
