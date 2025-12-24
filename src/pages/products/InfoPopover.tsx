import {
  Popover,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

type PropsType = {
  open: boolean;
  handleClosePopover: () => void;
  anchorEl: HTMLElement | null;
};

const InfoPopover = ({ open, handleClosePopover, anchorEl }: PropsType) => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClosePopover}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Box sx={{ p: 2.5, maxWidth: 300 }}>
        <Typography fontWeight={600} mb={1.5}>
          Pokloni uz svaki dušek
        </Typography>

        <List dense>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Jorgan" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="2× jastuk" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Čaršav" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Vodootporni čaršav" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Zaštitna podloga" />
          </ListItem>
        </List>
      </Box>
    </Popover>
  );
};

export default InfoPopover;
