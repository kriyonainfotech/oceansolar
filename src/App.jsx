import "./App.css";
import ACDBResidential from "./ACDB_Residential";
import Header from "./Header";
import DCDBFuseSPD from "./DCDB_fuse_SPD";
import DCDB_FUSE_MCB_SPD from "./DCDB(FUSE+MCB+SPD)";
import BOSKitTable from "./BOSKitTable";
import DCDB_MCB_SPD from "./DCDB_MCB_SPD";
import ACDBTable1 from "./ACDB_C1.JSX";
import ACDBTable2 from "./ACDB_C2";
import DCDBTable1 from "./DCDB_C1.JSX";
import DCDB_LAST from "./DCDB_LAST";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <ACDBResidential />
      <DCDBFuseSPD />
      <DCDB_MCB_SPD />
      <DCDB_FUSE_MCB_SPD />
      <BOSKitTable />
      <ACDBTable1 />
      <ACDBTable2 />
      <DCDBTable1 />
      <DCDB_LAST />
      <Footer />
    </>
  );
}

export default App;
