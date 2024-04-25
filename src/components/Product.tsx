import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Product = () => {
  const { product } = config;
  const [firstItem, secondItem] = product.items;

  // Helper function to split the question into bolded prefix and normal text
  const formatQuestion = (question: string) => {
    const splitIndex = question.indexOf('?') + 1; // Find the index of the first question mark and include it
    return (
      <p className={`text-gray-600`}>
        <strong className="text-gray-600">
          {question.substring(0, splitIndex)}
        </strong>
        {question.substring(splitIndex)}
      </p>
    );
  };

  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-1 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {product.title.split(' ').map((word, index) => (
            <span key={index} className={'text-border'}>
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-2`}>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {firstItem?.title}
            </h3>
            {firstItem?.Question && formatQuestion(firstItem.Question)}
            {firstItem?.Question2 && formatQuestion(firstItem.Question2)}
            {firstItem?.Question3 && formatQuestion(firstItem.Question3)}
            {firstItem?.Question4 && formatQuestion(firstItem.Question4)}
            {firstItem?.Question5 && formatQuestion(firstItem.Question5)}
            {firstItem?.Question6 && formatQuestion(firstItem.Question6)}
            {firstItem?.Question7 && formatQuestion(firstItem.Question7)}
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={firstItem?.img}
              alt={firstItem?.title}
            />
          </div>
        </div>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={secondItem?.img}
              alt={secondItem?.title}
            />
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {secondItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8`}>{secondItem?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
