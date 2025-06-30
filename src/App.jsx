import {} from "react";
import "./App.css";
import Input from "./components/Input/Input";
function App() {
  return (
    <>
      <div className="bg-purple-950 w-full h-full flex items-center justify-center">
        <div className="flex items-center justify-center flex-col border w-150 min-h-150">
          <nav>
            <h1>TODO List</h1>
          </nav>
          <Input />
        </div>
      </div>
    </>
  );
}

export default App;
