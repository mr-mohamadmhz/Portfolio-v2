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

const About = () => {
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
        width="100%"
        overflow="hidden"
      >
        <Box display={"flex"} justifyContent={"center"}>
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            gutterBottom
            style={{
              width: "fit-content",
            }}
          >
            About Me
            <div
              style={{
                width: "70%",
                height: "8px",
                backgroundColor: "#89c4ff",
                borderRadius: "25px",
                marginTop: "8px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          </Typography>
        </Box>
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", lg: "row" }}
          width="100%"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={{ xs: 4, md: 8 }}
            width="100%"
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
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={{ xs: "center", lg: "start" }}
            width={"100%"}
          >
            <Typography
              className="text-start text-wrap lg:w-2/3"
              sx={{ my: 4 }}
            >
              I am a frontend developer with a passion for building beautiful,
              user-friendly web applications. I focus on creating seamless,
              responsive interfaces that enhance the user experience. With a
              strong understanding of modern web technologies, I strive to craft
              intuitive and accessible designs that perform well across devices.
            </Typography>

            <Box width="100%" overflow="hidden">
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
      </Box>
    </Box>
  );
};

export default About;
