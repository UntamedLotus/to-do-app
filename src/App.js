import "./App.scss";
import MainContent from "./components/mainContent/mainContent";
import Nav from "./components/nav/nav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <MainContent />
      </header>
    </div>
  );
}

export default App;
