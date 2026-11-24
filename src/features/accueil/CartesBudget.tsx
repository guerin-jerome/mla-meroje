import { Card, CardContent, Grid, Stack } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import WorkIcon from "@mui/icons-material/Work";
import SavingsIcon from "@mui/icons-material/Savings";

export const CartesBudget = () => {
  return (
    <Grid size={12}>
      <Card className="infos-budget">
        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 2,
          }}
        >
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <Card sx={{ backgroundColor: "#d9e2f5", boxShadow: "none" }}>
              <CardContent className="budget-icon">
                <HomeIcon color="primary" />
              </CardContent>
            </Card>
            <Stack>
              <p>Loyer</p>
              <p className="sous-titre">Fixe</p>
            </Stack>
          </Stack>
          <Stack>
            <p className="data">490,00€</p>
          </Stack>
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 2,
          }}
        >
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <Card sx={{ backgroundColor: "#f5dfe6", boxShadow: "none" }}>
              <CardContent className="budget-icon">
                <LocalBarIcon color="error" />
              </CardContent>
            </Card>
            <Stack>
              <p>Loisir</p>
              <p className="sous-titre">Variable</p>
            </Stack>
          </Stack>
          <Stack>
            <p className="data">180,00€</p>
          </Stack>
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 2,
          }}
        >
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <Card sx={{ backgroundColor: "#f7e6d0", boxShadow: "none" }}>
              <CardContent className="budget-icon">
                <WorkIcon color="warning" />
              </CardContent>
            </Card>
            <Stack>
              <p>Professionnel</p>
              <p className="sous-titre">Variable</p>
            </Stack>
          </Stack>
          <Stack>
            <p className="data">65,00€</p>
          </Stack>
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 2,
          }}
        >
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <Card sx={{ backgroundColor: "#d9e2f5", boxShadow: "none" }}>
              <CardContent className="budget-icon">
                <RestaurantIcon color="primary" />
              </CardContent>
            </Card>
            <Stack>
              <p>Alimentation</p>
              <p className="sous-titre">Variable</p>
            </Stack>
          </Stack>
          <Stack>
            <p className="data">325,00€</p>
          </Stack>
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <Card sx={{ backgroundColor: "#ceebea", boxShadow: "none" }}>
              <CardContent className="budget-icon">
                <SavingsIcon color="success" />
              </CardContent>
            </Card>
            <Stack>
              <p>PEA</p>
              <p className="sous-titre">Épargne</p>
            </Stack>
          </Stack>
          <Stack>
            <p className="data">200,00€</p>
          </Stack>
        </Stack>
      </Card>
    </Grid>
  );
};
