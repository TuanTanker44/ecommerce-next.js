import Footer from "./components/common/Footer";
import "./globals.css";
import Header from "@/app/components/common/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-poppins antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
