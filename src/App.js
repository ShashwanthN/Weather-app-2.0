import logo from './logo.svg';
import './App.css';
import TopBar from './WeatherApp/Topbar';
import { WeatherApp } from './WeatherApp/WeatherApp';

function App() {
  return (
    <div className="flex flex-col">
      <div>
        <TopBar />
      </div>
      <div>
        <WeatherApp />
      </div>
      
    </div>
  );
}

export default App;
