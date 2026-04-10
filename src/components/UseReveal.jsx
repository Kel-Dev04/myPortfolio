import { useEffect } from "react";


const useReveal = () => {
    useEffect(() => {
        const observerOpptions = {
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                } else {
                    entry.target.classList.remove('reveal-visible');
                }
            });
        }, observerOpptions);



        const sections = document.querySelectorAll('.reveal');
        sections.forEach((section)=> 
        observer.observe(section));

        return () => observer.disconnect();
    }, []);
};

export default useReveal;