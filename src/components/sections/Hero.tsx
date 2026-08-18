"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import styles from "./Hero.module.css";

export function Hero() {
  const stageRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const mistRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = stageRef.current;
    const hero = heroRef.current;
    if (!canvas || !stage || !hero) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    let W = 0,
      H = 0,
      baseX = 0,
      baseY = 0,
      baseW = 0,
      t = 0;

    type Ember = {
      x: number; y: number; vx: number; vy: number;
      life: number; max: number; size: number; sway: number; swaySpeed: number;
    };
    type Smoke = {
      x: number; y: number; vx: number; vy: number;
      life: number; max: number; size: number;
    };

    const embers: Ember[] = [];
    const smoke: Smoke[] = [];
    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    function resize() {
      W = stage!.clientWidth;
      H = stage!.clientHeight;
      canvas!.width = W * DPR;
      canvas!.height = H * DPR;
      canvas!.style.width = W + "px";
      canvas!.style.height = H + "px";
      ctx!.setTransform(DPR, 0, 0, DPR, 0, 0);
      baseX = W * 0.5;
      baseY = H * 0.88;
      baseW = Math.max(120, Math.min(W * 0.22, 340));
    }
    resize();

    function spawnEmber(): Ember {
      const spread = baseW * 0.5;
      return {
        x: baseX + rand(-spread, spread) * rand(0.2, 1),
        y: baseY + rand(-8, 10),
        vx: rand(-0.28, 0.28),
        vy: rand(-2.6, -1.1),
        life: 0,
        max: rand(60, 150),
        size: rand(1.1, 3.2),
        sway: rand(0, 6.28),
        swaySpeed: rand(0.01, 0.05),
      };
    }
    function spawnSmoke(): Smoke {
      return {
        x: baseX + rand(-baseW * 0.4, baseW * 0.4),
        y: baseY,
        vx: rand(-0.15, 0.15),
        vy: rand(-0.7, -0.35),
        life: 0,
        max: rand(120, 220),
        size: rand(30, 70),
      };
    }

    const maxEmbers = reduce ? 70 : 130;
    for (let i = 0; i < maxEmbers; i++) {
      const e = spawnEmber();
      e.life = rand(0, e.max);
      embers.push(e);
    }
    for (let s = 0; s < 18; s++) {
      const sm = spawnSmoke();
      sm.life = rand(0, sm.max);
      smoke.push(sm);
    }

    const flicker = (time: number) =>
      0.72 +
      0.16 * Math.sin(time * 0.07) +
      0.08 * Math.sin(time * 0.19 + 1.3) +
      0.05 * Math.sin(time * 0.41 + 2.1);

    function drawGlow(fl: number) {
      const gx = baseX,
        gy = baseY;
      const r = baseW * 1.58;
      const g = ctx!.createRadialGradient(gx, gy - baseW * 0.35, 0, gx, gy, r);
      g.addColorStop(0, "rgba(255,205,120," + 0.42 * fl + ")");
      g.addColorStop(0.22, "rgba(240,150,55," + 0.3 * fl + ")");
      g.addColorStop(0.55, "rgba(200,90,30," + 0.13 * fl + ")");
      g.addColorStop(1, "rgba(120,50,20,0)");
      ctx!.fillStyle = g;
      ctx!.beginPath();
      ctx!.ellipse(gx, gy, r, r * 1.15, 0, 0, 6.2832);
      ctx!.fill();

      const c = ctx!.createRadialGradient(gx, gy, 0, gx, gy, baseW * 0.6);
      c.addColorStop(0, "rgba(255,225,150," + 0.5 * fl + ")");
      c.addColorStop(1, "rgba(255,150,50,0)");
      ctx!.fillStyle = c;
      ctx!.beginPath();
      ctx!.ellipse(gx, gy - baseW * 0.1, baseW * 0.5, baseW * 0.75, 0, 0, 6.2832);
      ctx!.fill();
    }

    function drawEmber(e: Ember) {
      const lifeT = 1 - e.life / e.max;
      const alpha = Math.min(1, lifeT * 1.6) * Math.min(1, e.life < 10 ? e.life / 10 : 1);
      const r = 255;
      const g = Math.round(90 + 150 * lifeT);
      const b = Math.round(20 + 130 * Math.max(0, lifeT - 0.55) * 2.2);
      const rad = e.size * (0.6 + lifeT * 0.8);
      const grd = ctx!.createRadialGradient(e.x, e.y, 0, e.x, e.y, rad * 3.2);
      grd.addColorStop(0, "rgba(" + r + "," + g + "," + b + "," + alpha + ")");
      grd.addColorStop(0.4, "rgba(" + r + "," + Math.round(g * 0.7) + ",30," + alpha * 0.5 + ")");
      grd.addColorStop(1, "rgba(120,40,10,0)");
      ctx!.fillStyle = grd;
      ctx!.beginPath();
      ctx!.arc(e.x, e.y, rad * 3.2, 0, 6.2832);
      ctx!.fill();
    }

    function drawSmoke(sm: Smoke) {
      const lifeT = sm.life / sm.max;
      const alpha = Math.sin(lifeT * Math.PI) * 0.05;
      const rad = sm.size * (1 + lifeT * 1.6);
      const grd = ctx!.createRadialGradient(sm.x, sm.y, 0, sm.x, sm.y, rad);
      grd.addColorStop(0, "rgba(150,140,130," + alpha + ")");
      grd.addColorStop(1, "rgba(120,120,120,0)");
      ctx!.fillStyle = grd;
      ctx!.beginPath();
      ctx!.arc(sm.x, sm.y, rad, 0, 6.2832);
      ctx!.fill();
    }

    let rafFire = 0;
    function frame() {
      t++;
      ctx!.clearRect(0, 0, W, H);
      const fl = flicker(t);

      ctx!.globalCompositeOperation = "source-over";
      for (let i = 0; i < smoke.length; i++) {
        const sm = smoke[i];
        sm.x += sm.vx;
        sm.y += sm.vy;
        sm.life++;
        if (sm.life >= sm.max) {
          smoke[i] = spawnSmoke();
          continue;
        }
        drawSmoke(sm);
      }

      ctx!.globalCompositeOperation = "lighter";
      drawGlow(fl);
      for (let j = 0; j < embers.length; j++) {
        const e = embers[j];
        e.sway += e.swaySpeed;
        e.x += e.vx + Math.sin(e.sway) * 0.35;
        e.y += e.vy;
        e.vy *= 0.995;
        e.life++;
        if (e.life >= e.max || e.y < H * 0.12) {
          embers[j] = spawnEmber();
          continue;
        }
        drawEmber(e);
      }
      ctx!.globalCompositeOperation = "source-over";

      rafFire = requestAnimationFrame(frame);
    }

    if (reduce) {
      ctx.globalCompositeOperation = "source-over";
      for (let q = 0; q < smoke.length; q++) drawSmoke(smoke[q]);
      ctx.globalCompositeOperation = "lighter";
      drawGlow(1);
      for (let p = 0; p < embers.length; p++) drawEmber(embers[p]);
      ctx.globalCompositeOperation = "source-over";
    } else {
      rafFire = requestAnimationFrame(frame);
    }

    // ---- parallax ----
    let tx = 0,
      ty = 0,
      cx = 0,
      cy = 0,
      rafPar = 0;

    function apply() {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      hero!.style.transform = "translate(" + cx * -14 + "px," + cy * -9 + "px)";
      canvas!.style.transform = "translate(" + cx * 10 + "px," + cy * 7 + "px)";
      const m = mistRefs.current;
      if (m[0]) m[0].style.marginLeft = cx * 26 + "px";
      if (m[1]) m[1].style.marginLeft = cx * -30 + "px";
      if (m[2]) m[2].style.marginLeft = cx * 18 + "px";
      rafPar = requestAnimationFrame(apply);
    }

    function onMove(ev: MouseEvent) {
      tx = (ev.clientX / window.innerWidth - 0.5) * 2;
      ty = (ev.clientY / window.innerHeight - 0.5) * 2;
    }

    if (!reduce) {
      window.addEventListener("mousemove", onMove);
      rafPar = requestAnimationFrame(apply);
    }
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(rafFire);
      cancelAnimationFrame(rafPar);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section ref={stageRef} className={styles.stage} id="hero">
      <canvas ref={canvasRef} className={styles.fire} aria-hidden="true" />

      <div ref={(el) => { mistRefs.current[2] = el; }} className={`${styles.mist} ${styles.mistC}`} aria-hidden="true" />
      <div ref={(el) => { mistRefs.current[0] = el; }} className={`${styles.mist} ${styles.mistA}`} aria-hidden="true" />
      <div ref={(el) => { mistRefs.current[1] = el; }} className={`${styles.mist} ${styles.mistB}`} aria-hidden="true" />

      <div className={styles.vignette} aria-hidden="true" />

      <div ref={heroRef} className={styles.hero}>
        <div className={styles.eyebrow}>Wolin · Brzeg Bałtyku · Krąg Ognia</div>

        <div className={styles.mark}>
          <Image
            src="/logo-mark.png"
            alt={`${site.name} — hełm słowiańskiego woja`}
            width={380}
            height={380}
            priority
            className={styles.markImg}
          />
        </div>

        <h1 className={styles.wordmark}>{site.name}</h1>
        <div className={styles.rule} aria-hidden="true" />
        <p className={styles.sub}>{site.tagline} — braterskie wsparcie i zdrowie psychiczne</p>
        <p className={styles.lede}>Nie musisz dźwigać wszystkiego sam.</p>

        <div className={styles.cta}>
          <Button href="#manifest" variant="primary">
            Poznaj manifest
          </Button>
          <Button href="#kontakt" variant="outline">
            Szukam wsparcia
          </Button>
        </div>
      </div>

      <div className={styles.scrollcue} aria-hidden="true">
        <span>Przewiń</span>
        <span className={styles.line} />
      </div>
    </section>
  );
}
