import { Button, Card, CardContent, Grid, Stack } from "@mui/material";
import SavingsIcon from "@mui/icons-material/Savings";
import SecurityIcon from "@mui/icons-material/Security";
import type { AccueilProps } from "./accueil.types";

export const Epargnes = ({
  handleClickEditEpargne,
}: Pick<AccueilProps, "handleClickEditEpargne">) => {
  return (
    <Grid size={12} id="epargne">
      <Stack
        id="infos-epargnes-header"
        direction="row"
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <h2>Épargnes</h2>
        <Button onClick={handleClickEditEpargne}>Modifier</Button>
      </Stack>
      <Card>
        <CardContent id="infos-epargnes">
          <Grid container spacing={2}>
            <Grid size={6}>
              <Card sx={{ backgroundColor: "#ceebea", boxShadow: "none" }}>
                <CardContent className="infos-epargne">
                  <Stack direction="row">
                    <SavingsIcon color="success" /> <p>Total</p>
                  </Stack>
                  <p className="data">1 456,87€</p>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={6}>
              <Card sx={{ backgroundColor: "#ceebea", boxShadow: "none" }}>
                <CardContent className="infos-epargne">
                  <Stack direction="row">
                    <SecurityIcon color="success" /> <p>Sécurité</p>
                  </Stack>
                  <p className="data">451,76€</p>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
