"use client";
import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  IconButton,
  FormControl,
} from "@mui/material";
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationOnIcon,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
  Telegram,
} from "@mui/icons-material";

type FormDataType = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormDataType>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange =
    (field: keyof FormDataType) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [field]: e.target.value });
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      className="px-8 h-screen dark:bg-gray-900 dark:text-white text-black"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        className="h-3/4 container"
        width="100%"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={4}
        >
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            gutterBottom
          >
            Contact Us
            <div className="w-[70%] h-2 bg-[#89c4ff] rounded-[25px] mt-2 mx-auto" />
          </Typography>
          <Typography
            textAlign="center"
            variant="body1"
            maxWidth="600px"
            mx="auto"
            mb={4}
          >
           {` Have a project? Let's discuss how we can collaborate.`}
          </Typography>
        </Box>

        <Box className="w-full !justify-center items-center flex flex-col md:flex-row gap-8">
          <Box className="md:w-1/3">
            <Typography variant="h5" className="font-bold mb-6">
              Contact Information
            </Typography>
            <Box className="flex items-top mb-4">
              <EmailIcon className="text-purple-500 mr-2" />
              <Box>
                <span className="text-xs text-gray-300">Talk to us:</span>
                <Typography>info@example.com</Typography>
              </Box>
            </Box>
            <Box className="flex items-top mb-4">
              <PhoneIcon className="text-purple-500 mr-2" />
              <Box>
                <span className="text-xs text-gray-300">Call us:</span>
                <Typography>+49 123 456 7890</Typography>
              </Box>
            </Box>
            <Box className="flex items-top mb-6">
              <LocationOnIcon className="text-purple-500 mr-2" />
              <Box>
                <span className="text-xs text-gray-300">address:</span>
                <Typography>Frankfurt, Germany</Typography>
              </Box>
            </Box>
            <Typography variant="subtitle1" className="mb-2">
              Follow us:
            </Typography>
            <Box className="flex space-x-4">
              {[Facebook, Twitter, Instagram, LinkedIn, YouTube, Telegram].map(
                (Icon, i) => (
                  <IconButton
                    key={i}
                    className="!text-gray-500 hover:!text-white"
                  >
                    <Icon />
                  </IconButton>
                )
              )}
            </Box>
          </Box>
          <Box className="md:w-2/3">
            <form onSubmit={handleSubmit}>
              <Box className="flex flex-col gap-4">
                <Box className="flex flex-col md:flex-row gap-4">
                  <FormControl fullWidth>
                    <TextField
                      label="First Name"
                      variant="outlined"
                      value={formData.firstName}
                      onChange={handleChange("firstName")}
                      slotProps={{
                        input: { className: "!text-gray-900 dark:!text-white" },
                        inputLabel: {
                          className: "!text-gray-700 dark:!text-white",
                        },
                      }}
                    />
                  </FormControl>
                  <FormControl fullWidth>
                    <TextField
                      label="Last Name"
                      variant="outlined"
                      value={formData.lastName}
                      onChange={handleChange("lastName")}
                      slotProps={{
                        input: { className: "!text-gray-900 dark:!text-white" },
                        inputLabel: {
                          className: "!text-gray-700 dark:!text-white",
                        },
                      }}
                    />
                  </FormControl>
                </Box>
                <Box className="flex flex-col md:flex-row gap-4">
                  <FormControl fullWidth>
                    <TextField
                      label="Email"
                      type="email"
                      variant="outlined"
                      value={formData.email}
                      onChange={handleChange("email")}
                      slotProps={{
                        input: { className: "!text-gray-900 dark:!text-white" },
                        inputLabel: {
                          className: "!text-gray-700 dark:!text-white",
                        },
                      }}
                    />
                  </FormControl>
                  <FormControl fullWidth>
                    <TextField
                      label="Phone"
                      type="tel"
                      variant="outlined"
                      value={formData.phone}
                      onChange={handleChange("phone")}
                      slotProps={{
                        input: { className: "!text-gray-900 dark:!text-white" },
                        inputLabel: {
                          className: "!text-gray-700 dark:!text-white",
                        },
                      }}
                    />
                  </FormControl>
                </Box>
                <FormControl fullWidth>
                  <TextField
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    value={formData.message}
                    onChange={handleChange("message")}
                    slotProps={{
                      input: { className: "!text-gray-900 dark:!text-white" },
                      inputLabel: {
                        className: "!text-gray-700 dark:!text-white",
                      },
                    }}
                  />
                </FormControl>
                <Box className="flex justify-start">
                  <Button
                    type="submit"
                    variant="outlined"
                    className="!border-none bg-gradient-to-r from-purple-500 to-pink-500 !text-white font-semibold py-2 !px-8 rounded transition-colors"
                  >
                    Send Message
                  </Button>
                </Box>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
