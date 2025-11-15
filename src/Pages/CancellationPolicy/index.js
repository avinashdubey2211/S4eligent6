import React from "react";
import { useEffect } from "react";

const CancellationPolicy = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <main id="content" role="main">
      <div class="md:max-w-screen-sm text-center px-4 sm:px-6 lg:px-8 pt-24 pb-6 mx-auto">
        <h1 class="text-2xl font-bold md:text-4xl ">Cancellation Policy</h1>
      </div>

      <div class="md:max-w-screen-sm lg:max-w-[992px] px-4 sm:px-6 lg:px-8 pb-12 md:pt-6 sm:pb-20 mx-auto">
        <div class="grid gap-4 md:gap-8">
          <div>
            <h2 class="text-lg sm:text-xl font-semibold mb-2 ">
              General Terms
            </h2>

            <p class="mb-5 ">
              By accessing and placing an order with Preline, you confirm that
              you are in agreement with and bound by the terms and conditions
              contained in the Terms Of Use outlined below. These terms apply to
              the entire website and any email or other type of communication
              between you and Preline.
            </p>

            <p class="mb-5 ">
              Under no circumstances shall Preline team be liable for any
              direct, indirect, special, incidental or consequential damages,
              including, but not limited to, loss of data or profit, arising out
              of the use, or the inability to use, the materials on this site,
              even if Preline team or an authorized representative has been
              advised of the possibility of such damages. If your use of
              materials from this site results in the need for servicing, repair
              or correction of equipment or data, you assume any costs thereof.
            </p>

            <p class="">
              Preline will not be responsible for any outcome that may occur
              during the course of usage of our resources. We reserve the rights
              to change prices and revise the resources usage policy in any
              moment.
            </p>
          </div>

          <div>
            <h2 class="text-lg sm:text-xl font-semibold mb-2 ">Products</h2>

            <p class="mb-5 ">
              All products and services are delivered by Preline electronically
              and you can access your downloads from your profile page.
            </p>

            <p class="">
              Preline is not responsible for any technological delays beyond our
              control. If your spam blocker blocks our emails from reaching you
              or you do not provide a valid email address where you can be
              reachable then you can access your download from the Downloads
              page.
            </p>
          </div>

          <div>
            <h2 class="text-lg sm:text-xl font-semibold mb-2 ">Security</h2>

            <p class="">
              Preline does not process any order payments through the website.
              All payments are processed securely through online payment
              provider (e.g. PayPal, Stripe), a third party online payment
              provider. Feel free to contact us about our security policies.
            </p>
          </div>

          <div>
            <h2 class="text-lg sm:text-xl font-semibold mb-2 ">Ownership</h2>

            <p class="">
              Ownership of the product is governed by the usage license selected
              by the seller.
            </p>
          </div>

          <div>
            <h2 class="text-lg sm:text-xl font-semibold mb-2 ">
              Changes to terms
            </h2>

            <p class="">
              If we change our terms of use we will post those changes on this
              page. Registered users will be sent an email that outlines changes
              made to the terms of use.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CancellationPolicy;
