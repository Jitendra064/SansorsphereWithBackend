import React from "react";

import Accordain from "./Accordain";

const FAQ = () => {
  return (
    <>
      <div className="text-center my-4">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="FAQcss">
        <div className="w-75 ">
          <div>
            <div className="my-4">
              <h4>Where can I get a sensor module?</h4>
              <p>
                Sensors online shopping is now easy at Robocraze with best
                sensor prices with special offers and free shipping above
                Rs.500. Buy sensors online in bulk or smaller quantities at the
                best price on our website.
              </p>
            </div>
            <div className="my-4">
              <h4>
                What is the most accurate Sensors and chips value Website?
              </h4>
              <p>
                Our Sensor and chip values are sourced from reputable
                manufacturers and suppliers known for their accuracy and
                reliability in the industry. We pride ourselves on providing
                accurate and up-to-date information on our website. However, the
                accuracy of sensor and chip values can vary depending on various
                factors, including the type of sensor and its application. We
                recommend consulting our website and reaching out to our
                customer support team for any specific accuracy requirements or
                questions you may have regarding our sensors and chips. We are
                committed to providing the most accurate and reliable
                information to our customers.
              </p>
            </div>
            <div className="my-4">
              <h4>What is the difference between a sensor and a module?</h4>
              <p>
                Sensors and modules (having extra electronic circuitry along
                with sensor) are electronic devices that detect and respond to
                some type of input from the physical environment. The sensor
                modules often contain extra components to make the sensor easy
                to use. Like voltage regulator and level shifter to use a 3,3V
                sensor with 5V, decoupling caps, current limit or pull up
                resistors, connection headers, etc.
              </p>
            </div>
            <div className="my-4">
              <h4>Can I Trust a Sensors Site?</h4>
              <p>
                Absolutely, you can trust our Sensor sites. We are committed to
                providing high-quality, reliable sensors that meet industry
                standards and regulations. Our sensors undergo rigorous testing
                to ensure their accuracy and durability. Additionally, we
                prioritize the security and privacy of our customers' data,
                implementing robust encryption and security measures to protect
                your information. Customer satisfaction is our top priority, and
                we strive to provide excellent customer service and support.
                Exporting Content and Publishing
              </p>
            </div>

            {/* accordian set method */}

            <Accordain />
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
