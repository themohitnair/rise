import { useState, useEffect } from 'react';

export function useAspectRatio(width: number, height: number) {
    const [dimensions, setDimensions] = useState({ width: '100%', height: '100vh' });

    useEffect(() => {
        const updateDimensions = () => {
        const aspectRatio = width / height;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const windowRatio = windowWidth / windowHeight;

        if (windowRatio > aspectRatio) {
            const height = Math.min(windowHeight * 0.8, 800);
            setDimensions({ width: `${height * aspectRatio}px`, height: `${height}px` });
        } else {
            const width = Math.min(windowWidth * 0.9, 1200);
            setDimensions({ width: `${width}px`, height: `${width / aspectRatio}px` });
        }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, [width, height]);

    return dimensions;
}