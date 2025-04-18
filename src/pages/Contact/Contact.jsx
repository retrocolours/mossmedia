import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import "./Contact.scss";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    weddingDate: "",
    location: "",
    package: "",
    fomoVideo: "",
    contactMethod: "",
    contactTime: "",
    additionalInfo: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Initialize EmailJS
    emailjs.init(process.env.REACT_APP_EMAIL_PUBLIC_KEY);

    try {
      // Send the form data to EmailJS
      const response = await emailjs.sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      );

      console.log("Form submitted successfully:", response);
      navigate("/confirmation");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="contact-us"
      style={{ backgroundImage: 'url("/Images/contact1.jpg")' }}
    >
      <div className="form-container">
        <h1 className="form-container__title">We’ll Take Care Of Everything</h1>
        <p className="form-container__description">
          If you're interested in our services or have any questions, please
          fill out this form, and we will get back to you as soon as possible.
          You're also welcome to call or text us at +1 (604) 716-1810.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              required
            />
          </div>

          <div className="form-group">
            <label>Date of Wedding</label>
            <input
              type="date"
              name="weddingDate"
              value={formData.weddingDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Wedding Location"
              required
            />
          </div>

          <div className="form-group">
            <label>Which video package appeals to you the most?</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="package"
                  value="Diamond"
                  onChange={handleChange}
                  required
                />{" "}
                Diamond
              </label>
              <label>
                <input
                  type="radio"
                  name="package"
                  value="Gold"
                  onChange={handleChange}
                />{" "}
                Gold
              </label>
              <label>
                <input
                  type="radio"
                  name="package"
                  value="Silver"
                  onChange={handleChange}
                />{" "}
                Silver
              </label>
              <label>
                <input
                  type="radio"
                  name="package"
                  value="Pearl"
                  onChange={handleChange}
                />{" "}
                Pearl
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Are you interested in any of the additional services?</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="fomoVideo"
                  value="Yes"
                  onChange={handleChange}
                  required
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="fomoVideo"
                  value="No"
                  onChange={handleChange}
                />{" "}
                No
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>How would you like us to reach out?</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="contactMethod"
                  value="Phonecall"
                  onChange={handleChange}
                  required
                />{" "}
                Phone Call
              </label>
              <label>
                <input
                  type="radio"
                  name="contactMethod"
                  value="Zoom"
                  onChange={handleChange}
                />{" "}
                Video Call
              </label>
              <label>
                <input
                  type="radio"
                  name="contactMethod"
                  value="Email"
                  onChange={handleChange}
                />{" "}
                Email
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>What time works best for us to get in touch with you?</label>
            <input
              type="text"
              name="contactTime"
              value={formData.contactTime}
              onChange={handleChange}
              placeholder="e.g., Afternoon, 3 PM"
              required
            />
          </div>

          <div className="form-group">
            <label>Additional Information</label>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              placeholder="Any other details you'd like to share"
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Send Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
