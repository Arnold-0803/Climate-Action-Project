import "./SectionFooterStyles.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-box">
        <div className="footer-content">
          <h5>Ever<span>Green</span></h5>
          <p>Spearheading Climate Efforts</p>
          <h6>Follow us</h6>
          <div className="social-media">
            <a href="https://twitter.com"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="https://facebook.com"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://youtube.com"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>
        <div className="footer-content">
          <h5>Community</h5>
          <a className="footer-links" href="#link">Eastland-Fam</a>
          <a className="footer-links" href="#link">GitHub</a>
        </div>
        <div className="footer-content">
          <h5>Support</h5>
          <a className="footer-links" href="#link">Donate</a>
          <a className="footer-links" href="#link">Work with us</a>
        </div>
        <div className="footer-content">
          <h5>Locations</h5>
          <p className="location">Nairobi</p>
          <p className="location">Mombasa</p>
          <p className="location">Kiambu</p>
        </div>
      </div>
      <div className="copyright-wrapper">
        <p className="copyright-text">Powered by arnold_kiritu ©2024 All Rights Reserved</p>
        <p className="privacy-policy"><a href="#privacy">Privacy Policy</a></p>
      </div>
    </div>
  );
}
 
export default Footer;