import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const NotFoundPage = () => {
  return (
    <Box
      minHeight="70vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={2}
    >
      <Box textAlign="center" maxWidth={420}>
        <ErrorOutlineIcon
          sx={{ fontSize: 64, color: "text.secondary", mb: 2 }}
        />

        <Typography variant="h5" fontWeight={600} gutterBottom>
          Stranica nije pronađena
        </Typography>

        <Typography color="text.secondary" mb={3}>
          Link koji ste otvorili ne postoji ili je uklonjen.
        </Typography>

        <Button variant="contained" component={Link} to="/" size="large">
          Nazad na početnu
        </Button>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
