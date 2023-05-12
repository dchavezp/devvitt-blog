import { getNavigation } from "@/services/api.service";
import { use } from "react";
import "./globals.css";
import MainLayout from "@/components/Layout/main-layout";

export const metadata = {
  title: "Devvitt Blog Site",
  description:
    "Personal blog about technology information and software development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { navigation } = use(getNavigation());

  return (
    <html lang="en">
      <body>
        <MainLayout navigation={navigation ?? []}>{children}</MainLayout>
      </body>
    </html>
  );
}
