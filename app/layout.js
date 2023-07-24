import "../styles/globals.scss";
import { Roboto } from "next/font/google";
import { ReduxProvider } from "@/redux/provider";

const roboto = Roboto({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Simple Hotel Check",
  description: "Поиск отелей",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
