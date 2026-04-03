import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Box, Stack, Typography, Button } from "@mui/material";
import { styled, keyframes } from "@mui/system";

const fadeUp = keyframes`from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}`;
const fadeIn = keyframes`from{opacity:0;transform:scale(0.96)}to{opacity:1;transform:scale(1)}`;
const blink  = keyframes`0%,100%{opacity:1}50%{opacity:0.2}`;
const drift  = keyframes`from{transform:translate(0,0)}to{transform:translate(40px,30px)}`;
const scrollAnim = keyframes`
  0%{transform:scaleY(0);transform-origin:top}50%{transform:scaleY(1);transform-origin:top}
  51%{transform:scaleY(1);transform-origin:bottom}100%{transform:scaleY(0);transform-origin:bottom}`;

const Root = styled(Box)({ background:"#060c14", minHeight:"100vh", width:"100%", position:"relative", overflow:"hidden" });
const BgGrid = styled(Box)({ position:"absolute", inset:0, pointerEvents:"none", zIndex:0, backgroundImage:`linear-gradient(rgba(0,255,180,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,180,0.04) 1px,transparent 1px)`, backgroundSize:"48px 48px" });
const AvailableDot = styled(Box)({ display:"inline-flex", alignItems:"center", gap:6, fontFamily:"'Space Mono',monospace", fontSize:10, color:"#00ffb4", border:"0.5px solid rgba(0,255,180,0.3)", background:"rgba(0,255,180,0.05)", padding:"5px 12px", letterSpacing:"0.1em", marginBottom:24, "&::before":{ content:'""', width:6, height:6, background:"#00ffb4", borderRadius:"50%", flexShrink:0, animation:`${blink} 1.5s ease-in-out infinite` } });
const PrimaryBtn = styled(Button)({ fontFamily:"'Space Mono',monospace !important", fontSize:11, letterSpacing:"0.1em", textTransform:"uppercase", background:"#00ffb4", color:"#060c14", fontWeight:700, padding:"13px 28px", borderRadius:0, clipPath:"polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))", "&:hover":{ background:"#00e8a0", transform:"translateY(-2px)" }, transition:"all 0.3s !important" });
const SecBtn = styled(Button)({ fontFamily:"'Space Mono',monospace !important", fontSize:11, letterSpacing:"0.1em", textTransform:"uppercase", background:"transparent", color:"rgba(255,255,255,0.6)", border:"0.5px solid rgba(255,255,255,0.2)", padding:"13px 28px", borderRadius:0, "&:hover":{ background:"transparent", color:"#fff", border:"0.5px solid rgba(255,255,255,0.5)" } });

const BADGE_STYLES = {
  MongoDB:{ bg:"rgba(71,162,72,0.15)", color:"#47a248", border:"rgba(71,162,72,0.3)" },
  "Express.js":{ bg:"rgba(255,200,50,0.10)", color:"#f0c040", border:"rgba(240,192,64,0.3)" },
  React:{ bg:"rgba(97,218,251,0.10)", color:"#61dafb", border:"rgba(97,218,251,0.3)" },
  "Node.js":{ bg:"rgba(104,160,99,0.12)", color:"#84ce3b", border:"rgba(104,160,99,0.3)" },
  "Material UI":{ bg:"rgba(0,127,255,0.10)", color:"#4b9cff", border:"rgba(75,156,255,0.3)" },
};
const PHRASES = ["MERN Stack Developer","React & MUI Specialist","REST API Architect","Full Stack Engineer"];

function useTypewriter(phrases) {
  const [text, setText] = useState("");
  useEffect(() => {
    let pi=0,ci=0,deleting=false,paused=false,timer;
    function tick() {
      const phrase=phrases[pi];
      if(!deleting&&!paused){ci++;setText(phrase.slice(0,ci));if(ci===phrase.length){paused=true;timer=setTimeout(()=>{paused=false;deleting=true;tick();},1800);return;}}
      else if(deleting){ci--;setText(phrase.slice(0,ci));if(ci===0){deleting=false;pi=(pi+1)%phrases.length;}}
      timer=setTimeout(tick,deleting?35:70);
    }
    tick(); return ()=>clearTimeout(timer);
  },[]);
  return text;
}

