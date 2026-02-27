import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animFrame;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Bakery-themed floating elements
    const GOLD = 'rgba(201, 168, 76,';
    const GOLD_LIGHT = 'rgba(232, 201, 106,';

    // Particle shapes: circle (crumb), star (sparkle), wheat grain, droplet
    const particles = Array.from({ length: 60 }, (_, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 1,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4 - 0.1,
      opacity: Math.random() * 0.5 + 0.1,
      type: ['circle', 'star', 'wheat', 'drop'][Math.floor(Math.random() * 4)],
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.01,
      pulse: Math.random() * Math.PI * 2,
    }));

    // Large bokeh blobs
    const blobs = Array.from({ length: 8 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 180 + 60,
      speedX: (Math.random() - 0.5) * 0.15,
      speedY: (Math.random() - 0.5) * 0.15,
      opacity: Math.random() * 0.04 + 0.01,
    }));

    function drawStar(ctx, x, y, size, opacity) {
      ctx.save();
      ctx.translate(x, y);
      ctx.fillStyle = `${GOLD_LIGHT} ${opacity})`;
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
        const r = i === 0 ? size * 2 : size;
        ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    function drawWheat(ctx, x, y, size, rotation, opacity) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.strokeStyle = `${GOLD} ${opacity})`;
      ctx.lineWidth = size * 0.5;
      ctx.beginPath();
      ctx.moveTo(0, -size * 3);
      ctx.lineTo(0, size * 3);
      ctx.stroke();
      // tiny wheat bits
      for (let i = -1; i <= 1; i++) {
        ctx.beginPath();
        ctx.ellipse(size * 1.2 * (i > 0 ? 1 : -1), i * size, size * 0.8, size * 0.4, Math.PI / 4 * (i > 0 ? 1 : -1), 0, Math.PI * 2);
        ctx.fillStyle = `${GOLD} ${opacity * 0.8})`;
        ctx.fill();
      }
      ctx.restore();
    }

    function drawDrop(ctx, x, y, size, opacity) {
      ctx.save();
      ctx.translate(x, y);
      ctx.fillStyle = `${GOLD} ${opacity})`;
      ctx.beginPath();
      ctx.arc(0, 0, size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    let t = 0;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.005;

      // Draw bokeh blobs
      blobs.forEach(b => {
        b.x += b.speedX;
        b.y += b.speedY;
        if (b.x < -b.r) b.x = canvas.width + b.r;
        if (b.x > canvas.width + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = canvas.height + b.r;
        if (b.y > canvas.height + b.r) b.y = -b.r;

        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        grad.addColorStop(0, `${GOLD} ${b.opacity})`);
        grad.addColorStop(1, `${GOLD} 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw particles
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotSpeed;
        p.pulse += 0.02;
        const pulseOpacity = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse));

        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.y < -20) p.y = canvas.height + 20;
        if (p.y > canvas.height + 20) p.y = -20;

        switch (p.type) {
          case 'star':
            drawStar(ctx, p.x, p.y, p.size, pulseOpacity);
            break;
          case 'wheat':
            drawWheat(ctx, p.x, p.y, p.size * 0.8, p.rotation, pulseOpacity);
            break;
          case 'drop':
            drawDrop(ctx, p.x, p.y, p.size, pulseOpacity);
            break;
          default:
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `${GOLD} ${pulseOpacity})`;
            ctx.fill();
        }
      });

      animFrame = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}