import { useEffect, useState, useRef } from "react";
import { MousePointer2 } from 'lucide-react';

export default function GalleryGrid(props) {
  const filterButtons = [
    { id: 'all', label: 'All', color: '#B2C6C9' },
    { id: 'js', label: 'JS/TS', color: '#efb100' },
    { id: 'c', label: 'C/C++', color: '#1447e6' },
    { id: 'python', label: 'Python', color: '#497d00' },
    { id: 'java', label: 'Java', color: '#ff8904' },
    { id: 'other', label: 'Other', color: '#fb2c36' },
  ];

  const [activeFilter, setActiveFilter] = useState('all');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const buttonRefs = useRef({});
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    const activeButton = buttonRefs.current[activeFilter];
    if (activeButton) {
      const { offsetLeft, offsetWidth } = activeButton;
      setIndicatorStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  }, [activeFilter]);

  const activeColor = filterButtons.find(f => f.id === activeFilter)?.color;

  const filteredProjects = activeFilter === 'all' 
    ? props.projects 
    : props.projects.filter(project => {
        const lang = project.language.toLowerCase();
        if (activeFilter === 'js') {
          return lang.includes('javascript') || lang.includes('typescript');
        } else if (activeFilter === 'c') {
          return lang.includes('c') && !lang.includes('javascript') && !lang.includes('typescript');
        } else if (activeFilter === 'python') {
          return lang.includes('python');
        } else if (activeFilter === 'java') {
          return lang.includes('java') && !lang.includes('javascript');
        } else if (activeFilter === 'other') {
          return !lang.includes('javascript') && !lang.includes('typescript') && 
                 !lang.includes('python') && !lang.includes('java') && !lang.includes('c');
        }
        return false;
      });

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="flex justify-center mb-12 mt-16">
          <div className="relative inline-flex bg-white/60 backdrop-blur-md rounded-full p-1.5 shadow-lg border border-white/60">
            <div
              className="absolute rounded-full transition-all duration-500 ease-out shadow-xl"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
                top: '6px',
                bottom: '6px',
                backgroundColor: activeColor,
                transform: 'translateZ(0)',
              }}
            />
            {filterButtons.map((filter) => {
              const isActive = activeFilter === filter.id;
              
              return (
                <button
                  key={filter.id}
                  ref={(el) => (buttonRefs.current[filter.id] = el)}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`relative px-2 sm:px-6 py-2.5 cursor-pointer rounded-full font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                    isActive 
                      ? 'text-white' 
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  <span className="relative z-10">{filter.label}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project) => {
            
            return (
              <div
                key={project.title}
                className="group bg-white rounded-xl border-2 border-gray-300 shadow-md hover:shadow-xl hover:border-gray-400 transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-50 border-b-2 border-gray-300">
                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${project.color} bg-gray-100 border-2 border-gray-300`}>
                      {project.language}
                    </span>
                  </div>
                  <h3 className="text-base font-serif font-bold text-gray-900 mb-1.5 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-700 mb-3 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  {project.link !== "" && <a 
                    className="inline-flex items-center gap-2 px-3 py-2 font-serif rounded-full text-white hover:shadow-xl hover:scale-105 transition-all shadow-lg mt-[30px] hover:bg-[#e85d04] bg-[#fb8500]"
                    target="_blank"
                    href={project.link}
                  >
                      View on Github
                      <MousePointer2 className="w-4 h-4" />
                  </a>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}