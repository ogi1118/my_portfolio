// /components/Book.tsx
import React from 'react';
import styles from './Book.module.css';
import Link from 'next/link';

const Book = ({ title, className = '', href = '#' }) => {
    return (
        <Link href={href}>
            <div className={`${styles.book} ${styles.cover} ${className}`} >
                <div className={styles.title}>{title}</div>
            </div>
        </Link>
    );
};

export default Book;
