import { useEffect, useRef } from "react";

const CursorGlow = () => {
    const glowRef = useRef(null);

    useEffect(() => {
        // Disable on touch devices and reduced-motion
        const isTouch = window.matchMedia("(hover: none)").matches;
        const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        if (isTouch || prefersReduced) return;

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let currentX = mouseX;
        let currentY = mouseY;
        let rafId;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const lerp = (a, b, t) => a + (b - a) * t;
        const FACTOR = 0.07; // lower = more lag/trailing feel

        const animate = () => {
            currentX = lerp(currentX, mouseX, FACTOR);
            currentY = lerp(currentY, mouseY, FACTOR);

            if (glowRef.current) {
                glowRef.current.style.background = `radial-gradient(650px circle at ${currentX}px ${currentY}px, rgba(56, 189, 248, 0.30), transparent 70%)`;
            }

            rafId = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", onMouseMove, { passive: true });
        rafId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div
            ref={glowRef}
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-20 transition-none"
            style={{ mixBlendMode: "screen" }}
        />
    );
};

export default CursorGlow;
