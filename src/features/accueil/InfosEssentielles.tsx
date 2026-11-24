import { Grid, Card, CardContent, IconButton } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

export const InfosEssentielles = () => {
  return (
    <>
      <Grid size={6}>
        <Card>
          <CardContent className="infos-essentielle">
            <p className="data">2 625,01€</p>
            <p className="sous-titre">RESTANT</p>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={4}>
        <Card>
          <CardContent className="infos-essentielle">
            <p className="data">3 jours</p>
            <p className="sous-titre">SALAIRE</p>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={2}>
        <IconButton color="info" sx={{ height: "100%" }}>
          <RestartAltIcon fontSize="medium" />
        </IconButton>
      </Grid>
    </>
  );
};
