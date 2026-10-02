import { Download } from "lucide-react";
import { Suspense } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import WindowControls from "../components/WindowControls";
import WindowWrapper from "../hoc/WindowWrapper";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();
const Resume = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>
        <a
          href="files/resume.pdf"
          download
          className="cursor-pointer"
          title="Download Resume"
        >
          <Download className="icon" />
        </a>
      </div>

      <Document file="files/resume.pdf">
        <Suspense fallback={<p>Loading page…</p>}>
          <Page pageNumber={1} renderTextLayer renderAnnotationLayer />
        </Suspense>
      </Document>
    </>
  );
};
const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;
