import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16 min-h-screen p-6 sm:p-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
        Privacy Policy for JBS Consulting
      </h1>
      <p className="text-gray-600 text-base sm:text-lg mb-4">
        JBS Consulting is committed to protecting the privacy of our website
        visitors. This Privacy Policy explains how we collect, use, disclose,
        and protect your information when you visit our website. By accessing or
        using our website, you agree to this Privacy Policy.
      </p>

      <div className="space-y-6">
        {/* Section 1 */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
            1. Information We Collect
          </h2>
          <p className="text-gray-600 text-base mb-2">
            We may collect the following types of information:
          </p>
          <h3 className="text-lg font-medium text-gray-800">
            a. Personal Information
          </h3>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company name</li>
            <li>Job title</li>
          </ul>

          <h3 className="text-lg font-medium text-gray-800 mt-4">
            b. Non-Personal Information
          </h3>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Browser type and version</li>
            <li>Device type and operating system</li>
            <li>IP address</li>
            <li>Pages visited and time spent on the website</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Provide and improve our services.</li>
            <li>Respond to inquiries and requests.</li>
            <li>
              Send updates, newsletters, or promotional content (only if you
              opt-in).
            </li>
            <li>Analyze website performance and usage.</li>
            <li>Comply with legal obligations.</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
            3. Cookies and Tracking Technologies
          </h2>
          <p className="text-gray-600 text-base mb-2">
            Our website uses cookies and similar technologies to enhance your
            browsing experience. Cookies help us:
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Recognize your preferences during visits.</li>
            <li>Improve website functionality and performance.</li>
          </ul>
          <p className="text-gray-600 mt-2">
            You can disable cookies through your browser settings, but this may
            affect website functionality.
          </p>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
            4. Sharing Your Information
          </h2>
          <p className="text-gray-600 text-base">
            We may share your information in the following cases:
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>
              With service providers assisting us with website operations.
            </li>
            <li>To comply with applicable laws or legal requests.</li>
            <li>
              During a business transfer, such as a merger or sale of assets.
            </li>
            <li>
              We do not sell or rent your personal information to third parties.
            </li>
          </ul>
        </div>

        {/* Section 5 */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
            5. Data Storage and Security
          </h2>
          <p className="text-gray-600 text-base">
            We take appropriate measures to protect your data from unauthorized
            access, alteration, or disclosure. Data collected through this
            website is stored on secure servers. For users in Saudi Arabia, data
            protection complies with the applicable Personal Data Protection Law
            (PDPL) and other relevant local regulations.
          </p>
        </div>

        {/* Section 6 */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
            6. Your Rights
          </h2>
          <p className="text-gray-600 text-base">
            Under Saudi Arabia&apos;s PDPL, you have the following rights:
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Access your personal data.</li>
            <li>Request correction of incorrect or outdated information.</li>
            <li>
              Request deletion of your personal data, subject to legal and
              contractual obligations.
            </li>
            <li>Withdraw consent for data processing, where applicable.</li>
          </ul>
          <p className="text-gray-600 mt-2">
            To exercise these rights, contact us at{" "}
            <a
              href="mailto:info@jbsconsulting.co"
              className="text-blue-500 underline"
            >
              info@jbsconsulting.co
            </a>
            .
          </p>
        </div>

        {/* Section 7 */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
            7. Third-Party Links
          </h2>
          <p className="text-gray-600 text-base">
            Our website may contain links to external websites. We are not
            responsible for their privacy practices or content. We encourage you
            to review the privacy policies of these third-party websites.
          </p>
        </div>

        {/* Section 8 */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
            8. Children’s Privacy
          </h2>
          <p className="text-gray-600 text-base">
            Our website is not intended for individuals under the age of 18. We
            do not knowingly collect personal information from children.
          </p>
        </div>

        {/* Section 9 */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
            9. Updates to This Privacy Policy
          </h2>
          <p className="text-gray-600 text-base">
            We may update this Privacy Policy periodically to reflect changes in
            our practices or applicable laws. Updates will be posted on this
            page with a revised effective date.
          </p>
        </div>

        {/* Section 10 */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
            10. Contact Us
          </h2>
          <p className="text-gray-600 text-base">
            If you have any questions or concerns about this Privacy Policy or
            your personal information, please contact us at{" "}
            <a
              href="mailto:info@jbsconsulting.co"
              className="text-blue-500 underline"
            >
              info@jbsconsulting.co
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
