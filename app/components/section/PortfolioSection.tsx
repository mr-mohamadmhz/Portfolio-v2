import { Box, ImageList, ImageListItem, Typography, Button } from "@mui/material";
import Image from "next/image";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
    description: "A comfortable and stylish bed for your bedroom.",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
    description: "A collection of various books for your bookshelf.",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
    description: "A modern sink for your kitchen or bathroom.",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
    description: "A spacious and well-equipped kitchen.",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
    description: "Stylish blinds to enhance your window decor.",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
    description: "Comfortable and elegant chairs for your dining area.",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
    description: "A powerful laptop for work and entertainment.",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
    description: "Beautifully crafted doors for your home or office.",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
    description: "A warm cup of coffee to start your day.",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
    description: "Efficient storage solutions for your home.",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
    description: "A scented candle for a relaxing ambiance.",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
    description: "A stylish coffee table for your living room.",
  },
];

const PortfolioSection = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      className="h-screen px-8 dark:bg-gray-800 dark:text-white bg-white text-black"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        className="container"
      >
        <Typography
          fontSize={{ xs: "1.5rem", sm: "2rem", lg: "2.5rem" }}
          fontWeight="bold"
          mb={4}
        >
          Image Gallery
        </Typography>

        <Box
          sx={{
            width: "100%",
            height: "70vh", // ارتفاع ثابت برای بخش گالری
            overflowY: "auto", // فعال‌سازی اسکرول عمودی
            paddingRight: "16px", // ایجاد فضا برای نوار اسکرول
          }}
        >
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <Box
                  sx={{
                    textAlign: "center",
                    marginTop: 1,
                    padding: 1,
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    borderRadius: 2,
                  }}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={200}
                    height={700}
                    layout="responsive"
                    objectFit="cover"
                    quality={80}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between", // فاصله دادن بین متن‌ها و دکمه
                      alignItems: "center",
                      marginTop: 1,
                    }}
                  >
                    <Box sx={{ textAlign: "left", flex: 1 }}>
                      <Typography variant="h6" fontWeight="bold" color="white" mb={1}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="white" mb={2}>
                        {item.description}
                      </Typography>
                    </Box>

                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        fontWeight: "bold",
                        borderRadius: 2,
                        padding: "8px 16px",
                        minWidth: "120px", // عرض حداقل برای دکمه
                      }}
                    >
                      View More
                    </Button>
                  </Box>
                </Box>
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
    </Box>
  );
};

export default PortfolioSection;
