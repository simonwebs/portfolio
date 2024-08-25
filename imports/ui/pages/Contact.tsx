import React, { useState, Suspense, lazy, ChangeEvent, FormEvent } from 'react';
import { Meteor } from 'meteor/meteor';
import { BuildingOffice2Icon } from '@heroicons/react/24/outline';
import Swal from 'sweetalert2';

const FaFacebook = lazy(() =>
  import('react-icons/fa').then((module) => ({ default: module.FaFacebook }))
);
const FaYoutube = lazy(() =>
  import('react-icons/fa').then((module) => ({ default: module.FaYoutube }))
);

const Contact: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const isEmailValid = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isEmailValid(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Invalid email address',
      });
      return;
    }

    try {
      await Meteor.callAsync('contacts.insert', { name, email, subject, description });
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Your message was sent successfully!',
      });
      setName('');
      setEmail('');
      setSubject('');
      setDescription('');
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error, check your information and resend',
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="container py-8 px-6 mx-auto relative z-10 mt-10">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Let's Connect
        </h1>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full lg:w-1/2 px-3 mb-6 lg:mb-0">
            <div className="p-4">
              <BuildingOffice2Icon className="h-6 w-6 inline-block mr-2" />
              <p className="inline-block">Simon Agbey</p>
            </div>
            <div className="flex justify-start space-x-4">
              <Suspense fallback={<div>Loading icons...</div>}>
                <a
                  href="https://www.facebook.com/share/vT6ZApFm28J4mRco/?mibextid=qi2Omg"
                  className="inline-flex items-center justify-center h-12 w-12 p-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                >
                  <FaFacebook className="text-2xl hover:text-opacity-75" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCFA2SGYtiUKmQFs-IXJBWCg"
                  className="inline-flex items-center justify-center h-12 w-12 p-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my YouTube channel"
                >
                  <FaYoutube className="text-2xl" />
                </a>
                <a
                  href="https://youtube.com/@agbeysimon?si=Jw1Yzb0YzsT2d0Mr"
                  className="inline-flex items-center justify-center h-12 w-12 p-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my other YouTube channel"
                >
                  {/* Add an appropriate icon here */}
                </a>
                <a
                  href="https://x.com/SimonAgbey3?s=09"
                  className="inline-flex items-center justify-center h-12 w-12 p-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my Twitter profile"
                >
                  {/* Add an appropriate icon here */}
                </a>
              </Suspense>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 px-3 mb-6 sm:mb-0">
                  <label className="block text-sm font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your name"
                    value={name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                  />
                </div>
                <div className="w-full sm:w-1/2 px-3 mb-6 sm:mb-0">
                  <label className="block text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your email"
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your message"
                  value={description}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
