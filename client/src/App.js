import React from "react";
import { useRoutes } from "hookrouter";
import Navbar from "./components/Navbar/Navbar";
import NoPageFound from "./components/NoPageFound/NoPageFound";
import routes from "./router";

function App() {
  const routeResult = useRoutes(routes);
  return (
    <div>
      <Navbar />
      {routeResult || <NoPageFound />}
    </div>
  );
}

export default App;
