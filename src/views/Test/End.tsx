import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import VideoHome from "src/layout/video/video-bg";

const text = "Thanks for loving me hihi";

const textVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
    },
  }),
};

export default function Endd() {
  return (
    <Box>
      <VideoHome />

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#cc0066",
          fontSize: "60px",
          fontWeight: "bold",
          letterSpacing: "2px",
        }}
      >
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            {char}
          </motion.span>
        ))}
      </Box>
    </Box>
  );
}
