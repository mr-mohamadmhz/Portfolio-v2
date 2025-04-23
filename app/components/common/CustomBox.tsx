import React from "react";
import { Box, Typography, BoxProps } from "@mui/material";
import { ReactNode } from "react";

interface CustomBoxProps extends BoxProps {
  backgroundColor: string;
  icon: ReactNode;
  title: string;
  description: string;
}

const CustomBox: React.FC<CustomBoxProps> = ({
  backgroundColor,
  icon,
  title,
  description,
  width = 250,
  height = 250,
  ...props
}) => {
  return (
    <Box
      {...props}
      className={`${backgroundColor}`}
      sx={{
        p: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        width,
        height,
      }}
      {...props}
    >
      <Box display="flex" alignItems="center" mb={1}>
        <Box sx={{ mr: 2 }}>{icon}</Box>
      </Box>

      <Typography variant="h6" align="left" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>

      <Typography variant="body2" align="left" sx={{ mt: 1 }}>
        {description}
      </Typography>
    </Box>
  );
};

export default CustomBox;