'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';

export interface ContactFormProps {
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}

const formFields = [
  {
    id: 'name',
    label: 'Name',
    type: 'text',
    required: true,
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    required: true,
  },
];

export const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.(e);

    const mailtoUrl = `mailto:nathan.jessen@gmail.com?subject=Contact from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <motion.form
      className='form space-y-4 bg-base-200/50 backdrop-blur-sm p-6 rounded-lg border border-base-300'
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {formFields.map((field, idx) => (
        <motion.div
          key={field.id}
          className='form-control w-full'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
        >
          <label htmlFor={field.id} className='label cursor-pointer'>
            <motion.span
              className='text-sm font-medium text-base-content/80'
              whileHover={{ x: 2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {field.label}
            </motion.span>
          </label>
          <motion.input
            type={field.type}
            className='input input-bordered w-full bg-base-100/50 focus:bg-base-100 transition-colors duration-200 text-sm text-base-content'
            name={field.id}
            id={field.id}
            required={field.required}
            value={formData[field.id as keyof typeof formData]}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, [field.id]: e.target.value }))
            }
            whileFocus={{ scale: 1.01 }}
          />
        </motion.div>
      ))}

      <motion.div
        className='form-control w-full'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <label htmlFor='message' className='label cursor-pointer'>
          <motion.span
            className='text-sm font-medium text-base-content/80'
            whileHover={{ x: 2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Message
          </motion.span>
        </label>
        <motion.textarea
          rows={4}
          className='textarea textarea-bordered w-full bg-base-100/50 focus:bg-base-100 transition-colors duration-200 text-sm text-base-content'
          name='message'
          id='message'
          required
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
          whileFocus={{ scale: 1.01 }}
        />
      </motion.div>

      <motion.button
        type='submit'
        className='btn btn-primary w-full text-sm font-medium'
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Send Message
      </motion.button>
    </motion.form>
  );
};
