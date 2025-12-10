import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { motion } from 'framer-motion';
import { FaBook, FaRobot, FaMicrochip, FaCogs, FaLightbulb } from 'react-icons/fa';

// --- Feature List ---
const FeatureList = [
  {
    title: '📘 Core AI Principles',
    Icon: FaMicrochip,
    description: (
      <>
        Dive deep into fundamental **Machine Learning** and **Deep Learning**
        algorithms that power intelligent physical systems.
      </>
    ),
  },
  {
    title: '🦾 Humanoid Mechanics',
    Icon: FaRobot,
    description: (
      <>
        Explore **kinematics, dynamics, and control systems** essential for
        bipedal robots and human-like motion.
      </>
    ),
  },
  {
    title: '🔧 Hands-On Implementation',
    Icon: FaCogs,
    description: (
      <>
        Includes **practical case studies and code examples** using robotics
        frameworks like **ROS** and Python libraries.
      </>
    ),
  },
  {
    title: '📡 Sensor & Perception Systems',
    Icon: FaBook,
    description: (
      <>
        Learn about **sensor fusion, LiDAR, and vision systems** critical for
        robot perception and environment interaction.
      </>
    ),
  },
  {
    title: '⚖️ Ethics & Safety in AI',
    Icon: FaLightbulb,
    description: (
      <>
        Understand **ethical AI, human-robot interaction**, and safety measures
        for real-world humanoid systems.
      </>
    ),
  },
];

// --- Topics ---
const ContentTopics = [
  'Reinforcement Learning in Robotics',
  'Sensor Fusion & Perception',
  'Gait Generation and Balance Control',
  'Ethics and Safety in Humanoid AI',
  'Advanced Manipulation Techniques',
  'Real-Time Control Systems',
];

// --- Testimonials ---
const Testimonials = [
  {
    quote: 'A must-read for anyone serious about humanoid robotics.',
    author: 'Dr. Sarah Lee, Robotics Expert',
  },
  {
    quote: 'Practical, hands-on, and perfectly structured.',
    author: 'Alex Kim, AI Researcher',
  },
];

// --- Feature Component ---
function Feature({ Icon, title, description, index }) {
  return (
    <motion.div
      className={clsx('col col--4 margin-bottom--lg', styles.featureItem)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="text--center">
        <Icon className={styles.featureIcon} size={60} aria-label={`${title} icon`} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </motion.div>
  );
}

// --- Content Preview ---
function ContentPreview() {
  return (
    <section className={clsx('container margin-top--xl margin-bottom--xl', styles.contentPreview)}>
      <Heading as="h2" className="text--center margin-bottom--lg">
        Key Topics Covered
      </Heading>
      <div className="row">
        {ContentTopics.map((topic, index) => (
          <motion.div
            key={index}
            className="col col--4 margin-bottom--md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <div className={clsx('card', styles.topicCard)} style={{ borderLeft: '4px solid #2e8555' }}>
              <div className="card__body">
                <p><strong>{topic}</strong></p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// --- Call-to-Action ---
function CallToAction() {
  return (
    <motion.div
      className={clsx('hero hero--primary margin-top--xl', styles.ctaSection)}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container text--center">
        <h2>Get Started with Physical AI & Humanoid Robotics</h2>
        <p>Access practical examples, code, and robotics insights from our textbook.</p>
        <a
          className="button button--secondary button--lg"
          href="https://github.com/mehdiafatima/AI-Spec-Driven-Book/tree/main"
        >
          Explore on GitHub
        </a>
      </div>
    </motion.div>
  );
}

// --- Testimonials Section ---
function TestimonialsSection() {
  return (
    <section className="container margin-top--xl margin-bottom--xl">
      <Heading as="h2" className="text--center margin-bottom--lg">
        What Experts Say
      </Heading>
      <div className="row">
        {Testimonials.map((t, index) => (
          <motion.div
            key={index}
            className="col col--6 margin-bottom--md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className={clsx('card padding--lg')}>
              <blockquote>
                <p>"{t.quote}"</p>
                <footer>- {t.author}</footer>
              </blockquote>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// --- Homepage Component ---
export default function HomepageFeatures() {
  return (
    <>
      <section className={clsx(styles.features, 'margin-top--xl')}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} index={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <ContentPreview />
      <TestimonialsSection />
      <CallToAction />
    </>
  );
}
