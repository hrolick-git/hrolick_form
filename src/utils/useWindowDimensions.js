import { useState, useEffect } from 'react';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export function useBlockScroll(elRef) {
    const { height, width } = useWindowDimensions();
    let result = false;

    const isHover = (e) => {
        return result;
    }

    useEffect(() => {
        const el = elRef.current;
        const textAreas = el.querySelectorAll('textarea');

        if (el && width > 992) {
            const onWheel = e => {
                e.preventDefault();
                const isMouse = e.deltaX === 0 && Number.isInteger(e.deltaY);
                for(let i=0, l=textAreas.length; i<l; i++){
                    const textArea = textAreas[i];
                    const parent = textArea.parentElement;
                    parent.onmouseover = parent.onmouseout = parent.onmousemove = handler;
                    function handler(event) {
                        if (event.type === 'mouseover') {
                            el.removeEventListener("wheel", onWheel);
                        }
                        if (event.type === 'mouseout') {
                            el.addEventListener("wheel", onWheel);
                        }
                    }
                }

                if(isMouse) {
                    if(e.deltaY < 0) {
                        el.scrollTo({
                            left: el.scrollLeft - 100,
                            behavior: "auto"
                        });
                    } else {
                        el.scrollTo({
                            left: el.scrollLeft + 100,
                            behavior: "auto"
                        });
                    }
                } else {
                    el.scrollTo({
                        left: el.scrollLeft + (e.deltaY * 4),
                    });
                }
                if (e.deltaX) {
                    el.scrollTo({
                        left: el.scrollLeft + (e.deltaX * 4),
                    });
                }
            };
            el.addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
        }
    }, [width]);

    return { width };
}

export function useStepsScroll(elRef) {
    const { height, width } = useWindowDimensions();

    useEffect(() => {
        const el = elRef.current;
        if (el && width < 992) {
            const onWheel = e => {
                e.preventDefault();
                if(e.deltaY === 100 || e.deltaY === -100) {
                    el.scrollTo({
                        left: el.scrollLeft + (e.deltaY * 8),
                        behavior: "auto"
                    });
                } else {
                    el.scrollTo({
                        left: el.scrollLeft + (e.deltaY * 4),
                    });
                }
                if (e.deltaX) {
                    el.scrollTo({
                        left: el.scrollLeft + (e.deltaX * 4),
                    });
                }
            };
            el.addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
        }
    }, [width]);

    return { width };
}

export function useCalculateHeight() {
    const [height, setHeight] = useState(0);
    const { width } = useWindowDimensions();

    useEffect(() => {
        const calculateHeight = () => {
            const containers = document.querySelectorAll(".fr-slide");
            for(let i=0, l=containers.length; i<l; i++){
                const container =  containers[i];
                const contentBlocks = container.querySelectorAll("div.form_sub > div.MuiGrid-root");
                const arrayOhHeights = [];
                for(let i=0, l=contentBlocks.length; i<l; i++){
                    arrayOhHeights.push( contentBlocks[i].offsetHeight );
                }
                const result = arrayOhHeights.reduce(function(a, b) {
                    return Math.max(a, b);
                });
                const verticalLines = container.querySelectorAll(".vertical-line");
                for(let i=0, l=verticalLines.length; i<l; i++){
                    if (width > 992) {
                        verticalLines[i].style.height = result + "px";
                    } else {
                        verticalLines[i].style.height = "1px";
                    }
                }
            }
        }
        calculateHeight();
        window.addEventListener("resize", calculateHeight);
        return () => window.removeEventListener("resize", calculateHeight);
    }, [width]);

    return { height };
}

export function useCalculateDisclaimer() {
    const [height, setHeight] = useState(0);
    const { width } = useWindowDimensions();

    useEffect(() => {
        const calculateHeightDisclaimer = () => {
            const container = document.querySelector(".fr-slide");
            const disclaimer = document.querySelector(".form_sub_disclaimer__wrap");
            disclaimer.style.minHeight = "1px";
            if (width > 992) {
                disclaimer.style.minHeight = container.offsetHeight + "px";
            } else {
                disclaimer.style.minHeight = "1px";
            }
        }
        calculateHeightDisclaimer();
        window.addEventListener("resize", calculateHeightDisclaimer);
        return () => window.removeEventListener("resize", calculateHeightDisclaimer);
    }, [width]);

    return { height };
}
