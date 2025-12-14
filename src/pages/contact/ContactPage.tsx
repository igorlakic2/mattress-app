import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";

const ContactPage = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(form);
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        px: 2,
        py: 8,
      }}
    >
      <Typography variant="h4" fontWeight={600} mb={4}>
        Kontakt
      </Typography>

      <Stack spacing={4}>
        <div className="flex gap-4">
          <div className="flex gap-2">
            <MailIcon />
            <span>beokomfort@gmail.com</span>
          </div>

          <div className="flex gap-2">
            <PhoneIcon />
            <span>0613188421</span>
          </div>
        </div>

        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={2.5}>
            <TextField
              label="Ime i prezime"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              label="Broj telefona"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              fullWidth
            />

            <TextField
              label="Poruka"
              name="message"
              value={form.message}
              onChange={handleChange}
              fullWidth
              required
              multiline
              rows={4}
            />

            <Button type="submit" variant="contained" size="large">
              Pošalji poruku
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default ContactPage;
