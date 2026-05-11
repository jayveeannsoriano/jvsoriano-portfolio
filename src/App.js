import Header from "./layout/Header";
import Body from "./layout/Body";
import PageFooter from "./layout/Footer";
import CursorGlow from "./components/CursorGlow";
import BackToTop from "./components/BackToTop";
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
      <CursorGlow />
      <Header />
      <Body />
      <PageFooter />
      <BackToTop />
    </div>
  );
}

export default App;
