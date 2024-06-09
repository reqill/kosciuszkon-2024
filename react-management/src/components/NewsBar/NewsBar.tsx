import * as React from "react";

export const NewsBar = () => {
  return (
    <div className="flex flex-col text-black bg-amber-100 rounded-xl max-w-[170px]">
      <div className="flex gap-0">
        <div className="justify-center self-start px-5 py-1 text-xs whitespace-nowrap bg-blue-400 rounded-tl-xl rounded-br-xl">
          Tygodnik
          <br />
          Podhalański
        </div>
        <div className="justify-center px-1 py-1 text-xs bg-blue-300 rounded-tr-xl rounded-bl-xl">
          Aktualne utrudnienia
        </div>
      </div>
      <div className="w-full text-xs">
        <span className="font-bold">Uwaga!</span> Korki na ulicy{" "}
        <span className="font-bold">Czarnowiejskiej</span> w stronę Starego
        Miasta spowodowane kolizją dwóch samochodów osobowych. Wydłużony czas
        podróży o <span className="font-bold">około 10 minut</span>.
      </div>
      <div className="shrink-0 self-center mt-3.5 h-2 bg-neutral-400 rounded-[40px] w-[19px]" />
    </div>
  );
};
