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


// import React from "react";
// import CustomBox from "./CustomBox"; // مسیر صحیح فایل را جایگزین کنید
// import { Email } from "@mui/icons-material"; // یک آیکون نمونه از MUI

// const ParentComponent: React.FC = () => {
//   return (
//     <CustomBox
//       backgroundColor="bg-gray-200"
//       icon={<Email fontSize="large" />}
//       title="ایمیل"
//       description="info@example.com"
//       width={{ xs: "100%", sm: 300, md: 400, lg: 500 }}
//       height={{ xs: 150, md: 200 }}
//       sx={{ border: "2px solid red", textAlign: "center" }} // استایل سفارشی
//     />
//   );
// };

// export default ParentComponent;


// import React from "react";
// import { Box, Typography, BoxProps } from "@mui/material";
// import { ReactNode } from "react";

// interface CustomBoxProps extends BoxProps {
//   backgroundColor: string;
//   icon: ReactNode;
//   title: string;
//   description: string;
// }

// const CustomBox: React.FC<CustomBoxProps> = ({
//   backgroundColor,
//   icon,
//   title,
//   description,
//   ...props
// }) => {
//   return (
//     <Box
//       {...props} // حالا تمام ویژگی‌های Box از MUI پشتیبانی می‌شوند
//       className={`${backgroundColor}`}
//       sx={{
//         p: 3,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "flex-start",
//         justifyContent: "flex-start",
//         borderRadius: "16px",
//         boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//         overflow: "hidden",
//         ...props.sx, // امکان اورراید کردن sx
//       }}
//     >
//       <Box display="flex" alignItems="center" mb={1}>
//         <Box sx={{ mr: 2 }}>{icon}</Box>
//       </Box>

//       <Typography variant="h6" align="left" sx={{ fontWeight: "bold" }}>
//         {title}
//       </Typography>

//       <Typography variant="body2" align="left" sx={{ mt: 1 }}>
//         {description}
//       </Typography>
//     </Box>
//   );
// };

// export default CustomBox;
