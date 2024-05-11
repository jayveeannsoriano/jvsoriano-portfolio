import Header from "./layout/Header";
import Body from "./layout/Body";
import PageFooter from "./layout/Footer";

function App() {
  return (
    <div className="bg-gradient-to-tr from-[#031020] via-gray-800 to-[#3F526C] min-h-screen">
      <Header />
      <Body />
      <PageFooter />
    </div>
  );
}

export default App;