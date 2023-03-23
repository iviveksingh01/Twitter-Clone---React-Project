import "./App.css";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./components/Protected";

function App() {
  return (
    <div className="App lg:max-w-7xl mx-auto max-h-screen overflow-hidden">
      <AuthContextProvider>
        <main className="grid grid-cols-9">
          <SideBar />
          <Protected>
            <Feed />
            <Widgets />
          </Protected>
        </main>
      </AuthContextProvider>
    </div>
  );
}

export default App;
