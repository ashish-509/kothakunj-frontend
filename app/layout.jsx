import { ThemeProvider } from "../lib/ThemeContext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata =
{
  title: "Kothakunj",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
	  <ThemeProvider>
	  {children}
	  </ThemeProvider>
	  </body>
    </html>
  );
}
