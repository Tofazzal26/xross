import Image from "next/image";
import Banner from "./Components/Banner/page";
import XrossMini from "./Components/XrossMini/page";
import Activation from "./Components/Activation/page";
import Charge from "./Components/Charge/page";
import PowerCharge from "./Components/PowerCharge/page";
import Vaping from "./Components/Vaping/page";
import EasyUse from "./Components/EasyUse/page";

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
    </div>
  );
}
