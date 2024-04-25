// Services.tsx
import React from 'react';

import config from '../config/index.json';

interface ServiceItem {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

const Services = () => {
  const { services } = config;
  const { items, title } = services;

  return (
    <section className="bg-background py-8" id="services">
      <div className="container mx-auto px-2 pt-4 pb-12 text-gray-900">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-900">
          {title}
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-wrap justify-center pt-12 my-12">
          {items.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="flex flex-col w-full md:w-1/2 lg:w-1/3 p-4"
            >
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <img
                  src={service.imageUrl}
                  alt={`${service.name} image`}
                  width={500} // or your preferred fixed width
                  height={300} // or your preferred fixed height
                  className="rounded-t-lg" // if you want rounded corners
                />
                <div className="p-8 text-4xl font-bold text-center border-b-4">
                  {service.name}
                </div>
                <p className="px-4 py-4 text-lg text-center text-gray-600">
                  {service.description}
                </p>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="w-full pt-6 text-xl text-gray-600 font-bold text-center">
                  {/* You can add link or any additional details here */}
                  <a
                    href={`/services/${service.name
                      .toLowerCase()
                      .replace(/\s+/g, '-')}`}
                    className="text-red-500 hover:underline"
                  >
                    Learn more &gt;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
