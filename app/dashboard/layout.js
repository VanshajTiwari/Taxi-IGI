import { Inter } from "next/font/google";
import "./style.scss";

export const metadata = {
  title: "Dashboard App",
  description: "Project IGI",
};

export default function RootLayout({ children }) {
  return (
    <>
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    <main className="app">{children}</main>
  </>

  );
}
