"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { BrandMark } from "@/components/brand-mark";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const statusDefinitions = [
  {
    status: "Available",
    copy: "Ready to open and use.",
    tone: "available",
  },
  {
    status: "Beta",
    copy: "Usable, active, and still being refined.",
    tone: "beta",
  },
  {
    status: "Coming soon",
    copy: "Confirmed, but not released yet.",
    tone: "soon",
  },
] as const;

const principles = [
  {
    title: "Useful before impressive",
    copy: "Every release should solve a real task clearly enough that its purpose is understood before its interface needs explaining.",
    signal: "Remove friction",
  },
  {
    title: "Distinct tools, one home",
    copy: "Each product can have its own job and personality while sharing the same standard of care, clarity, and finish.",
    signal: "Build continuity",
  },
  {
    title: "Honest by default",
    copy: "Availability, scope, and progress stay explicit. A work in progress should feel considered without pretending to be complete.",
    signal: "Name the state",
  },
] as const;

const makerNotes = [
  {
    title: "A personal workshop, left open",
    copy: "Kr4ftLabs is where I gather the tools and applications I build, then make the useful ones easier for other people to discover.",
  },
  {
    title: "The collection grows on purpose",
    copy: "A product earns its place through a clear job, an honest status, and a reason to return. The catalogue is not filled for appearance.",
  },
  {
    title: "Different jobs, familiar quality",
    copy: "A lightweight utility and a complete application can feel related without becoming identical. The system connects them; purpose distinguishes them.",
  },
] as const;

const revealStatement =
  "Kr4ftLabs is not a single product. It is a living shelf for useful software — shaped by curiosity, sharpened by real needs, and released with its purpose intact.";

