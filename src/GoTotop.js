import React, { useEffect, useState } from 'react'

const GoTotop = () => {

    const [isVisible, setIsVisible] = useState(false);

    const goTopBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const listenToScroll = () => {
        let heightToHidden = 250;

        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHidden) {
            setIsVisible(true);
        }
        else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    })

    return (
        <>
            {isVisible && (
                <div className="go-To-Top" onClick={goTopBtn}>
                    <i className="fa-solid fa-arrow-up"></i>
                </div>
            )}
        </>
    )
}

export default GoTotop
