import './App.css';
const tg = window.Telegram.WebApp;
function App() {


 // useEffect( () => {
 //   tg.ready();
 // }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
      <button onClick={onClose}>close</button>
      <div class="vl"></div>
    </div>
  );
}

export default App;
