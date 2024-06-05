import React from "react";

const Accordain = () => {
  return (
    <>
      <div class="accordion accordion-flush mb-4" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Exporting Content and Publishing
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              You can easily export content and publish it using our platform.
              Our system allows you to export sensor data and reports in various
              formats such as CSV, Excel, and PDF for easy integration and
              sharing. Additionally, our user-friendly interface enables you to
              publish and share sensor data and reports directly to your desired
              platforms or systems.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Getting started with SensorSphere
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Welcome to SensorSphere! To begin, choose and order the sensors
              that best suit your needs. Once you receive them, follow the
              provided installation instructions to set them up. After
              installation, connect your sensors to our platform for real-time
              data monitoring. For any assistance or detailed guidance, please
              refer to our user manual or contact our customer support. We're
              here to help make your experience with SensorSphere seamless and
              enjoyable!
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              How can I Get More Content Credit
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              To gain more content credit, focus on producing high-quality,
              original content consistently, engage with your audience and
              community, promote your content through social media and SEO,
              network with influencers and industry experts, and continuously
              improve your skills and knowledge. Additionally, consider guest
              posting on reputable websites, participating in content platforms
              that offer credit to contributors, and building a professional
              portfolio to showcase your expertise.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingFour">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              I wish to Cancel My Subscription
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              We're sorry to hear that you wish to cancel your subscription. To
              cancel your subscription, please log in to your account on our
              platform and navigate to the 'Subscription' or 'Account Settings'
              section to find the option to cancel. Alternatively, you can
              contact our customer support team, and they will assist you with
              the cancellation process. Please note that depending on your
              subscription terms, there might be a cancellation fee or specific
              cancellation period. For any further questions or concerns, feel
              free to reach out to our customer support. Requesting Revisions
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingFive">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
            >
              Requesting Revisions
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingFive"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              If you need to request revisions or have any concerns regarding
              your sensors or the data they provide, please reach out to our
              customer support team. We are committed to ensuring your
              satisfaction and will work with you to address any issues and make
              the necessary revisions to meet your requirements. You can contact
              our support team through the platform, email, or phone, and we
              will assist you promptly.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordain;
