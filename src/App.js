import React, { useState } from "react";
import products from "./products";

function App() {
  const [pro, setPro] = useState([]);

  useState(() => {
    setPro(products);
  }, []);
  console.log(pro);
  return <div></div>;
}

export default App;
