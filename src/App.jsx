import "./App.css";
import ACDBResidential from "./ACDB_Residential";
import Header from "./Header";
import DCDBFuseSPD from "./DCDB_fuse_SPD";
import DCDB_MCB_SPD from "./DCDB_MCBSPD.JSX";
import DCDB_FUSE_MCB_SPD from "./DCDB(FUSE+MCB+SPD)";
import BOSKitTable from "./BOSKitTable";

function App() {
  return (
    <>
      <Header />
      <ACDBResidential />
      <DCDBFuseSPD />
      <DCDB_MCB_SPD />
      <DCDB_FUSE_MCB_SPD />
      <BOSKitTable />
    </>
  );
}

export default App;
