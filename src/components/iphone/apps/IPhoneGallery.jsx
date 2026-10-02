import React, { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { gallery } from "../../../constants";

const IPhoneGallery = () => {
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <div className="flex flex-col h-full bg-[#f2f2f7] text-gray-900">
      {/* Header */}
      <div className="p-4 bg-white border-b border-gray-200">
        <h3 className="font-bold text-base text-gray-900">Photo Library</h3>
        <p className="text-xs text-gray-400">Personal moments & highlights</p>
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-y-auto p-3">
        <div className="grid grid-cols-2 gap-2.5">
          {gallery.map((item, idx) => (
            <div
              key={item.id || idx}
              onClick={() => setActivePhoto(item.img)}
              className="aspect-square bg-gray-200 rounded-2xl overflow-hidden relative cursor-pointer group shadow-sm active:scale-95 transition-all"
            >
              <img
                src={item.img}
                alt="Gallery"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <ZoomIn className="size-6 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 animate-in fade-in duration-200">
          <div className="flex justify-end pt-2">
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="size-9 rounded-full bg-white/20 text-white flex items-center justify-center active:scale-90"
            >
              <X className="size-5" />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center p-2">
            <img
              src={activePhoto}
              alt="Expanded view"
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
            />
          </div>
          <div className="text-center text-xs text-gray-400 pb-4">
            Tap the X button to close
          </div>
        </div>
      )}
    </div>
  );
};

export default IPhoneGallery;
