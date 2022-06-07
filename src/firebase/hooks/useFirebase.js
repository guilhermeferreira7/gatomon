import { useState, useEffect } from "react";

import { initializeApp } from "firebase/app";

export default function useFirebase(firebaseConfig) {
  const [app, setApp] = useState(null);

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    setApp(app);
  }, []);

  return app;
}
