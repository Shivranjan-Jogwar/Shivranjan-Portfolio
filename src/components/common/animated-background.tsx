
"use client";

import React, { useRef, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedBackgroundProps {
  className?: string;
  particleColor?: string;
  lineColor?: string;
  particleCount?: number;
  interactive?: boolean;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  className,
  particleColor = "rgba(100, 181, 246, 0.5)", // Soft Blue with opacity
  lineColor = "rgba(100, 181, 246, 0.2)", // Soft Blue with more opacity
  particleCount = 70,
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();
  const particlesArray = useRef<Particle[]>([]);
  const mousePosition = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  class Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    constructor(x: number, y: number, size: number, speedX: number, speedY: number, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.speedX = speedX;
      this.speedY = speedY;
      this.canvas = canvas;
      this.ctx = ctx;
    }

    update() {
      if (this.x + this.size > this.canvas.width || this.x - this.size < 0) {
        this.speedX = -this.speedX;
      }
      if (this.y + this.size > this.canvas.height || this.y - this.size < 0) {
        this.speedY = -this.speedY;
      }
      this.x += this.speedX;
      this.y += this.speedY;
    }

    draw() {
      this.ctx.fillStyle = particleColor;
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }

  const initParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    particlesArray.current = [];
    const numberOfParticles = particleCount;
    for (let i = 0; i < numberOfParticles; i++) {
      const size = Math.random() * 1.5 + 0.5; // Smaller particles
      const x = Math.random() * (canvas.width - size * 2) + size;
      const y = Math.random() * (canvas.height - size * 2) + size;
      const speedX = (Math.random() * 0.4 - 0.2); // Slower movement
      const speedY = (Math.random() * 0.4 - 0.2);
      particlesArray.current.push(new Particle(x, y, size, speedX, speedY, canvas, ctx));
    }
  }, [particleCount]);
  
  const connectParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let opacityValue = 1;
    for (let a = 0; a < particlesArray.current.length; a++) {
      for (let b = a; b < particlesArray.current.length; b++) {
        const distance = Math.sqrt(
          (particlesArray.current[a].x - particlesArray.current[b].x) ** 2 +
          (particlesArray.current[a].y - particlesArray.current[b].y) ** 2
        );

        if (distance < 100) { // Connection distance
          opacityValue = 1 - (distance / 100);
          ctx.strokeStyle = lineColor.replace(/rgba\(([^,]+),([^,]+),([^,]+),[^)]+\)/, `rgba($1,$2,$3,${opacityValue * parseFloat(lineColor.match(/[\d\.]+\)$/)![0])})`);
          ctx.lineWidth = 0.5; // Thinner lines
          ctx.beginPath();
          ctx.moveTo(particlesArray.current[a].x, particlesArray.current[a].y);
          ctx.lineTo(particlesArray.current[b].x, particlesArray.current[b].y);
          ctx.stroke();
        }
      }
    }

    // Interaction with mouse
    if (interactive && mousePosition.current.x !== null && mousePosition.current.y !== null) {
      for (let i = 0; i < particlesArray.current.length; i++) {
        const distanceToMouse = Math.sqrt(
          (particlesArray.current[i].x - mousePosition.current.x) ** 2 +
          (particlesArray.current[i].y - mousePosition.current.y) ** 2
        );
        if (distanceToMouse < 120) { // Mouse interaction radius
           opacityValue = 1 - (distanceToMouse / 120);
           ctx.strokeStyle = lineColor.replace(/rgba\(([^,]+),([^,]+),([^,]+),[^)]+\)/, `rgba($1,$2,$3,${opacityValue * parseFloat(lineColor.match(/[\d\.]+\)$/)![0])})`);
           ctx.lineWidth = 0.6;
           ctx.beginPath();
           ctx.moveTo(particlesArray.current[i].x, particlesArray.current[i].y);
           ctx.lineTo(mousePosition.current.x, mousePosition.current.y);
           ctx.stroke();
        }
      }
    }

  }, [lineColor, interactive]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const particle of particlesArray.current) {
      particle.update();
      particle.draw();
    }
    connectParticles();
    animationFrameId.current = requestAnimationFrame(animate);
  }, [connectParticles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    if (interactive) {
      const handleMouseMove = (event: MouseEvent) => {
        mousePosition.current = { x: event.clientX, y: event.clientY };
      };
      const handleMouseOut = () => {
        mousePosition.current = { x: null, y: null };
      };
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseout', handleMouseOut);

      return () => {
        window.removeEventListener('resize', setCanvasSize);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseout', handleMouseOut);
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
        }
      };
    }


    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [initParticles, interactive]);

  useEffect(() => {
    // Start animation only after particles are initialized
    if (particlesArray.current.length > 0) {
        animationFrameId.current = requestAnimationFrame(animate);
    }
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [animate, particlesArray.current.length]);


  return <canvas ref={canvasRef} className={cn("fixed top-0 left-0 w-full h-full -z-10", className)} />;
};

export default AnimatedBackground;
