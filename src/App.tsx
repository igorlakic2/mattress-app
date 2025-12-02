import "./App.css";
import AppTopbar from "./AppTopbar";
import AppFooter from "./components/footer/AppFooter";
import Content from "./Content";

function App() {
  return (
    <div>
      <main>
        <AppTopbar />
        <Content />
        <AppFooter />
      </main>
    </div>
  );
}

export default App;
