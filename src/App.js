import './App.css';
window.Telegram.WebApp
const tg = window.Telegram.WebApp;
function App() {


  useEffect( () => {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
      <h1>hello</h1>
      <button onClick={onClose}>close</button>
    </div>
  );
}

export default App;
