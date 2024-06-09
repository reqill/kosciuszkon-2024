type Data = {
  kierunek: string;
  linia: number;
  odjazd: string;
  oblozenie: string;
};

const data1: Data[] = [
  { linia: 139, kierunek: "Kombinat 09", odjazd: "> 1 min", oblozenie: "Duże" },
  {
    linia: 501,
    kierunek: "Bulwarowa 04",
    odjazd: "3 min",
    oblozenie: "Umiarkowane",
  },
  { linia: 194, kierunek: "Pod Fortem 02", odjazd: "6 min", oblozenie: "Małe" },
];

const bg_colors: string[] = ["bg-blue-300", "bg-blue-200", "bg-blue-100"];

export const ScheduleTab = () => {
  return (
    <div className="flex flex-col text-black max-w-[350px]">
      <div className="pt-1 pb-6 pl-5 mt-0 -mb-6 text-sm bg-amber-100 rounded-t-xl font-medium w-[175px]">
        Najbliższe odjazdy
      </div>

      <div className="overflow-hidden rounded-xl">
        <table className="w-full text-xs bg-zinc-300 rounded-xl">
          <thead>
            <tr className="bg-blue-400">
              <th className="px-2 py-1">Linia</th>
              <th className="px-2 py-1">Kierunek</th>
              <th className="px-2 py-1">Odjazd</th>
              <th className="px-2 py-1">Obłożenie</th>
            </tr>
          </thead>
          <tbody>
            {data1.map((val, i) => (
              <tr key={i} className={bg_colors[i]}>
                <td className="px-2 py-1 text-center">{val.linia}</td>
                <td className="px-2 py-1 text-center">{val.kierunek}</td>
                <td className="px-2 py-1 text-center">{val.odjazd}</td>
                <td className="px-2 py-1 text-center">{val.oblozenie}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
