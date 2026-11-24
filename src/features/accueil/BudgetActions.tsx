import { Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SyncAltIcon from "@mui/icons-material/SyncAlt";

export const BudgetActions = () => {
  return (
    <Stack
      direction="row"
      sx={{ justifyContent: "space-between", width: "100%" }}
    >
      <Button startIcon={<AddIcon />}>Nouvelle dépense</Button>
      <Button startIcon={<SyncAltIcon />}>Faire une bascule</Button>
    </Stack>
  );
};
