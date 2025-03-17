"use client";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";

const MotionDiv = dynamic(
  () => import("framer-motion").then(mod => mod.motion.div),
  { ssr: false }
);

const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Hero() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      className="h-screen dark:bg-gray-900 dark:text-white bg-white text-black"
    >
      <Box
        display="flex"
        flexDirection={{ xs: "column-reverse", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        padding={4}
        gap={{ xs: 4, md: 0 }}
        className="container"
      >
        <Box
          display={"flex"}
          textAlign={{ xs: "left" }}
          flex={1}
          flexDirection={"column"}
          gap={2}
        >
          <Typography variant="h6" gutterBottom>
            Hi, I'm Mohammad
          </Typography>
          <Typography
            m={0}
            fontSize={{ xs: "1.75rem", sm: "2.5rem", lg: "3rem" }}
            fontWeight={700}
            gutterBottom
          >
            Frontend Developer
          </Typography>
          <Typography
            m={0}
            fontSize={{ xs: "1rem" }}
            fontWeight={500}
            gutterBottom
            width={{ sm: "50%" }}
          >
            I am a front-end developer passionate about building modern and
            user-friendly web applications.
          </Typography>
          <Box
            display="flex"
            gap={2}
            justifyContent={{ xs: "flex-start" }}
            alignItems={"center"}
          >
            <Typography variant="body1">Follow me:</Typography>
            <Facebook fontSize="large" />
            <Twitter fontSize="large" />
            <Instagram fontSize="large" />
          </Box>
          <Box display="flex" gap={2}>
            <Button variant="contained">Hire Me</Button>
            <Button variant="outlined">Portfolio</Button>
          </Box>
        </Box>
        <Box
          flex={1}
          display="flex"
          justifyContent="center"
          position="relative"
          mt={{ xs: 4, md: 0 }}
        >
          <Image src="/Hero-me.png" alt="Hero Image" width={500} height={300} />

          {[
            { icon: <FaReact />, top: "40%", left: "20%", color: "#61DAFB" },
            { icon: <FaJs />, top: "80%", left: "20%", color: "#F7DF1E" },
            {
              icon: (
                <Box
                  display={"flex"}
                  gap={2}
                  className="dark:bg-gray-950 p-2 rounded-xl"
                >
                  <Image
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZkTxy8b3vaH-Kp2OBqY7TuxCOIOz3ANoI_A&s"
                    }
                    width={50}
                    height={50}
                    alt="cumment"
                    className="rounded-full"
                  />
                  <Box display={"flex"} flexDirection="column">
                    <span className="dark:text-white text-black text-base">
                      Ahmad Dehestani
                    </span>
                    <span className="dark:text-white text-black text-sm">
                      Backend Developer
                    </span>
                  </Box>
                </Box>
              ),
              bottom: "0%",
              left: "10%",
              color: "#F7DF1E",
            },
            { icon: <FaHtml5 />, top: "50%", right: "20%", color: "#E34F26" },
            {
              icon: <FaCss3Alt />,
              bottom: "15%",
              right: "30%",
              color: "#264DE4",
            },
            {
              icon: <FaNodeJs />,
              bottom: "0%",
              right: "40%",
              color: "#83CD29",
            },
          ].map((item, index) => (
            <MotionDiv
              key={index}
              variants={floatingVariants}
              animate="animate"
              style={{
                position: "absolute",
                fontSize: "2rem",
                ...item,
              }}
            >
              {item.icon}
            </MotionDiv>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
