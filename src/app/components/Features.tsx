'use client';
import React from 'react';
import { CardHoverEffectDemo } from './card-hover';


export const Features = () => {
  return (
    <section className="py-25" id="features">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">Features</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Powerful tools to accelerate your internship journey — built just for students.
        </p>
       <CardHoverEffectDemo/>
      </div>
    </section>
  );
};
