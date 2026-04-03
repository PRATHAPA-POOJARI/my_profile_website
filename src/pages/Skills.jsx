import React from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";
import { styled, keyframes } from "@mui/system";

const fadeUp = keyframes`from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}`;
const pulse  = keyframes`0%,100%{box-shadow:0 0 0 0 rgba(0,255,180,0.3)}50%{box-shadow:0 0 0 8px rgba(0,255,180,0)}`;

const Root = styled(Box)({ background:"#060c14", minHeight:"100vh", padding:"100px 0 80px", position:"relative", overflow:"hidden" });
const SectionLabel = styled(Typography)({ fontFamily:"'Space Mono',monospace", fontSize:11, color:"#00ffb4", letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:12 });
const SectionTitle = styled(Typography)({ fontFamily:"'Cinzel',serif", fontWeight:900, color:"#fff", lineHeight:1.1, marginBottom:40 });

const CATEGORIES = [
  {
    label:"Frontend",
    icon:"◈",
    color:"#61dafb",
    skills:[
      { name:"React.js", level:"Expert", pct:92 },
      { name:"Material UI", level:"Expert", pct:90 },
      { name:"TypeScript", level:"Advanced", pct:78 },
      { name:"Redux Toolkit", level:"Advanced", pct:82 },
      { name:"Next.js", level:"Intermediate", pct:70 },
      { name:"Tailwind CSS", level:"Advanced", pct:85 },
    ],
  },
  {
    label:"Backend",
    icon:"⬡",
    color:"#84ce3b",
    skills:[
      { name:"Node.js", level:"Expert", pct:88 },
      { name:"Express.js", level:"Expert", pct:87 },
      { name:"REST APIs", level:"Expert", pct:93 },
      { name:"GraphQL", level:"Advanced", pct:74 },
      { name:"WebSockets", level:"Advanced", pct:76 },
      { name:"JWT / OAuth2", level:"Expert", pct:88 },
    ],
  },
  {
    label:"Database",
    icon:"◉",
    color:"#47a248",
    skills:[
      { name:"MongoDB", level:"Expert", pct:85 },
      { name:"Mongoose ODM", level:"Expert", pct:88 },
      { name:"Redis", level:"Intermediate", pct:65 },
      { name:"PostgreSQL", level:"Advanced", pct:72 },
      { name:"Firebase", level:"Advanced", pct:75 },
      { name:"Atlas Search", level:"Advanced", pct:70 },
    ],
  },
  {
    label:"DevOps & Tools",
    icon:"◇",
    color:"#2496ed",
    skills:[
      { name:"Docker", level:"Intermediate", pct:65 },
      { name:"Git & GitHub", level:"Expert", pct:92 },
      { name:"AWS (EC2/S3)", level:"Intermediate", pct:62 },
      { name:"CI/CD (GitHub Actions)", level:"Advanced", pct:73 },
      { name:"Postman", level:"Expert", pct:95 },
      { name:"Linux CLI", level:"Advanced", pct:78 },
    ],
  },
];

const LEVEL_COLOR = { Expert:"#00ffb4", Advanced:"#61dafb", Intermediate:"rgba(255,255,255,0.4)" };

const CategoryCard = styled(Box)(({ accentcolor }) => ({
  background:"rgba(255,255,255,0.02)",
  border:"0.5px solid rgba(255,255,255,0.08)",
  padding:"28px",
  position:"relative",
  "&::before":{ content:'""', position:"absolute", top:0, left:0, width:3, height:"100%", background: accentcolor },
}));

