import React from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

export default function Contact() {
    return (
        <Container maxWidth="sm" sx={{ backgroundColor: '#f0f0f0', padding: 4, borderRadius: 2, boxShadow: 3, mt: 4 }}>
            <Typography variant="h4" align="center" color="blackv2.main" gutterBottom>
                Contact Us
            </Typography>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField label="Name" variant="outlined" fullWidth sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'blackv2.main',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'blackv2.main',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'blackv2.main',
                                },
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: 'blackv2.main',
                            },
                        }}/>
                <TextField label="Email" variant="outlined" fullWidth sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'blackv2.main',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'blackv2.main',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'blackv2.main',
                                },
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: 'blackv2.main',
                            },
                        }}/>
                <TextField label="Message" variant="outlined" multiline rows={4} fullWidth sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'blackv2.main',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'blackv2.main',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'blackv2.main',
                                },
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: 'blackv2.main',
                            },
                        }}/>
                <Button variant="contained" color="white" sx={{ alignSelf: 'center', mt: 2 }}>
                    Send
                </Button>
            </Box>
        </Container>
    );
}