export const Home = () => {
  const typed = useTypewriter(PHRASES);
  return (
    <HelmetProvider>
      <Helmet><title>Prathapa Poojari | MERN Developer</title></Helmet>
      <Root id="home">
        <BgGrid />
        <Box sx={{ position:"absolute", width:600, height:600, background:"radial-gradient(circle,rgba(0,200,130,0.12) 0%,transparent 65%)", top:-100, left:-100, pointerEvents:"none", zIndex:0, animation:`${drift} 8s ease-in-out infinite alternate` }} />
        <Box sx={{ position:"absolute", width:500, height:500, background:"radial-gradient(circle,rgba(30,100,255,0.1) 0%,transparent 65%)", bottom:-80, right:-80, pointerEvents:"none", zIndex:0, animation:`${drift} 10s ease-in-out infinite alternate-reverse` }} />

        <Box sx={{ display:"grid", gridTemplateColumns:{ xs:"1fr", lg:"1fr 1fr" }, minHeight:"100vh", alignItems:"center", position:"relative", zIndex:5, pt:"64px" }}>
          <Box sx={{ p:{ xs:"40px 24px", lg:"60px 64px" } }}>
            <AvailableDot>Available for work</AvailableDot>
            <Typography sx={{ fontFamily:"'Cinzel',serif", fontSize:{ xs:36, md:54, lg:62 }, fontWeight:900, color:"#fff", lineHeight:1.05, mb:1, opacity:0, animation:`${fadeUp} 0.7s 0.2s forwards` }}>Prathapa Poojari</Typography>
            <Box sx={{ display:"flex", alignItems:"center", gap:"12px", mb:"28px", opacity:0, animation:`${fadeUp} 0.7s 0.4s forwards`, "&::before":{ content:'""', display:"block", width:32, height:2, background:"#00ffb4", flexShrink:0 } }}>
              <Box sx={{ fontFamily:"'Space Mono',monospace", fontSize:15, color:"#00ffb4", letterSpacing:"0.05em", minHeight:22 }}>{typed}</Box>
            </Box>
            <Typography sx={{ fontSize:15, color:"rgba(255,255,255,0.5)", lineHeight:1.8, maxWidth:420, mb:"40px", opacity:0, animation:`${fadeUp} 0.7s 0.6s forwards` }}>I craft full-stack web experiences with MongoDB, Express, React & Node.js. Passionate about clean architecture, performant APIs, and delightful UIs.</Typography>
            <Box sx={{ display:"flex", flexWrap:"wrap", gap:"8px", mb:"40px", opacity:0, animation:`${fadeUp} 0.7s 0.7s forwards` }}>
              {Object.entries(BADGE_STYLES).map(([label,s])=>(
                <Box key={label} sx={{ fontFamily:"'Space Mono',monospace", fontSize:10, letterSpacing:"0.08em", fontWeight:700, padding:"5px 10px", background:s.bg, color:s.color, border:`0.5px solid ${s.border}` }}>{label}</Box>
              ))}
            </Box>
            <Stack direction="row" spacing={2} sx={{ opacity:0, animation:`${fadeUp} 0.7s 0.85s forwards`, flexWrap:"wrap", gap:2 }}>
              <PrimaryBtn component={Link} to="/portfolio">View Projects</PrimaryBtn>
              <SecBtn component={Link} to="/contact">Contact Me</SecBtn>
            </Stack>
          </Box>

          <Box sx={{ display:{ xs:"none", lg:"flex" }, alignItems:"center", justifyContent:"center", p:"40px" }}>
            <Box sx={{ position:"relative", width:340, height:420, opacity:0, animation:`${fadeIn} 1s 0.5s forwards` }}>
              <Box sx={{ position:"absolute", top:-6, left:-6, width:20, height:20, borderTop:"2px solid #00ffb4", borderLeft:"2px solid #00ffb4" }} />
              <Box sx={{ position:"absolute", bottom:-6, right:-6, width:20, height:20, borderBottom:"2px solid #00ffb4", borderRight:"2px solid #00ffb4" }} />
              <Box sx={{ position:"absolute", inset:0, background:"linear-gradient(135deg,#0d2535 0%,#0a1a10 100%)", clipPath:"polygon(20px 0,100% 0,100% calc(100% - 20px),calc(100% - 20px) 100%,0 100%,0 20px)", border:"0.5px solid rgba(0,255,180,0.2)", overflow:"hidden", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"12px" }}>
                <Box sx={{ width:120, height:120, borderRadius:"50%", background:"linear-gradient(135deg,#0d3d2e,#122040)", border:"1px solid rgba(0,255,180,0.25)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Cinzel',serif", fontSize:36, fontWeight:900, color:"#00ffb4" }}>AM</Box>
                <Typography sx={{ fontFamily:"'Cinzel',serif", fontSize:18, fontWeight:700, color:"#fff" }}>Prathapa Poojari</Typography>
                <Typography sx={{ fontFamily:"'Space Mono',monospace", fontSize:10, color:"rgba(0,255,180,0.7)", letterSpacing:"0.12em" }}>MERN STACK DEVELOPER</Typography>
                <Stack direction="row" spacing={1.5} sx={{ mt:3 }}>
                  {[["3+","Years"],["40+","Projects"],["12+","Clients"]].map(([n,l])=>(
                    <Box key={l} sx={{ display:"flex", flexDirection:"column", alignItems:"center", background:"rgba(0,255,180,0.04)", border:"0.5px solid rgba(0,255,180,0.12)", px:"16px", py:"10px" }}>
                      <Typography sx={{ fontFamily:"'Cinzel',serif", fontSize:22, fontWeight:700, color:"#00ffb4", lineHeight:1 }}>{n}</Typography>
                      <Typography sx={{ fontFamily:"'Space Mono',monospace", fontSize:9, color:"rgba(255,255,255,0.35)", letterSpacing:"0.08em", mt:"3px", textTransform:"uppercase" }}>{l}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
              {[{ pos:{ top:30, right:-55 }, label:"REST APIs", value:"120+" },{ pos:{ bottom:60, left:-55 }, label:"GH Commits", value:"2.4k" }].map(({pos,label,value})=>(
                <Box key={label} sx={{ position:"absolute", ...pos, background:"rgba(6,12,20,0.92)", border:"0.5px solid rgba(0,255,180,0.2)", p:"10px 14px", backdropFilter:"blur(8px)" }}>
                  <Typography sx={{ fontFamily:"'Space Mono',monospace", fontSize:9, color:"rgba(255,255,255,0.35)", letterSpacing:"0.1em", textTransform:"uppercase", mb:"3px" }}>{label}</Typography>
                  <Typography sx={{ fontFamily:"'Space Mono',monospace", fontSize:13, fontWeight:700, color:"#00ffb4" }}>{value}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box sx={{ position:"absolute", bottom:24, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:"6px", zIndex:10, opacity:0, animation:`${fadeIn} 1s 1.5s forwards` }}>
          <Typography sx={{ fontFamily:"'Space Mono',monospace", fontSize:9, color:"rgba(255,255,255,0.25)", letterSpacing:"0.12em", textTransform:"uppercase" }}>Scroll</Typography>
          <Box sx={{ width:1, height:40, background:"linear-gradient(to bottom,rgba(0,255,180,0.5),transparent)", animation:`${scrollAnim} 2s ease-in-out infinite` }} />
        </Box>
      </Root>
    </HelmetProvider>
  );
};