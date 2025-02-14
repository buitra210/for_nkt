import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import VideoHome from "src/layout/video/video-bg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const theme = createTheme({
  typography: {
    fontFamily: "Dancing Script, cursive",
  },
});
export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowButton(!showButton);
    setIsVisible(!isVisible);
  };

  const handleYes = () => {
    navigate("/memories");
  };
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <VideoHome />

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <Box
            sx={{
              height: "100vh",
              width: "100vh",
              position: "absolute",
            }}
          >
            <Box
              sx={{
                position: "relative",
                top: "40%",
                left: "70%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "300px",
                width: "400px",
                backgroundColor: "#f7baba",
              }}
            >
              {" "}
              <Box
                sx={{
                  zIndex: -1,

                  position: "absolute",
                  width: "282px",
                  height: "282px",
                  backgroundColor: "#f7baba",
                  top: "-141px",
                  left: "59px",
                  transform: "rotate(45deg)",
                  borderRadius: "20px 0px 0px 0px",
                }}
              ></Box>
              <Box>
                <Box
                  sx={{
                    zIndex: 4,
                    height: "100vh",
                    width: "100vh",
                    position: "absolute",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      borderRight: "180px solid #ffcccc",
                      borderBottom: "110px solid transparent",
                      borderTop: "100px solid transparent",
                      left: "-60px",
                      top: "-140px",
                      width: "80px",
                      height: "80px",
                    }}
                  ></Box>
                </Box>
                <Box
                  sx={{
                    zIndex: 5,
                    height: "100vh",
                    width: "100vh",
                    position: "absolute",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      borderLeft: "400px solid #ffb3b3",
                      borderTop: "195px solid transparent",
                      left: "-200px",
                      top: "-150px",
                      width: "200px",
                      height: "105px",
                    }}
                  ></Box>
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    top: "20%",
                    left: "180px",
                    zIndex: 7,
                    borderRadius: "50%",
                    height: "90px",
                    width: "90px",
                    backgroundColor: "#ffe6e6",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                  onClick={() => handleClick()}
                >
                  <FavoriteBorderRoundedIcon
                    sx={{ fontSize: "30px", color: "#1a000d" }}
                  ></FavoriteBorderRoundedIcon>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ zIndex: 3 }}>
            <motion.div
              initial={{ y: 10, opacity: 1 }}
              animate={{ y: isVisible ? -200 : 10 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              //   style={{
              //     position: "absolute",
              //     width: "350px",
              //     height: "260px",
              //     backgroundColor: "#ffffe6",
              //     display: "flex",
              //     justifyContent: "center",
              //     alignItems: "center",
              //     border: "1px dashed #f7baba",
              //     boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
              //     borderRadius: "10px",
              //   }}
            >
              <Box
                sx={{
                  zIndex: 3,
                  height: "100vh",
                  width: "100vh",
                  position: "absolute",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    top: "42%",
                    left: "73%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "260px",
                    width: "350px",
                    backgroundColor: "#ffffe6",
                  }}
                >
                  <Box
                    sx={{
                      height: "220px",
                      width: "310px",
                      border: "1px dashed #f7baba",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "30px",
                          textAlign: "center",
                          color: "#d3d3d3",
                        }}
                      >
                        Will you be my
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: "43px",
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "#ffb3b3",
                        }}
                      >
                        Valentine?
                      </Typography>
                      {!showButton ? (
                        <motion.div
                          initial={{ opacity: 1 }}
                          animate={{
                            opacity: isVisible ? 0 : 1,
                            y: isVisible ? -50 : 0,
                          }}
                          transition={{ duration: 1 }}
                          onAnimationComplete={() => setShowButton(true)}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "5px",
                            marginTop: "10px",
                          }}
                        >
                          {[...Array(6)].map((_, i) => (
                            <FavoriteIcon
                              key={i}
                              sx={{ fontSize: 30, color: "#ffb3b3" }}
                            />
                          ))}
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1 }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              gap: "20px",
                              cursor: "pointer",
                            }}
                          >
                            <Button
                              disabled
                              sx={{
                                color: "#ffffff",
                                backgroundColor: "#f7baba",
                              }}
                            >
                              No
                            </Button>
                            <Button
                              sx={{
                                color: "#ffffff",
                                backgroundColor: "#f7baba",
                                cursor: "pointer",
                              }}
                              onClick={() => handleYes()}
                            >
                              Yessss
                            </Button>
                          </Box>
                        </motion.div>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Box>
          {/* <Box
            sx={{
              zIndex: 4,
              height: "100vh",
              width: "100vh",
              position: "absolute",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                borderRight: "180px solid #ffcccc",
                borderBottom: "110px solid transparent",
                borderTop: "100px solid transparent",
                left: "698px",
                top: "330px",
                width: "80px",
                height: "80px",
              }}
            ></Box>
          </Box> */}
          {/* <Box
            sx={{
              zIndex: 5,
              height: "100vh",
              width: "100vh",
              position: "absolute",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                borderLeft: "400px solid #ffb3b3",
                borderTop: "195px solid transparent",
                right: "-360px",
                top: "320px",
                width: "200px",
                height: "105px",
              }}
            ></Box>
          </Box> */}
        </motion.div>
      </ThemeProvider>

      {/* <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "740px",
          zIndex: 7,
          borderRadius: "50%",
          height: "90px",
          width: "90px",
          backgroundColor: "#ffe6e6",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          transition: "transform 0.3s",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
        onClick={() => handleClick()}
      >
        <FavoriteBorderRoundedIcon
          sx={{ fontSize: "30px", color: "#1a000d" }}
        ></FavoriteBorderRoundedIcon>
      </Box> */}
    </Box>
  );
}
