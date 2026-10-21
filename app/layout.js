import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata = {
  title: "Allied HR Solutions | Your Trusted HR Partner",
  description:
    "Allied HR Solutions is a professional HR consulting and workforce management company — recruitment, staffing, payroll and compliance services in Gurugram.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
