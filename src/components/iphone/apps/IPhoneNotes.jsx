import React from "react";
import { FileText, CheckCircle2 } from "lucide-react";
import useWindowStore from "../../../store/window";

const IPhoneNotes = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;

  const title = data?.name || "Project Overview.txt";
  const image = data?.image || data?.imageUrl;
  const subtitle = data?.subtitle;
  const description = data?.description || [
    "Full-stack web application with responsive UI.",
    "Engineered with clean architectural patterns and reusable components.",
    "Integrated RESTful API endpoints and robust data validation.",
  ];

  return (
    <div className="flex flex-col h-full bg-[#fbfbfd] text-gray-900">
      <div className="p-4 bg-amber-50/70 border-b border-amber-200/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
            <FileText className="size-4" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-gray-900 truncate max-w-[200px]">
              {title}
            </h3>
            <span className="text-[10px] text-amber-800">Apple Notes Document</span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {image && (
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <img src={image} alt={title} className="w-full h-auto object-cover" />
          </div>
        )}

        {subtitle && (
          <h4 className="text-sm font-bold text-gray-800">{subtitle}</h4>
        )}

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 space-y-2.5">
          <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            Document Content
          </h5>
          <div className="space-y-2">
            {Array.isArray(description) ? (
              description.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-gray-700 leading-relaxed"
                >
                  <CheckCircle2 className="size-3.5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))
            ) : (
              <p className="text-xs text-gray-700 leading-relaxed">
                {String(description)}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPhoneNotes;
