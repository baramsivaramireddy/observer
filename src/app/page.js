import Homepage from "./components/homepage";
import Memberscomponent from "./components/members";
import ObjectDetectionComponent from "./components/ObjectDetection";
import ArchitechtureComponent from "./components/architecture";
import About from "./components/about";
import Objectdetector_video from "./components/Objectdetector_video";
export default function Home() {
  return (
    <>
      <Homepage />
      <ObjectDetectionComponent />
      {/* <Objectdetector_video /> */}
      <Memberscomponent />
      <ArchitechtureComponent />
      <About />
    </>
  );
}
