import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Task Management System</h1>
        <p className={styles.description}>
          Organize your tasks efficiently and boost your productivity
        </p>
        <div className={styles.buttonGroup}>
          <Link href="/login" className={styles.primaryButton}>
            Login
          </Link>
          <Link href="/register" className={styles.secondaryButton}>
            Register
          </Link>
        </div>
      </div>
      
      <div className={styles.features}>
        <div className={styles.featureCard}>
          <h3>📝 Create Tasks</h3>
          <p>Easily create and organize your tasks with titles, descriptions, and due dates</p>
        </div>
        <div className={styles.featureCard}>
          <h3>🎯 Set Priorities</h3>
          <p>Prioritize your tasks to focus on what matters most</p>
        </div>
        <div className={styles.featureCard}>
          <h3>✅ Track Progress</h3>
          <p>Mark tasks as completed and monitor your productivity</p>
        </div>
        <div className={styles.featureCard}>
          <h3>🔍 Filter & Sort</h3>
          <p>Find tasks quickly with powerful filtering and sorting options</p>
        </div>
      </div>
    </main>
  )
}