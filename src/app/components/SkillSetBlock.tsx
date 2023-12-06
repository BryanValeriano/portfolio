import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types'; // Correct import for IconDefinition

// Tailwind CSS styles
const styles = {
  page: 'bg-gray-800 text-white min-h-screen p-10',
  card: 'bg-gray-700 p-6 rounded-lg shadow-lg',
  cardIcon: 'text-red-500 text-xs mb-4',
  cardTitle: 'text-xl font-semibold mb-3',
  cardText: 'text-gray-400',
};
interface SkillSetBlockProps {
  title: string;
  icon: IconDefinition;
}

export default function SkillSetBlock({ title, icon }: SkillSetBlockProps) {
  return (
    <div className={styles.card}>
      <FontAwesomeIcon
        icon={icon}
        className={styles.cardIcon}
        style={{ fontSize: '45px', width: '45px', height: '45px' }}
      />
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardText}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
    </div>
  );
}
