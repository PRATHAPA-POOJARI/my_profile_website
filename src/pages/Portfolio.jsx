import React, { useState } from "react";
import { Box, Grid, Typography, Stack, Chip, Button } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

const fadeUp = keyframes`from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}`;

const Root = styled(Box)({ background:"#060c14", minHeight:"100vh", padding:"100px 0 80px", position:"relative" });
const SectionLabel = styled(Typography)({ fontFamily:"'Space Mono',monospace", fontSize:11, color:"#00ffb4", letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:12 });
const SectionTitle = styled(Typography)({ fontFamily:"'Cinzel',serif", fontSize:{ xs:32, md:48 }, fontWeight:900, color:"#fff", lineHeight:1.1, marginBottom:16 });

const FILTERS = ["All","React","Node.js","MongoDB","Full Stack","API"];

const PROJECTS = [
  {
    title:"ShopNova E-Commerce",
    desc:"Full-stack MERN e-commerce platform with Stripe payments, JWT auth, Redux cart, and admin dashboard.",
    tags:["React","Node.js","MongoDB","Redux","Stripe"],
    color:"#00ffb4",
    live:"#", github:"#",
    stat:{ label:"Products", value:"2.4k" },
  },
  {
    title:"DevCollab API",
    desc:"RESTful collaboration API with real-time WebSocket events, role-based access, and MongoDB aggregation pipelines.",
    tags:["Node.js","Express","MongoDB","Socket.io"],
    color:"#61dafb",
    live:"#", github:"#",
    stat:{ label:"Endpoints", value:"80+" },
  },
  {
    title:"TaskFlow Dashboard",
    desc:"Project management SaaS with drag-and-drop Kanban, team workspaces, and analytics built with MUI Data Grid.",
    tags:["React","Material UI","Node.js","Full Stack"],
    color:"#4b9cff",
    live:"#", github:"#",
    stat:{ label:"Active Users", value:"5k+" },
  },
  {
    title:"AuthShield Middleware",
    desc:"Production-ready Express middleware for JWT, OAuth2, refresh tokens, and rate limiting.",
    tags:["Node.js","API","Express","MongoDB"],
    color:"#f0c040",
    live:"#", github:"#",
    stat:{ label:"Downloads", value:"12k" },
  },
  {
    title:"HealthTrack App",
    desc:"MERN health tracking app with dynamic charts (Recharts), meal logging, and personalized dashboards.",
    tags:["React","MongoDB","Full Stack","Node.js"],
    color:"#84ce3b",
    live:"#", github:"#",
    stat:{ label:"Metrics Logged", value:"1M+" },
  },
  {
    title:"RealEstate Finder",
    desc:"Property listing platform with geolocation filtering, image upload (Cloudinary), and Mapbox integration.",
    tags:["React","Node.js","MongoDB","API"],
    color:"#ff7c5c",
    live:"#", github:"#",
    stat:{ label:"Listings", value:"8k+" },
  },
];

const ProjectCard = styled(Box)(({ accentcolor }) => ({
  background:"rgba(255,255,255,0.02)",
  border:"0.5px solid rgba(255,255,255,0.08)",
  padding:"28px",
  position:"relative",
  overflow:"hidden",
  transition:"all 0.3s ease",
  cursor:"default",
  "&::before":{
    content:'""', position:"absolute", top:0, left:0,
    width:"100%", height:"2px",
    background: accentcolor || "#00ffb4",
    transform:"scaleX(0)", transformOrigin:"left",
    transition:"transform 0.4s ease",
  },
  "&:hover":{ background:"rgba(255,255,255,0.04)", border:"0.5px solid rgba(255,255,255,0.15)", transform:"translateY(-4px)" },
  "&:hover::before":{ transform:"scaleX(1)" },
}));

const FilterBtn = styled(Button)(({ active }) => ({
  fontFamily:"'Space Mono',monospace !important",
  fontSize:10, letterSpacing:"0.1em", textTransform:"uppercase",
  background: active === "true" ? "rgba(0,255,180,0.1)" : "transparent",
  color: active === "true" ? "#00ffb4" : "rgba(255,255,255,0.4)",
  border: active === "true" ? "0.5px solid rgba(0,255,180,0.4)" : "0.5px solid rgba(255,255,255,0.1)",
  padding:"6px 14px", borderRadius:0, minWidth:"auto",
  "&:hover":{ background:"rgba(0,255,180,0.07)", color:"#00ffb4", border:"0.5px solid rgba(0,255,180,0.3)" },
}));

