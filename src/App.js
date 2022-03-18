import { Provider } from "react-redux";
import { RoutesApp } from "./routes/routes";
import { store } from "./store/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <RoutesApp />
    </Provider>
  );
}

export default App;
