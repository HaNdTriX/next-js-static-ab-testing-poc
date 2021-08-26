import { useEffect, useState } from "react";

export default function useIsServer() {
  const [isServer, setIsSever] = useState(true);
  useEffect(() => {
    setIsSever(false);
  }, []);
  return isServer;
}
