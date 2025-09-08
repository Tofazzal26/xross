import Image from "next/image";
import Banner from "./Components/Banner/page";
import XrossMini from "./Components/XrossMini/page";
import Activation from "./Components/Activation/page";
import Charge from "./Components/Charge/page";
import PowerCharge from "./Components/PowerCharge/page";

export default function Home() {
  return (
    <div>
      <Banner />
      <XrossMini />
      <Activation />
      <Charge />
      <PowerCharge />
    </div>
  );
}
