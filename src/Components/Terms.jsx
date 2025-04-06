import React from "react";

function Terms() {
  return (
    <div className="w-[90%] mx-auto p-6 rounded-xl my-10 bg-[#F8FAFC] shadow-lg text-[#1E293B]">
      <h2 className="text-3xl font-bold mb-4">Terms & Conditions</h2>

      <p className="mb-4">
        Welcome to <strong>BookHub</strong>! By accessing and using our website,
        you agree to comply with the following terms and conditions. Please read
        them carefully before using our services.
      </p>

      <div className="space-y-4">
        <section>
          <h3 className="text-xl font-semibold">1. Acceptance of Terms</h3>
          <p>
            By using BookHub, you acknowledge that you have read, understood,
            and agree to be bound by these Terms & Conditions. If you do not
            agree, please refrain from using our platform.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold">2. Use of Services</h3>
          <ul className="list-disc ml-6">
            <li>
              BookHub provides personalized book recommendations based on user
              preferences and activity.
            </li>
            <li>You must be at least 13 years old to use our services.</li>
            <li>
              Users are responsible for the accuracy of the information they
              provide while using our platform.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold">3. Account & Privacy</h3>
          <ul className="list-disc ml-6">
            <li>
              To access certain features, you may need to create an account. You
              are responsible for maintaining the security of your login
              credentials.
            </li>
            <li>
              We respect your privacy. Please refer to our Privacy Policy for
              details on how we collect and use your data.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold">4. Intellectual Property</h3>
          <ul className="list-disc ml-6">
            <li>
              All content, including text, images, and software, is the property
              of BookHub and protected by copyright laws.
            </li>
            <li>
              Users may not copy, distribute, or modify any content from BookHub
              without prior written permission.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold">5. Limitation of Liability</h3>
          <ul className="list-disc ml-6">
            <li>
              BookHub is an informational platform and does not guarantee the
              accuracy or availability of book recommendations.
            </li>
            <li>
              We are not responsible for any loss, damage, or inconvenience
              caused by the use of our website.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold">6. Third-Party Links</h3>
          <p>
            BookHub may contain links to third-party websites for additional
            information. We are not responsible for the content or policies of
            these external sites.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold">7. Changes to Terms</h3>
          <p>
            BookHub reserves the right to modify these Terms & Conditions at any
            time. Users will be notified of any significant changes.
          </p>
        </section>
      </div>

      <p className="mt-6">
        By continuing to use BookHub, you agree to these Terms & Conditions.
      </p>
      <p className="mt-2 text-sm text-gray-700">
        <em>Last Updated: April 6, 2025</em>
      </p>

      <p className="mt-4 font-semibold">– The BookHub Team</p>
    </div>
  );
}

export default Terms;
