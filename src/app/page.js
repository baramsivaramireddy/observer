import Homepage from "./components/homepage";
import Memberscomponent from "./components/members";
import ObjectDetectionComponent from "./components/ObjectDetection";
import ArchitechtureComponent from './components/architecture'
import About from './components/about'
export default function Home() {
  return (
  <>
  < Homepage />
  <ObjectDetectionComponent />
  <Memberscomponent />
  <ArchitechtureComponent />
  <About />
  </>
  );
}
