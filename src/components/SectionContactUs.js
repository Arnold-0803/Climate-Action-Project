import "./SectionContactUsStyles.css";

const ContactUs = () => {
  return (
    <div className="contact-us-wrapper">
      <div className="contact-content">
        <div className="contact-form">
          <h3>Send Us Message</h3>
          <form>
            <input type="text" placeholder="Full name"/>
            <input type="email" placeholder="email (eg. abc@gmail.com)" required />
            <input type="tel" placeholder="phone (eg. +2547XXXXXXXX)" />
            <textarea name="message" placeholder="write message"></textarea>
            <input className="btn" type="submit" value="Submit" />
          </form>
        </div>
        <div className="contact-info">
          <div className="details">
            <h3>Contact Info</h3>
            <p className="subheading">Reach out to us</p>
            <p><i className="fa-solid fa-location-dot"></i> Makadara, Nairobi</p>
            <p><i className="fa-solid fa-phone"></i> (+254)714387538</p>
            <p><i className="fa-solid fa-envelope"></i> evergreen@gmail.com</p>
            <div className="social-media">
              <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-facebook"></i></a>
              <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
          <div className="map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7351.4620781574395!2d36.86041913903576!3d-1.2928975347554124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11608bf58a17%3A0x6795059b5b1e3c23!2sMaringo%20Estate%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1721846754480!5m2!1sen!2ske" 
              style={{width:"600", height:"450", border:"0" }}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
      <div className="subscrition-wrapper">
        <div className="subscription-content">
          <div className="text-box">
            <h3>Subscribe Now!!</h3>
            <p>Get subscribed for newletters</p>
          </div>
          <div className="form-box">
            <form>
              <input className="subscription-email" type="email" placeholder="Enter Your Email Address" />
              <input className="subscription-btn" type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default ContactUs;