import { useEffect } from 'react';
import ReactGA from 'react-ga';

function App() {

  useEffect(() => {
    ReactGA.initialize('G-BB1SVWXMMM');
    ReactGA.pageview('/app');
  }, [])

  return (
    <div className="mt-80 text-xl font-semibold text-center text-red-600">
      Google Anlaytics Check
    </div>
  );
}

export default App;
