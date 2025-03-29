import { useSearchParams } from "react-router-dom";

// this hook extracts latitude & longitude from url
export function useUrlPosition() {
  const [searchParams, setSearchParams] = useSearchParams();

  // get the latitude & longitude from url
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return [lat, lng];
}
