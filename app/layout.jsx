import { ThemeProvider } from "../lib/ThemeContext";
import "./globals.css";


export const metadata =
{
  title: "Kothakunj",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
	  <ThemeProvider>
	  {children}
	  </ThemeProvider>
	  </body>
    </html>
  );
}
