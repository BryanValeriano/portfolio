import SkillSetBlock from './SkillSetBlock';
import React from 'react';
import { faCodeBranch, faMobileAlt, faDatabase, faGlobe, faCamera, faUserTie } from '@fortawesome/free-solid-svg-icons';

// Tailwind CSS styles
const styles = {
  container: 'max-w-6xl mx-auto',
  header: 'text-4xl mb-10 text-center font-bold',
  skillSetContainer: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10',
};

export default function SkillSets() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Skill-Set</h1>
      <div className={styles.skillSetContainer}>
        <SkillSetBlock title="Git Version Control" icon={faCodeBranch} />
        <SkillSetBlock title="App Design" icon={faMobileAlt} />
        <SkillSetBlock title="Back-end Development" icon={faDatabase} />
        <SkillSetBlock title="Web Development" icon={faGlobe} />
        <SkillSetBlock title="Photography" icon={faCamera} />
        <SkillSetBlock title="Freelancing" icon={faUserTie} />
      </div>
    </div>
  );
}
