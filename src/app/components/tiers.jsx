import {
  CheckCircleIcon,
  CurrencyDollarIcon,
  ShoppingBagIcon,
  SparklesIcon,
} from "@heroicons/react/20/solid";

import ebay from "../../../public/ebay-logo.jpg";

import Image from "next/image";

const tiers = [
  {
    name: "BUY",
    id: "tier-basic",
    href: "#",
    price: {
      monthly: <Image src={ebay} alt="ebay-logo" className="" />,
      annually: "$12",
    },
    description: "Shop online via our eBay store.",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
  },
  {
    name: "SELL",
    id: "tier-essential",
    href: "#",
    price: {
      monthly: <CurrencyDollarIcon className="h-32 w-32 inline" />,
      annually: "$24",
    },
    description: "Sell your items on the spot..",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automations",
    ],
  },
  {
    name: "LOAN",
    id: "tier-growth",
    href: "#",
    price: {
      monthly: <SparklesIcon className="h-28 w-28 inline" />,
      annually: "$48",
    },
    description:
      "Everything in Essential, plus collaboration tools and deeper insights.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
      "Custom reporting tools",
    ],
  },
];

export default function Tiers() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-yellow-400">
            Welcome!
          </h2> */}
          <p className="mt-2 text-4xl italic font-bold tracking-tight text-gray-900 sm:text-5xl">
            DOLLAR DEALERS COBURG
          </p>
        </div>
        {/* <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center">
          Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
          quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
        </p> */}
        <div className="mt-20 flow-root">
          <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
            {tiers.map((tier) => (
              <div key={tier.id} className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                <h3
                  id={tier.id}
                  className="text-4xl italic font-semibold leading-7 text-gray-900"
                >
                  {tier.name}
                </h3>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    {tier.price.monthly}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    /month
                  </span>
                </p>
                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {tier.price.annually} per month if paid annually
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className="mt-10 block rounded-md bg-yellow-400 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                >
                  Get Started
                </a>
                <p className="mt-10 text-sm font-semibold leading-6 text-gray-900">
                  {tier.description}
                </p>
                <ul
                  role="list"
                  className="mt-6 space-y-3 text-sm leading-6 text-gray-600"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckCircleIcon
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-yellow-400"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
