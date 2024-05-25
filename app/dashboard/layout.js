import { Inter } from "next/font/google";
import "./style.scss";

export const metadata = {
  title: "Dashboard App",
  description: "Project IGI",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
