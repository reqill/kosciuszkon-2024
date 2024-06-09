import * as React from "react";

export const ScheduleTab = () => {
  return (
    <div className="flex flex-col text-black max-w-[300px]">
      <div className="z-10 pt-1.5 pr-1.5 pb-3 pl-3 mt-0 mr-32 text-xs bg-amber-100 rounded-t-xl">
        Najbliższe odjazdy
      </div>
      <div className="flex flex-col w-full text-xs rounded-xl bg-zinc-300">
        <div className="flex gap-5 justify-between px-1.5 py-1 font-bold whitespace-nowrap bg-blue-400 rounded-t-xl">
          <div className="self-start">Linia</div>
          <div>Kierunek</div>
          <div>Odjazd</div>
          <div>Obłożenie</div>
        </div>
        <div className="flex gap-5 justify-between px-5 py-1 bg-blue-300">
          <div className="flex gap-5 justify-between">
            <div>139</div>
            <div>Kombinat 09</div>
            <div>&gt; 1 min</div>
          </div>
          <div>Duże</div>
        </div>
        <div className="flex gap-5 justify-between px-1.5 py-1 bg-blue-200">
          <div>501</div>
          <div>Bulwarowa 04</div>
          <div>3 min</div>
          <div>Umiarkowane</div>
        </div>
        <div className="flex gap-5 justify-between px-5 py-1 bg-blue-200 rounded-b-xl">
          <div className="flex gap-5 justify-between">
            <div>194</div>
            <div>Pod Fortem 02</div>
            <div>6 min</div>
          </div>
          <div>Małe</div>
        </div>
      </div>
    </div>
  );
};
