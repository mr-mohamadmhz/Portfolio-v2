import { Box, Typography } from "@mui/material";
import BlogCard from "../common/BlogCard";
import CustomSwiper from "../common/CustomSwiper";

const boxesData = [
  {
    imageUrl:
      "https://www.amny.com/wp-content/uploads/2022/08/GettyImages-523538287.jpg?quality=51",
    date: "1404/02/03",
    title: "The Future of AI in Web Development",
    summary:
      "Exploring the impact of AI on web development, including tools and frameworks that are changing the landscape.",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1505685296765-3a2736de412f",
    date: "1404/01/28",
    title: "AI-Powered Design Tools",
    summary:
      "Discover how AI is revolutionizing design processes, enabling faster and more intuitive user experiences.",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    date: "1404/01/15",
    title: "Automated Testing with AI",
    summary:
      "Learn about AI-driven testing tools that enhance code quality and reduce development time.",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    date: "1404/01/05",
    title: "Personalized User Experiences",
    summary:
      "Explore how AI tailors web content to individual users, increasing engagement and satisfaction.",
  },
];

const Blog = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      className="px-8 h-screen dark:bg-gray-900 dark:text-white text-black"
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
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={4}
        >
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            gutterBottom
            style={{
              width: "fit-content",
            }}
          >
            Personal Blog
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
          <Typography textAlign='center' variant="body1" maxWidth="600px" mx="auto" mb={4}>
            A space where I share my thoughts, experiences, and insights on
            various topics. Join me as I explore and reflect on life's journey
          </Typography>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={{ xs: "center" }}
          width={"100%"}
        >
          <Box
            width="100%"
            overflow="hidden"
            display={"flex"}
            justifyContent={{ xs: "center" }}
          >
            <CustomSwiper
              slides={boxesData.map((item, index) => (
                <BlogCard
                  imageUrl={item.imageUrl}
                  key={index}
                  date={item.date}
                  title={item.title}
                  summary={item.summary}
                />
              ))}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Blog;
