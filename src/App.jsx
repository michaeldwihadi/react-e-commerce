import { useEffect, useState } from "react";
import { getData } from "./services/getData";

import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Register from "./pages/Register";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await getData({
        pathURL: "products",
      });

      if (!res) {
        setLoading(false);
        setError(true);
        return;
      }

      setLoading(false);
      setProducts(res);
    };
    fetchData();
  }, []);
  return (
    <>{!loading && products.length > 0 && <Home resultData={products} />}</>
  );
};

export default App;
