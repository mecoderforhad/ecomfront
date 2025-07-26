"use client";

import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  MdShoppingCart,
  MdArrowForwardIos,
  MdLogout,
  MdSettings,
} from "react-icons/md";
import MenuIcon from "@mui/icons-material/Menu";
import { useSession, signOut } from "next-auth/react";
import ThemeToggleButton from "@/components/ui/button/ThemeToggleButton";

interface TopbarProps {
  menusData: {
    id: number;
    title: string;
    submenus?: {
      id: number;
      title: string;
    }[];
  }[];
}

export function TopNavBar({ menusData }: TopbarProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [user, setUser] = useState<any>({});
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: number]: boolean }>(
    {}
  );
  const session: any = useSession();

  useEffect(() => {
    setUser(session?.data?.user);
  }, [session.data]);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = async () => {
    await signOut();
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDropdownToggle = (menuId: number) => {
    setOpenSubmenus((prev) => ({ ...prev, [menuId]: !prev[menuId] }));
  };

  return (
    <>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap>
            
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <ThemeToggleButton />
            <IconButton onClick={handleMenu}>
              <Avatar
                alt={user?.name}
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              />
            </IconButton>

            <IconButton
              color="inherit"
              edge="end"
              onClick={toggleDrawer}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Avatar Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem disabled>
          <Box>
            <Typography variant="subtitle1">{user?.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {user?.email}
            </Typography>
          </Box>
        </MenuItem>
        <MenuItem>
          <MdSettings style={{ marginRight: 8 }} />
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <MdLogout style={{ marginRight: 8 }} />
          Sign out
        </MenuItem>
      </Menu>

      {/* Drawer for Mobile Navigation */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250, p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Ecommerce
          </Typography>
          <List>
            {menusData?.map((menu) =>
              menu?.submenus && menu.submenus.length > 0 ? (
                <Box key={menu.id}>
                  <ListItemButton onClick={() => handleDropdownToggle(menu.id)}>
                    <ListItemIcon>
                      <MdShoppingCart />
                    </ListItemIcon>
                    <ListItemText primary={menu.title} />
                    <MdArrowForwardIos
                      style={{
                        transform: openSubmenus[menu.id]
                          ? "rotate(90deg)"
                          : "rotate(0deg)",
                        transition: "transform 0.2s",
                      }}
                    />
                  </ListItemButton>
                  {openSubmenus[menu.id] &&
                    menu.submenus.map((submenu) => (
                      <ListItem key={submenu.id} disablePadding sx={{ pl: 4 }}>
                        <ListItemButton>
                          <ListItemText primary={submenu.title} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                </Box>
              ) : (
                <ListItem key={menu.id} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <MdShoppingCart />
                    </ListItemIcon>
                    <ListItemText primary={menu.title} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
