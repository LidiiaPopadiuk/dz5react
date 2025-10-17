import {Difficulty} from './components/Difficulty'
import './App.css';
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Difficulty level={[0, 0, 1, 3]}/>
    </div>
  );
}

export default App;
