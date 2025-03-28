import { useThemeStore } from "../store/useThemeStore";
import { Send } from "lucide-react";

const THEMES = ["light", "dark"];
const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  { id: 2, content: "I'm doing great! Just working on some new features.", isSent: true },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="min-h-screen container mx-auto px-6 pt-20 max-w-4xl">
      <div className="space-y-8">
        {/* Theme Selector */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Theme</h2>
          <p className="text-sm text-gray-500 mt-1">Choose a theme for your chat interface</p>
        </div>

        <div className="flex justify-center gap-6">
          {THEMES.map((t) => (
            <button
              key={t}
              className={`
                flex flex-col items-center gap-2 p-3 rounded-xl transition-all shadow-md
                ${theme === t ? "bg-gray-900 text-white shadow-lg scale-105" : "bg-gray-100 hover:shadow-lg"}
              `}
              onClick={() => setTheme(t)}
              aria-label={`Switch to ${t} theme`}
            >
              <div className={`w-24 h-10 rounded-md flex items-center justify-center ${t === "dark" ? "bg-gray-800" : "bg-gray-200"}`}>
                <div className="grid grid-cols-4 gap-1 w-full p-1">
                  <div className="rounded bg-primary h-full"></div>
                  <div className="rounded bg-secondary h-full"></div>
                  <div className="rounded bg-accent h-full"></div>
                  <div className="rounded bg-neutral h-full"></div>
                </div>
              </div>
              <span className="text-sm font-medium capitalize">{t}</span>
            </button>
          ))}
        </div>

        {/* Chat Preview */}
        <h3 className="text-lg font-semibold text-center">Preview</h3>
        <div className={`rounded-2xl border overflow-hidden shadow-xl p-5 ${theme === "dark" ? "bg-gray-900 text-white border-gray-700" : "bg-gray-50 border-gray-300"}`}>
          <div className="max-w-lg mx-auto">
            <div className={`rounded-xl shadow-md overflow-hidden ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
              {/* Chat Header */}
              <div className={`px-4 py-3 border-b flex items-center gap-3 ${theme === "dark" ? "bg-gray-700 text-white border-gray-600" : "bg-gray-100"}`}>
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-medium">
                  J
                </div>
                <div>
                  <h3 className="font-medium text-sm">John Doe</h3>
                  <p className={`text-xs ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>Online</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className={`p-4 space-y-4 min-h-[200px] max-h-[200px] overflow-y-auto ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
                {PREVIEW_MESSAGES.map((message) => (
                  <div key={message.id} className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`
                        max-w-[75%] px-4 py-2 rounded-lg shadow-sm
                        ${message.isSent ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}
                      `}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className="text-xs text-opacity-70 mt-1">12:00 PM</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className={`p-4 border-t flex gap-2 rounded-b-xl ${theme === "dark" ? "bg-gray-700 border-gray-600" : "bg-gray-100"}`}>
                <input
                  type="text"
                  className={`flex-1 border rounded-lg px-3 py-2 text-sm ${theme === "dark" ? "border-gray-500 bg-gray-800 text-white" : "border-gray-300 bg-white"}`}
                  placeholder="Type a message..."
                  value="This is a preview"
                  readOnly
                />
                <button className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
