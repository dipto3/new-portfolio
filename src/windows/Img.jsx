import { WindowControls } from "../components";
import WindowWrapper from "../hoc/WindowWrapper";
import useWindowStore from "../store/window";

const Img = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;

  if (!data) return null;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <p className="font-bold text-[#5f6266] text-center flex-1">{data.name}</p>
      </div>

      <div className="preview">
        <img src={data.imageUrl || data.image} alt={data.name} />
      </div>
    </>
  );
};

const ImgWindow = WindowWrapper(Img, "imgfile");
export default ImgWindow;
