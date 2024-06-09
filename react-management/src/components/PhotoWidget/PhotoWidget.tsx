import { useSearchParams } from "react-router-dom";

export const PhotoWidget = () => {
  const [searchParams] = useSearchParams();
  const photo_id = parseInt(searchParams.get("photo_id") ?? "0");
  const photo_urls = ["https://ih1.redbubble.net/image.3317721448.0910/st,small,507x507-pad,600x600,f8f8f8.u1.jpg"];
  return (
    <div className="w-full p-1">
      <img src={photo_urls[photo_id]} width="100%" height="100%" style={{ objectFit: "contain" }} />
    </div>
  );
};
