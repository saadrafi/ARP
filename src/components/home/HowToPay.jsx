import React from "react";
import { BiHelpCircle } from "react-icons/bi";
import ContactUs from "../utils/ContactUs";

const HowToPay = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto text-center">
        <div>
          <h1 className="text-4xl text-center font-bold divider divider-primary">How to Pay Us</h1>
          <p className="text-center text-gray-700 p-4">
            We offer various payment methods for your convenience, and we recommend using the TapTap
            Send app for a seamless experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-white bg-opacity-10 p-4 rounded-2xl hover:shadow-xl transition-shadow duration-300">
            <div className="relative group">
              {/* Image that blurs on hover */}
              <img
                src="/img1.png"
                alt="Download TapTap Send"
                className="w-full h-96 object-contain rounded-xl group-hover:blur-sm transition-all duration-300"
              />

              {/* Buttons that appear on hover for larger screens */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-4">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.taptapsend&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2"
                  >
                    <img
                      src="/googleplay.png"
                      alt="Get it on Google Play"
                      className="w-full h-full object-contain"
                    />
                  </a>
                  <a
                    href="https://apps.apple.com/us/app/taptap-send/id1470141399"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2"
                  >
                    <img
                      src="/applestore.png"
                      alt="Download on the App Store"
                      className="w-full h-full object-contain"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Buttons always visible on small screens */}
            <div className="flex justify-center mt-4 lg:hidden">
              <a
                href="https://play.google.com/store/apps/details?id=com.taptapsend&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <img
                  src="/googleplay.png"
                  alt="Get it on Google Play"
                  className="w-full h-full object-contain"
                />
              </a>
              <a
                href="https://apps.apple.com/us/app/taptap-send/id1470141399"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <img
                  src="/applestore.png"
                  alt="Download on the App Store"
                  className="w-full h-full object-contain"
                />
              </a>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white bg-opacity-10 p-4 rounded-2xl hover:shadow-xl transition-shadow duration-300">
            <div className="relative group">
              {/* Image with blur effect on hover */}
              <img
                src="/img2.png"
                alt="Create an Account"
                className="w-full h-96 object-contain rounded-xl group-hover:blur-sm transition-all duration-300"
              />

              {/* Info that appears on hover */}
              <div className="absolute inset-0 hidden lg:flex items-center justify-center text-neutral-50 bg-black bg-opacity-30 p-4 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 ">
                Create your account on TapTap Send by entering your personal details.
              </div>
            </div>

            {/* Visible text for small devices */}
            <div className="lg:hidden mt-4 text-gray-700">
              Create your account on TapTap Send by entering your personal details.
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white bg-opacity-10 p-4 rounded-2xl hover:shadow-xl transition-shadow duration-300">
            <div className="relative group">
              <img
                src="/img3.png"
                alt="Choose a Country to Send"
                className="w-full h-96 object-contain rounded-xl group-hover:blur-sm transition-all duration-300"
              />

              <div className="absolute inset-0 hidden lg:flex items-center justify-center text-neutral-50 bg-black bg-opacity-30 p-4 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300">
                Select the recipient's country (Bangladesh) to send the funds.
              </div>
            </div>

            <div className="lg:hidden mt-4 text-gray-700">
              Select the recipient's country (Bangladesh) to send the funds.
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white bg-opacity-10 p-4 rounded-2xl hover:shadow-xl transition-shadow duration-300">
            <div className="relative group">
              <img
                src="/img4.png"
                alt="Enter Payment Details"
                className="w-full h-96 object-contain rounded-xl group-hover:blur-sm transition-all duration-300"
              />

              <div className="absolute inset-0 hidden lg:flex items-center justify-center text-neutral-50 bg-black bg-opacity-30 p-4 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300">
                For a seamless experience, we recommend using Bkash. Simply enter our Bkash number
                and the recipient's name.
              </div>
            </div>

            <div className="lg:hidden mt-4 text-gray-700">
              For a seamless experience, we recommend using Bkash. Simply enter our Bkash number and
              the recipient's name.
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-white bg-opacity-10 p-4 rounded-2xl hover:shadow-xl transition-shadow duration-300">
            <div className="relative group">
              <img
                src="/img5.png"
                alt="Confirm and Send"
                className="w-full h-96 object-contain rounded-xl group-hover:blur-sm transition-all duration-300"
              />

              <div className="absolute inset-0 hidden lg:flex items-center justify-center text-neutral-50 bg-black bg-opacity-30 p-4 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300">
                Enter your payment details, such as your card or bank account information.
              </div>
            </div>

            <div className="lg:hidden mt-4 text-gray-700">
              Enter your payment details, such as your card or bank account information.
            </div>
          </div>

          {/* Step 6 */}
          <div className="bg-white bg-opacity-10 p-4 rounded-2xl hover:shadow-xl transition-shadow duration-300">
            <div className="relative group">
              <img
                src="/img6.png"
                alt="Track Your Transfer"
                className="w-full h-96 object-contain rounded-xl group-hover:blur-sm transition-all duration-300"
              />

              <div className="absolute inset-0 hidden lg:flex items-center justify-center text-neutral-50 bg-black bg-opacity-30 p-4 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300">
                Review the transfer details carefully to ensure everything is correct, then confirm
                the transaction.
              </div>
            </div>

            <div className="lg:hidden mt-4 text-gray-700">
              Review the transfer details carefully to ensure everything is correct, then confirm
              the transaction.
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div className="mt-16 text-center">
            <p className="text-xl text-gray-600 mb-4">Need help? We're here for you.</p>
            <span>
              <ContactUs>
                <BiHelpCircle className="h-5 w-6 " />
              </ContactUs>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToPay;
