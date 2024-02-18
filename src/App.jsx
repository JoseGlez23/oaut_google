import FormsFirebase from "./page/FormsFirebase";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <h1>Cofee&&Code</h1>
        <FormsFirebase />
      </div>
    </AuthProvider>
  );
}

export default App;
