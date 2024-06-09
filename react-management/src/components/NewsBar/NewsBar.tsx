export const NewsBar = () => {
  return (
    <div className="flex flex-col text-black bg-amber-100 rounded-xl max-w-[175px]">
      <div className="flex gap-0">
        <div className="justify-center self-start pl-1 px-5 py-1 text-xs whitespace-nowrap bg-blue-400 rounded-tl-xl rounded-br-xl font-medium">
          Tygodnik
          <br />
          Podhalański
        </div>
        <div className="justify-center pl-1 px-2 py-1 text-xs bg-blue-300 rounded-tr-xl rounded-bl-xl font-medium">
          Aktualne utrudnienia
        </div>
      </div>
      <div className="w-full text-xs pr-2 ml-2 mt-1 leading-3">
        <span className="font-bold">Uwaga!</span> Korki na ulicy{" "}
        <span className="font-bold">Czarnowiejskiej</span> w stronę Starego
        Miasta spowodowane kolizją dwóch samochodów osobowych. Wydłużony czas
        podróży o <b>około 10 minut</b>.
      </div>
      <div className="flex flex-row w-full justify-center gap-2 mt-6 mb-1">
        <div className="h-2 bg-neutral-400 rounded-[40px] w-[25px]" />
        <div className="h-2 bg-neutral-400 rounded-[40px] w-2" />
      </div>
    </div>
  );
};
