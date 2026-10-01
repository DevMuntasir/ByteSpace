import Image from "next/image";
import { Navbar } from "../layout/Navbar";
import { AvatarGroup } from "../ui/AvatarGroup";
import { ProgressBar } from "../ui/ProgressBar";
import styles from "./HeroSection.module.css";

const A = "/assets";

const HAPPY_STUDENT_AVATARS = [
  `${A}/student-avatar-drinking-coffee.png`,
  `${A}/student-avatar-bearded-with-glasses.png`,
  `${A}/student-avatar-wearing-apron.png`,
  `${A}/student-avatar-cyclist.png`,
  `${A}/student-avatar-wearing-hat.png`,
  `${A}/student-avatar-with-blue-glasses.png`,
  `${A}/student-avatar-hiker.png`,
];

const ORNAMENTS = [
  { name: "spiralLeft", src: "hero-spiral-left.webp" },
  { name: "ring", src: "hero-ring.webp" },
  { name: "spiralRight", src: "hero-spiral-right.webp" },
  { name: "cylinder", src: "hero-cylinder.webp" },
  { name: "spiralSmall", src: "hero-spiral-left.webp" },
  { name: "pyramid", src: "hero-pyramid.webp" },
] as const;

export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className={styles.hero}>
      <svg aria-hidden="true" className={styles.filters}>
        <defs>
          <filter colorInterpolationFilters="sRGB" id="hero-lime-tint">
            <feColorMatrix
              type="matrix"
              values="0.22 0 0 0 0.74 0 0.06 0 0 0.94 0 0 0.30 0 0.04 0 0 0 1 0"
            />
          </filter>
        </defs>
      </svg>
      <div className={styles.container}>
        <div className={styles.canvas}>
          <Navbar />
          <div className={styles.content}>
            <h1 id="hero-heading">
              Get Access to Hundreds
              <br className={styles.titleBreak} /> Courses Available
            </h1>
            <p>
              Unlock your creativity, gain valuable knowledge, and grow your
              business with our wide range of courses.
            </p>
            <search>
              <form action="/" className={styles.search}>
                <div className={styles.searchField}>
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
                    <circle
                      cx="10.5"
                      cy="10.5"
                      r="6.5"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="m16 16 4 4"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                    />
                  </svg>
                  <input
                    aria-label="Search courses, topics, or creators"
                    name="q"
                    placeholder="Course, topic, creator"
                    type="search"
                  />
                </div>
                <button type="submit">Search</button>
              </form>
            </search>
          </div>
          <div className={styles.scene}>
            <div aria-hidden="true" className={styles.dome} />
            {ORNAMENTS.map(({ name, src }) => (
              <div
                aria-hidden="true"
                className={`${styles.ornament} ${styles[name]}`}
                key={name}
              >
                <Image
                  alt=""
                  fill
                  loading="eager"
                  sizes="(max-width: 767px) 33vw, (max-width: 1440px) 27vw, 385px"
                  src={`${A}/${src}`}
                  unoptimized
                />
              </div>
            ))}
            <div className={styles.student}>
              <Image
                alt="Smiling student wearing headphones and holding a laptop"
                fill
                priority
                sizes="(max-width: 767px) 85vw, (max-width: 1440px) 40vw, 578px"
                src={`${A}/hero-student.png`}
              />
            </div>
            <div className={`${styles.card} ${styles.progressCard}`}>
              <p>Learning Progress</p>
              <strong>55%</strong>
              <ProgressBar
                className={styles.progressTrack}
                fillColor="#cbfc01"
                value={55}
              />
            </div>
            <div className={`${styles.card} ${styles.courseCard}`}>
              <p>UI/UX Design</p>
              <div className={styles.courseDetails}>
                <span>200 Courses</span>
                <span aria-hidden="true">•</span>
                <span>1000+ Students</span>
              </div>
            </div>
            <div className={`${styles.card} ${styles.studentsCard}`}>
              <p>Happy Students</p>
              <div className={styles.rating}>
                <span>
                  4.5 <span>(240)</span>
                </span>
                <span aria-hidden="true" className={styles.star}>
                  ★
                </span>
              </div>
              <div className={styles.avatars}>
                <AvatarGroup
                  avatars={HAPPY_STUDENT_AVATARS}
                  overflowCount="2K+"
                  overlapOffset={16}
                  size={43}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
