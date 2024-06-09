import { useSearchParams } from "react-router-dom";

export const NameDisplayWidget = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");

  return (
    <div className="w-full p-1">
      <h1 className="w-full text-center text-zinc-900 ring-inset ring-2 ring-zinc-900 font-semibold text-xl  py-2 rounded-md">
        {name}
      </h1>
    </div>
  );
};
