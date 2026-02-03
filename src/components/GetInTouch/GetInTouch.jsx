import React, { useState } from "react";
import { Box, Typography, Button, Avatar, Stack, TextField } from "@mui/material";
import Avatar1 from "../../assets/Avatar1.png";
import Avatar2 from "../../assets/avatar2.png";
import Avatar3 from "../../assets/Avatar3.png";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    query: "",
  });
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.query) {
      setStatus("error");
      setMessage("Please fill in all required fields (Name, Email, Query)");
      setTimeout(() => {
        setStatus("");
        setMessage("");
      }, 3000);
      return;
    }

    if (!formData.email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      setTimeout(() => {
        setStatus("");
        setMessage("");
      }, 3000);
      return;
    }

    setStatus("sending");
    setMessage("Sending your message...");

    // Web3Forms Configuration - Get your access key from https://web3forms.com
    // Use environment variable for security (works in both dev and production)
    // Fallback to direct key if env var not loaded (for testing)
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "817469ea-4bba-492c-a50c-30750c124848";

    // Debug: Log the access key (remove in production)
    console.log("Access Key from env:", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    console.log("Using access key:", accessKey);

    // Check if access key is configured
    if (!accessKey || accessKey === "YOUR_ACCESS_KEY" || accessKey === "YOUR_ACCESS_KEY_HERE") {
      setStatus("error");
      setMessage("Access key not configured. Please check your .env file and restart the server.");
      setTimeout(() => {
        setStatus("");
        setMessage("");
      }, 5000);
      console.error("Web3Forms access key not found. Current value:", accessKey);
      return;
    }

    const formDataToSend = {
      access_key: accessKey,
      subject: "Contact Form Submission - Get in Touch",
      from_name: formData.name,
      from_email: formData.email,
      name: formData.name,
      email: formData.email,
      phone: formData.phone || "Not provided",
      message: formData.query,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setMessage("Thank you! Your message has been sent successfully. We'll get back to you soon.");
        
        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          query: "",
        });
        
        setTimeout(() => {
          setStatus("");
          setMessage("");
        }, 5000);
      } else {
        // Show more detailed error from Web3Forms API
        const errorMsg = result.message || result.error || "Failed to send message";
        throw new Error(errorMsg);
      }
    } catch (error) {
      console.error("Form Submission Error:", error);
      console.error("Response details:", error.response);
      setStatus("error");
      setMessage(`Failed to send message: ${error.message || "Please check your Web3Forms access key and try again."}`);
      setTimeout(() => {
        setStatus("");
        setMessage("");
      }, 5000);
    }
  };
  return (
    <Box
      sx={{
        width: {
          xs: "70%",
          sm: "70%",
          md: "70%",
          lg: "1160px",
        },
        bgcolor: "#eaf6f7",
        borderTopRightRadius: {
          xs: "40px",
          sm: "80px",
          lg: "120px",
        },
        borderBottomLeftRadius: {
          xs: "40px",
          sm: "80px",
          lg: "120px",
        },
        padding: {
          xs: "20px",
          sm: "28px",
          lg: "32px",
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        mx: "auto",
        mt: {
          xs: "40px",
          sm: "80px",
          lg: "120px",
        },
      }}
    >
      <Stack
        direction="row"
        spacing={-2.0}
        justifyContent="center"
        sx={{
          flexWrap: { xs: "wrap", sm: "nowrap" },
          gap: { xs: "8px", sm: "0px" },
        }}
      >
        {[Avatar1, Avatar2, Avatar3].map((src, index) => (
          <Avatar
            key={index}
            src={src}
            alt={`Team member ${index + 1}`}
            sx={{
              width: { xs: 40, sm: 48 },
              height: { xs: 40, sm: 48 },
              border: "2px solid white",
              zIndex: 4 - index,
            }}
          />
        ))}
      </Stack>

      <Typography
        variant="h6"
        fontWeight={500}
        color="#252525"
        sx={{
          fontSize: { xs: "16px", sm: "18px", lg: "20px" },
          textAlign: "center",
        }}
      >
        Still have questions?
      </Typography>

      <Typography
        variant="body2"
        fontWeight={400}
        sx={{
          color: "#494949",
          maxWidth: 500,
          textAlign: "center",
          fontSize: { xs: "14px", sm: "15px" },
        }}
      >
        Can't find the answer you're looking for? Please chat to our friendly team.
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: { xs: "100%", sm: "500px" },
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 3,
          // Prevent any white "bleed" outside the rounded inputs (common with autofill / inner shadows)
          "& .MuiFormControl-root": {
            backgroundColor: "transparent !important",
          },
          "& .MuiInputLabel-root": {
            backgroundColor: "transparent !important",
          },
          "& .MuiOutlinedInput-root": {
            overflow: "hidden",
          },
          "& .MuiOutlinedInput-root input, & .MuiOutlinedInput-root textarea": {
            backgroundColor: "#ffffff !important",
          },
        }}
      >
        <TextField
          name="name"
          label="Name"
          placeholder="Enter your name"
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
          required
          InputProps={{
            sx: {
              borderRadius: "28px",
              bgcolor: "#ffffff !important",
              backgroundColor: "#ffffff !important",
              height: 48,
              px: 2,
              fontSize: "14px",
              "& input": {
                backgroundColor: "#ffffff !important",
              },
              "&:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 100px #ffffff inset",
                WebkitTextFillColor: "#6c757d",
                backgroundColor: "#ffffff !important",
              },
            },
          }}
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#ffffff !important",
              "& fieldset": {
                borderColor: status === "error" ? "#dc3545" : "#ddd",
              },
              "&:hover": {
                backgroundColor: "#ffffff !important",
                "& fieldset": {
                  borderColor: status === "error" ? "#dc3545" : "#999",
                },
              },
              "&.Mui-focused": {
                backgroundColor: "#ffffff !important",
                "& fieldset": {
                  borderColor: status === "error" ? "#dc3545" : "#666",
                },
              },
            },
            "& .MuiInputLabel-root": {
              "&.Mui-focused": {
                color: "#666",
              },
            },
            "& .MuiInputBase-input": {
              backgroundColor: "#ffffff !important",
            },
          }}
        />

        <TextField
          name="phone"
          label="Phone Number"
          placeholder="Enter your phone number"
          variant="outlined"
          value={formData.phone}
          onChange={handleChange}
          type="tel"
          InputProps={{
            sx: {
              borderRadius: "28px",
              bgcolor: "#ffffff !important",
              backgroundColor: "#ffffff !important",
              height: 48,
              px: 2,
              fontSize: "14px",
              "& input": {
                backgroundColor: "#ffffff !important",
              },
              "&:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 100px #ffffff inset",
                WebkitTextFillColor: "#6c757d",
                backgroundColor: "#ffffff !important",
              },
            },
          }}
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#ffffff !important",
              "& fieldset": {
                borderColor: "#ddd",
              },
              "&:hover": {
                backgroundColor: "#ffffff !important",
                "& fieldset": {
                  borderColor: "#999",
                },
              },
              "&.Mui-focused": {
                backgroundColor: "#ffffff !important",
                "& fieldset": {
                  borderColor: "#666",
                },
              },
            },
            "& .MuiInputLabel-root": {
              "&.Mui-focused": {
                color: "#666",
              },
            },
            "& .MuiInputBase-input": {
              backgroundColor: "#ffffff !important",
            },
          }}
        />

      <TextField
          name="email"
          label="Email ID"
        placeholder="Ex: abc@gmail.com"
        variant="outlined"
          value={formData.email}
          onChange={handleChange}
          type="email"
          required
        InputProps={{
          sx: {
            borderRadius: "28px",
              bgcolor: "#ffffff !important",
              backgroundColor: "#ffffff !important",
            height: 48,
            px: 2,
            fontSize: "14px",
              "& input": {
                backgroundColor: "#ffffff !important",
              },
              "&:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 100px #ffffff inset",
                WebkitTextFillColor: "#6c757d",
                backgroundColor: "#ffffff !important",
              },
            },
          }}
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#ffffff !important",
              "& fieldset": {
                borderColor: status === "error" ? "#dc3545" : "#ddd",
              },
              "&:hover": {
                backgroundColor: "#ffffff !important",
                "& fieldset": {
                  borderColor: status === "error" ? "#dc3545" : "#999",
                },
              },
              "&.Mui-focused": {
                backgroundColor: "#ffffff !important",
                "& fieldset": {
                  borderColor: status === "error" ? "#dc3545" : "#666",
                },
              },
            },
            "& .MuiInputLabel-root": {
              "&.Mui-focused": {
                color: "#666",
              },
            },
            "& .MuiInputBase-input": {
              backgroundColor: "#ffffff !important",
            },
          }}
        />

        <TextField
          name="query"
          label="Query"
          placeholder="Enter your query or message"
          variant="outlined"
          value={formData.query}
          onChange={handleChange}
          required
          multiline
          rows={4}
          InputProps={{
            sx: {
              borderRadius: "20px",
              bgcolor: "#ffffff !important",
              backgroundColor: "#ffffff !important",
              px: 2,
              py: 1,
              fontSize: "14px",
              "& textarea": {
                backgroundColor: "#ffffff !important",
              },
              "&:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 100px #ffffff inset",
                WebkitTextFillColor: "#6c757d",
                backgroundColor: "#ffffff !important",
              },
          },
        }}
        sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#ffffff !important",
              "& fieldset": {
                borderColor: status === "error" ? "#dc3545" : "#ddd",
              },
              "&:hover": {
                backgroundColor: "#ffffff !important",
                "& fieldset": {
                  borderColor: status === "error" ? "#dc3545" : "#999",
                },
              },
              "&.Mui-focused": {
                backgroundColor: "#ffffff !important",
                "& fieldset": {
                  borderColor: status === "error" ? "#dc3545" : "#666",
                },
              },
            },
            "& .MuiInputLabel-root": {
              "&.Mui-focused": {
                color: "#666",
              },
            },
            "& .MuiInputBase-input": {
              backgroundColor: "#ffffff !important",
          },
        }}
      />

        {message && (
          <Typography
            variant="body2"
            sx={{
              color: status === "success" ? "#28a745" : "#dc3545",
              fontSize: { xs: "12px", sm: "14px" },
              textAlign: "center",
            }}
          >
            {message}
          </Typography>
        )}

      <Button
          type="submit"
        variant="contained"
          disabled={status === "sending"}
        sx={{
            bgcolor: status === "success" ? "#28a745" : status === "error" ? "#dc3545" : "#00917F",
          color: "#fff",
          px: { xs: 3, sm: 4 },
          py: 1.5,
          fontSize: { xs: "14px", sm: "14px" },
          borderRadius: "999px",
          textTransform: "none",
          "&:hover": {
              bgcolor: status === "success" ? "#28a745" : status === "error" ? "#dc3545" : "#007f6f",
            },
            "&:disabled": {
              bgcolor: "#ccc",
              cursor: "not-allowed",
          },
        }}
      >
          {status === "sending" ? "Sending..." : status === "success" ? "Message Sent!" : "Get in touch"}
      </Button>
      </Box>
    </Box>
  );
};

export default GetInTouch;
