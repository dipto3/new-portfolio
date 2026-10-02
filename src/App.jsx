import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import Dock from "./components/Dock";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import IPhoneView from "./components/iphone/IPhoneView";
import {
  Contact,
  Finder,
  Resume,
  Safari,
  Terminal,
  Text,
  Photos,
  Img,
} from "./windows";

gsap.registerPlugin(Draggable);

function App() {
  return (
    <main className="w-dvw h-dvh overflow-hidden relative">
      {/* Desktop macOS Screen Experience (md screens and up) */}
      <div className="hidden md:block w-full h-full relative select-none">
        <Navbar />
        <Welcome />
        <Dock />

        <Terminal />
        <Safari />
        <Resume />
        <Finder />
        <Text />
        <Contact />
        <Photos />
        <Img />
      </div>

      {/* Mobile iPhone Screen Experience (< md screens) */}
      <div className="block md:hidden w-full h-full relative">
        <IPhoneView />
      </div>
    </main>
  );
}

export default App;
