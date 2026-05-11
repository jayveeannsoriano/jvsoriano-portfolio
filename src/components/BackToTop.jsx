import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () =>
        window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`fixed bottom-8 right-8 z-50 flex items-center justify-center h-10 w-10 rounded-full border border-gray-700 bg-gray-900/80 text-gray-400 backdrop-blur-sm
        hover:border-sky-500/60 hover:text-sky-400 hover:bg-gray-900
        transition-all duration-300 shadow-lg hover:shadow-sky-500/20
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
        >
            <HiArrowUp className="h-4 w-4" />
        </button>
    );
};

export default BackToTop;
