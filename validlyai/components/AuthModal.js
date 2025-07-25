'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoClose, IoMailOutline, IoLockClosedOutline, IoPersonOutline } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import { signIn } from "next-auth/react";

export default function AuthModal({ isOpen, setIsOpen }) {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => {
  setTimeout(() => {
    setIsLogin(!isLogin);
  }, 250);
};

  return (
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
              <Dialog.Panel className="w-full max-w-md max-h-[90vh] overflow-y-auto transform rounded-2xl bg-[#0C0F15] p-6  text-left align-middle shadow-xl transition-all border border-[#1E2A37] relative">

                {/* ❌ Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
                >
                  <IoClose size={22} />
                </button>

                {/* 🔖 Title */}
                <Dialog.Title className="text-2xl font-semibold text-white mb-4 text-center">
                  {isLogin ? 'Welcome Back 👋' : 'Create Your Account'}
                </Dialog.Title>

                {/* 🔐 Form */}
                <AnimatePresence mode="wait">
                  <motion.form
                    key={isLogin ? 'login' : 'signup'}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    {!isLogin && (
                      <div className="relative">
                        <IoPersonOutline className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="w-full pl-10 pr-4 py-2 rounded bg-[#10151D] border-[1px] border-[#1E2A37] placeholder-gray-400 focus:outline-none focus:ring-[0.1px] focus:ring-[#12EAB5] focus:border-[#12EAB5] transition"
                        />
                      </div>
                    )}
                    <div className="relative">
                      <IoMailOutline className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full pl-10 pr-4 py-2 rounded bg-[#10151D] border-[1px] border-[#1E2A37] placeholder-gray-400 focus:outline-none focus:ring-[0.1px] focus:ring-[#12EAB5] focus:border-[#12EAB5] transition"
                      />
                    </div>
                    <div className="relative">
                      <IoLockClosedOutline className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full pl-10 pr-4 py-2 rounded bg-[#10151D] border-[1px] border-[#1E2A37] placeholder-gray-400 focus:outline-none focus:ring-[0.1px] focus:ring-[#12EAB5] focus:border-[#12EAB5] transition"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2 bg-[#12EAB5] text-black rounded hover:opacity-90 transition font-medium"
                    >
                      {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                  </motion.form>
                </AnimatePresence>

                {/* Divider */}
                <div className="my-4 text-center text-gray-500">or</div>

                {/* Google Auth */}
                <button
                  className="w-full py-2 border border-gray-700 rounded flex items-center justify-center gap-3 hover:bg-white/10 transition"
                  onClick={() => signIn("google")}
                >
                  <FcGoogle size={22} />
                  <span>Continue with Google</span>
                </button>

                {/* Switch between Login/Signup */}
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
  );
}
