import React from 'react';

const ServicesPage = () => {
  const services = [
    {
      title: 'Customised Molecular Biology Solutions',
      description:
        'We specialise in R&D and product development with a focus on PCR technologies.',
    },
    {
      title: 'PCR Services',
      description:
        'Comprehensive PCR services including standard PCR, real-time PCR, and digital PCR (in progress) with rapid turnaround times.\n\nWe offer optimisation, validation, and high-throughput screening capabilities. Offering full-suite services including assay design, optimisation, and reagents.',
    },
    {
      title: 'Enzyme-buffer Innovation',
      description:
        'Developing modified enzyme and buffer combinations that significantly boost PCR performance.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
