import { Box, Button, Slider, Typography } from "@mui/material";
import React, { useState } from "react";
import VideoHome from "src/layout/video/video-bg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: "Dancing Script, cursive",
  },
});
const timeMarks = [
  { value: 100, label: "18:00-19:15", text: "Go home" },
  { value: 75, label: "19:15-20:15", text: "Eat together " },
  { value: 50, label: "20:15-20:45", text: "Photobooth" },
  { value: 25, label: "20:45-00:30", text: "Pub time" },
  { value: 0, label: "00:30", text: "Dunno" },
];
export default function Plan() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/end");
  };
  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };

  const getFilteredMarks = () => {
    return timeMarks.filter((mark) => mark.value <= value);
  };
  return (
    <Box>
      <VideoHome />
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4" sx={{ color: "#cc0066", mt: "20px" }}>
            Our Plan
          </Typography>
          <Typography variant="h6" sx={{ color: "#cc0066", mt: "20px" }}>
            If you have any suggestions, please feel free to contact me kkkk
          </Typography>
          <Box
            sx={{
              height: 300,
              display: "flex",
              alignItems: "center",
              mt: "100px",
            }}
          >
            <Slider
              orientation="vertical"
              onChange={handleChange}
              defaultValue={0}
              aria-labelledby="vertical-slider"
              step={null}
              marks={timeMarks}
              sx={{ height: 400, color: "#cc0066", ml: "200px" }}
            />
            <Box>
              <AnimatePresence>
                {getFilteredMarks().map((mark, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    transition={{ type: "spring", stiffness: 120, damping: 12 }}
                    layout
                  >
                    <Box
                      key={index}
                      sx={{
                        ml: index % 2 === 0 ? 15 : -30,
                        p: 2,
                        border: "2px solid #ffcccc",
                        borderRadius: "5px",
                        width: 100,
                        minWidth: "200px",
                        textAlign: "center",
                        position: "relative",
                        left: index % 2 === 0 ? "190px" : "-250px",
                        backgroundColor: "#ffe6e6",
                        color: "#cc0066",
                      }}
                    >
                      <Typography variant="h6">{mark.text}</Typography>
                    </Box>
                  </motion.div>
                ))}
              </AnimatePresence>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mt: "100px",
            mr: "200px",
          }}
        >
          {" "}
          <Button
            sx={{ backgroundColor: "#cc0066", color: "#fff" }}
            onClick={handleClick}
          >
            OK
          </Button>
        </Box>
      </ThemeProvider>
    </Box>
  );
}
