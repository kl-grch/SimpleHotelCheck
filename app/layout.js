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
