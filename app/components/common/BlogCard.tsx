import React from "react";
import { Box, Typography, Button, BoxProps } from "@mui/material";

interface BlogCardProps extends BoxProps {
  imageUrl: string;
  title: string;
  date: string;
  summary: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  imageUrl,
  title,
  date,
  summary,
  width = 300,
  height = 450,
  ...props
}) => {
  return (
    <Box
      {...props}
      className="bg-white dark:bg-gray-800 shadow-md dark:shadow-lg rounded-2xl overflow-hidden transition-colors duration-300"
      sx={{
        width,
        height,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        component="img"
        src={imageUrl}
        alt={title}
        sx={{ width: "100%", height: "220px", objectFit: "cover" }}
      />
      <Box className="p-4 flex flex-col justify-between flex-1 text-gray-800 dark:text-gray-100">
        <Typography className="font-bold mb-1 line-clamp-1">{title}</Typography>
        <Typography
          variant="caption"
          className="mb-2 text-gray-500 dark:text-gray-400"
        >
          {date}
        </Typography>
        <Typography
          variant="body2"
          className="line-clamp-3 mb-4 text-gray-700 dark:text-gray-300"
        >
          {summary}
        </Typography>
        <Button
          variant="outlined"
          className="self-start w-full !border-none !text-gray-800 dark:!text-gray-200 !py-2 !rounded-2xl"
          size="small"
        >
          Continue reading
        </Button>
      </Box>
    </Box>
  );
};

export default BlogCard;
