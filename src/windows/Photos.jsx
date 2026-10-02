import { WindowControls } from "../components";
import { gallery, photosLinks } from "../constants";
import WindowWrapper from "../hoc/WindowWrapper";

const Photos = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
        <h2 className="font-bold text-sm text-center flex-1">Gallery</h2>
      </div>

      <div className="flex h-full bg-white">
        <div className="sidebar">
          <h2>Photos</h2>
          <ul>
            {photosLinks.map((item) => (
              <li key={item.id}>
                <img src={item.icon} alt={item.title} />
                <p>{item.title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="gallery flex-1 overflow-auto max-h-[500px]">
          <ul>
            {gallery.map((item, index) => (
              <li key={item.id || index}>
                <img src={item.img} alt="Gallery item" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");
export default PhotosWindow;
