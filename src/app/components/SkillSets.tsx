import SkillSetBlock from './SkillSetBlock';
import React from 'react';
import { faGamepad, faDatabase, faGlobe, faLaptopCode, faMugHot } from '@fortawesome/free-solid-svg-icons';
import { faLinux } from '@fortawesome/free-brands-svg-icons';

// Tailwind CSS styles
const styles = {
  container: 'max-w-6xl mx-auto',
  header: 'text-4xl text-red-500 mb-10 text-center font-bold',
  skillSetContainer: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10',
};

export default function SkillSets() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Skill-Set</h1>
      <div className={styles.skillSetContainer}>
        <SkillSetBlock title="Competitive Programming" icon={faLaptopCode} />
        <SkillSetBlock title="Back-end Development" icon={faDatabase} />
        <SkillSetBlock title="Game Developemt" icon={faGamepad} />
        <SkillSetBlock title="Web Development" icon={faGlobe} />
        <SkillSetBlock title="Linux" icon={faLinux} />
        <SkillSetBlock title="Coffeholic" icon={faMugHot} />
      </div>
    </div>
  );
}
