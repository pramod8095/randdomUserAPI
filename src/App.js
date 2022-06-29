import "./App.css";
import Incre from "./Component/Incre";
import RandomUser from "./Component/RandomUser";

const API = "https://randomuser.me/api";
function App() {
  return (
    <div className="App">
      <h1>Hi Pramod</h1>
      <h2>This is a basic inc counter</h2>
      <Incre />
      <RandomUser API={API} />
    </div>
  );
}

export default App;
