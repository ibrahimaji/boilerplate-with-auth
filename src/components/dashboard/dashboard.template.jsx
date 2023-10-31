import { Footer } from "@/components/dashboard/dashboard.footer";
import { DashboardNavbar } from "@/components/dashboard/dashboard.navbar"
import { SidebarComponent } from "@/components/dashboard/dashboard.sidebar";

export const DashboardTemplate = ({ children }) => {
  return (
    <main className="flex flex-col h-screen">
      <DashboardNavbar />
      <section className="flex">
        <SidebarComponent />
        {children}
      </section>
      <Footer />

    </main>

  )
}
