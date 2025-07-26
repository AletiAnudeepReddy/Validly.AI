'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoClose, IoMailOutline, IoLockClosedOutline, IoPersonOutline } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import { signIn } from 'next-auth/react';
import { useRouter } from "next/navigation";
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AuthModal({ isOpen, setIsOpen }) {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleMode = () => {
    setTimeout(() => {
      setIsLogin(!isLogin);
      setFullname('');
      setEmail('');
      setPassword('');
    }, 250);
  };

  const notify = (message, type = 'default') => {
    toast(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      type,
      transition: Bounce,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const endpoint = isLogin ? '/api/login' : '/api/signup';

      const res = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify({
          fullname,
          email,
          password,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();

      if (!res.ok) {
        notify(data.message || 'Something went wrong', 'error');
        setLoading(false);
        return;
      }

      notify(data.message, 'success');
      setFullname('');
      setEmail('');
      setPassword('');

      // Optionally log them in or refresh session
      if (isLogin) {
        const res = await signIn('credentials', {
          redirect: false,
          email,
          password,
        });

        if (res.ok) {
          router.push('/validate');
          setIsOpen(false);

        } else {
          notify('Invalid email or password', 'error');
        }
      } else {
        setIsOpen(false);
      }

    } catch (error) {
      console.error(error);
      notify('Something went wrong. Please try again later.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto text-white">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-90"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-90"
              >
                <Dialog.Panel className="w-full max-w-md max-h-[90vh] overflow-y-auto transform rounded-2xl bg-[#0C0F15] p-6 text-left align-middle shadow-xl transition-all border border-[#1E2A37] relative">

                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
                  >
                    <IoClose size={22} />
                  </button>

                  <Dialog.Title className="text-2xl font-semibold text-white mb-4 text-center">
                    {isLogin ? 'Welcome Back 👋' : 'Create Your Account'}
                  </Dialog.Title>

                  <AnimatePresence mode="wait">
                    <motion.form
                      key={isLogin ? 'login' : 'signup'}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-4"
                      onSubmit={handleSubmit}
                    >
                      {!isLogin && (
                        <div className="relative">
                          <IoPersonOutline className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            placeholder="Full Name"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded bg-[#10151D] border border-[#1E2A37] placeholder-gray-400 focus:outline-none focus:ring-[0.1px] focus:ring-[#12EAB5] focus:border-[#12EAB5]"
                          />
                        </div>
                      )}
                      <div className="relative">
                        <IoMailOutline className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-10 pr-4 py-2 rounded bg-[#10151D] border border-[#1E2A37] placeholder-gray-400 focus:outline-none focus:ring-[0.1px] focus:ring-[#12EAB5] focus:border-[#12EAB5]"
                        />
                      </div>
                      <div className="relative">
                        <IoLockClosedOutline className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                        <input
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full pl-10 pr-4 py-2 rounded bg-[#10151D] border border-[#1E2A37] placeholder-gray-400 focus:outline-none focus:ring-[0.1px] focus:ring-[#12EAB5] focus:border-[#12EAB5]"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-2 bg-[#12EAB5] text-black rounded hover:opacity-90 transition font-medium"
                      >
                        {loading ? 'Processing...' : isLogin ? 'Login' : 'Sign Up'}
                      </button>
                    </motion.form>
                  </AnimatePresence>

                  <div className="my-4 text-center text-gray-500">or</div>

                  <button
                    className="w-full py-2 border border-gray-700 rounded flex items-center justify-center gap-3 hover:bg-white/10 transition"
                    onClick={() => signIn('google', { callbackUrl: '/validate' })}
                  >
                    <FcGoogle size={22} />
                    <span>Continue with Google</span>
                  </button>

                  <p className="mt-6 text-sm text-center text-gray-400">
                    {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                    <button onClick={toggleMode} className="text-[#12EAB5] font-medium hover:underline">
                      {isLogin ? 'Sign Up' : 'Login'}
                    </button>
                  </p>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
