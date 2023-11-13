import Header from "./layout/Header";
import Body from "./layout/Body";
import PageFooter from "./layout/Footer";

function App() {
  return (
    <div className="bg-primary min-h-screen">
      <Header />
      <Body />
      <PageFooter />
    </div>
  );
}

export default App;