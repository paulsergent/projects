import DashNavBar from "../components/DashNavBar";

export default function DashboardLayout({children}) {
  return (
    <div className="flex flex-col h-screen">
      <DashNavBar />
      <main className="flex-1 bg-gray-100">
        {children}
      </main>
    </div>
  )
}