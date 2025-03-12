import Header from "./layouts/Header";
import Cursor from "./components/Cursor";
import About from "./layouts/About";
import ThemeContextProvider from "./store/ThemeContextProvider";
import Projects from "./layouts/Projects";

function App() {
  return (
    <div className="h-screen bg-white dark:bg-black text-black dark:text-white overflow-hidden overflow-y-scroll relative">
      <ThemeContextProvider>
        <Cursor />
        <Header />
        <About />
        <Projects/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
