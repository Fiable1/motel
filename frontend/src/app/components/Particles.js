'use client';

import { useEffect, useState } from 'react';

export default function Particles() {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const particleCount = 20;
        const items = [];

        for (let i = 0; i < particleCount; i++) {
            items.push({
                id: i,
                size: Math.random() * 4 + 1,
                left: `${Math.random() * 100}vw`,
                top: `${Math.random() * 100 + 100}vh`,
                duration: Math.random() * 20 + 30,
                delay: Math.random() * 20,
                opacity: Math.random() * 0.3 + 0.1
            });
        }
        setParticles(items);
    }, []);

    return (
        <div className="particles overflow-hidden">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="particle"
                    style={{
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        left: p.left,
                        top: p.top,
                        opacity: p.opacity,
                        animationDuration: `${p.duration}s`,
                        animationDelay: `-${p.delay}s`,
                        background: 'rgba(255, 165, 2, 0.4)'
                    }}
                />
            ))}
        </div>
    );
}
