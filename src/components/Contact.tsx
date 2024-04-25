// pages/contact.tsx
import React from 'react';

import Head from 'next/head';

import ContactForm from './ContactForm';

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Contact Us
        </h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
