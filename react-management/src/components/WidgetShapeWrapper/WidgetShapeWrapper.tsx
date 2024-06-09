import { ReactNode } from "react";
import { useSearchParams } from "react-router-dom";

type Props = {
  children: ReactNode;
};

export const WidgetShapeWrapper = ({ children }: Props) => {
  const [searchParams] = useSearchParams();
  const rounded = !!searchParams.get("rounded");

  return (
    <div className={`w-full ${rounded ? "p-1" : ""}`}>
      <div
        className={`w-full border-2 border-zinc-900 box-border ${
          rounded ? "rounded-md" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};
