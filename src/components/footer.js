import styles from '../styles/Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>{`Copyright © Rassel Hassan Kadir ${year}`}</footer>
  );
};

export default Footer;
