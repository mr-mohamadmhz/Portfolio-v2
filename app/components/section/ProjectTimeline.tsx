import { Box, Typography } from "@mui/material";
import { FiCheckCircle } from "react-icons/fi";
import { LuAlarmClock } from "react-icons/lu";

const ProjectTimeline = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      className="px-8 h-screen dark:bg-gray-900 dark:text-white bg-white text-black"
    >
      <Box
        display="grid"
        gridTemplateColumns={{
          xs: "1fr",
          xl: "auto 1fr auto",
        }}
        justifyItems="center"
        alignItems="center"
        gap={8}
        className="container"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={2}
          sx={{
            boxShadow: "0px 3px 4px rgba(245, 198, 0, 0.3)",
            backdropFilter: "blur(10px)",
            padding: "12px 20px",
            borderRadius: 8,
            minWidth: "200px",
            width: "fit-content",
          }}
        >
          <LuAlarmClock size={35} color="#F5C600" />
          <Typography
            fontSize={{ xs: "1rem", sm: "1.25rem", lg: "1.75rem" }}
            fontWeight="bold"
          >
            In Time Projects
          </Typography>
        </Box>

        <Box
          display="grid"
          gridTemplateColumns={{
            xs: "1fr",
            sm: "repeat(3, 1fr)",
          }}
          justifyItems="center"
          gap={4}
          flex={1}
        >
          {[
            { number: "+3", text: "Years of Experience" },
            { number: "+50", text: "Projects Completed" },
            { number: "+30", text: "Happy Clients" },
          ].map((item, index) => (
            <Box
              display="flex"
              flexDirection="column"
              key={index}
              textAlign="center"
            >
              <Typography variant="h4" fontWeight="bold">
                {item.number}
              </Typography>
              <Typography
                className="text-nowrap"
                fontSize={{ xs: "0.75rem", sm: "1rem", lg: "1.25rem" }}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={2}
          sx={{
            boxShadow: "0px 3px 4px rgba(0,128,255, 0.3)",
            backdropFilter: "blur(10px)",
            padding: "12px 20px",
            borderRadius: 8,
            minWidth: "200px",
            width: "fit-content",
          }}
        >
          <FiCheckCircle size={35} color="#0080ff" />
          <Typography
            fontSize={{ xs: "1rem", sm: "1.25rem", lg: "1.75rem" }}
            fontWeight="bold"
          >
            Project Done
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectTimeline;
