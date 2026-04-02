import React, { useState } from "react";
import { Box, Grid, Typography, Stack, TextField, Button, Alert } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

const fadeUp = keyframes`from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}`;

const Root = styled(Box)({ background:"#060c14", minHeight:"100vh", padding:"100px 0 80px", position:"relative", overflow:"hidden" });
const SectionLabel = styled(Typography)({ fontFamily:"'Space Mono',monospace", fontSize:11, color:"#00ffb4", letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:12 });
const SectionTitle = styled(Typography)({ fontFamily:"'Cinzel',serif", fontWeight:900, color:"#fff", lineHeight:1.1, marginBottom:16 });

const StyledInput = styled(TextField)({
  "& .MuiOutlinedInput-root":{
    background:"rgba(255,255,255,0.02)",
    borderRadius:0,
    fontFamily:"'DM Sans',sans-serif",
    fontSize:14,
    color:"rgba(255,255,255,0.8)",
    "& fieldset":{ border:"0.5px solid rgba(255,255,255,0.12)" },
    "&:hover fieldset":{ border:"0.5px solid rgba(0,255,180,0.3)" },
    "&.Mui-focused fieldset":{ border:"0.5px solid rgba(0,255,180,0.6)", borderWidth:"0.5px" },
  },
  "& .MuiInputLabel-root":{ fontFamily:"'Space Mono',monospace", fontSize:11, letterSpacing:"0.1em", color:"rgba(255,255,255,0.3)", textTransform:"uppercase" },
  "& .MuiInputLabel-root.Mui-focused":{ color:"#00ffb4" },
});

const SendBtn = styled(Button)({
  fontFamily:"'Space Mono',monospace !important", fontSize:12, letterSpacing:"0.1em",
  textTransform:"uppercase", background:"#00ffb4", color:"#060c14", fontWeight:700,
  padding:"14px 32px", borderRadius:0, width:"100%",
  clipPath:"polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))",
  "&:hover":{ background:"#00e8a0", transform:"translateY(-2px)" },
  transition:"all 0.3s !important",
});

const InfoItem = ({ icon, label, value }) => (
  <Box sx={{ display:"flex", alignItems:"flex-start", gap:2 }}>
    <Box sx={{ color:"#00ffb4", mt:"2px", fontSize:18 }}>{icon}</Box>
    <Box>
      <Typography sx={{ fontFamily:"'Space Mono',monospace", fontSize:9, color:"rgba(255,255,255,0.35)", letterSpacing:"0.1em", textTransform:"uppercase", mb:"2px" }}>{label}</Typography>
      <Typography sx={{ fontSize:14, color:"rgba(255,255,255,0.7)" }}>{value}</Typography>
    </Box>
  </Box>
);

const SocialBtn = styled(Box)({
  width:40, height:40, display:"flex", alignItems:"center", justifyContent:"center",
  border:"0.5px solid rgba(255,255,255,0.12)", color:"rgba(255,255,255,0.4)",
  cursor:"pointer", transition:"all 0.3s",
  "&:hover":{ border:"0.5px solid rgba(0,255,180,0.4)", color:"#00ffb4", background:"rgba(0,255,180,0.05)" },
});

export const ContactUS = () => {
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => { e.preventDefault(); setSent(true); setForm({ name:"", email:"", subject:"", message:"" }); };

  return (
    <Root>
      <Box sx={{ maxWidth:1100, mx:"auto", px:{ xs:3, md:6 } }}>
        <Box sx={{ textAlign:"center", mb:8, opacity:0, animation:`${fadeUp} 0.7s 0.1s forwards` }}>
          <SectionLabel>Get In Touch</SectionLabel>
          <SectionTitle sx={{ fontSize:{ xs:32, md:48 } }}>Contact Me</SectionTitle>
          <Typography sx={{ fontSize:15, color:"rgba(255,255,255,0.45)", maxWidth:500, mx:"auto", lineHeight:1.8 }}>
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {/* Left — info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ opacity:0, animation:`${fadeUp} 0.7s 0.2s forwards` }}>
              <Box sx={{ background:"rgba(0,255,180,0.03)", border:"0.5px solid rgba(0,255,180,0.1)", p:4, mb:4 }}>
                <Typography sx={{ fontFamily:"'Cinzel',serif", fontSize:16, fontWeight:700, color:"#fff", mb:3 }}>Contact Info</Typography>
                <Stack spacing={3}>
                  <InfoItem icon={<EmailIcon fontSize="small" />} label="Email" value="prathappoojari607@gmail.com" />
                  <InfoItem icon={<LocationOnIcon fontSize="small" />} label="Location" value="Bengaluru, Karnataka, IN" />
                </Stack>
              </Box>

              <Box sx={{ background:"rgba(0,255,180,0.03)", border:"0.5px solid rgba(0,255,180,0.1)", p:4 }}>
                <Typography sx={{ fontFamily:"'Space Mono',monospace", fontSize:10, color:"rgba(255,255,255,0.35)", letterSpacing:"0.12em", textTransform:"uppercase", mb:3 }}>Connect</Typography>
                <Stack direction="row" spacing={1}>
                  {[LinkedInIcon, GitHubIcon, TwitterIcon].map((Icon, i) => (
                    <SocialBtn key={i}><Icon sx={{ fontSize:18 }} /></SocialBtn>
                  ))}
                </Stack>
              </Box>

              {/* Availability card */}
              <Box sx={{ mt:3, p:3, background:"rgba(0,255,180,0.05)", border:"0.5px solid rgba(0,255,180,0.2)", display:"flex", alignItems:"center", gap:2 }}>
                <Box sx={{ width:8, height:8, borderRadius:"50%", background:"#00ffb4", flexShrink:0, animation:"blink 1.5s ease-in-out infinite", "@keyframes blink":{"0%,100%":{opacity:1},"50%":{opacity:0.2}} }} />
                <Box>
                  <Typography sx={{ fontFamily:"'Space Mono',monospace", fontSize:10, color:"#00ffb4", letterSpacing:"0.1em", fontWeight:700 }}>AVAILABLE NOW</Typography>
                  <Typography sx={{ fontSize:12, color:"rgba(255,255,255,0.45)", mt:"2px" }}>Open to full-time & freelance</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Right — form */}
          <Grid item xs={12} md={8}>
            <Box component="form" onSubmit={handleSubmit} sx={{ opacity:0, animation:`${fadeUp} 0.7s 0.3s forwards` }}>
              {sent && (
                <Alert severity="success" sx={{ mb:3, background:"rgba(0,255,180,0.08)", border:"0.5px solid rgba(0,255,180,0.3)", color:"#00ffb4", fontFamily:"'Space Mono',monospace", fontSize:11, borderRadius:0, "& .MuiAlert-icon":{ color:"#00ffb4" } }}>
                  Message sent! I'll get back to you within 24 hours.
                </Alert>
              )}
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <StyledInput fullWidth label="Your Name" name="name" value={form.name} onChange={handleChange} required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <StyledInput fullWidth label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required />
                </Grid>
                <Grid item xs={12}>
                  <StyledInput fullWidth label="Subject" name="subject" value={form.subject} onChange={handleChange} required />
                </Grid>
                <Grid item xs={12}>
                  <StyledInput fullWidth label="Message" name="message" multiline rows={6} value={form.message} onChange={handleChange} required />
                </Grid>
                <Grid item xs={12}>
                  <SendBtn type="submit">Send Message ↗</SendBtn>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Root>
  );
};