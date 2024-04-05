import React from 'react'
import styles from './projectSetting.module.css'
import Modal from '../../components/Modal';
import TableForProject from '../../components/project/TableForProject';

export default function ProjectSetting() {
    return (
        <section className={styles.container}>
          <main className={styles.white_box}>
            <header className={styles.header}>
              <h2>Project Table</h2>
              <Modal />
            </header>
            {/* for project setting table */}
            <TableForProject />
          </main>
        </section>
      );
}
