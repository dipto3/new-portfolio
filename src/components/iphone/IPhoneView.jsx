import React from "react";
import useWindowStore from "../../store/window";
import IPhoneHomeScreen from "./IPhoneHomeScreen";
import IPhoneAppModal from "./IPhoneAppModal";

const IPhoneView = () => {
  const { windows } = useWindowStore();

  // Find the top active open window on mobile
  const openKeys = Object.keys(windows).filter((key) => windows[key]?.isOpen);
  const activeAppKey =
    openKeys.sort((a, b) => (windows[b]?.zIndex || 0) - (windows[a]?.zIndex || 0))[0] || null;

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-black select-none">
      {/* Background Home Screen */}
      <IPhoneHomeScreen />

      {/* Active App Modal */}
      {activeAppKey && <IPhoneAppModal activeAppKey={activeAppKey} />}
    </div>
  );
};

export default IPhoneView;
