import Image from "next/image";
import Banner from "./Components/Banner/page";
import XrossMini from "./Components/XrossMini/page";
import Activation from "./Components/Activation/page";
import Charge from "./Components/Charge/page";
import PowerCharge from "./Components/PowerCharge/page";
import Vaping from "./Components/Vaping/page";
import EasyUse from "./Components/EasyUse/page";
import Auto from "./Components/Auto/page";
import Remember from "./Components/Remember/page";
import Makes from "./Components/Makes/page";
import Pods from "./Components/Pods/page";
import CheckSpec from "./Components/CheckSpec/page";
import Footer from "./Components/Footer/page";
import Finish from "./Components/Finish/page";

export default function Home() {
  return (
    <div>
      <Banner />
      <XrossMini />
      <Activation />
      <Charge />
      <PowerCharge />
      <Vaping />
      <EasyUse />
      <Auto />
      <Remember />
      <Makes />
      <Pods />
      <CheckSpec />
      <Finish />
      <Footer />
    </div>
  );
}
