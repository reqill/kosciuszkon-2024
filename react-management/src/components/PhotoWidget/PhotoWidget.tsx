import { useSearchParams } from "react-router-dom";

export const PhotoWidget = () => {
  const [searchParams] = useSearchParams();
  const photo_id = parseInt(searchParams.get("photo_id") ?? "0");
  const photo_urls = [
    "https://firebasestorage.googleapis.com/v0/b/kosciuszkon-949d3.appspot.com/o/1_1.png?alt=media&token=ffb596c7-4797-4a72-99e5-edf5e72ba157",
    "https://firebasestorage.googleapis.com/v0/b/kosciuszkon-949d3.appspot.com/o/1_2.png?alt=media&token=1aaa6be6-fcfa-41cd-9a3f-00ec1fd19bdd",
    "https://firebasestorage.googleapis.com/v0/b/kosciuszkon-949d3.appspot.com/o/2_1.png?alt=media&token=2ac28df2-032d-428d-a2a5-52a8587b3f68",
    "https://firebasestorage.googleapis.com/v0/b/kosciuszkon-949d3.appspot.com/o/2_2.png?alt=media&token=1a547f3e-f477-431c-9417-05ecdd996c50",
    "https://firebasestorage.googleapis.com/v0/b/kosciuszkon-949d3.appspot.com/o/Uwaga-Dziki--tabliczka.png?alt=media&token=415c162c-227f-4a15-8c9d-7567eb961845",
  ];
  return (
    <div className="w-full p-1 h-full overflow-hidden">
      <img src={photo_urls[photo_id]} width="100%" height="100%" style={{ objectFit: "contain" }} />
    </div>
  );
};
