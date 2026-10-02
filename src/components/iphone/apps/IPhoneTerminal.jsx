import React from "react";
import { Check, Terminal as TermIcon, Flag, Sparkles } from "lucide-react";
import { techStack } from "../../../constants";

const IPhoneTerminal = () => {
  return (
    <div className="flex flex-col h-full bg-[#18181b] text-gray-200 font-mono text-sm">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#27272a] border-b border-[#3f3f46]">
        <div className="flex items-center gap-2">
          <TermIcon className="size-4 text-emerald-400" />
          <span className="text-xs font-semibold text-gray-300">
            dipto@macbook-pro:~ (zsh)
          </span>
        </div>
        <span className="text-[10px] text-gray-400 bg-[#3f3f46] px-2 py-0.5 rounded">
          UTF-8
        </span>
      </div>

      {/* Terminal Body */}
      <div className="flex-1 overflow-y-auto p-4 space-y-5">
        {/* Command line */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-emerald-400 font-bold">dipto@portfolio</span>
            <span className="text-gray-400">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-gray-400">$</span>
            <span className="text-white font-medium">show-skills --all</span>
          </div>
          <p className="text-[11px] text-gray-400">
            [System initialized] Loading developer profile and core stack...
          </p>
        </div>

        {/* Skills Cards */}
        <div className="space-y-3">
          {techStack.map(({ category, items }) => (
            <div
              key={category}
              className="bg-[#27272a]/70 border border-[#3f3f46] rounded-xl p-3 space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Check className="size-4 text-emerald-400" />
                  <span className="font-semibold text-emerald-300 text-xs tracking-wide uppercase">
                    {category}
                  </span>
                </div>
                <span className="text-[10px] text-gray-400">
                  {items.length} {items.length === 1 ? "tool" : "tools"}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {items.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-[#3f3f46]/80 text-white border border-white/5 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Highlights */}
        <div className="bg-emerald-950/30 border border-emerald-500/20 rounded-xl p-3.5 space-y-2">
          <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold">
            <Sparkles className="size-4" />
            Specialization & Strengths
          </div>
          <p className="text-xs text-gray-300 leading-relaxed font-sans">
            Full-stack web application development, responsive design, RESTful API architecture, reactive UI state management, and seamless UX across modern browsers.
          </p>
        </div>

        {/* Footnote */}
        <div className="pt-2 pb-4 text-xs space-y-1.5 text-gray-400 border-t border-[#27272a]">
          <div className="flex items-center gap-2 text-emerald-400">
            <Check className="size-3.5" />
            <span>5 of 5 technology stacks verified</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Flag className="size-3.5 text-amber-400" />
            <span>Execution time: 4.8ms • Status: 200 OK</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPhoneTerminal;
