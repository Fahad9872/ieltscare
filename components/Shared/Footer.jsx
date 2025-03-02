import SocialButton from "./SocialButton";

export const Footer = () => {
  return (
    <footer className="bg-purple-50 px-4 pt-16 mx-auto max-w-[1450px] md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="IELTScare"
            className="inline-flex items-center"
          >
            <svg
              className="w-8 "
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide uppercase ">
              IELTScare
            </span>
          </a>
          <p className="mt-6  text-gray-600">
            Contact or report any issues via email: <a href="mailto:blackshadow98723@gmail.com" className=" hover:underline">blackshadow98723@gmail.com</a>
          </p>
          <p className="mt-4  text-gray-600">
            IELTScare does not host or distribute any copyrighted files. All content is sourced from third-party websites, and we do not take responsibility for their content.
          </p>
        </div>

        <div className="space-y-2 ">
          <p className="text-base font-bold ">Contact Us</p>
          <div className="flex">
            <p className="mr-1 text-gray-700">Phone:</p>
            <a
              href="tel:8801865233836"
              className=" hover:underline"
            >
              +880-1865233836
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-700">Email:</p>
            <a
              href="mailto:blackshadow98723@gmail.com"
              className=" hover:underline"
            >
              blackshadow98723@gmail.com
            </a>
          </div>
        </div>

        <div>
          <p className="text-base font-bold ">Follow Us</p>
          <SocialButton />
        </div>
      </div>

      <div className="flex flex-col-reverse justify-between pt-5 pb-10 lg:flex-row border-gray-300">
        <p className=" text-gray-600">© {new Date().getFullYear()} IELTScare. All rights reserved.</p>
      </div>
    </footer>
  );
};
