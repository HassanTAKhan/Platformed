import NavBar from "./NavBar";
import TicketsPage from "./TicketsPage";
import { useState } from "react";
import PageLayout from "./PageLayout";
import { TICKETS } from "../core/data";
import { Provider } from "./ui/provider";

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
        <PageLayout>
          <TicketsPage tickets={tickets} />
        </PageLayout>
      </Provider>
    </>
  );
}

export default App;