function ArrowIcon({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={direction === "left" ? "arrow-icon arrow-icon-left" : "arrow-icon"}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function SparkGlyph() {
  return (
    <svg viewBox="0 0 36 36" aria-hidden="true">
      <path d="M21 2 8 20h9l-3 14 14-20h-9l2-12Z" />
    </svg>
  );
}

function WorkspacePreview({ variant }: { variant: "utility" | "organize" | "create" }) {
  const artwork = {
    utility: "everyday-utilities",
    organize: "productivity-organization",
    create: "creative-work",
  }[variant];

  return (
    <div className={`preview-canvas ${variant}-preview`} aria-hidden="true">
      <Image
        className="landing-illustration"
        src={`/illustrations/${artwork}.webp`}
        alt=""
        fill
        sizes="(max-width: 700px) calc(100vw - 2.5rem), (max-width: 1000px) 92vw, 60vw"
        loading="lazy"
      />
      <span className="scene-shade" />
    </div>
  );
}

export function LandingPage() {
  const root = useRef<HTMLElement>(null);
  const [activePrinciple, setActivePrinciple] = useState(0);
  const [activeNote, setActiveNote] = useState(0);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const words = gsap.utils.toArray<HTMLElement>(".reveal-word");
      const scenes = gsap.utils.toArray<HTMLElement>(".preview-canvas");

      if (reducedMotion) {
        gsap.set(words, { opacity: 1 });
        gsap.set(scenes, { scale: 1 });
        gsap.set(".scene-shade", { opacity: 0 });
        return;
      }

      const opening = gsap.timeline({ defaults: { ease: "power3.out" } });
      opening
        .from(".site-header", { y: -24, opacity: 0, duration: 0.7 })
        .from(".hero-copy > *", { y: 36, opacity: 0, stagger: 0.1, duration: 0.8 }, "-=0.35")
        .from(".hero-signal", { x: 52, opacity: 0, rotate: 2, duration: 1 }, "-=0.72");

      gsap.to(words, {
        opacity: 1,
        stagger: 0.06,
        ease: "none",
        scrollTrigger: {
          trigger: ".reveal-copy",
          start: "top 78%",
          end: "bottom 46%",
          scrub: 0.8,
        },
      });

      scenes.forEach((scene) => {
        const shade = scene.querySelector<HTMLElement>(".scene-shade");
        const sceneTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: scene,
            start: "top 88%",
            end: "center 58%",
            scrub: 0.7,
          },
        });
        sceneTimeline.fromTo(scene, { scale: 0.82 }, { scale: 1, ease: "none" });
        if (shade) {
          sceneTimeline.fromTo(shade, { opacity: 0.52 }, { opacity: 0, ease: "none" }, 0);
        }
      });
    },
    { scope: root },
  );

  const showPreviousNote = () => {
    setActiveNote((current) => (current - 1 + makerNotes.length) % makerNotes.length);
  };

  const showNextNote = () => {
    setActiveNote((current) => (current + 1) % makerNotes.length);
  };

  return (
    <main ref={root} className="site-shell">
      <header className="site-header">
        <a className="brand-link" href="#top" aria-label="Kr4ftLabs home">
          <BrandMark />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#collection">Collection</a>
          <a href="#principles">Principles</a>
          <a href="#studio">Studio</a>
        </nav>
        <a className="nav-action" href="#collection">
          Enter the workshop
          <ArrowIcon />
        </a>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="hero-intro">A maker-led home for purposeful digital products.</p>
          <h1>
            Useful <span className="hero-inline-visual" aria-hidden="true"><SparkGlyph /></span> software,
            <br /><span className="hero-second-line">made with intent.</span>
          </h1>
          <p className="hero-summary">
            Kr4ftLabs brings together the tools and applications I build — from focused everyday utilities to fuller systems for productivity, organization, and creative work.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#collection">
              See the collection
              <ArrowIcon />
            </a>
            <a className="button button-secondary" href="#studio">
              Why Kr4ftLabs
            </a>
          </div>
        </div>

        <div className="hero-signal" aria-label="Kr4ftLabs workshop signal">
          <div className="signal-toolbar">
            <span>Workshop signal</span>
            <span className="signal-live"><i /> Building</span>
          </div>
          <div className="signal-mark">
            <BrandMark compact />
            <span className="signal-orbit orbit-one" />
            <span className="signal-orbit orbit-two" />
          </div>
          <div className="signal-index">
            <span>Utility</span>
            <span>Organize</span>
            <span>Create</span>
          </div>
          <p>One evolving system. Every release has its own job.</p>
        </div>
      </section>

      <section className="collection-section section-space" id="collection">
        <div className="section-heading">
          <h2>A catalogue that earns every entry.</h2>
          <p>
            Product names and destinations will appear only when they are confirmed. Until then, the release system stays honest and the space stays intentional.
          </p>
        </div>

        <div className="collection-grid">
          <article className="release-board bento-card">
            <div className="card-heading-row">
              <div>
                <p className="card-overline">Release language</p>
                <h3>Know what is ready before you open it.</h3>
              </div>
              <SparkGlyph />
            </div>
            <div className="status-list">
              {statusDefinitions.map((item) => (
                <div className="status-row" key={item.status}>
                  <span className={`status-chip ${item.tone}`}>{item.status}</span>
                  <p>{item.copy}</p>
                </div>
              ))}
            </div>
            <div className="release-empty-state">
              <span className="empty-line" />
              <p>Confirmed product details will replace this space.</p>
              <span className="empty-line" />
            </div>
          </article>

          <article className="editorial-card bento-card">
            <p>No placeholders dressed as products.</p>
            <span>Real name. Clear purpose. Honest status.</span>
          </article>

          <article className="system-card bento-card">
            <div className="system-mark"><BrandMark compact /></div>
            <p>One system</p>
            <span>Distinct jobs</span>
          </article>

          <article className="criteria-card bento-card">
            <h3>Before a release appears</h3>
            <ul>
              <li><span />Purpose is clear</li>
              <li><span />Status is accurate</li>
              <li><span />Destination works</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="reveal-section section-space" id="studio">
        <p className="reveal-copy">
          {revealStatement.split(" ").map((word, index) => (
            <span className="reveal-word" key={`${word}-${index}`}>
              {word}{" "}
            </span>
          ))}
        </p>
      </section>

      <section className="possibility-section section-space" aria-labelledby="possibility-title">
        <div className="section-heading split-heading">
          <h2 id="possibility-title">Built around the work people actually do.</h2>
          <p>
            These are areas the platform can explore, not announced products. Each future preview will show the task it helps accomplish, not merely a polished screen.
          </p>
        </div>

        <div className="story-list">
          <article className="story-scene">
            <div className="scene-copy">
              <span className="scene-name">Everyday utilities</span>
              <h3>Make repeated tasks feel lighter.</h3>
              <p>Focused tools can remove a small piece of friction without demanding a new workflow.</p>
            </div>
            <WorkspacePreview variant="utility" />
          </article>
          <article className="story-scene scene-reverse">
            <div className="scene-copy">
              <span className="scene-name">Productivity and organization</span>
              <h3>Give moving parts a clearer shape.</h3>
              <p>More complete applications can bring structure to planning, tracking, and coordinated work.</p>
            </div>
            <WorkspacePreview variant="organize" />
          </article>
          <article className="story-scene">
            <div className="scene-copy">
              <span className="scene-name">Creative work</span>
              <h3>Help an unfinished idea become tangible.</h3>
              <p>Creative surfaces can support exploration while keeping the final output within reach.</p>
            </div>
            <WorkspacePreview variant="create" />
          </article>
        </div>
      </section>

      <section className="principles-section section-space" id="principles">
        <div className="section-heading light-heading">
          <h2>Different tools. The same point of view.</h2>
          <p>Three decisions keep the platform coherent while leaving room for every product to be itself.</p>
        </div>

        <div className="principle-accordion">
          {principles.map((principle, index) => {
            const isActive = activePrinciple === index;
            return (
              <button
                className={`principle-panel ${isActive ? "active" : ""}`}
                key={principle.title}
                type="button"
                aria-expanded={isActive}
                onClick={() => setActivePrinciple(index)}
                onFocus={() => setActivePrinciple(index)}
                onMouseEnter={() => setActivePrinciple(index)}
              >
                <span className="principle-signal">{principle.signal}</span>
                <span className="principle-title">{principle.title}</span>
                <span className="principle-copy">{principle.copy}</span>
                <span className="principle-arrow"><ArrowIcon /></span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="maker-section section-space" aria-labelledby="maker-title">
        <div className="maker-visual" aria-hidden="true">
          <Image
            className="landing-illustration maker-illustration"
            src="/illustrations/open-workshop.webp"
            alt=""
            fill
            sizes="(max-width: 700px) calc(100vw - 2.5rem), (max-width: 1000px) 92vw, 48vw"
            loading="lazy"
          />
          <div className="maker-k"><BrandMark compact /></div>
        </div>
        <div className="maker-notes">
          <p className="card-overline">A note from the maker</p>
          <div className="note-window" aria-live="polite">
            <h2 id="maker-title">{makerNotes[activeNote].title}</h2>
            <p>{makerNotes[activeNote].copy}</p>
          </div>
          <div className="note-controls">
            <span>{String(activeNote + 1).padStart(2, "0")} / {String(makerNotes.length).padStart(2, "0")}</span>
            <div>
              <button type="button" onClick={showPreviousNote} aria-label="Previous maker note">
                <ArrowIcon direction="left" />
              </button>
              <button type="button" onClick={showNextNote} aria-label="Next maker note">
                <ArrowIcon />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="closing-section section-space">
        <div className="closing-mark"><BrandMark compact /></div>
        <h2>Come back for what earns a place.</h2>
        <p>The collection will grow as real tools are ready to share.</p>
        <div className="closing-actions">
          <a className="button button-light" href="#collection">Browse the release board <ArrowIcon /></a>
          <a className="text-link" href="#top">Back to the beginning</a>
        </div>
      </section>

      <footer className="site-footer">
        <BrandMark />
        <p>Independent tools and applications, built with purpose.</p>
        <a href="#top">Top <ArrowIcon direction="left" /></a>
      </footer>
    </main>
  );
}
