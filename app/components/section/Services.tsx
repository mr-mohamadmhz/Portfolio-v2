import { Box, Typography } from "@mui/material";
import Image from "next/image";
import CustomBox from "../common/CustomBox";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

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
    icon: <CodeIcon />,
    title: "Technical Skills",
    description: "Skills and tools that I have expertise in",
  },
];

const Services = () => {
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      alignItems="center"
      className="h-screen dark:bg-gray-900 dark:text-white bg-white text-black"
      sx={{ padding: { xs: 2, md: 6 }, textAlign: "center" }}
      gap={4}
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
          Services
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
        Discover our professional services tailored to meet your needs.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            flex: 1,
            borderRadius: 2,
            overflow: "hidden",
            width: "100%",
          }}
        >
          <Image
            src="https://micropro.com/wp-content/uploads/2022/08/hackers.jpg"
            alt="Service Image"
            width={600}
            height={400}
            layout="responsive"
            className="w-full"
          />
        </Box>

        {/* باکس کارت‌ها */}
        <Box
          sx={{
            flex: 1,
            padding: 3,
            borderRadius: 2,
            color: "white",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 2,
            height: "100%",
            width: "100%",
          }}
        >
          {boxesData.map((item, index) => (
            <CustomBox
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              backgroundColor="dark:bg-gray-900 dark:text-white bg-white text-black"
              width="100%"
              height={150}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
