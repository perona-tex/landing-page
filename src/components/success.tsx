// pages/success.tsx
import React from 'react';

import Link from 'next/link';

const SuccessPage = () => {
  return (
    <div>
      <h1>Thank you!</h1>
      <p>Your message has been successfully sent. We will contact you soon!</p>
      <Link href="/">
        <a>Go back to home</a>
      </Link>
    </div>
  );
};

export default SuccessPage;
