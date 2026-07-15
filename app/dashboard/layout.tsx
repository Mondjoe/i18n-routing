export default function DashboardLayout({ children }) {
  return (
    <DashboardShell>
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="p-6">
          {children}
        </main>
      </div>
    </DashboardShell>
  )
}