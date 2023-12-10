import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className="bg-slate-900 h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
