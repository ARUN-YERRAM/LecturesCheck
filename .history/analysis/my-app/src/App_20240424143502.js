import logo from './logo.svg';
import './App.css';
import analyze from '/analyze.js'
function App() {
  return (
    <>
    
    <Route path="analyz" element={<analyze/>}
    </>
  );
}

export default App;
