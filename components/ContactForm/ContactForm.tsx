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
    // window.location.href = mailtoUrl;
    alert(mailtoUrl);
  };

  return (
    <form className='form space-y-2' onSubmit={handleSubmit}>
      <div className='form-control w-full'>
        <label htmlFor='name' className='label cursor-pointer'>
          <span className='label-text'>Name</span>
        </label>
        <input
          type='text'
          className='input input-bordered w-full'
          name='name'
          id='name'
          required
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </div>

      <div className='form-control w-full'>
        <label htmlFor='email' className='label cursor-pointer'>
          <span className='label-text'>Email</span>
        </label>
        <input
          type='email'
          className='input input-bordered w-full'
          name='email'
          id='email'
          required
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
      </div>

      <div className='form-control w-full'>
        <label htmlFor='message' className='label cursor-pointer'>
          <span className='label-text'>Message</span>
        </label>
        <textarea
          rows={3}
          className='textarea textarea-bordered w-full'
          name='message'
          id='message'
          required
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
        />
      </div>

      <button type='submit' className='btn btn-primary w-full'>
        Send Message
      </button>
    </form>
  );
};
