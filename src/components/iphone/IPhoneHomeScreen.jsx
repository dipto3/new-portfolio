import React from "react";
import dayjs from "dayjs";
import { Sparkles, ArrowRight, ExternalLink, SquareUser } from "lucide-react";
import useWindowStore from "../../store/window";
import IPhoneStatusBar from "./IPhoneStatusBar";

const IPhoneHomeScreen = () => {
  const { openWindow } = useWindowStore();

  const apps = [
    {
      id: "finder",
      name: "Portfolio",
      icon: "/images/finder.png",
      badge: null,
      action: () => openWindow("finder"),
    },
    {
      id: "safari",
      name: "Safari",
      icon: "/images/safari.png",
      badge: "3",
      action: () => openWindow("safari"),
    },
    {
      id: "terminal",
      name: "Terminal",
      icon: "/images/terminal.png",
      badge: null,
      action: () => openWindow("terminal"),
    },
    {
      id: "resume",
      name: "Resume",
      icon: "/images/pdf.png",
      badge: null,
      action: () => openWindow("resume"),
    },
    {
      id: "contact",
      name: "Contact",
      icon: "/images/contact.png",
      badge: "1",
      action: () => openWindow("contact"),
    },
    {
      id: "photos",
      name: "Photos",
      icon: "/images/photos.png",
      badge: null,
      action: () => openWindow("photos"),
    },
    {
      id: "txtfile",
      name: "Notes",
      icon: "/images/txt.png",
      badge: null,
      action: () =>
        openWindow("txtfile", {
          name: "About Dipto.txt",
          subtitle: "Full Stack Engineer & Web Creator",
          description: [
            "Passionate software engineer specializing in frontend & backend systems.",
            "Experienced with Vue.js, React.js, PHP, Laravel, Tailwind CSS, and MySQL.",
            "Enthusiastic about clean code, performance optimization, and delightful UX.",
          ],
        }),
    },
    {
      id: "github",
      name: "GitHub",
      icon: "/icons/github.svg",
      isCustomIcon: true,
      badge: null,
      action: () => window.open("https://github.com/dipto3", "_blank"),
    },
  ];

  const dockApps = [
    {
      id: "finder",
      name: "Portfolio",
      icon: "/images/finder.png",
      action: () => openWindow("finder"),
    },
    {
      id: "safari",
      name: "Safari",
      icon: "/images/safari.png",
      action: () => openWindow("safari"),
    },
    {
      id: "terminal",
      name: "Terminal",
      icon: "/images/terminal.png",
      action: () => openWindow("terminal"),
    },
    {
      id: "contact",
      name: "Contact",
      icon: "/images/contact.png",
      action: () => openWindow("contact"),
    },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden select-none bg-cover bg-center" style={{ backgroundImage: "url('/images/wallpaper.png')" }}>
      {/* Top Section: Status Bar + Profile Widget */}
      <div className="w-full flex flex-col">
        <IPhoneStatusBar />

        {/* iOS Frosted Profile Widget */}
        <div className="px-5 pt-3">
          <div className="w-full bg-white/20 backdrop-blur-xl border border-white/25 rounded-3xl p-4 shadow-xl text-white">
            <div className="flex items-center justify-between text-[11px] font-semibold tracking-wider text-white/80 uppercase">
              <span>{dayjs().format("dddd, MMM D")}</span>
              {/* <span className="flex items-center gap-1 text-emerald-300">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Online
              </span> */}
            </div>

            <div className="flex items-center gap-3.5 mt-3">
              <div className="relative size-14 rounded-2xl overflow-hidden border-2 border-white/40 shadow-md flex-shrink-0">
                <img
                  src="/images/me.jpeg"
                  alt="Dipto"
                  className="size-full object-cover"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h2 className="text-base font-bold text-white tracking-tight leading-snug">
                  Hey, I'm Dipto!
                </h2>
                <p className="text-xs text-white/90 truncate font-medium">
                  Full Stack Web Developer
                </p>
                {/* <p className="text-[10px] text-white/70 truncate mt-0.5">
                  Vue • React • Laravel • Tailwind
                </p> */}
              </div>
            </div>

            {/* Quick action buttons in widget */}
            <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-white/15">
              <button
                type="button"
                onClick={() => openWindow("finder")}
                className="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl bg-white/20 hover:bg-white/30 active:scale-95 transition-all text-xs font-semibold text-white"
              >
                <span>View Projects</span>
                <ArrowRight className="size-3" />
              </button>

              <button
                type="button"
                onClick={() => openWindow("contact")}
                className="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl bg-blue-500/80 hover:bg-blue-500 active:scale-95 transition-all text-xs font-semibold text-white shadow-sm"
              >
                <span>Get in Touch</span>
                <SquareUser className="size-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Center Section: iOS App Grid */}
      <div className="px-6 py-4 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-4 gap-y-5 gap-x-4">
          {apps.map((app) => (
            <div
              key={app.id}
              onClick={app.action}
              className="flex flex-col items-center cursor-pointer group active:scale-90 transition-transform"
            >
              {/* Squircle App Icon */}
              <div className="relative size-[60px] rounded-[17px] bg-white/20 backdrop-blur-md border border-white/30 shadow-lg flex items-center justify-center overflow-hidden">
                {app.isCustomIcon ? (
                  <div className="size-full bg-gray-900 flex items-center justify-center p-3">
                    <img
                      src={app.icon}
                      alt={app.name}
                      className="size-full object-contain invert"
                    />
                  </div>
                ) : (
                  <img
                    src={app.icon}
                    alt={app.name}
                    className="size-full object-cover"
                    loading="lazy"
                  />
                )}

                {/* Notification Badge */}
                {app.badge && (
                  <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow">
                    {app.badge}
                  </span>
                )}
              </div>

              {/* App Label */}
              <span className="text-[11px] font-medium text-white tracking-tight mt-1.5 text-center drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] truncate max-w-[68px]">
                {app.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section: iOS Dock + Home Indicator */}
      <div className="w-full flex flex-col items-center pb-2">
        {/* iOS Frosted Dock */}
        <div className="w-[90%] max-w-sm bg-white/25 backdrop-blur-2xl border border-white/30 rounded-[32px] px-4 py-3 shadow-2xl flex items-center justify-around mb-2">
          {dockApps.map((app) => (
            <div
              key={app.id}
              onClick={app.action}
              className="cursor-pointer active:scale-90 transition-transform"
            >
              <div className="size-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-md flex items-center justify-center overflow-hidden">
                <img
                  src={app.icon}
                  alt={app.name}
                  className="size-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* iOS Home Indicator Bar */}
        <div className="w-36 h-1 bg-white/70 rounded-full my-1 shadow-sm" />
      </div>
    </div>
  );
};

export default IPhoneHomeScreen;
