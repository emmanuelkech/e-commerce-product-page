import './App.css';
import Header from './components/header';
import Main from './components/main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className='App-main'>
        <Main />
      </main>
    </div>
  );
}

export default App;
