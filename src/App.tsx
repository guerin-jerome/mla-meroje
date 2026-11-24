import { useState, type SyntheticEvent } from "react";
import { Accueil } from "./features/accueil/Accueil";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const handleClickTab = (_: SyntheticEvent, activeTabWanted: number) => {
    setActiveTab(activeTabWanted);
  };

  return (
    <main>
      <Tabs
        id="menu"
        value={activeTab}
        variant="fullWidth"
        onChange={handleClickTab}
        aria-label="Menu de navigation de l'application"
      >
        <Tab label="Accueil" />
        <Tab label="Historique" />
        <Tab label="Épargnes" />
      </Tabs>
      {activeTab === 0 && (
        <Accueil handleClickEditEpargne={() => setActiveTab(2)} />
      )}
      {activeTab === 1 && <p>Historique page</p>}
      {activeTab === 2 && <p>Épargnes page</p>}
    </main>
  );
}

export default App;
