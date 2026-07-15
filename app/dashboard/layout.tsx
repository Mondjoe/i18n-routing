import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import DashboardShell from './components/DashboardShell'
import { SidebarProvider } from './components/SidebarContext'

export default function DashboardLayout({ children }) {
  return (
    <SidebarProvider>
      <DashboardShell>
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Topbar />
          <main className="p-6">
            {children}
          </main>
        </div>
      </DashboardShell>
    </SidebarProvider>
  )
}