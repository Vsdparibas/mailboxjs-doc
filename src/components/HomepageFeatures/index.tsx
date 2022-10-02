import React from 'react';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col" style={{ textAlign: 'center' }}>
            <h2>Features</h2>
            <ul>
              <li>Get mailboxes</li>
              <li>Get mails</li>
              <li>Delete mails</li>
              <li>Read/Unread mails</li>
              <li>Watch mailboxes</li>
            </ul>
          </div>
          <div className="col" style={{ textAlign: 'center' }}>
            <h2>Quick start</h2>
            Just follow the tutorial, it's easy and quick.
            <br />
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col" style={{ textAlign: 'center' }}>
            <br />
            <br />
            This project is based on imapflow, emailjs and mailparser.
          </div>
        </div>
      </div>
    </section>
  );
}
