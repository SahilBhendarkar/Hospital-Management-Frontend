import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Options = {
    y?: number;
    opacity?: number;
    stagger?: number;
    duration?: number;
    start?: string;
};

const useGsapOnView = <T extends HTMLElement>(
    options: Options = {}
) => {
    const ref = useRef<T | null>(null);

    useEffect(() => {
        if (!ref.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ref.current,
                {
                    y: options.y ?? 40,
                    opacity: options.opacity ?? 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: options.duration ?? 0.8,
                    ease: "power3.out",
                    stagger: options.stagger,
                    scrollTrigger: {
                        trigger: ref.current,
                        start: options.start ?? "top 80%",
                        once: true,
                    },
                }
            );
        }, ref);

        return () => ctx.revert();
    }, []);

    return ref;
};

export default useGsapOnView;
