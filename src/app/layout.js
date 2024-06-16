import React from "react";
import "./globals.css";

export const metadata = {
  title: "Most Played Games of 2024",
  description: "A showcase of the most played games of 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
