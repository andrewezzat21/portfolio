import { useState } from 'react';
import styles from './Sidebar.module.css';

function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0); // Default active index set to 0

  return (
    <nav>
      <div className={styles.sbnlist}>
        <div className={styles.sbn}>
          <ul>
            <li>
              <a
                className={activeIndex === 0 ? styles.isactive : ''}
                href="./home"
                onClick={(event) => {
                  event.preventDefault(); // Prevent default link behavior
                  setActiveIndex(0); // Set active index to 0
                }}
              >
                1
              </a>
            </li>
            <li>
              <a
                className={activeIndex === 1 ? styles.isactive : ''}
                href="/about"
                onClick={(event) => {
                  event.preventDefault(); // Prevent default link behavior
                  setActiveIndex(1); // Set active index to 1
                }}
              >
                2
              </a>
            </li>
            <li>
              <a
                className={activeIndex === 2 ? styles.isactive : ''}
                href="#"
                onClick={(event) => {
                  event.preventDefault(); // Prevent default link behavior
                  setActiveIndex(2); // Set active index to 2
                }}
              >
                3
              </a>
            </li>
            <li>
              <a
                className={activeIndex === 3 ? styles.isactive : ''}
                href="#"
                onClick={(event) => {
                  event.preventDefault(); // Prevent default link behavior
                  setActiveIndex(3); // Set active index to 3
                }}
              >
                4
              </a>
            </li>
            <li>
              <a
                className={activeIndex === 4 ? styles.isactive : ''}
                href="#"
                onClick={(event) => {
                  event.preventDefault(); // Prevent default link behavior
                  setActiveIndex(4); // Set active index to 4
                }}
              >
                5
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
