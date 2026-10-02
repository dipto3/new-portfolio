import React, { useState } from "react";
import {
  ExternalLink,
  Lock,
  RefreshCw,
  Share2,
  Bookmark,
  ChevronRight,
} from "lucide-react";
import { blogPosts } from "../../../constants";

const IPhoneSafari = () => {
  const [copiedId, setCopiedId] = useState(null);

  const handleShare = (link, id) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(link);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#f2f2f7] text-gray-900">
      {/* Safari Address Bar */}
      <div className="px-4 py-2 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="flex items-center gap-2 bg-gray-100 rounded-xl px-3 py-1.5 text-xs text-gray-700">
          <Lock className="size-3.5 text-gray-500" />
          <span className="flex-1 text-center font-medium truncate">
            github.com/dipto3
          </span>
          <RefreshCw className="size-3.5 text-gray-500" />
        </div>
      </div>

      {/* Safari Content Body */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Banner */}
        <div className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl p-4 text-white shadow-sm">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-pink-100">
            Featured Repositories
          </span>
          <h2 className="text-xl font-bold mt-1">Projects & Articles</h2>
          <p className="text-xs text-pink-100 mt-1 leading-relaxed">
            Open-source projects, full-stack applications, and backend systems built by Dipto.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-4">
          {blogPosts.map(({ id, image, title, date, link }) => (
            <div
              key={id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200/80 transition-all active:scale-[0.99]"
            >
              {/* Image banner */}
              <div className="w-full h-44 bg-gray-100 overflow-hidden relative">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-semibold text-white">
                  {date}
                </div>
              </div>

              {/* Card content */}
              <div className="p-4 space-y-3">
                <h3 className="font-bold text-base text-gray-900 leading-snug">
                  {title}
                </h3>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 active:scale-95 transition-all shadow-sm"
                  >
                    View Project <ExternalLink className="size-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={() => handleShare(link, id)}
                    className="text-xs text-gray-500 hover:text-gray-900 flex items-center gap-1 px-2 py-1 rounded active:bg-gray-100"
                  >
                    <Share2 className="size-3.5" />
                    <span>{copiedId === id ? "Copied!" : "Share"}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Safari Footer Tip */}
        <div className="text-center py-4 text-xs text-gray-400">
          Showing 3 of 3 featured publications
        </div>
      </div>
    </div>
  );
};

export default IPhoneSafari;
