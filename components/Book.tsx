// /components/Book.tsx
import React from 'react';
import styles from './Book.module.css';


const Book = ({ title }) => {
    return (
        <div className={styles.book}>
            <div className={styles.title}>{title}</div>
        </div>
    );
};

export default Book;