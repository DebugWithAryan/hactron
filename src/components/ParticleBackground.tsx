import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Star properties
    const stars: { x: number; y: number; radius: number; alpha: number; velocity: number }[] = [];
    const starCount = Math.floor(width * height / 1000); // Increased density

    // Create stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2,
        alpha: Math.random() * 0.8 + 0.2,
        velocity: Math.random() * 0.1 + 0.05
      });
    }

    // Moon properties
    const moons = [
      {
        x: width * 0.8,
        y: height * 0.2,
        radius: 40,
        glow: 60,
        color: '#ffffff'
      },
      {
        x: width * 0.1,
        y: height * 0.7,
        radius: 25,
        glow: 35,
        color: '#a0a0ff'
      }
    ];

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw moons with glow
      moons.forEach(moon => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(moon.x, moon.y, moon.radius + moon.glow, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          moon.x, moon.y, moon.radius,
          moon.x, moon.y, moon.radius + moon.glow
        );
        gradient.addColorStop(0, moon.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.restore();

        // Draw moon
        ctx.beginPath();
        ctx.arc(moon.x, moon.y, moon.radius, 0, Math.PI * 2);
        ctx.fillStyle = moon.color;
        ctx.fill();
      });
      
      // Draw stars
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        
        // Create gradient for star glow
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.radius * 2
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.alpha})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Move stars
        star.y += star.velocity;
        
        // Reset position when star goes off screen
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
        
        // Twinkle effect
        star.alpha = Math.max(0.2, Math.min(1, star.alpha + (Math.random() - 0.5) * 0.05));
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ background: 'radial-gradient(circle at center, #0a0a2e 0%, #000000 100%)' }}
    ></canvas>
  );
};

export default ParticleBackground;