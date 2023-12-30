'use client';

import toast from 'react-hot-toast';
import { FaPaperPlane } from 'react-icons/fa';

import { motion } from 'framer-motion';

import { sendEmail } from '@/actions/send-email';
import { useListenSectionInView } from '@/context/active-section';

import { SectionHeading } from './section-heading';

export function Contact() {
  const { ref } = useListenSectionInView('Contact', 0.5);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="scroll-mt-28 mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}>
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{' '}
        <a href="mailto:example.@gmail.com" className="underline">
          example.@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <form
        className="flex flex-col mt-10 dark:text-black/80"
        action={async formDate => {
          await sendEmail(formDate);

          toast.success('E-mail was successfully sent!');
        }}>
        <input
          type="email"
          name="senderEmail"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          className="borderBlack rounded-lg h-52 my-3 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your message"
          name="message"
          required
          maxLength={500}
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover-active:scale-105 dark:bg-white dark:bg-opacity-10">
          Submit{' '}
          <FaPaperPlane
            className="text-xs opacity-70 transition-all 
                group-hover:translate-x-1 
                group-hover:-translate-y-1"
          />
        </button>
      </form>
    </motion.section>
  );
}
