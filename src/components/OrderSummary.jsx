import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import summaryImage from "../images/illustration-hero.svg";
import iconMusic from "../images/icon-music.svg";

function OrderSummary() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="summary"
      data-aos="fade"
      data-aos-delay="100"
      data-aos-duration="1500"
    >
      <figure className="summary-header">
        <img
          src={summaryImage}
          alt="Hero Illustration"
          width={450}
          height={225}
          className="summary-header__image"
        />
      </figure>
      <form action="/" method="">
        <div className="summary-content">
          <h1 className="summary-content__title">order summary</h1>
          <p className="summary-content__description">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>

          <div className="summary-content__order">
            <figure className="summary-content__order-image">
              <img
                src={iconMusic}
                alt="Icon Music"
                width={50}
                height={50}
                loading="lazy"
              />
            </figure>
            <div className="summary-content__order-plan">
              <span>Annual Plan</span>
              <span>$59.99/year</span>
            </div>

            <button type="submit" className="summary-content__order-button">
              Change
            </button>
          </div>
          <div
            className="summary-content__buttons"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
          >
            <button type="submit" className="summary-content__buttons-proceed">
              Proceed to Payment
            </button>
            <button type="button" className="summary-content__buttons-cancel">
              Cancel Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default OrderSummary;
