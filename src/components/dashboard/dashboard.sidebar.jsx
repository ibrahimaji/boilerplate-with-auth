"use client"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

export const SidebarComponent = () => {
  return (
    <Sidebar toggled="true">
      <Menu>
        <MenuItem>Beranda </MenuItem>
        <MenuItem> Tambah Pengunjung</MenuItem>
      </Menu>
    </Sidebar>
  )
}
