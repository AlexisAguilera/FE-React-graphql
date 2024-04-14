import { useState } from "react";

import { Header } from "./components/Header/Header";
import { ProductList } from "./components/ProductList/ProductList";
import { ActiveOrderContext } from "./context/activeOrderContext";
import { OrderType } from "./types";

function App() {
  const [activeOrder, setActiveOrder] = useState<OrderType>();

  return (
    <ActiveOrderContext.Provider
      value={{
        activeOrder,
        setActiveOrder,
      }}
    >
      <Header />
      <ProductList />
    </ActiveOrderContext.Provider>
  );
}

export default App;
