import Header from "./layout/Header";
import Body from "./layout/Body";
import PageFooter from "./layout/Footer";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      delay: 300,
      once: true,
      mirror: false,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Body />
      <PageFooter />
    </div>
  );
}

export default App;
