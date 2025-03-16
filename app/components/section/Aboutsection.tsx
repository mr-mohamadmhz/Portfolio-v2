import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { Box, Typography } from "@mui/material";
import CustomBox from "../common/CustomBox";
import CustomSwiper from "../common/CustomSwiper";

const boxesData = [
  {
    icon: <WorkIcon />,
    title: "Professional Experience",
    description: "Details about professional experience",
  },
  {
    icon: <CodeIcon />,
    title: "Technical Skills",
    description: "Skills and tools that I have expertise in",
  },
  {
    icon: <SchoolIcon />,
    title: "Continuous Learning",
    description: "Courses and certifications I have completed",
  },
];

const AboutSection = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      className="px-8 h-screen dark:bg-gray-800 dark:text-white bg-fuchsia-50 text-black"
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
        className="h-3/4 container"
      >
        <Box display={"flex"} justifyContent={"center"}>
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            gutterBottom
            style={{
              width: "fit-content",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            About Me
            <div
              style={{
                width: "100%",
                height: "8px",
                backgroundColor: "#89c4ff",
                borderRadius: "25px",
                marginTop: "8px",
              }}
            />
          </Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={{ xs: 4, md: 8 }}
        >
          <Typography fontSize={{ xs: "4rem", sm: "8rem" }} fontWeight="bold">
            3+
          </Typography>
          <Typography
            fontSize={{ xs: "1.25rem", sm: "2.5rem", lg: "2rem", xl: "3rem" }}
            fontWeight="600"
            sx={{ whiteSpace: "pre-line" }}
          >
            {"Years\nWorking\nExperience"}
          </Typography>
        </Box>

        <Typography
          variant="body1"
          className="text-start lg:w-1/2"
          sx={{ mt: 2, mb: 4 }}
        >
          I am a frontend developer with a passion for building beautiful,
          user-friendly web applications. I focus on creating seamless,
          responsive interfaces that enhance the user experience. With a strong
          understanding of modern web technologies, I strive to craft intuitive
          and accessible designs that perform well across devices.
        </Typography>

        <Box display="flex" width={"100%"}>
          <CustomSwiper
            slides={boxesData.map((item, index) => (
              <CustomBox
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                backgroundColor={
                  "dark:bg-gray-900 dark:text-white bg-white text-black"
                }
              />
            ))}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
