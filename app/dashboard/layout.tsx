import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import DashboardShell from './components/DashboardShell'

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