import React, { useState } from "react";
import { Download, FileText, CheckCircle2, GraduationCap, Briefcase, ExternalLink } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const IPhoneResume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pdfError, setPdfError] = useState(false);

  return (
    <div className="flex flex-col h-full bg-[#f2f2f7] text-gray-900">
      {/* Top Action Bar */}
      <div className="p-4 bg-white border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-red-100 flex items-center justify-center text-red-600">
            <FileText className="size-5" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-gray-900">Resume.pdf</h3>
            <span className="text-[10px] text-gray-400">Official Curriculum Vitae</span>
          </div>
        </div>

        <a
          href="/files/resume.pdf"
          download="Dipto_Resume.pdf"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-semibold shadow-sm active:scale-95 transition-all"
        >
          <Download className="size-3.5" />
          Download
        </a>
      </div>

      {/* Main Scrollable Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Quick Highlights Card */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 space-y-3">
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-full overflow-hidden border-2 border-blue-500">
              <img
                src="/images/me.jpeg"
                alt="Dipto"
                className="size-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-bold text-base text-gray-900">Piyal Guho Dipto</h2>
              <p className="text-xs text-blue-600 font-medium">Full Stack Web Developer</p>
              <p className="text-[11px] text-gray-400">Dhaka, Bangladesh • dipto393@gmail.com</p>
            </div>
          </div>

          <div className="pt-2 border-t border-gray-100 grid grid-cols-2 gap-2 text-xs">
            <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
              <span className="text-[10px] text-gray-400 block uppercase font-bold">Focus</span>
              <span className="font-semibold text-gray-800">Vue, React, Laravel</span>
            </div>
            <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
              <span className="text-[10px] text-gray-400 block uppercase font-bold">Experience</span>
              <span className="font-semibold text-gray-800">Production Web Apps</span>
            </div>
          </div>
        </div>

        {/* PDF Viewer Container */}
        <div className="bg-white rounded-2xl p-2 shadow-sm border border-gray-200 overflow-hidden flex flex-col items-center">
          <p className="text-[11px] text-gray-400 py-1 font-medium">PDF Document Preview</p>
          <div className="w-full overflow-x-auto flex justify-center py-2 bg-gray-50 rounded-xl">
            <Document
              file="/files/resume.pdf"
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
              onLoadError={() => setPdfError(true)}
              loading={
                <div className="py-12 text-center text-xs text-gray-400">
                  Loading Resume Preview...
                </div>
              }
            >
              <Page
                pageNumber={1}
                width={Math.min(window.innerWidth - 64, 340)}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="shadow-md rounded overflow-hidden"
              />
            </Document>
          </div>
        </div>

        {/* Download Callout */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-4 text-white text-center space-y-2 shadow-md">
          <h4 className="font-bold text-sm">Need a copy for your records?</h4>
          <p className="text-xs text-blue-100">
            Download the complete PDF version formatted for recruitment and HR review.
          </p>
          <a
            href="/files/resume.pdf"
            download="Dipto_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-white text-blue-600 font-bold rounded-xl text-xs shadow hover:bg-blue-50 active:scale-[0.98] transition-all"
          >
            <Download className="size-4" /> Download Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
};

export default IPhoneResume;
