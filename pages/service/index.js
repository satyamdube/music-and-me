import { useEffect } from "react";
import { useRouter } from "next/router";

function Service() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  });

  return null;
}

export default Service;
