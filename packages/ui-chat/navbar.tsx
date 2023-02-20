import { Cog6ToothIcon } from '@heroicons/react/24/solid';
import { DrawerTrigger } from './drawer';

export const Navbar = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="flex-none">
        <DrawerTrigger>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </DrawerTrigger>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">AI Assistant</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <div>
              <Cog6ToothIcon className="h-6 w-6" />
            </div>
          </li>
          <li>
            <a href="https://github.com/youking-lib/ai-assistant">{GithubIcon}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const GithubIcon = (
  <svg
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);