export const Skills = () => (
  <Root>
    <Box sx={{ maxWidth:1100, mx:"auto", px:{ xs:3, md:6 } }}>
      <Box sx={{ textAlign:"center", mb:8, opacity:0, animation:`${fadeUp} 0.7s 0.1s forwards` }}>
        <SectionLabel>My Stack</SectionLabel>
        <SectionTitle sx={{ fontSize:{ xs:32, md:48 } }}>Skills & Technologies</SectionTitle>
        <Typography sx={{ fontSize:15, color:"rgba(255,255,255,0.45)", maxWidth:500, mx:"auto", lineHeight:1.8 }}>
          Technologies I use daily to build robust, scalable MERN applications.
        </Typography>
      </Box>

      {/* Big stat row */}
      <Grid container spacing={2} sx={{ mb:8, opacity:0, animation:`${fadeUp} 0.7s 0.2s forwards` }}>
        {[["3+","Years of Experience"],["40+","Projects Shipped"],["8","Technologies Mastered"],["120+","APIs Built"]].map(([v,l])=>(
          <Grid item xs={6} md={3} key={l}>
            <Box sx={{ textAlign:"center", p:3, background:"rgba(0,255,180,0.03)", border:"0.5px solid rgba(0,255,180,0.1)" }}>
              <Typography sx={{ fontFamily:"'Cinzel',serif", fontSize:36, fontWeight:900, color:"#00ffb4", lineHeight:1 }}>{v}</Typography>
              <Typography sx={{ fontFamily:"'Space Mono',monospace", fontSize:9, color:"rgba(255,255,255,0.35)", letterSpacing:"0.1em", textTransform:"uppercase", mt:1 }}>{l}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Category cards */}
      <Grid container spacing={3}>
        {CATEGORIES.map(({ label, icon, color, skills }, ci) => (
          <Grid item xs={12} md={6} key={label}>
            <CategoryCard accentcolor={color} sx={{ opacity:0, animation:`${fadeUp} 0.6s ${0.2 + ci * 0.1}s forwards` }}>
              <Box sx={{ display:"flex", alignItems:"center", gap:2, mb:3 }}>
                <Typography sx={{ fontSize:20, color, fontFamily:"monospace" }}>{icon}</Typography>
                <Typography sx={{ fontFamily:"'Cinzel',serif", fontSize:18, fontWeight:700, color:"#fff" }}>{label}</Typography>
              </Box>
              <Stack spacing={2}>
                {skills.map(({ name, level, pct }) => (
                  <Box key={name}>
                    <Box sx={{ display:"flex", justifyContent:"space-between", mb:"5px" }}>
                      <Typography sx={{ fontFamily:"'Space Mono',monospace", fontSize:11, color:"rgba(255,255,255,0.7)", letterSpacing:"0.06em" }}>{name}</Typography>
                      <Typography sx={{ fontFamily:"'Space Mono',monospace", fontSize:10, color:LEVEL_COLOR[level] || "rgba(255,255,255,0.4)", letterSpacing:"0.06em" }}>{level}</Typography>
                    </Box>
                    <Box sx={{ height:2, background:"rgba(255,255,255,0.06)", overflow:"hidden" }}>
                      <Box sx={{ height:"100%", width:`${pct}%`, background:color, transition:"width 1.2s ease" }} />
                    </Box>
                  </Box>
                ))}
              </Stack>
            </CategoryCard>
          </Grid>
        ))}
      </Grid>

      {/* Tools strip */}
      <Box sx={{ mt:8, opacity:0, animation:`${fadeUp} 0.7s 0.6s forwards` }}>
        <SectionLabel sx={{ textAlign:"center", mb:4 }}>Also comfortable with</SectionLabel>
        <Box sx={{ display:"flex", flexWrap:"wrap", gap:"10px", justifyContent:"center" }}>
          {["Cloudinary","Stripe","Mapbox","SendGrid","Twilio","Axios","Joi","Multer","PM2","Nginx","Vercel","Heroku"].map(t=>(
            <Box key={t} sx={{ fontFamily:"'Space Mono',monospace", fontSize:10, letterSpacing:"0.08em", color:"rgba(255,255,255,0.4)", border:"0.5px solid rgba(255,255,255,0.1)", px:"12px", py:"6px", transition:"all 0.3s", "&:hover":{ color:"#00ffb4", border:"0.5px solid rgba(0,255,180,0.3)" } }}>{t}</Box>
          ))}
        </Box>
      </Box>
    </Box>
  </Root>
);