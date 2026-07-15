'use client'

import { createContext, useContext, useState } from 'react'

const SidebarState = createContext<any>(null)

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <SidebarState.Provider value={{ collapsed, setCollapsed }}>
      {children}
    </SidebarState.Provider>
  )
}

export function useSidebar() {
  return useContext(SidebarState)
}