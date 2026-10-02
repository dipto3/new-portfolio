import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Folder,
  FileText,
  Image as ImageIcon,
  ExternalLink,
  Layers,
  Sparkles,
} from "lucide-react";
import { locations } from "../../../constants";
import useWindowStore from "../../../store/window";

const IPhoneFinder = () => {
  const { openWindow } = useWindowStore();
  const [currentFolder, setCurrentFolder] = useState(null); // null means root of Work
  const [selectedFile, setSelectedFile] = useState(null);

  const workProjects = locations.work?.children || [];

  const handleOpenItem = (item) => {
    if (item.kind === "folder") {
      setCurrentFolder(item);
      setSelectedFile(null);
    } else if (item.fileType === "pdf") {
      openWindow("resume");
    } else if (["fig", "url"].includes(item.fileType) && item.href) {
      window.open(item.href, "_blank");
    } else if (item.fileType === "txt") {
      setSelectedFile(item);
    } else if (item.fileType === "img") {
      setSelectedFile(item);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#f2f2f7] text-gray-900">
      {/* iOS Files Nav Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-white border-b border-gray-200">
        <div className="flex items-center gap-1.5">
          {currentFolder ? (
            <button
              type="button"
              onClick={() => {
                if (selectedFile) {
                  setSelectedFile(null);
                } else {
                  setCurrentFolder(null);
                }
              }}
              className="text-blue-600 flex items-center text-xs font-semibold active:opacity-60"
            >
              <ChevronLeft className="size-4 -ml-1" />
              {selectedFile ? currentFolder.name : "All Projects"}
            </button>
          ) : (
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Work Projects
            </span>
          )}
        </div>

        <div className="text-xs font-semibold text-gray-700 truncate max-w-[160px]">
          {selectedFile
            ? selectedFile.name
            : currentFolder
            ? currentFolder.name
            : "Portfolio Files"}
        </div>
      </div>

      {/* Main View */}
      <div className="flex-1 overflow-y-auto p-4">
        {selectedFile ? (
          /* File Preview View (Text notes or image) */
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 space-y-4">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
              <img
                src={selectedFile.icon}
                alt={selectedFile.name}
                className="size-8 object-contain"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-sm text-gray-900 truncate">
                  {selectedFile.name}
                </h3>
                <span className="text-[10px] text-gray-400">
                  {selectedFile.fileType?.toUpperCase()} Document
                </span>
              </div>
            </div>

            {selectedFile.imageUrl && (
              <div className="rounded-xl overflow-hidden border border-gray-200">
                <img
                  src={selectedFile.imageUrl}
                  alt={selectedFile.name}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {Array.isArray(selectedFile.description) && (
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase">
                  <Sparkles className="size-3.5" />
                  Key Features & Highlights
                </div>
                <div className="divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden bg-gray-50/50">
                  {selectedFile.description.map((item, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 text-xs text-gray-700 flex items-center gap-2"
                    >
                      <span className="size-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button
              type="button"
              onClick={() => setSelectedFile(null)}
              className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-semibold active:scale-[0.98] transition-all"
            >
              Back to Folder
            </button>
          </div>
        ) : currentFolder ? (
          /* Inside a project folder */
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3">
                <img
                  src={currentFolder.icon}
                  alt={currentFolder.name}
                  className="size-10 object-contain"
                />
                <div>
                  <h3 className="font-bold text-base text-gray-900">
                    {currentFolder.name}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {currentFolder.children?.length || 0} project items
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 divide-y divide-gray-100 overflow-hidden">
              {currentFolder.children?.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleOpenItem(item)}
                  className="p-3.5 flex items-center justify-between hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="size-8 object-contain flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-gray-900 truncate">
                        {item.name}
                      </p>
                      <p className="text-[10px] text-gray-400 capitalize">
                        {item.fileType === "txt"
                          ? "Feature specification"
                          : item.fileType === "img"
                          ? "Screenshot / Preview"
                          : item.fileType === "fig"
                          ? "Figma UI Design"
                          : "Live Web Link"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-gray-400">
                    {["fig", "url"].includes(item.fileType) ? (
                      <ExternalLink className="size-4 text-blue-500" />
                    ) : (
                      <ChevronRight className="size-4" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Root Work Projects List */
          <div className="space-y-3">
            <p className="text-xs text-gray-500 px-1 font-medium">
              Tap a folder to inspect project specs, screenshots & links:
            </p>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 divide-y divide-gray-100 overflow-hidden">
              {workProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => handleOpenItem(project)}
                  className="p-4 flex items-center justify-between hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="size-11 rounded-xl bg-blue-50 flex items-center justify-center p-1.5 flex-shrink-0">
                      <img
                        src={project.icon}
                        alt={project.name}
                        className="size-full object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-bold text-gray-900 truncate">
                        {project.name}
                      </h4>
                      <p className="text-[11px] text-gray-400 mt-0.5">
                        {project.children?.length || 0} items (Docs, Links, UI)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center text-blue-500">
                    <ChevronRight className="size-5 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Tip Card */}
            <div className="bg-blue-50/70 border border-blue-200/60 rounded-2xl p-3.5 flex items-start gap-3 mt-4">
              <Layers className="size-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-blue-900 leading-relaxed">
                All projects are developed with scalable architecture, role-based controls, payment gateways, and modern responsive frontends.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IPhoneFinder;
