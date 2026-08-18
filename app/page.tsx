import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  ChevronRight,
  Code2,
  Globe2,
  Mail,
  MoveUpRight,
} from "lucide-react";
import auafGraduation from "../AUAF Graduation Day .jpeg";
import dustAndGrease from "../Dugst and greese on my clothes.jpg";
import familyAfterGrandma from "../Family After Grandma.jpg";
import fullFamilyIran from "../Full Family Iran.jpg";
import hksGraduation from "../HKS Graduation.jpg";
import headshot from "../Mosa Rahimi_002873_.jpg";
import missionPortrait from "../Mission to the sout 1.jpg";
import missionPatrol from "../Mission to the sout 2.jpeg";
import missionSouth from "../Mission to the south.jpg";
import tractor from "../Tractor1.jpg";
import whartonAfter from "../Wharton After Graduatioin Ceremoney.jpeg";
import whartonStage from "../WhartonMBA_H3_0354.jpg";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { artifacts, career, education, impact } from "@/lib/profile";

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow hero-kicker">
            <span className="status-dot" />
            The deliberate pivot · AI &amp; data science
          </p>
          <h1 id="hero-heading">
            Experience taught me how systems behave.
            <span>Now I&apos;m learning how machines learn.</span>
          </h1>
          <p className="hero-intro">
            I&apos;m Mosa Rahimi—a Wharton MBA, Harvard MPA, and Amazon Leo
            leader.
            After two decades in operations, policy, and strategy, I&apos;m
            deliberately building at the intersection of artificial intelligence,
            finance, and the consequential problems those systems create.
          </p>
          <div className="hero-tags" aria-label="Areas of focus">
            <span>Artificial intelligence</span>
            <span>Deep learning</span>
            <span>Economic modeling</span>
            <span>Data science</span>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#pivot">
              Why this pivot <ArrowDownRight aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#journey">
              Explore my journey
            </a>
            <a
              className="text-link"
              href="https://www.linkedin.com/in/mosa-rahimi"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="hero-note">
            <span>20+</span>
            <p>
              years across public service, policy, technology, and operations—now
              applied to AI
            </p>
          </div>
        </div>

        <div className="hero-portrait-wrap">
          <div className="portrait-index" aria-hidden="true">
            01 / 05
          </div>
          <div className="portrait-frame">
            <Image
              src={headshot}
              alt="Mosa Rahimi in a dark suit"
              priority
              placeholder="blur"
              sizes="(max-width: 860px) 88vw, 42vw"
              className="portrait-image"
            />
            <div className="portrait-caption">
              <span>Based in the United States</span>
              <span>Amazon Leo · Project Kuiper</span>
            </div>
          </div>
          <div className="portrait-accent" aria-hidden="true">
            <span>Systems</span>
            <span>into</span>
            <strong>intelligence.</strong>
          </div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Career themes">
        <div className="signal-track">
          <span>AI &amp; Data</span>
          <i />
          <span>Operations Leadership</span>
          <i />
          <span>Strategic Systems</span>
          <i />
          <span>Public Service</span>
          <i />
          <span>Cross-Cultural Leadership</span>
        </div>
      </section>

      <section className="section impact-section" id="impact" aria-labelledby="impact-heading">
        <Reveal className="section-heading split-heading">
          <div>
            <p className="eyebrow">Selected impact</p>
            <h2 id="impact-heading">Measured in outcomes.</h2>
          </div>
          <p>
            The settings have changed—from border security to advanced
            manufacturing—but the work has remained consistent: make the
            system legible, align people, and move the mission forward.
          </p>
        </Reveal>

        <div className="metric-grid">
          {impact.map((item, index) => (
            <Reveal key={item.value} className="metric-card" delay={index * 70}>
              <span className="metric-number">{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.value}</strong>
              <h3>{item.label}</h3>
              <p>{item.note}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pivot-section" id="pivot" aria-labelledby="pivot-heading">
        <div className="pivot-orbit" aria-hidden="true">
          <span>AI</span>
        </div>
        <Reveal className="pivot-copy">
          <p className="eyebrow light">Why this pivot</p>
          <h2 id="pivot-heading">
            Not reinvention for its own sake.
            <span>A deliberate expansion of how I solve.</span>
          </h2>
          <p>
            Operations taught me how large systems coordinate under pressure.
            Policy taught me how institutions shape outcomes. Strategy taught me
            where leverage actually lives. AI adds a new technical language—and
            a new set of consequential problems—at the intersection of finance,
            governance, and human-scale impact.
          </p>
          <div className="pivot-tags" aria-label="What I'm building toward">
            <span>Machine learning</span>
            <span>AI policy</span>
            <span>Applied data science</span>
            <span>Systems thinking</span>
          </div>
        </Reveal>
        <BrainCircuit className="pivot-icon" aria-hidden="true" />
      </section>

      <section className="section journey-section" id="journey" aria-labelledby="journey-heading">
        <Reveal className="section-heading journey-heading">
          <p className="eyebrow">The journey</p>
          <h2 id="journey-heading">
            One throughline.
            <span>Many arenas.</span>
          </h2>
        </Reveal>

        <div className="timeline">
          {career.map((entry, index) => (
            <Reveal className="timeline-row" key={`${entry.period}-${entry.organization}`}>
              <div className="timeline-period">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{entry.period}</p>
              </div>
              <div className="timeline-node" aria-hidden="true">
                <i />
              </div>
              <article className={`timeline-card tone-${entry.tone ?? "default"}`}>
                <div className="timeline-topline">
                  <p>{entry.organization}</p>
                  <span>{entry.location}</span>
                </div>
                <h3>{entry.role}</h3>
                <p className="timeline-summary">{entry.summary}</p>
                {entry.highlights && (
                  <ul>
                    {entry.highlights.map((highlight) => (
                      <li key={highlight}>
                        <ChevronRight aria-hidden="true" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="education-section" id="education" aria-labelledby="education-heading">
        <Reveal className="education-intro">
          <p className="eyebrow light">Education</p>
          <h2 id="education-heading">Policy mind. Business lens. Technical curiosity.</h2>
          <p>
            A dual graduate journey at Wharton and Harvard built the bridge
            between markets, institutions, analytics, and public leadership.
          </p>
        </Reveal>
        <div className="education-grid">
          {education.map((item, index) => (
            <Reveal key={item.school} className="education-card" delay={index * 70}>
              <div className="school-mark">{item.mark}</div>
              <span>{item.years}</span>
              <h3>{item.school}</h3>
              <strong>{item.degree}</strong>
              <p>{item.focus}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section story-section" id="story" aria-labelledby="story-heading">
        <Reveal className="story-quote">
          <span className="quote-mark">“</span>
          <blockquote id="story-heading">
            My story is a humble journey of survival and triumph over some of
            the toughest challenges refugees and ethnic minorities encounter
            every day.
          </blockquote>
        </Reveal>
        <div className="story-grid">
          <Reveal className="story-title">
            <p className="eyebrow">Citizen by choice</p>
            <h2>Resilience is not a chapter. It is the operating system.</h2>
          </Reveal>
          <Reveal className="story-body">
            <p>
              As a refugee child in Iran, I heard stories of technological
              progress over the radio. Years later, after serving at the center
              of Afghan public institutions, I came to America and started
              again—from minimum-wage work, without a professional support
              network.
            </p>
            <p>
              I chose to share that transition, not hide it. It shaped how I
              lead: with empathy for the person behind the metric, respect for
              the invisible work, and the conviction that capability is often
              waiting for opportunity.
            </p>
          </Reveal>
        </div>
        <div className="story-photo-spread" aria-label="Family photographs from Iran">
          <Reveal className="story-photo story-photo-primary">
            <figure>
              <div className="story-image-frame">
                <Image
                  src={fullFamilyIran}
                  alt="Mosa Rahimi with his family during his childhood in Iran"
                  placeholder="blur"
                  sizes="(max-width: 760px) 100vw, 70vw"
                />
                <span className="photo-index" aria-hidden="true">01</span>
              </div>
              <figcaption>
                <span>Family portrait</span>
                <span>Iran · The early years</span>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal className="story-photo story-photo-secondary" delay={120}>
            <figure>
              <div className="story-image-frame">
                <Image
                  src={familyAfterGrandma}
                  alt="A family photograph from Mosa Rahimi's childhood in Iran"
                  placeholder="blur"
                  sizes="(max-width: 760px) 88vw, 38vw"
                />
                <span className="photo-index" aria-hidden="true">02</span>
              </div>
              <figcaption>
                <span>Growing up together</span>
                <span>Iran · Family archive</span>
              </figcaption>
            </figure>
          </Reveal>
          <p className="story-photo-note">
            Before the boardrooms, institutions, and operations floors, there
            was family—the first system of resilience, responsibility, and hope.
          </p>
        </div>
        <div className="work-story" aria-labelledby="work-story-heading">
          <Reveal className="work-story-copy">
            <p className="eyebrow light">Story 02 · The impossible dream</p>
            <h3 id="work-story-heading">
              College was not in the cards.
              <span>I refused to stop dreaming.</span>
            </h3>
            <p>
              The chance of going to college felt nonexistent. So I worked night
              and day—through dust, grease, fields, and machines—while holding
              onto a future no one around me could promise.
            </p>
            <blockquote>
              The work covered my clothes. It never touched the dream.
            </blockquote>
          </Reveal>
          <div className="work-story-images">
            <Reveal className="work-photo work-photo-tractor">
              <figure>
                <Image
                  src={tractor}
                  alt="A young Mosa Rahimi standing beside a red tractor"
                  placeholder="blur"
                  sizes="(max-width: 760px) 90vw, 38vw"
                />
                <figcaption>
                  <span>Work was the reality.</span>
                  <small>Long days · No shortcuts</small>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="work-photo work-photo-field" delay={120}>
              <figure>
                <Image
                  src={dustAndGrease}
                  alt="A young Mosa Rahimi standing in a field in work clothes"
                  placeholder="blur"
                  sizes="(max-width: 760px) 90vw, 42vw"
                />
                <figcaption>
                  <span>College was the dream.</span>
                  <small>Out of reach · Never out of sight</small>
                </figcaption>
              </figure>
            </Reveal>
          </div>
          <span className="work-story-watermark" aria-hidden="true">NIGHT / DAY</span>
        </div>
        <div className="mission-story" aria-labelledby="mission-story-heading">
          <Reveal className="mission-story-heading">
            <div className="mission-years" aria-hidden="true">
              <strong>11</strong>
              <span>years</span>
            </div>
            <div>
              <p className="eyebrow">Story 03 · Service under fire</p>
              <h3 id="mission-story-heading">
                I put my life on the line.
                <span>The dream was bigger than the danger.</span>
              </h3>
            </div>
          </Reveal>
          <Reveal className="mission-story-copy">
            <p>
              For eleven years, service meant accepting real risk—from border
              provinces to counter-narcotics missions across Afghanistan. Every
              journey carried uncertainty, but the dream was never only
              personal: a safer, stronger future built through institutions
              that could truly serve people.
            </p>
            <blockquote>
              The danger was real. So was the future I could see beyond it.
            </blockquote>
          </Reveal>
          <div className="mission-gallery">
            <Reveal className="mission-photo mission-photo-south">
              <figure>
                <Image
                  src={missionSouth}
                  alt="Mosa Rahimi during a field mission in southern Afghanistan"
                  placeholder="blur"
                  sizes="(max-width: 760px) 100vw, 42vw"
                />
                <figcaption>Mission south · In the field</figcaption>
              </figure>
            </Reveal>
            <Reveal className="mission-photo mission-photo-portrait" delay={90}>
              <figure>
                <Image
                  src={missionPortrait}
                  alt="Mosa Rahimi in uniform during his years of public service"
                  placeholder="blur"
                  sizes="(max-width: 760px) 48vw, 20vw"
                />
                <figcaption>Eleven years · One purpose</figcaption>
              </figure>
            </Reveal>
            <Reveal className="mission-photo mission-photo-patrol" delay={180}>
              <figure>
                <Image
                  src={missionPatrol}
                  alt="Mosa Rahimi and fellow officers on patrol in mountainous terrain"
                  placeholder="blur"
                  sizes="(max-width: 760px) 100vw, 46vw"
                />
                <figcaption>Risk shared · Mission forward</figcaption>
              </figure>
            </Reveal>
          </div>
          <div className="mission-line" aria-hidden="true">
            <span>2004</span>
            <i />
            <span>2014</span>
          </div>
        </div>
        <div className="education-story" aria-labelledby="education-story-heading">
          <Reveal className="education-story-heading">
            <p className="eyebrow light">Story 04 · The long road to the classroom</p>
            <h3 id="education-story-heading">
              In 1999, college was impossible.
              <span>In 2022, I graduated from Wharton and Harvard.</span>
            </h3>
          </Reveal>
          <div className="education-story-intro">
            <Reveal>
              <strong>23</strong>
              <span>years from dream to dual degrees</span>
            </Reveal>
            <Reveal className="education-story-copy" delay={100}>
              <p>
                There was no straight line—only work, service, migration,
                restarting, and the decision to keep going. The journey moved
                through the American University of Afghanistan and, eventually,
                two graduate programs at Wharton and Harvard Kennedy School.
              </p>
              <blockquote>
                Distance is not destiny. Sometimes the longest road produces
                the clearest purpose.
              </blockquote>
            </Reveal>
          </div>
          <div className="education-story-gallery">
            <Reveal className="degree-photo degree-photo-auaf">
              <figure>
                <Image
                  src={auafGraduation}
                  alt="Mosa Rahimi celebrating his graduation from the American University of Afghanistan"
                  placeholder="blur"
                  sizes="(max-width: 760px) 100vw, 42vw"
                />
                <figcaption>
                  <span>AUAF</span>
                  <small>BBA · Finance · 2013</small>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="degree-photo degree-photo-wharton" delay={80}>
              <figure>
                <Image
                  src={whartonStage}
                  alt="Mosa Rahimi crossing the stage at his Wharton MBA graduation"
                  placeholder="blur"
                  sizes="(max-width: 760px) 48vw, 28vw"
                />
                <figcaption>
                  <span>Wharton</span>
                  <small>MBA · 2022</small>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="degree-photo degree-photo-wharton-after" delay={160}>
              <figure>
                <Image
                  src={whartonAfter}
                  alt="Mosa Rahimi with family after the Wharton graduation ceremony"
                  placeholder="blur"
                  sizes="(max-width: 760px) 100vw, 42vw"
                />
                <figcaption>
                  <span>The moment after</span>
                  <small>A dream shared</small>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="degree-photo degree-photo-hks" delay={240}>
              <figure>
                <Image
                  src={hksGraduation}
                  alt="Mosa Rahimi celebrating his Harvard Kennedy School graduation"
                  placeholder="blur"
                  sizes="(max-width: 760px) 100vw, 30vw"
                />
                <figcaption>
                  <span>Harvard Kennedy School</span>
                  <small>MPA · 2022</small>
                </figcaption>
              </figure>
            </Reveal>
          </div>
          <div className="education-story-timeline" aria-label="Education journey from 1999 to 2022">
            <span>1999 <small>The dream</small></span>
            <i />
            <span>2013 <small>AUAF</small></span>
            <i />
            <span>2022 <small>Wharton + HKS</small></span>
          </div>
        </div>
        <Reveal className="global-row">
          <div>
            <Globe2 aria-hidden="true" />
            <span>Across cultures</span>
          </div>
          <p>
            Farsi <small>Native</small>
          </p>
          <p>
            English <small>Full professional</small>
          </p>
          <p>
            Pashto <small>Professional working</small>
          </p>
        </Reveal>
      </section>

      <section className="section work-section" id="work" aria-labelledby="work-heading">
        <Reveal className="section-heading split-heading">
          <div>
            <p className="eyebrow">Technical work</p>
            <h2 id="work-heading">
              Something to examine.
              <span>Not just a résumé.</span>
            </h2>
          </div>
          <p>
            AI companies, policy organizations, and technical recruiters need
            artifacts—not adjectives. Here is code, analysis, and work you can
            inspect before we talk.
          </p>
        </Reveal>

        <div className="artifact-grid">
          {artifacts.map((artifact, index) => (
            <Reveal key={artifact.href} className="artifact-card" delay={index * 70}>
              <a href={artifact.href} target="_blank" rel="noreferrer">
                <span className="artifact-label">{artifact.label}</span>
                <h3>{artifact.title}</h3>
                <p>{artifact.description}</p>
                <span className="artifact-link">
                  Open <ArrowUpRight aria-hidden="true" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-heading">
        <div className="contact-grid" aria-hidden="true" />
        <Reveal className="contact-inner">
          <p className="eyebrow light">For AI teams &amp; technical recruiters</p>
          <h2 id="contact-heading">
            Examine the work.
            <span>Then let&apos;s talk.</span>
          </h2>
          <p>
            I&apos;m looking for roles and collaborations at the intersection of
            artificial intelligence, operations, and policy. Start with the
            artifacts above—or reach out directly if you see a fit.
          </p>
          <div className="contact-actions">
            <a
              className="button button-light"
              href="https://github.com/Heseraj"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 aria-hidden="true" /> View GitHub
            </a>
            <a className="button button-ghost" href="#work">
              See technical work
            </a>
            <a className="button button-ghost" href="mailto:rahimi.mosa@gmail.com">
              <Mail aria-hidden="true" /> Email me
            </a>
            <a
              className="text-link contact-linkedin"
              href="https://www.linkedin.com/in/mosa-rahimi"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </Reveal>
        <MoveUpRight className="contact-arrow" aria-hidden="true" />
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">MR</span>
          <span className="brand-name">Mosa Rahimi</span>
        </a>
        <p>Operator · Strategist · Builder · AI</p>
        <a href="#top">
          Back to top <ArrowUpRight aria-hidden="true" />
        </a>
      </footer>
    </main>
  );
}
