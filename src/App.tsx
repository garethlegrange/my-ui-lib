import { useState } from "react";
import { Switch } from "../lib/main";

function App() {
  const [checked, setCecked] = useState<boolean>(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        color: "white",
      }}
    >
      <div>
        <Switch checked={checked} onChange={setCecked} />
      </div>
    </div>
  );
}

export default App;
