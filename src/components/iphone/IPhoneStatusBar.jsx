import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { Wifi } from "lucide-react";

const IPhoneStatusBar = ({ isDark = true, onDynamicIslandClick }) => {
  const [time, setTime] = useState(dayjs().format("h:mm"));
  const [islandExpanded, setIslandExpanded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(dayjs().format("h:mm"));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleIslandClick = () => {
    setIslandExpanded(!islandExpanded);
    if (onDynamicIslandClick) onDynamicIslandClick();
  };

  const textColor = isDark ? "text-white" : "text-gray-900";


  return (
    <header className="relative w-full pt-2 pb-1 px-6 select-none z-50">
      <div className="flex items-center justify-between">
        {/* Left: Time */}
        <div className={`w-16 text-sm font-semibold tracking-tight ${textColor}`}>
          {time}
        </div>

        {/* Center: Dynamic Island */}
        <div
          onClick={handleIslandClick}
          className={`cursor-pointer transition-all duration-300 ease-out bg-black rounded-full flex items-center shadow-lg border border-white/10 ${
            islandExpanded
              ? "w-64 h-10 px-4 justify-between"
              : "w-28 h-6.5 px-2.5 justify-between"
          }`}
          title="Dynamic Island - Tap to expand"
        >
          {islandExpanded ? (
            <>
              <div className="flex items-center gap-2">
                <div className="size-6 rounded-full overflow-hidden border border-white/30">
                  <img
                    src="/images/me.jpeg"
                    alt="Dipto"
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[11px] font-semibold text-white">
                    Piyal Guho Dipto
                  </span>
                  <span className="text-[9px] text-emerald-400">
                    🟢 Available for work
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </>
          ) : (
            <>
              {/* Camera lens */}
              <div className="size-2.5 rounded-full bg-[#1c1c1e] border border-[#2c2c2e] flex items-center justify-center">
                <div className="size-1 rounded-full bg-[#0a192f]/60" />
              </div>

              {/* Status dot / audio wave */}
              <div className="flex items-center gap-1">
                <div className="size-2 rounded-full bg-emerald-400/90 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              </div>
            </>
          )}
        </div>

        {/* Right: Cellular, Wifi, Battery */}
        <div className={`w-16 flex items-center justify-end gap-1.5 ${textColor}`}>
          {/* Signal Bars */}
          <div className="flex items-end gap-0.5 h-3">
            <span className="w-0.5 h-1 bg-current rounded-xs" />
            <span className="w-0.5 h-1.5 bg-current rounded-xs" />
            <span className="w-0.5 h-2.2 bg-current rounded-xs" />
            <span className="w-0.5 h-3 bg-current rounded-xs" />
          </div>

          {/* 5G label */}
          <span className="text-[10px] font-bold tracking-tighter">5G</span>

          {/* Battery Capsule */}
          <div className="relative flex items-center">
            <div className="w-5 h-2.5 rounded-[4px] border border-current p-0.5 flex items-center">
              <div className="h-full w-full bg-emerald-400 rounded-[2px]" />
            </div>
            <div className="w-0.5 h-1 bg-current rounded-r-xs -ml-px" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default IPhoneStatusBar;
