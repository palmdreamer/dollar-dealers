"use client";
import {
  CameraIcon,
  CurrencyDollarIcon,
  ShoppingCartIcon,
} from "@heroicons/react/20/solid";

import { useState } from "react";

import { useRouter } from "next/navigation";

export default function AboutSection() {
  const [clickCount, setClickCount] = useState(0);
  const router = useRouter();

  const handleCurrencyDollarIconClick = () => {
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount === 3) {
        router.push("/login");
      }
      return newCount;
    });
  };
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
      >
        <div
          style={{
            clipPath:
              "polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)",
          }}
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
            Nice to meet you,
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Welcome to Dollar Dealers Coburg
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            Dollar Dealers opened it’s doors in COBURG in December 2015. We
            started with just one operator with just a small amount of stock.
            With steady growth & support from our valued customers we now have a
            full shop with 4 staff to help.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <svg
              aria-hidden="true"
              className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
            >
              <defs>
                <pattern
                  id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M0.5 0V200M200 0.5L0 0.499983" />
                </pattern>
              </defs>
              <rect
                fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)"
                width="100%"
                height="100%"
                strokeWidth={0}
              />
            </svg>
            <figure className="border-l border-indigo-600 pl-8">
              <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                <p>
                  “I have purchased many things from the Mat & the guys at
                  Dollar Dealers, they have always looked after me. Five Stars.”
                </p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <div className="text-sm leading-6">
                  <div className="font-semibold text-gray-900">Joe Corso -</div>
                  <div className="text-gray-600">@dollardealerscoburg</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
            <p>
              We are a small shop with quality stock with a focus on turnover.
              With over 18 years experience we offer proffesional service with
              care & respect. We are proud to offer our services to the
              community with straight forward conversations & understading that
              everyones situation is unique to them.
            </p>
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <CurrencyDollarIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  onClick={handleCurrencyDollarIconClick}
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Buy goods of value.
                  </strong>{" "}
                  At a pawn shop, valuable goods include jewellery, electronics,
                  musical instruments, and quality power tools. We also accept
                  luxury watches, designer handbags, and rare collectibles.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CameraIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Loan goods of value.
                  </strong>{" "}
                  Visit our Coburg store for a friendly, local service and
                  expert appraisals. You can also browse and shop conveniently
                  on our eBay store.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ShoppingCartIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Sell second hand goods with 3 months warranty & layby
                    available.
                  </strong>{" "}
                  Enjoy peace of mind with our 3-month warranty on all
                  second-hand purchases, and take advantage of our convenient
                  layby options.
                </span>
              </li>
            </ul>
            {/* <p className="mt-8">
              Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
              odio id et. Id blandit molestie auctor fermentum dignissim. Lacus
              diam tincidunt ac cursus in vel. Mauris varius vulputate et
              ultrices hac adipiscing egestas. Iaculis convallis ac tempor et
              ut. Ac lorem vel integer orci.
            </p> */}
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Need a loan? We help clients with that.
            </h2>
            <p className="mt-6">
              Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
              consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
              vitae interdum mauris enim, consequat vulputate nibh. Maecenas
              pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim
              cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
              ipsum eu a sed convallis diam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
