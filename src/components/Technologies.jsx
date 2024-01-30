import React, { useRef, useEffect } from 'react';

const Technologies = () => {
  const techList = ['CSS', 'HTML', 'JavaScript', 'React', 'PHP', 'MySQL', 'Wordpress', 'Tailwind CSS'];
  const marqueeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const marquee = marqueeRef.current;
      const marqueeRect = marquee.getBoundingClientRect();
      const marqueeCenterY = marqueeRect.left + marqueeRect.width / 2;

      techList.forEach((tech, index) => {
        const techBox = document.getElementById(`tech-box-${index}`);
        const techRect = techBox.getBoundingClientRect();
        const techCenterY = techRect.left + techRect.width / 2;

        if (Math.abs(techCenterY - marqueeCenterY) < techRect.height / 2) {
          techBox.classList.add('jump-center');
        } else {
          techBox.classList.remove('jump-center');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [techList]);

  return (
    <section className="bg-gray-100 py-8">
      <div className="flex space-x-4 overflow-hidden relative" ref={marqueeRef}>
        <div className="marquee w-full overflow-hidden">
          {techList.map((tech, index) => (
            <div
              key={index}
              id={`tech-box-${index}`}
              className={`tech-box bg-blue-500 text-white rounded mr-10 p-2 inline-block shadow-md`}
            >
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
