import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "Fisheye",
  description: "Afficher vos photos professionnels",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={dmSans.variable}>
      <body className={dmSans.className}>
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
