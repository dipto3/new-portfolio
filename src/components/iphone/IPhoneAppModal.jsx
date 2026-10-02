import React from "react";
import { ChevronLeft } from "lucide-react";
import useWindowStore from "../../store/window";
import IPhoneStatusBar from "./IPhoneStatusBar";
import IPhoneTerminal from "./apps/IPhoneTerminal";
import IPhoneSafari from "./apps/IPhoneSafari";
import IPhoneFinder from "./apps/IPhoneFinder";
import IPhoneResume from "./apps/IPhoneResume";
import IPhoneContact from "./apps/IPhoneContact";
import IPhoneGallery from "./apps/IPhoneGallery";
import IPhoneNotes from "./apps/IPhoneNotes";

const APP_META = {
  terminal: { title: "Terminal", isDark: true },
  safari: { title: "Safari", isDark: false },
  finder: { title: "Portfolio", isDark: false },
  resume: { title: "Resume", isDark: false },
  contact: { title: "Contact", isDark: false },
  photos: { title: "Photos", isDark: false },
  txtfile: { title: "Notes", isDark: false },
  imgfile: { title: "Image Preview", isDark: false },
};

const IPhoneAppModal = ({ activeAppKey }) => {
  const { closeWindow, windows } = useWindowStore();

  if (!activeAppKey) return null;

  const meta = APP_META[activeAppKey] || { title: "App", isDark: false };
  const isDark = meta.isDark;

  const handleClose = () => {
    closeWindow(activeAppKey);
  };

  const renderAppContent = () => {
    switch (activeAppKey) {
      case "terminal":
        return <IPhoneTerminal />;
      case "safari":
        return <IPhoneSafari />;
      case "finder":
        return <IPhoneFinder />;
      case "resume":
        return <IPhoneResume />;
      case "contact":
        return <IPhoneContact />;
      case "photos":
        return <IPhoneGallery />;
      case "txtfile":
        return <IPhoneNotes />;
      case "imgfile": {
        const data = windows.imgfile?.data;
        return (
          <div className="flex-1 bg-black flex flex-col items-center justify-center p-4">
            {data?.imageUrl || data?.image ? (
              <img
                src={data.imageUrl || data.image}
                alt={data.name || "Preview"}
                className="max-h-[75vh] max-w-full object-contain rounded-xl"
              />
            ) : (
              <p className="text-white text-xs">No image to preview</p>
            )}
          </div>
        );
      }
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-[#f2f2f7] animate-in fade-in slide-in-from-bottom duration-300">
      {/* Top iOS Status Bar */}
      <div className={isDark ? "bg-[#18181b]" : "bg-white"}>
        <IPhoneStatusBar isDark={isDark} />
      </div>

      {/* iOS App Navigation Bar */}
      <div
        className={`flex items-center justify-between px-4 py-2 border-b select-none ${
          isDark
            ? "bg-[#18181b] border-[#27272a] text-white"
            : "bg-white border-gray-200 text-gray-900"
        }`}
      >
        <button
          type="button"
          onClick={handleClose}
          className="flex items-center gap-1 text-blue-500 font-medium text-sm active:opacity-60 transition-opacity"
        >
          <ChevronLeft className="size-5 -ml-1.5" />
          <span>Home</span>
        </button>

        <h1 className="font-bold text-sm tracking-tight truncate max-w-[160px]">
          {meta.title}
        </h1>

        <button
          type="button"
          onClick={handleClose}
          className="text-blue-500 font-semibold text-sm active:opacity-60 transition-opacity"
        >
          Done
        </button>
      </div>

      {/* App Body Content */}
      <div className="flex-1 overflow-hidden flex flex-col">
        {renderAppContent()}
      </div>

      {/* Bottom iOS Home Indicator */}
      <div
        onClick={handleClose}
        className={`w-full py-2.5 flex items-center justify-center cursor-pointer select-none active:opacity-60 ${
          isDark ? "bg-[#18181b]" : "bg-white"
        }`}
        title="Tap to return Home"
      >
        <div
          className={`w-36 h-1 rounded-full ${
            isDark ? "bg-white/40" : "bg-black/30"
          }`}
        />
      </div>
    </div>
  );
};

export default IPhoneAppModal;
