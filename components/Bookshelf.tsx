import React from 'react';
import styles from './Bookshelf.module.css';
import bookStyles from './Book.module.css';
import Book from './Book';

const Bookshelf = ({ children }) => {
    return (
        <div className={styles.bookshelfContainer}>
            <div className={styles.header}>
                arata's bookshelf
            </div>
            <div className={`${styles.bookshelfSection} ${styles.section4}`}>
                <Book title="Book 1" className={`${bookStyles.redColor}`} href="/book1"/>
                <Book title="About me" className={`${bookStyles.greenColor}`} href="/about"/>
                <Book title="SNS" className={`${bookStyles.blueColor}`} href="/SNS"/>
            </div>
            <div className={`${styles.bookshelfSection} ${styles.section4}`}>
                <div className={styles.header}>
                    productions
                </div>
                <Book title="Arduino programming" className={`${bookStyles.brownColor}`} href="/arduino"/>
                <Book title="Events search app" className={`${bookStyles.r_greenColor}`} href="/events"/>
                <Book title="Vocabulary test generator" className={`${bookStyles.redColor}`} href="/vocabulary"/>
            </div>
            <div className={`${styles.bookshelfSection} ${styles.section2}`}>
                <Book title="Book 5" className={`${bookStyles.redColor}`} href="/book5"/>
                <Book title="Book 5" className={`${bookStyles.blueColor}`} href="/book6"/>
            </div>
        </div>
    );
};

export default Bookshelf;
