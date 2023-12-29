import { Footer, Sidebar, TopMenu } from "@/components/index";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen ">
      <TopMenu />
      <Sidebar />
      <div className="md:px-5"> {children}</div>
      <Footer />
    </main>
  );
}
