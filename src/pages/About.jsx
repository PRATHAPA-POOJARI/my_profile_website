import React from "react";
import { Box, Grid, Typography, LinearProgress, Stack } from "@mui/material";
import { styled, keyframes } from "@mui/system";

const fadeUp = keyframes`from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}`;

const Root = styled(Box)({ background:"#060c14", minHeight:"100vh", padding:"100px 0 80px", position:"relative", overflow:"hidden" });
const SectionLabel = styled(Typography)({ fontFamily:"'Space Mono',monospace", fontSize:11, color:"#00ffb4", letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:12 });
const SectionTitle = styled(Typography)({ fontFamily:"'Cinzel',serif", fontSize:{ xs:32, md:48 }, fontWeight:900, color:"#fff", lineHeight:1.1, marginBottom:40 });

const SKILLS = [
  { label:"React.js", pct:92, color:"#61dafb" },
  { label:"Node.js", pct:88, color:"#84ce3b" },
  { label:"MongoDB", pct:85, color:"#47a248" },
  { label:"Express.js", pct:87, color:"#f0c040" },
  { label:"Material UI", pct:90, color:"#4b9cff" },
  { label:"REST APIs", pct:93, color:"#00ffb4" },
  { label:"TypeScript", pct:78, color:"#3178c6" },
  { label:"Docker", pct:65, color:"#2496ed" },
];

const TIMELINE = [
  {
    year: "2024–Now",
    role: "Full Stack Developer",
    company: "Bhrath Electronics Limited.",
    desc: "Building and deploying full-stack MERN applications with real-time features using WebSockets, caching with Redis, JWT & OAuth2 authentication, and RESTful APIs on MongoDB Atlas.",
  },
  {
    year: "2022–2023",
    role: "Frontend Developer",
    company: "Bhrath Electronics Limited.",
    desc: "Developed responsive React.js applications with Redux Toolkit for state management, React Router for navigation, and optimized component performance using memoization and lazy loading.",
  },
];

