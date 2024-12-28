// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Card,
  CardContent,
  CardMedia,
  Alert,
} from "@mui/material";

function PropertyViewDetail() {
  const staticProperty = {
    propertyName: "Modern Family Apartment",
    address: "123 Main Street",
    street: "Elm Street",
    city: "Springfield",
    price: "250,000",
    areaSize: "1500 sqft",
    description: "A modern and spacious family apartment located in the heart of the city.",
    propertyImages: ["/placeholder-image.jpg"],
  };

  const staticComments = [
    { comment: "Great property, very spacious and well-maintained!" },
    { comment: "The location is amazing, close to all amenities." },
  ];

  return (
    <Box sx={{ p: 4 }}>
      {/* Property Details */}
      <Card sx={{ mb: 4 }}>
        <CardMedia
          component="img"
          height="400"
          image={staticProperty.propertyImages[0] || "/default-image.jpg"}
          alt={staticProperty.propertyName || "Property Image"}
        />
        <CardContent>
          <Typography variant="h4" sx={{ mb: 2, textAlign: "center" }}>
            {staticProperty.propertyName}
          </Typography>
          <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
            {`${staticProperty.address}, ${staticProperty.street}, ${staticProperty.city}`}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Price:</strong> ${staticProperty.price}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Area:</strong> {staticProperty.areaSize}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Description:</strong> {staticProperty.description}
          </Typography>
        </CardContent>
      </Card>

      {/* Comments Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Comments
        </Typography>
        {/* Existing Comments */}
        {staticComments.length > 0 ? (
          staticComments.map((c, index) => (
            <Box key={index} sx={{ mb: 2, p: 2, border: "1px solid #ccc" }}>
              <Typography>{c.comment}</Typography>
            </Box>
          ))
        ) : (
          <Typography>No comments yet.</Typography>
        )}

        {/* Add Comment */}
        <TextField
          fullWidth
          label="Add a comment"
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" disabled>
          Submit Comment
        </Button>
        <Alert severity="success" sx={{ mt: 2 }}>
          Comment added successfully! (Static example)
        </Alert>
      </Box>

      {/* Back Button */}
      <Button
        variant="outlined"
        color="secondary"
        sx={{ mt: 4 }}
      >
        Back
      </Button>
    </Box>
  );
}

export default PropertyViewDetail;
