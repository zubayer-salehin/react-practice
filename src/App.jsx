import { useEffect } from 'react';
import ReactGA from "react-ga4";

function App() {

  useEffect(() => {
    ReactGA.initialize('G-BB1SVWXMMM');
  }, [])

  return (
    <div className="mt-80 text-xl font-semibold text-center text-blue-600">
      Google Anlaytics Check
    </div>
  );
}

export default App;
