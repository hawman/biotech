import React from 'react';

const ServicesPage = () => {
  const services = [
    {
      title: 'Customized Molecular Biology',
      description: 'Tailored molecular biology solutions to meet your specific research needs. Our expert team provides customized DNA/RNA manipulation, cloning, and sequence analysis services with precision and reliability.',
    },
    {
      title: 'PCR Services',
      description: 'Comprehensive PCR services including standard PCR, real-time PCR, and digital PCR with rapid turnaround times. We offer optimization, validation, and high-throughput screening capabilities.',
    },
    {
      title: 'Enzyme Innovation',
      description: 'Cutting-edge enzyme engineering and optimization services. We develop and customize enzymes for industrial applications, improving efficiency and sustainability in bioprocessing.',
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