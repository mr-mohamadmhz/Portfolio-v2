"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const menuItems = [
  "Home",
  "About me",
  "Services",
  "Portfolio",
  "Personal Blog",
  "Contact",
];

export default function ResponsiveAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState<boolean | null>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  React.useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    const prefersDarkMode =
      savedDarkMode === "true" ||
      (!savedDarkMode &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(prefersDarkMode);
  }, []);

  React.useEffect(() => {
    if (darkMode !== null) {
      const html = document.documentElement;
      if (darkMode) {
        html.classList.add("dark");
        localStorage.setItem("darkMode", "true");
      } else {
        html.classList.remove("dark");
        localStorage.setItem("darkMode", "false");
      }
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  if (darkMode === null) {
    setDarkMode(false);
  }

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 3,
          backdropFilter: "blur(10px)",
          background: "rgba(255, 255, 255, 0.8)",
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          className={
            "dark:bg-gray-900 bg-white dark:border-b-gray-950 border-b-gray-400 border-b"
          }
        >
          <Toolbar className="!px-8 container flex justify-between dark:bg-gray-900 dark:text-white bg-white text-black">
            <Typography variant="h6">Logo</Typography>

            {!isMobile && (
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {menuItems.map(item => (
                  <Button key={item} color="inherit">
                    {item}
                  </Button>
                ))}
              </Box>
            )}

            {!isMobile && (
              <Box className="flex items-center">
                <Button
                  className="!bg-purple-800"
                  sx={{
                    borderRadius: "0.5rem",
                    color: "white",
                  }}
                >
                  Hire Me
                </Button>
                <span className="px-4">|</span>
                <Switch
                  checked={darkMode ?? false}
                  onChange={toggleDarkMode}
                  sx={{
                    width: 60,
                    height: 34,
                    padding: 0,
                    "& .MuiSwitch-switchBase": {
                      padding: "4px !important",
                      "&.Mui-checked": {
                        transform: "translateX(26px) !important",
                      },
                    },
                    "& .MuiSwitch-thumb": {
                      width: 26,
                      height: 26,
                      boxShadow: "none",
                    },
                    "& .MuiSwitch-track": {
                      borderRadius: 17,
                      backgroundColor: darkMode ? "#374151" : "#d1d5db",
                      opacity: 1,
                    },
                  }}
                />
              </Box>
            )}

            {isMobile && (
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Box>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
            height: "100vh",
            transition:
              "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
          },
        }}
      >
        <Box
          sx={{ width: 250, p: 2 }}
          className="h-screen dark:bg-gray-900 dark:text-white bg-white text-black"
        >
          <Box className="flex justify-between items-center border-b pb-2 mb-2">
            <label>{darkMode ? "Light Mode" : "Dark Mode"}</label>
            <Switch
              checked={darkMode ?? false}
              onChange={toggleDarkMode}
              sx={{
                width: 60,
                height: 34,
                padding: 0,
                "& .MuiSwitch-switchBase": {
                  padding: "4px !important",
                  "&.Mui-checked": {
                    transform: "translateX(26px) !important",
                  },
                },
                "& .MuiSwitch-thumb": {
                  width: 26,
                  height: 26,
                  boxShadow: "none",
                },
                "& .MuiSwitch-track": {
                  borderRadius: 17,
                  backgroundColor: darkMode ? "#374151" : "#d1d5db",
                  opacity: 1,
                },
              }}
            />
          </Box>
          {menuItems.map(item => (
            <MenuItem
              key={item}
              onClick={() => setDrawerOpen(false)}
              className="transition-all"
            >
              {item}
            </MenuItem>
          ))}
        </Box>
      </Drawer>
    </Box>
  );
}
