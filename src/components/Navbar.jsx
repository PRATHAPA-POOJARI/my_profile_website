import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, styled, keyframes } from "@mui/system";
import { Button, Stack, IconButton, Drawer, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const slideDown = keyframes`
  from { transform: translateY(-100%); opacity: 0; }
  to   { transform: translateY(0);     opacity: 1; }
`;

const NavRoot = styled(Box)(({ scrolled }) => ({
  position: "fixed",
  top: 0, left: 0, right: 0,
  zIndex: 1000,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 48px",
  height: 64,
  background: scrolled === "true"
    ? "rgba(6,12,20,0.92)"
    : "transparent",
  backdropFilter: scrolled === "true" ? "blur(12px)" : "none",
  borderBottom: scrolled === "true"
    ? "0.5px solid rgba(0,255,180,0.12)"
    : "0.5px solid transparent",
  transition: "all 0.4s ease",
  animation: `${slideDown} 0.6s ease forwards`,
  "@media (max-width:600px)": { padding: "0 20px" },
}));

const Logo = styled(Link)({
  fontFamily: "'Cinzel', serif",
  fontSize: 20,
  fontWeight: 900,
  color: "#00ffb4",
  letterSpacing: "0.15em",
  textDecoration: "none",
  textTransform: "uppercase",
  "& span": { color: "rgba(255,255,255,0.3)" },
});

const NavLink = styled(Link)(({ active }) => ({
  fontFamily: "'Space Mono', monospace",
  fontSize: 11,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  textDecoration: "none",
  color: active === "true" ? "#00ffb4" : "rgba(255,255,255,0.5)",
  position: "relative",
  transition: "color 0.3s",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: -4, left: 0,
    width: active === "true" ? "100%" : "0%",
    height: 1,
    background: "#00ffb4",
    transition: "width 0.3s",
  },
  "&:hover": { color: "#00ffb4", "&::after": { width: "100%" } },
}));

const HireBtn = styled(Button)({
  fontFamily: "'Space Mono', monospace !important",
  fontSize: 11,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  background: "transparent",
  border: "0.5px solid rgba(0,255,180,0.5)",
  color: "#00ffb4",
  padding: "7px 20px",
  borderRadius: 0,
  minWidth: "auto",
  "&:hover": { background: "rgba(0,255,180,0.08)", borderColor: "#00ffb4" },
});

const NAV_ITEMS = [
  { label: "Home",     path: "/" },
  { label: "About",    path: "/about" },
  { label: "Projects", path: "/portfolio" },
  { label: "Skills",   path: "/skills" },
  { label: "Contact",  path: "/contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <NavRoot scrolled={scrolled.toString()}>
        <Logo to="/">Dev<span>.</span>Portfolio</Logo>

        {/* Desktop links */}
        <Stack direction="row" spacing={4} sx={{ display: { xs: "none", md: "flex" } }}>
          {NAV_ITEMS.map(({ label, path }) => (
            <NavLink key={label} to={path} active={(location.pathname === path).toString()}>
              {label}
            </NavLink>
          ))}
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center">
          <HireBtn component={Link} to="/contact" sx={{ display: { xs: "none", sm: "flex" } }}>
            Hire Me ↗
          </HireBtn>
          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { md: "none" }, color: "#00ffb4" }}
          >
            <MenuIcon />
          </IconButton>
        </Stack>
      </NavRoot>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            background: "#060c14",
            width: 260,
            borderLeft: "0.5px solid rgba(0,255,180,0.15)",
            p: 3,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 4 }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "#00ffb4" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {NAV_ITEMS.map(({ label, path }) => (
            <ListItem key={label} sx={{ px: 0, py: 1 }}>
              <NavLink
                to={path}
                active={(location.pathname === path).toString()}
                onClick={() => setDrawerOpen(false)}
                style={{ fontSize: 14 }}
              >
                {label}
              </NavLink>
            </ListItem>
          ))}
        </List>
        <HireBtn
          fullWidth
          component={Link}
          to="/contact"
          onClick={() => setDrawerOpen(false)}
          sx={{ mt: 4 }}
        >
          Hire Me ↗
        </HireBtn>
      </Drawer>
    </>
  );
};