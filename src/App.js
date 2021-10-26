import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Сюда придет текст с бэка.
        </p>
        <a
          className="App-link"
          href="https://mysmailik.ru/_ph/88/2/681041778.jpg?1635241447"
          target="_blank"
          rel="noopener noreferrer"
        >
          Важная ссылка
        </a>
      </header>
    </div>
  );
}

export default App;
