import { useState, useEffect } from "react";

const useLoader = (causeLoad) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (causeLoad) {
      setIsLoading(false);
    }
  }, [causeLoad]);

  return isLoading;
};

export default useLoader;
