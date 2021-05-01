import React from 'react'
import { Link } from 'gatsby'
import styles from './footer.module.css'

export default () => (
  <footer role="contentinfo">
    <ul className={styles.footerMain}>
      <li className={styles.footerItem}>
        &copy; 2021 Ariel Adams
      </li>
    </ul>
  </footer>
)
