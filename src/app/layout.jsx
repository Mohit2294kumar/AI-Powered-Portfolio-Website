import "./globals.css";

export const metadata = {
  title: "Mohit Kumar | MERN Portfolio",
  description: "Animated portfolio website with AI assistant, built for Vercel deployment."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
