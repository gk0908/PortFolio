import PageHeaderContent from "../../pageHeader/index";
import { IoIosContact } from "react-icons/io";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    // Simple regex for basic email validation
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
      // Submit form logic goes here (API, EmailJS, etc.)
      alert("Query will be sent to gopikota2005@gmail.com");
    }
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<IoIosContact size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(-200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>

        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <form className="contact__content__form" onSubmit={handleSubmit}>
            <div className="contact__content__form__controlswrapper">
              <div>
                <input required name="name" className="inputName" type="text" />
                <label htmlFor="name" className="nameLabel">Name</label>
              </div>
              <div>
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email" className="emailLabel">Email</label>
                {emailError && <p className="error-text">{emailError}</p>}
              </div>
              <div>
                <textarea
                  required
                  name="description"
                  className="inputDescription"
                  rows="5"
                />
                <label htmlFor="description" className="descriptionLabel">Description</label>
              </div>
            </div>
            <p className="info-text">
              Your message will be sent to: <strong>gopikota2005@gmail.com</strong>
            </p>
            <button type="submit">Submit</button>
          </form>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
