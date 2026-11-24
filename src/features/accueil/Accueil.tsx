import { Grid } from "@mui/material";
import { InfosEssentielles } from "./InfosEssentielles";
import { Epargnes } from "./Epargnes";
import type { AccueilProps } from "./accueil.types";
import "./accueil.style.css";
import { CartesBudget } from "./CartesBudget";
import { BudgetActions } from "./BudgetActions";

export const Accueil = ({ handleClickEditEpargne }: AccueilProps) => {
  return (
    <Grid container spacing={2} id="accueil">
      <InfosEssentielles />
      <Epargnes handleClickEditEpargne={handleClickEditEpargne} />
      <BudgetActions />
      <CartesBudget />
    </Grid>
  );
};
