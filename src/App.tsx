import { useState } from "react";
import WelcomeComponent from "./WelcomeComponent";
import QuestionComponent from "./QuestionComponent";

function App() {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <>
      {hasStarted ? (
        <QuestionComponent />
      ) : (
        <WelcomeComponent onStart={() => setHasStarted(true)} />
      )}
    </>
  );
}

export default App;