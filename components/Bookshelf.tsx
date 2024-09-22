// /components/Bookshelf.tsx
import React from 'react';
import styles from './Bookshelf.module.css';
import Book from './Book';

const Bookshelf = ({ children }) => {
  return (
    <div className={styles.bookshelfContainer}>
      <div className={`${styles.bookshelfSection} ${styles.section4}`}>
        <Book title="Book 1" />
        <Book title="Book 2" />
      </div>
      <div className={`${styles.bookshelfSection} ${styles.section4}`}>
        <Book title="Book 3" />
        <Book title="Book 4" />
      </div>
      <div className={`${styles.bookshelfSection} ${styles.section2}`}>
        <Book title="Book 5"/>
      </div>
    </div>
  );
};

export default Bookshelf;