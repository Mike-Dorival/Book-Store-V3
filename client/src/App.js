import React from "react";
import { useRoutes } from "hookrouter";
import Navbar from "./components/Navbar/Navbar";
import routes from "./router";

function App() {
  const routeResult = useRoutes(routes);
  return (
    <div>
      <Navbar />
      {routeResult}
    </div>
  );
}

export default App;
