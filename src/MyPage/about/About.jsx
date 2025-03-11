import React from "react";
import { Container, Typography, Box, Grid, Paper } from "@mui/material";

export default function About() {
    return (
        <Container maxWidth="md" sx={{ backgroundColor: '#f0f0f0', padding: 4, borderRadius: 2, boxShadow: 3, mt: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
                About Us
            </Typography>
            <Box sx={{ mt: 2 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="body1" paragraph>
                                Welcome to our website! We are dedicated to providing the best service possible. Our team is passionate about what we do and we strive to exceed your expectations.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Our mission is to deliver high-quality products and services that meet the needs of our customers. We believe in continuous improvement and innovation to stay ahead in the industry.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Thank you for choosing us. We look forward to serving you!
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
                        <img src="/src/MyPage/home/images/WikiFood.png" style={{ width: '100%', height: 275, objectFit: 'cover', borderRadius: 8 }} alt="WikiFood" /> <br />
                        </Paper>
                    </Grid>
                </Grid>
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h5" align="center" gutterBottom>
                        Our Values
                    </Typography>
                    <Typography variant="body1" paragraph>
                        We believe in integrity, transparency, and respect. Our team works hard to maintain these values in everything we do. We are committed to providing exceptional service and building long-lasting relationships with our customers.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Innovation is at the heart of our company. We continuously seek new ways to improve our products and services to better serve our customers. We embrace change and are always looking for ways to stay ahead of the curve.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Our team is our greatest asset. We are proud of the talented and dedicated individuals who make up our company. We believe in fostering a positive and inclusive work environment where everyone can thrive.
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}