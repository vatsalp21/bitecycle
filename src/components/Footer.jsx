import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer class="bg-gray-800">
      <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">
            Company
          </h2>
          <ul class="text-gray-300">
            <li class="mb-4">
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li class="mb-4">
              <a href="/menu" className="hover:underline">
                Menu
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">
            Legal
          </h2>
          <ul class="text-gray-300">
            <li class="mb-4">
              <Link to="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li class="mb-4">
              <Link to="/liscensing" className="hover:underline">
                Liscensing
              </Link>
            </li>
            <li class="mb-4">
              <Link to="/terms" className="hover:underline">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div class="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-300 sm:text-center">
          © 2024 Bitecycle. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
