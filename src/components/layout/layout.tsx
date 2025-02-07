import React from 'react'
import Header from './header'
import { Sider } from '../sider'
import { TabBar } from '../tabbar/tabbar'
import { tabBarItem, userMenuItem } from '../../core/config'

export interface LayoutProps {
  tabar: tabBarItem[]
  children?: React.ReactNode
  userMenu?: userMenuItem[]
}

export const Layout = ({ userMenu, tabar, children }: LayoutProps) => {
  return (
    <div className='inset-0 h-screen w-screen flex flex-row overflow-hidden'>
      <Sider />

      <div className='w-1 flex flex-1 flex-col'>
        <Header userMenu={userMenu} />
        <div className='flex-1 overflow-auto'>{children}</div>
        <TabBar data={tabar} />
      </div>
    </div>
  )
}
