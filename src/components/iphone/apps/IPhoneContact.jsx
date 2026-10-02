import React, { useState } from "react";
import { Mail, Globe, Copy, Check, MessageSquare, Send } from "lucide-react";
import { socials } from "../../../constants";


const IPhoneContact = () => {
  const [copied, setCopied] = useState(false);
  const email = "dipto393@gmail.com";

  const copyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#f2f2f7] text-gray-900">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Profile Card */}
        <div className="bg-white rounded-3xl p-6 text-center space-y-3 shadow-sm border border-gray-200">
          <div className="relative inline-block">
            <div className="size-24 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
              <img
                src="/images/me.jpeg"
                alt="Piyal Guho Dipto"
                className="size-full object-cover"
              />
            </div>
            <span className="absolute bottom-1 right-1 size-5 rounded-full bg-emerald-500 border-2 border-white" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">Piyal Guho Dipto</h2>
            <p className="text-xs text-blue-600 font-semibold mt-0.5">
              Full Stack Web Developer
            </p>
            <p className="text-xs text-gray-400 mt-1">Dhaka, Bangladesh</p>
          </div>

          {/* iOS Circular Quick Action Buttons */}
          <div className="grid grid-cols-3 gap-3 pt-3">
            <a
              href={`mailto:${email}`}
              className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-blue-50 text-blue-600 active:scale-95 transition-all"
            >
              <div className="size-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md">
                <Mail className="size-5" />
              </div>
              <span className="text-[11px] font-semibold">Email</span>
            </a>

            <a
              href="https://github.com/dipto3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-gray-100 text-gray-800 active:scale-95 transition-all"
            >
              <div className="size-10 rounded-full bg-gray-900 text-white flex items-center justify-center shadow-md p-2.5">
                <img src="/icons/github.svg" alt="GitHub" className="size-full invert" />
              </div>
              <span className="text-[11px] font-semibold">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/piyal-guho-dipto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-sky-50 text-sky-600 active:scale-95 transition-all"
            >
              <div className="size-10 rounded-full bg-sky-600 text-white flex items-center justify-center shadow-md p-2.5">
                <img src="/icons/linkedin.svg" alt="LinkedIn" className="size-full invert" />
              </div>
              <span className="text-[11px] font-semibold">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Contact Details List */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 divide-y divide-gray-100 overflow-hidden">
          {/* Email row */}
          <div className="p-4 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
                Email
              </span>
              <p className="text-sm font-semibold text-gray-900">{email}</p>
            </div>
            <button
              type="button"
              onClick={copyEmail}
              className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 active:scale-90 transition-all"
              title="Copy Email"
            >
              {copied ? (
                <Check className="size-4 text-emerald-600" />
              ) : (
                <Copy className="size-4" />
              )}
            </button>
          </div>

          {/* Socials rows */}
          {socials.map(({ id, text, link, icon, bg }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 flex items-center justify-between hover:bg-gray-50 active:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div
                  className="size-8 rounded-xl flex items-center justify-center text-white"
                  style={{ backgroundColor: bg }}
                >
                  <img src={icon} alt={text} className="size-4 invert" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-900">{text}</p>
                  <p className="text-[10px] text-gray-400 truncate max-w-[200px]">
                    {link.replace("https://", "")}
                  </p>
                </div>
              </div>
              <span className="text-xs text-blue-600 font-semibold">Open</span>
            </a>
          ))}
        </div>

        {/* Message Note Card */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-4 space-y-2">
          <div className="flex items-center gap-2 text-blue-900 font-bold text-xs">
            <MessageSquare className="size-4 text-blue-600" />
            Let's Collaborate
          </div>
          <p className="text-xs text-blue-900/80 leading-relaxed">
            Got an interesting project, startup idea, or engineering role? Feel free to reach out directly via email or LinkedIn.
          </p>
          <a
            href={`mailto:${email}?subject=Project%20Inquiry`}
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-blue-600 text-white font-bold rounded-xl text-xs shadow hover:bg-blue-700 active:scale-[0.98] transition-all"
          >
            <Send className="size-3.5" /> Send a Message
          </a>
        </div>
      </div>
    </div>
  );
};

export default IPhoneContact;
