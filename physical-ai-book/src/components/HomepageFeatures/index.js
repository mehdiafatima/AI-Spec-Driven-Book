import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { motion } from 'framer-motion';

// 💡 Import the React Icons you want to use
// Using Font Awesome (Fa) as an example. You can choose others like Md, Io, etc.
import { FaBook, FaRobot, FaMicrochip, FaCogs } from 'react-icons/fa';

// --- Revised Feature List with Icon Components ---
const FeatureList = [
  {
    title: '📘 Core AI Principles',
    Icon: FaMicrochip, // Using an Icon component directly
    description: (
      <>
        Dive deep into the fundamental **Machine Learning** and **Deep Learning**
        algorithms that power intelligent physical systems.
      </>
    ),
  },
  {
    title: '🦾 Humanoid Mechanics',
    Icon: FaRobot, // Using an Icon component directly
    description: (
      <>
        Explore the **kinematics, dynamics, and control systems** essential for
        designing and programming bipedal robots and human-like actions.
      </>
    ),
  },
  {
    title: '🔧 Hands-On Implementation',
    Icon: FaCogs, // Using an Icon component directly
    description: (
      <>
        Includes **practical case studies and code examples** using popular
        robotics frameworks like **ROS** and Python libraries.
      </>
    ),
  },
];

// --- Feature Component (Updated to use Icon prop) ---
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
        {/* Render the Icon component here, passing size and className for styling */}
        <Icon className={styles.featureIcon} size={60} aria-label={`${title} icon`} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </motion.div>
  );
}

// --- The rest of the components remain the same ---

// 2. Call-to-Action Component
function CallToAction() {
  // ... (Component code remains the same as before)
  return (
    <motion.div
      className={clsx('hero hero--primary margin-top--xl', styles.ctaSection)}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
     
    </motion.div>
  );
}

// 3. Content Preview Section
const ContentTopics = [
  'Reinforcement Learning in Robotics',
  'Sensor Fusion & Perception',
  'Gait Generation and Balance Control',
  'Ethics and Safety in Humanoid AI',
  'Advanced Manipulation Techniques',
  'Real-Time Control Systems',
];

function ContentPreview() {
  // ... (Component code remains the same as before)
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <div className={clsx('card', styles.topicCard)}>
              <div className="card__body">
                <p>
                  <strong>{topic}</strong>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


// --- Export Default Function ---
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
      <CallToAction />
    </>
  );
}