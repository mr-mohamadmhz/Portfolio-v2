import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { Box, Typography } from "@mui/material";
import CustomSwiper from "../common/CustomSwiper";
import CustomBox from "../common/CustomBox";

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

const Testimonials = () => {
  return (
    <Box
      className="relative px-8 dark:bg-gray-900 dark:text-white bg-white text-black"
      sx={{ padding: { xs: 2, md: 6 }, textAlign: "center" }}
    >
      <Box className="absolute z-0 right-0 bottom-0 dark:bg-gray-800 bg-fuchsia-50 w-[90%] h-[70%]" />
      <Box className="absolute z-0 right-0 bottom-0 dark:bg-indigo-800 bg-bg-indigo-950 w-[60%] h-[20%]" />
      <Box
        display="flex"
        flexDirection={"column"}
        justifyContent="center"
        alignItems="center"
        className="relative z-10 h-screen"
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
            Testimonials
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
        <Typography variant="body1" maxWidth="600px" mx="auto" mb={4}>
          Discover what our valued customers have to say about their experience
          with us. Their feedback and testimonials reflect our commitment to
          excellence and customer satisfaction. Let their words inspire your
          trust in our services!
        </Typography>
        <Box
          display={"flex"}
          justifyContent={"end"}
          width="80%"
          overflow="hidden"
        >
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

export default Testimonials;
