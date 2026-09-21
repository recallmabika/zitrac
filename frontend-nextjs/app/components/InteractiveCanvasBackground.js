'use client';

import { useEffect, useRef } from 'react';

export default function InteractiveCanvasBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // 1. Connecting Nodes & Lines
    const numNodes = Math.min(36, Math.floor((width * height) / 30000));
    const nodes = Array.from({ length: numNodes }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: Math.random() * 2 + 1.5,
      pulse: Math.random() * Math.PI,
    }));

    // 2. Matrix-style dropping code streams
    const codeChars = '01{}<>;:/*~+=#ZITRAC$_'.split('');
    const numColumns = Math.min(18, Math.floor(width / 75));
    const drops = Array.from({ length: numColumns }, (_, i) => ({
      x: (i * width) / numColumns + Math.random() * 20,
      y: Math.random() * height,
      speed: Math.random() * 1.2 + 0.8,
      chars: Array.from({ length: 7 }, () => codeChars[Math.floor(Math.random() * codeChars.length)]),
      opacity: Math.random() * 0.4 + 0.2,
    }));

    // 3. Floating glowing bouncy badges / particles
    const bouncers = [
      { x: width * 0.2, y: height * 0.3, vx: 0.4, vy: 0.3, r: 6, color: 'rgba(239, 68, 68, 0.7)', label: '99.98%' },
      { x: width * 0.75, y: height * 0.25, vx: -0.3, vy: 0.4, r: 5, color: 'rgba(220, 38, 38, 0.6)', label: 'SSL' },
      { x: width * 0.85, y: height * 0.7, vx: -0.4, vy: -0.3, r: 5, color: 'rgba(248, 113, 113, 0.5)', label: 'API' },
      { x: width * 0.15, y: height * 0.75, vx: 0.35, vy: -0.35, r: 6, color: 'rgba(239, 68, 68, 0.6)', label: 'AI' },
    ];

    // 4. Animated crossing dashed circuit lines
    let offsetDash = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // --- A. Crossing animated dashed & dotted vector lines ---
      offsetDash += 0.4;
      ctx.save();
      ctx.lineWidth = 1;
      
      // Diagonal dashed line 1
      ctx.beginPath();
      ctx.setLineDash([8, 8]);
      ctx.lineDashOffset = -offsetDash;
      ctx.strokeStyle = 'rgba(220, 38, 38, 0.18)';
      ctx.moveTo(0, height * 0.25);
      ctx.lineTo(width, height * 0.65);
      ctx.stroke();

      // Diagonal dashed line 2 (Crossing)
      ctx.beginPath();
      ctx.setLineDash([6, 10]);
      ctx.lineDashOffset = offsetDash;
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.14)';
      ctx.moveTo(width * 0.1, height);
      ctx.lineTo(width * 0.9, 0);
      ctx.stroke();

      // Horizontal dashed scanline
      ctx.beginPath();
      ctx.setLineDash([4, 6]);
      ctx.lineDashOffset = -offsetDash * 0.8;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.moveTo(0, height * 0.8);
      ctx.lineTo(width, height * 0.8);
      ctx.stroke();
      ctx.restore();

      // --- B. Matrix Dropping Code Snippets ---
      ctx.save();
      ctx.font = '11px monospace';
      for (const drop of drops) {
        drop.y += drop.speed;
        if (drop.y > height + 80) {
          drop.y = -60;
          drop.x = Math.random() * width;
        }

        // Randomly mutate characters
        if (Math.random() < 0.03) {
          const charIndex = Math.floor(Math.random() * drop.chars.length);
          drop.chars[charIndex] = codeChars[Math.floor(Math.random() * codeChars.length)];
        }

        drop.chars.forEach((char, idx) => {
          const charY = drop.y + idx * 15;
          if (charY > 0 && charY < height) {
            const isHead = idx === drop.chars.length - 1;
            ctx.fillStyle = isHead 
              ? 'rgba(255, 255, 255, 0.75)' 
              : `rgba(239, 68, 68, ${drop.opacity * (idx / drop.chars.length)})`;
            ctx.fillText(char, drop.x, charY);
          }
        });
      }
      ctx.restore();

      // --- C. Connecting / Connected Dots & Constellation Mesh ---
      ctx.save();
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.02;

        // Bounce off canvas edges
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        // Connect near nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 140;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.28;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(239, 68, 68, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
          }
        }

        // Draw dot
        const pulsedRadius = n.radius + Math.sin(n.pulse) * 0.8;
        ctx.beginPath();
        ctx.arc(n.x, n.y, Math.max(0.5, pulsedRadius), 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
        ctx.shadowColor = 'rgba(239, 68, 68, 0.8)';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      ctx.restore();

      // --- D. Bouncing Staff / Glowing Micro Badges ---
      ctx.save();
      ctx.font = '9px monospace';
      for (const b of bouncers) {
        b.x += b.vx;
        b.y += b.vy;

        if (b.x < 30 || b.x > width - 30) b.vx *= -1;
        if (b.y < 40 || b.y > height - 40) b.vy *= -1;

        // Glowing core
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.shadowColor = b.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Surrounding orbital ring
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r + 5, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.lineWidth = 0.75;
        ctx.stroke();

        // Label
        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.fillText(b.label, b.x + 10, b.y + 3);
      }
      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 opacity-75"
      aria-hidden="true"
    />
  );
}
