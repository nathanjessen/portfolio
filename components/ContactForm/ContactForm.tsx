import { FormEvent } from 'react';

export interface ContactFormProps {
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  disabled?: boolean;
}

export const ContactForm = ({
  onSubmit,
  disabled = false,
}: ContactFormProps) => {
  return (
    <form className='form space-y-2' onSubmit={onSubmit}>
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
          disabled={disabled}
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
          disabled={disabled}
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
          disabled={disabled}
        ></textarea>
      </div>

      <button
        type='submit'
        className={`btn btn-block !mt-4 ${
          disabled ? 'btn-disabled' : 'btn-primary'
        }`}
        disabled={disabled}
      >
        Send Message
      </button>
    </form>
  );
};