const IconBtn = styled(Button)({
  fontFamily:"'Space Mono',monospace !important", fontSize:10, letterSpacing:"0.08em",
  textTransform:"uppercase", background:"transparent", color:"rgba(255,255,255,0.45)",
  border:"0.5px solid rgba(255,255,255,0.12)", padding:"5px 12px", borderRadius:0, minWidth:"auto",
  "&:hover":{ background:"rgba(255,255,255,0.04)", color:"#fff", border:"0.5px solid rgba(255,255,255,0.3)" },
});

export const Portfolio = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.tags.some(t => t === active));

  return (
    <Root>
      <Box sx={{ maxWidth:1100, mx:"auto", px:{ xs:3, md:6 } }}>
        <Box sx={{ mb:6, opacity:0, animation:`${fadeUp} 0.7s 0.1s forwards` }}>
          <SectionLabel>My Work</SectionLabel>
          <SectionTitle>Featured Projects</SectionTitle>
          <Typography sx={{ fontSize:15, color:"rgba(255,255,255,0.45)", maxWidth:520, lineHeight:1.8 }}>
            A selection of real-world MERN stack applications — from SaaS platforms to REST APIs.
          </Typography>
        </Box>

        {/* Filters */}
        <Stack direction="row" spacing={1} sx={{ mb:5, flexWrap:"wrap", gap:1, opacity:0, animation:`${fadeUp} 0.7s 0.2s forwards` }}>
          {FILTERS.map(f => (
            <FilterBtn key={f} active={(active===f).toString()} onClick={() => setActive(f)}>{f}</FilterBtn>
          ))}
        </Stack>

        <Grid container spacing={3}>
          {filtered.map((proj, i) => (
            <Grid item xs={12} sm={6} lg={4} key={proj.title}>
              <ProjectCard accentcolor={proj.color} sx={{ opacity:0, animation:`${fadeUp} 0.6s ${0.1 + i * 0.08}s forwards` }}>
                {/* Stat badge */}
                <Box sx={{ position:"absolute", top:20, right:20, textAlign:"right" }}>
                  <Typography sx={{ fontFamily:"'Cinzel',serif", fontSize:18, fontWeight:900, color:proj.color, lineHeight:1 }}>{proj.stat.value}</Typography>
                  <Typography sx={{ fontFamily:"'Space Mono',monospace", fontSize:8, color:"rgba(255,255,255,0.3)", letterSpacing:"0.08em", textTransform:"uppercase" }}>{proj.stat.label}</Typography>
                </Box>

                <Typography sx={{ fontFamily:"'Cinzel',serif", fontSize:17, fontWeight:700, color:"#fff", mb:"10px", pr:6, lineHeight:1.3 }}>{proj.title}</Typography>
                <Typography sx={{ fontSize:13, color:"rgba(255,255,255,0.45)", lineHeight:1.7, mb:"20px" }}>{proj.desc}</Typography>

                {/* Tags */}
                <Box sx={{ display:"flex", flexWrap:"wrap", gap:"6px", mb:"20px" }}>
                  {proj.tags.map(t => (
                    <Box key={t} sx={{ fontFamily:"'Space Mono',monospace", fontSize:9, letterSpacing:"0.07em", color:"rgba(255,255,255,0.4)", border:"0.5px solid rgba(255,255,255,0.1)", px:"8px", py:"3px" }}>{t}</Box>
                  ))}
                </Box>

                <Stack direction="row" spacing={1}>
                  <IconBtn startIcon={<OpenInNewIcon sx={{ fontSize:"12px !important" }} />} href={proj.live} target="_blank">Live</IconBtn>
                  <IconBtn startIcon={<GitHubIcon sx={{ fontSize:"12px !important" }} />} href={proj.github} target="_blank">Code</IconBtn>
                </Stack>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Root>
  );
};