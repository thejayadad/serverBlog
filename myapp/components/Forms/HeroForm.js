'use client'
import { FiMail } from 'react-icons/fi';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const HeroForm = () => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (
      'localStorage' in window
      && window.localStorage.getItem('desiredUsername')
    ) {
      const username = window.localStorage.getItem('desiredUsername');
      window.localStorage.removeItem('desiredUsername');
      redirect('/account?desiredUsername=' + username);
    }
  }, []);

  async function handleSubmit(ev) {
    ev.preventDefault();
    const form = ev.target;
    const input = form.querySelector('input');
    const username = input.value;
    if (username.length > 0) {
      if (username) {
        router.push('/account?desiredUsername='+username);
      } else {
        window.localStorage.setItem('desiredUsername', username);
        await signIn('google');
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-screen-sm mx-auto mb-3 space-y-4 sm:flex sm:space-y-0 cursor-pointer"
    >
      <div className="relative w-full">
        <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Email address
        </label>
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <FiMail className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          className="block w-full p-3 pl-10 text-sm text-gray-900 bg-white rounded-lg border border-primary sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          type="text"
          placeholder="Username"
     
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full py-3 px-5 text-sm font-medium text-secondary rounded-lg border cursor-pointer bg-primary border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          SignUp
        </button>
      </div>
    </form>
  );
};

export default HeroForm;
