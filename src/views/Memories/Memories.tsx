import { Box, Button, Grid } from "@mui/material";
import VideoHome from "src/layout/video/video-bg";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Fireworks } from "fireworks-js";
import { useNavigate } from "react-router-dom";

export default function Memories() {
  const [count, setCount] = useState(1);
  const [showFireworks, setShowFireworks] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const fireworksRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/plan");
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev < 97 ? prev + 1 : 97));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count === 97) {
      setShowFireworks(true);

      const positions = [
        { left: "10%", top: "20%" },
        { left: "30%", top: "50%" },
        { left: "60%", top: "30%" },
        { left: "80%", top: "70%" },
        { left: "20%", top: "40%" },
      ];

      positions.forEach((pos, index) => {
        setTimeout(() => {
          if (fireworksRefs.current[index]) {
            const fw = new Fireworks(fireworksRefs.current[index], {
              acceleration: 1.05,
              particles: 150,
              friction: 0.97,
              gravity: 1.5,
              intensity: 5,
              explosion: 7,
            });
            fw.start();

            setTimeout(() => fw.stop(), 10000);
          }
        }, index * 250);
      });

      setTimeout(() => {
        setShowFireworks(false);
        setShowImage(true);
      }, 6000);
    }
  }, [count]);

  return (
    <Box>
      {showFireworks && (
        <>
          {Array.from({ length: 4 }).map((_, i) => (
            <Box
              key={i}
              ref={(el: HTMLDivElement | null) =>
                (fireworksRefs.current[i] = el)
              }
              style={{
                position: "absolute",
                width: "200px",
                height: "200px",
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 60 + 20}%`,
              }}
            />
          ))}
        </>
      )}

      <VideoHome />
      <Box>
        <Grid container>
          <Grid item md={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                flexDirection: "column",
                gap: "40px",
                ml: "10px",
              }}
            >
              <motion.img
                src="/img/IMG_1158.jpg"
                alt="Memory"
                style={{ maxWidth: "200px", height: "auto" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
              <motion.img
                src="/img/IMG_0548.PNG"
                alt="Memory"
                style={{
                  maxWidth: "200px",
                  height: "auto",
                  marginLeft: "40px",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ textAlign: "center", color: "#cc0066" }}>
                  <h1>We fell in love in </h1>
                </Box>
                <Box>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      fontSize: "60px",
                      fontWeight: "bold",
                      color: "#ff3366",
                    }}
                  >
                    {count}{" "}
                    <span style={{ color: "#cc0066", fontSize: "35px" }}>
                      {" "}
                      days
                    </span>
                  </motion.span>
                </Box>
                <Box>
                  <Box sx={{ textAlign: "center", color: "#cc0066" }}>
                    <h3>
                      This Valentine's Day, let's continue loving each other
                      just like this!
                    </h3>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <Button
                      sx={{ backgroundColor: "#cc0066", color: "#fff" }}
                      onClick={handleClick}
                    >
                      Of courseee
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                flexDirection: "column",
                gap: "40px",
                ml: "10px",
              }}
            >
              <motion.img
                src="/img/IMG_9835.PNG"
                alt="Memory"
                style={{
                  maxWidth: "200px",
                  height: "auto",
                  marginLeft: "40px",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
              <motion.img
                src="/img/IMG_1159.jpg"
                alt="Memory"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                style={{ maxWidth: "200px", height: "auto" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
