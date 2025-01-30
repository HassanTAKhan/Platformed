import NavBar from "./NavBar";
import { useState } from "react";
import { TICKETS } from "../core/data";
import { Provider } from "./ui/provider";
import { TicketsPageContainer } from "./TicketsPageContainer";

function App() {
  const [tickets] = useState(() => TICKETS);

  return (
    <>
      <Provider
        // Force color mode to simplify this example.
        enableSystem={false}
        defaultTheme="dark"
      >
        <NavBar />
        <TicketsPageContainer tickets={tickets}/>
      </Provider>
    </>
  );
}

export default App;
