import styles from './Rectangle.module.css';

// eslint-disable-next-line react/prop-types
const Rectangle = ({ width, height, top, left, color }) => {
  return (
    <div
      className={styles.rectangle}
      style={{
        width: width,
        height: height,
        top: top,
        left: left,
        backgroundColor: color || 'orange',
      }}
    ></div>
  );
};

export default Rectangle;