export const About = () => (
  <Root>
    <Box sx={{ maxWidth:1100, mx:"auto", px:{ xs:3, md:6 } }}>
      <Grid container spacing={8} alignItems="flex-start">
        {/* Left */}
        <Grid item xs={12} md={5}>
          <Box sx={{ opacity:0, animation:`${fadeUp} 0.7s 0.1s forwards` }}>
            <SectionLabel>Who I Am</SectionLabel>
            <SectionTitle>About Me</SectionTitle>
            <Box sx={{ position:"relative", width:"100%", maxWidth:360, mb:4 }}>
              <Box sx={{ width:"100%", paddingTop:"110%", background:"linear-gradient(135deg,#0d2535,#0a1a10)", clipPath:"polygon(20px 0,100% 0,100% calc(100% - 20px),calc(100% - 20px) 100%,0 100%,0 20px)", border:"0.5px solid rgba(0,255,180,0.2)", display:"flex", alignItems:"center", justifyContent:"center", position:"relative" }}>
                <Box sx={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:1 }}>
                  <Box sx={{ width:100, height:100, borderRadius:"50%", background:"linear-gradient(135deg,#0d3d2e,#122040)", border:"1px solid rgba(0,255,180,0.3)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Cinzel',serif", fontSize:32, fontWeight:900, color:"#00ffb4" }}>AM</Box>
                  <Typography sx={{ fontFamily:"'Cinzel',serif", fontSize:16, fontWeight:700, color:"#fff", mt:1 }}>Prathapa Poojari</Typography>
                  <Typography sx={{ fontFamily:"'Space Mono',monospace", fontSize:10, color:"rgba(0,255,180,0.7)", letterSpacing:"0.1em" }}>MERN STACK DEV</Typography>
                </Box>
              </Box>
              <Box sx={{ position:"absolute", top:-6, left:-6, width:20, height:20, borderTop:"2px solid #00ffb4", borderLeft:"2px solid #00ffb4" }} />
              <Box sx={{ position:"absolute", bottom:-6, right:-6, width:20, height:20, borderBottom:"2px solid #00ffb4", borderRight:"2px solid #00ffb4" }} />
            </Box>

            <Typography sx={{ fontSize:15, color:"rgba(255,255,255,0.55)", lineHeight:1.9, mb:2 }}>
              I'm a Full Stack Developer with 3+ years of hands-on experience building production-grade MERN applications. I obsess over clean code, scalable systems, and exceptional user experiences.
            </Typography>
            <Typography sx={{ fontSize:15, color:"rgba(255,255,255,0.55)", lineHeight:1.9 }}>
              When I'm not shipping features, I'm contributing to open source, writing technical articles, or exploring the latest in web performance.
            </Typography>

            <Stack direction="row" spacing={3} sx={{ mt:4 }}>
              {[["Bengaluru","Location"],["3+","Experience"],["40+","Projects"]].map(([v,l])=>(
                <Box key={l}>
                  <Typography sx={{ fontFamily:"'Cinzel',serif", fontSize:20, fontWeight:900, color:"#00ffb4" }}>{v}</Typography>
                  <Typography sx={{ fontFamily:"'Space Mono',monospace", fontSize:9, color:"rgba(255,255,255,0.35)", letterSpacing:"0.1em", textTransform:"uppercase" }}>{l}</Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Grid>

        {/* Right */}
        <Grid item xs={12} md={7}>
          {/* Skills */}
          <Box sx={{ opacity:0, animation:`${fadeUp} 0.7s 0.3s forwards`, mb:6 }}>
            <SectionLabel>What I Do</SectionLabel>
            <SectionTitle sx={{ fontSize:{ xs:24, md:32 } }}>Skills & Expertise</SectionTitle>
            <Stack spacing={2.5}>
              {SKILLS.map(({ label, pct, color }) => (
                <Box key={label}>
                  <Box sx={{ display:"flex", justifyContent:"space-between", mb:"6px" }}>
                    <Typography sx={{ fontFamily:"'Space Mono',monospace", fontSize:11, color:"rgba(255,255,255,0.7)", letterSpacing:"0.08em" }}>{label}</Typography>
                    <Typography sx={{ fontFamily:"'Space Mono',monospace", fontSize:11, color, letterSpacing:"0.08em" }}>{pct}%</Typography>
                  </Box>
                  <Box sx={{ height:3, background:"rgba(255,255,255,0.06)", position:"relative", overflow:"hidden" }}>
                    <Box sx={{ position:"absolute", top:0, left:0, height:"100%", width:`${pct}%`, background:color, transition:"width 1s ease" }} />
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Timeline */}
          <Box sx={{ opacity:0, animation:`${fadeUp} 0.7s 0.5s forwards` }}>
            <SectionLabel>My Journey</SectionLabel>
            <SectionTitle sx={{ fontSize:{ xs:24, md:32 } }}>Experience</SectionTitle>
            <Stack spacing={0}>
              {TIMELINE.map(({ year, role, company, desc }, i) => (
                <Box key={i} sx={{ display:"flex", gap:3, pb:4, position:"relative",
                  "&::before":{ content:'""', position:"absolute", left:{ xs:0, sm:"auto" }, top:8, bottom:0, width:"1px", background:"rgba(0,255,180,0.15)" }
                }}>
                  <Box sx={{ flexShrink:0, width:10, height:10, borderRadius:"50%", background:"#00ffb4", mt:"6px", zIndex:1, boxShadow:"0 0 12px rgba(0,255,180,0.4)" }} />
                  <Box>
                    <Typography sx={{ fontFamily:"'Space Mono',monospace", fontSize:10, color:"#00ffb4", letterSpacing:"0.1em", mb:"4px" }}>{year}</Typography>
                    <Typography sx={{ fontFamily:"'Cinzel',serif", fontSize:16, fontWeight:700, color:"#fff", mb:"2px" }}>{role}</Typography>
                    <Typography sx={{ fontFamily:"'Space Mono',monospace", fontSize:11, color:"rgba(255,255,255,0.4)", mb:"8px", letterSpacing:"0.06em" }}>{company}</Typography>
                    <Typography sx={{ fontSize:14, color:"rgba(255,255,255,0.5)", lineHeight:1.7 }}>{desc}</Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Root>
);