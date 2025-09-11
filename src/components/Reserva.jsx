import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Navbar from "./Navbar";

export default function Reserva() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#000000" },
          dark: { "cal-brand": "#000000" }
        },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <div className="min-h-screen bg-gray-200">
      <Navbar />
      
      <div className="pt-20">
        {/* Botón de volver */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors font-medium"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Volver
          </button>
        </div>
        
        {/* Contenedor de Cal.com */}
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
          <div className="w-full" style={{ height: "700px" }}>
            <Cal
              namespace="30min"
              calLink="fusion-coworking/30min"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{
                layout: "month_view",
                theme: "light"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}