import { useSearchParams } from "react-router-dom";
import { WidgetShapeWrapper } from "../WidgetShapeWrapper/WidgetShapeWrapper";

export const NameDisplayWidget = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");

  return (
    <WidgetShapeWrapper>
      <h1 className="w-full text-center text-zinc-900 font-semibold text-xl py-2">
        {name}
      </h1>
    </WidgetShapeWrapper>
  );
};
