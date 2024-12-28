// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Card,
  // eslint-disable-next-line no-unused-vars
  CardContent,
  CardMedia,
  Grid,
  Container,
  Paper,
  // eslint-disable-next-line no-unused-vars
  Alert,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
// Utility function to format values
function formatCurrency(value) {
  if (value >= 1_00_00_00_000) {
    return `${(value / 1_00_00_00_000).toFixed(2)} Arab`;
  } else if (value >= 1_00_00_000) {
    return `${(value / 1_00_00_000).toFixed(2)} Crore`;
  } else if (value >= 1_00_000) {
    return `${(value / 1_00_000).toFixed(2)} Lakh`;
  } else if (value >= 1_000) {
    return `${(value / 1_000).toFixed(2)} Thousand`;
  } else if (value >= 100) {
    return `${(value / 100).toFixed(2)} Hundred`;
  } else {
    return `${value}`;
  }
}

function PropertyViewDetail() {
  const [isFavorited, setIsFavorited] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
    alert(
      isFavorited
        ? "Property removed from wishlist"
        : "Property added to wishlist"
    );
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setComments([...comments, { text: newComment, id: Date.now() }]);
      setNewComment("");
    }
  };

  const handleCommentDelete = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <Container>
      {/* Header Section */}
      <Box
        sx={{
          padding: "1rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button sx={{ paddingX:"2rem", borderRadius:"5px", padddingY:"0.5rem" }} variant="contained" onClick={() => window.history.back()}>
          Back
        </Button>
        <IconButton onClick={handleFavoriteClick}>
          {isFavorited ? (
            <FavoriteOutlinedIcon sx={{ color: "red" }} />
          ) : (
            <FavoriteBorderOutlinedIcon />
          )}
          <Typography>
            Add to Wishlist
          </Typography>
        </IconButton>
      </Box>

      {/* Property Title and Price */}
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "space-around", md: "space-evenly" },
          flexWrap: "wrap",
          alignItems: "center",
          paddingY: "1rem",
          // background:"#F8F9FA"
        }}
      >
        <Box>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Green Orchard Apartments
        </Typography>
        <Typography variant="h6" sx={{ fontSize:"0.9rem",color:"rgba(0,0,0,0.4)",display: "flex",
                alignItems: "center", }}>
          <LocationOnIcon sx={{color:"red"}}/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quod!
        </Typography>
        </Box>
        <Box>
          <Typography sx={{display:"none"}}>
            --
          </Typography>
        </Box>
        <Box>
          <Typography sx={{display:"none"}}>
            --
          </Typography>
        </Box>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          <Typography
            sx={{
              fontSize: "1rem",
              color: "rgba(0,0,0,0.5)",
              display: "inline-block",
              paddingX: "0.4rem",
            }}
          >
            PKR
          </Typography>
          {formatCurrency(259550)}
        </Typography>
      </Box>

      {/* Image Gallery Slider */}
      <Box sx={{ marginY: "1rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card>
              <CardMedia
                component="img"
                image="https://via.placeholder.com/800x400"
                alt="Main Property Image"
                sx={{ width: "100%" }}
              />
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            container
            spacing={1}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {[1, 2, 3].map((_, index) => (
              <Grid item xs={12} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    image={`https://via.placeholder.com/400x200?text=Image+${index + 1}`}
                    alt={`Property Image ${index + 1}`}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              border: "1px solid #33538F",
              background: "#F8F9FA",
              borderRadius: "16px",
              padding: "1rem",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Description
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              quod distinctio perspiciatis quisquam, quia inventore amet
              aliquid, aperiam id quos cupiditate consequatur voluptate iure
              ratione facilis dignissimos, quam autem. Nemo, magni beatae
              aperiam est consequatur expedita mollitia delectus quis dolores
              et, nihil totam sint autem harum ad quasi, praesentium unde!
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Contact Section */}
      {/* Features Section */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        Features
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              border: "1px solid #33538F",
              background: "#F8F9FA",
              borderRadius: "16px",
              padding: "1rem",
            }}
          >
            <Box sx={{ paddingX: "1rem", background: "#F8F9FA" }}>
              <Box>
                <TableContainer component={Paper} sx={{ paddingY: "1rem" }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Detail</TableCell>
                        <TableCell>Info</TableCell>
                        <TableCell>Detail</TableCell>
                        <TableCell>Info</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>No of Bedroom</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>No of Bathroom</TableCell>
                        <TableCell>4</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell>Garage</TableCell>
                        <TableCell>Yes</TableCell>
                        <TableCell>No of Floors</TableCell>
                        <TableCell>3</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell>Area (in sqft)</TableCell>
                        <TableCell>4000</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Apaertment</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell>City</TableCell>
                        <TableCell>Lahore</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Address: 123 Main St, City</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell>Gas</TableCell>
                        <TableCell>Yes</TableCell>
                        <TableCell>Electricity</TableCell>
                        <TableCell>Yes</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell>Water Supply</TableCell>
                        <TableCell>Yes</TableCell>
                        <TableCell>Solar System</TableCell>
                        <TableCell>No</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell>Swimming Pool</TableCell>
                        <TableCell>Yes</TableCell>
                        <TableCell>Solar System</TableCell>
                        <TableCell>No</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
              {/* Location mmap */}
            </Box>
          </Box>
        </Grid>

        {/* Contact area */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              border: "1px solid #33538F",
              background: "#F8F9FA",
              borderRadius: "16px",
              padding: "1rem",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", textAlign: "center", padding: "1rem" }}
            >
              Contact Us
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2, // Spacing between buttons
              }}
            >
              <Button
                variant="contained"
                color="success"
                startIcon={<WhatsAppIcon />}
                sx={{
                  flex: 1,
                  height: "40px",
                  maxWidth: "150px",
                  borderRadius: "20px",
                }}
              >
                WhatsApp
              </Button>
              <Button
                variant="contained"
                color="primary"
                startIcon={<CallIcon />}
                sx={{
                  flex: 1,
                  height: "40px",
                  maxWidth: "150px",
                  borderRadius: "20px",
                }}
              >
                Direct Call
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                my: 2,
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  height: "1px",
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                }}
              />
              {/* OR Text */}
              <Typography
                variant="body1"
                sx={{
                  mx: 2,
                  color: "rgba(0, 0, 0, 0.4)",
                }}
              >
                or
              </Typography>
              {/* Right Line */}
              <Box
                sx={{
                  flex: 1,
                  height: "1px",
                  backgroundColor: "rgba(0, 0, 0, 0.2)", // Adjust line color
                }}
              />
            </Box>
            <Box sx={{ marginTop: "1rem" }}>
              <TextField
                label="Your Good Name"
                variant="outlined"
                fullWidth
                sx={{
                  marginBottom: "1rem",
                  background: "#fff",
                  borderRadius: "16px",
                }}
              />
              <TextField
                label="Your Best Email Address"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: "1rem", background: "#fff" }}
              />
              <TextField
                label="Your Phone Number"
                variant="outlined"
                sx={{ marginBottom: "1rem", background: "#fff" }}
                fullWidth
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "1rem",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "20px",
                    padding: "0.5rem 1rem",
                    gap: "0.5rem",
                    textTransform: "none",
                  }}
                >
                  <CallOutlinedIcon />
                  Request for Call
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        Location
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              border: "1px solid #33538F",
              background: "#F8F9FA",
              borderRadius: "16px",
              padding: "2rem",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "0.5rem",
              }}
            >
              <LocationOnIcon sx={{ color: "red" }} />
              Address: 123 Main St, City
            </Typography>
            <Paper elevation={3} sx={{ height: "300px" }}>
              <iframe
                title="Google Map"
                width="100%"
                height="100%"
                frameBorder="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345092594!2d-122.41941548468162!3d37.774929779759575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808aa9d99999%3A0x9999a9d9aa99999!2sSome%20Address!5e0!3m2!1sen!2sus!4v1699655555555"
                allowFullScreen
              ></iframe>
            </Paper>
          </Box>
        </Grid>
      </Grid>

      {/* Comment Section */}
      {/* Comments Heading */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          marginTop: "1rem",
        }}
      >
        Comments
      </Typography>
      <Box
        sx={{
          padding: "1rem",
          marginY: "1rem",
          background: "#F8F9FA",
          border: "1px solid #33538F",
          borderRadius: "16px",
        }}
      >
        {/* Scrollable Comments Section */}
        <Box
          sx={{
            height: "30vh",
            maxHeight: "30vh", // Set the fixed height
            overflowY: "auto", // Enable vertical scrolling
            padding: "1rem",
            background: "#FFFFFF",
            border: "1px solid #E0E0E0",
            borderRadius: "8px",
            marginBottom: "1rem",
          }}
        >
          {comments.length > 0 ? (
            comments.map((comment) => (
              <Paper
                key={comment.id}
                sx={{
                  padding: "0.5rem",
                  marginBottom: "0.5rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography>{comment.text}</Typography>
                <Button
                  size="small"
                  color="error"
                  onClick={() => handleCommentDelete(comment.id)}
                >
                  Delete
                </Button>
              </Paper>
            ))
          ) : (
            <Typography color="textSecondary" sx={{ textAlign: "center" }}>
              No comments yet.
            </Typography>
          )}
        </Box>

        {/* Add Comment Input Field */}
        <TextField
          label="What you think?"
          variant="outlined"
          fullWidth
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          sx={{
            background: "#ffffff",
            marginBottom: "1rem",
          }}
        />
        <Button
          variant="contained"
          onClick={handleCommentSubmit}
          sx={{ display: "block", margin: "0 auto" }}
        >
          Add Comment
        </Button>
      </Box>
    </Container>
  );
}

export default PropertyViewDetail;
