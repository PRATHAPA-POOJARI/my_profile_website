import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

const FooterRoot = styled(Box)({
  background:"#040a11",
  borderTop:"0.5px solid rgba(0,255,180,0.1)",
  padding:"48px",
  "@media (max-width:600px)":{ padding:"32px 24px" },
});

const Logo = styled(Link)({
  fontFamily:"'Cinzel',serif", fontSize:18, fontWeight:900, color:"#00ffb4",
  letterSpacing:"0.15em", textDecoration:"none", textTransform:"uppercase",
  "& span":{ color:"rgba(255,255,255,0.3)" },
});

const FooterLink = styled(Link)({
  fontFamily:"'Space Mono',monospace", fontSize:10, color:"rgba(255,255,255,0.35)",
  textDecoration:"none", letterSpacing:"0.1em", textTransform:"uppercase",
  transition:"color 0.3s",
  "&:hover":{ color:"#00ffb4" },
});

const SocialIcon = styled(Box)({
  width:36, height:36, display:"flex", alignItems:"center", justifyContent:"center",
  border:"0.5px solid rgba(255,255,255,0.1)", color:"rgba(255,255,255,0.35)",
  cursor:"pointer", transition:"all 0.3s",
  "&:hover":{ border:"0.5px solid rgba(0,255,180,0.4)", color:"#00ffb4", background:"rgba(0,255,180,0.05)" },
});

export const Footer = () => (
  <FooterRoot>
    <Box sx={{ maxWidth:1100, mx:"auto", display:"flex", flexDirection:{ xs:"column", md:"row" }, alignItems:{ xs:"flex-start", md:"center" }, justifyContent:"space-between", gap:4 }}>
      <Box>
        <Logo to="/">Dev<span>.</span>Portfolio</Logo>
        <Typography sx={{ fontFamily:"'Space Mono',monospace", fontSize:10, color:"rgba(255,255,255,0.25)", mt:1, letterSpacing:"0.08em" }}>
          Built with React + MUI + Node.js
        </Typography>
      </Box>

      <Stack direction="row" spacing={4}>
        {[{ label:"Home", path:"/" },{ label:"About", path:"/about" },{ label:"Projects", path:"/portfolio" },{ label:"Skills", path:"/skills" },{ label:"Contact", path:"/contact" }].map(({ label, path }) => (
          <FooterLink key={label} to={path}>{label}</FooterLink>
        ))}
      </Stack>

      <Stack direction="row" spacing={1}>
        {[LinkedInIcon, GitHubIcon, TwitterIcon].map((Icon, i) => (
          <SocialIcon key={i}><Icon sx={{ fontSize:16 }} /></SocialIcon>
        ))}
      </Stack>
    </Box>

    <Box sx={{ maxWidth:1100, mx:"auto", mt:4, pt:4, borderTop:"0.5px solid rgba(255,255,255,0.05)", display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:2 }}>
      <Typography sx={{ fontFamily:"'Space Mono',monospace", fontSize:10, color:"rgba(255,255,255,0.2)", letterSpacing:"0.08em" }}>
        © {new Date().getFullYear()} Prathapa Poojari. All rights reserved.
      </Typography>
      <Typography sx={{ fontFamily:"'Space Mono',monospace", fontSize:10, color:"rgba(255,255,255,0.2)", letterSpacing:"0.08em" }}>
        Designed & Developed with ♥
      </Typography>
    </Box>
  </FooterRoot>
);