import "./../styles/globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "JollyBots — AI Trading Bots",
  description: "Dashboard for Binance/Alpaca bots with status and charts."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
