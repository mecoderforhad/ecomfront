'use client';

import { useState } from 'react';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  IconButton,
  Toolbar,
  Typography,
  Box,
} from '@mui/material';
import { HiMenuAlt3 } from 'react-icons/hi';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { setSidebarState } from '@/lib/actions/sidebar';

interface SidebarProps {
  initialState: 'collapsed' | 'expanded';
  menusData: {
    id: number;
    title: string;
    submenus?: {
      id: number;
      title: string;
    }[];
  }[];
}

export default function SideBar({ initialState, menusData }: SidebarProps) {
  const [sidebarOpen, setSidebarOpen] = useState(initialState === 'expanded');
  const [openMenus, setOpenMenus] = useState<number[]>([]);

  const toggleSidebar = async () => {
    const newState = sidebarOpen ? 'collapsed' : 'expanded';
    setSidebarOpen(!sidebarOpen);
    await setSidebarState(newState);
  };

  const toggleSubmenu = (id: number) => {
    setOpenMenus((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <Drawer
        variant="permanent"
        open={sidebarOpen}
        sx={{
          width: sidebarOpen ? 240 : 64,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: sidebarOpen ? 240 : 64,
            transition: 'width 0.3s',
            overflowX: 'hidden',
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: sidebarOpen ? 'space-between' : 'center',
            alignItems: 'center',
            px: 2,
            py: 1,
          }}
        >
          {sidebarOpen && (
            <Typography variant="h6" noWrap>
              {/* <img src="/logo.png" alt="logo" width={32} className="inline mr-2" /> */}
              Ecommerce
            </Typography>
          )}
          <IconButton onClick={toggleSidebar}>
            <HiMenuAlt3 />
          </IconButton>
        </Toolbar>

        <List>
          {menusData?.map((menu) => {
            const hasSubmenus = menu?.submenus?.length ? menu?.submenus?.length > 0 : false ;
            const isOpen = openMenus.includes(menu.id);

            return (
              <Box key={menu.id}>
                <ListItemButton onClick={() => toggleSubmenu(menu.id)}>
                  {sidebarOpen && <ListItemText primary={menu.title} />}
                  {hasSubmenus && (isOpen ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>

                {hasSubmenus && (
                  <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {menu.submenus?.map((submenu) => (
                        <ListItemButton key={submenu.id} sx={{ pl: 4 }}>
                          <ListItemText primary={submenu.title} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}
              </Box>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
}