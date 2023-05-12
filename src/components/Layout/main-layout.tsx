"use client";

import Footer from "../Footer";
import Header from "../Header";
function MainLayout({
  navigation,
  children,
}: {
  navigation: { label: string; url: string }[];
  children: React.ReactNode;
}) {
  return (
    <>
      <Header navigation={navigation} />
      <main className="px-4 lg:px-40 py-20">{children}</main>
      <Footer />
    </>
  );
}
export default MainLayout;
