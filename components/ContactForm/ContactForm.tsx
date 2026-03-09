import { FormEvent, useState } from 'react';

export interface ContactFormProps {
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}

export const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.(e);

    const mailtoUrl = `mailto:nathan.jessen@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <form className='space-y-2' onSubmit={handleSubmit}>
      <div className='flex flex-col gap-1 w-full'>
        <label htmlFor='name' className='flex cursor-pointer'>
          <span className='text-sm font-medium'>Name</span>
        </label>
        <input
          type='text'
          className='w-full px-3 py-2 rounded border border-white/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-emerald-600'
          name='name'
          id='name'
          required
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </div>

      <div className='flex flex-col gap-1 w-full'>
        <label htmlFor='email' className='flex cursor-pointer'>
          <span className='text-sm font-medium'>Email</span>
        </label>
        <input
          type='email'
          className='w-full px-3 py-2 rounded border border-white/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-emerald-600'
          name='email'
          id='email'
          required
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
      </div>

      <div className='flex flex-col gap-1 w-full'>
        <label htmlFor='message' className='flex cursor-pointer'>
          <span className='text-sm font-medium'>Message</span>
        </label>
        <textarea
          rows={3}
          className='w-full px-3 py-2 rounded border border-white/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-emerald-600 resize-none'
          name='message'
          id='message'
          required
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
        />
      </div>

      <button
        type='submit'
        className='inline-flex items-center justify-center bg-emerald-600 text-emerald-50 px-4 py-3 min-h-12 rounded font-semibold uppercase tracking-wider hover:bg-emerald-700 transition-colors w-full'
      >
        Send Message
      </button>
    </form>
  );
};
