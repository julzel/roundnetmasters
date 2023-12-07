import React, { useRef, useState, useEffect, useCallback } from 'react';

const FullPageScroll = ({ children }) => {
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const sectionCount = React.Children.count(children);

  const scrollSection = useCallback((direction) => {
    if (isScrolling) return;

    let newSection = currentSection;
    if (direction === 'down' && currentSection < sectionCount - 1) {
      newSection = currentSection + 1;
    } else if (direction === 'up' && currentSection > 0) {
      newSection = currentSection - 1;
    }

    if (newSection !== currentSection) {
      setCurrentSection(newSection);
      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 1500);
    }
  }, [currentSection, isScrolling, sectionCount]);

  const handleWheelEvent = useCallback((e) => {
    e.preventDefault();
    const deltaY = e.deltaY;
    const direction = deltaY > 0 ? 'down' : 'up';
    scrollSection(direction);
  }, [scrollSection]);

  const handleKeyboardEvent = useCallback((e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      scrollSection('up');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      scrollSection('down');
    }
  }, [scrollSection]);

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('wheel', handleWheelEvent, { passive: false });
    window.addEventListener('keydown', handleKeyboardEvent);

    return () => {
      container.removeEventListener('wheel', handleWheelEvent);
      window.removeEventListener('keydown', handleKeyboardEvent);
    };
  }, [handleWheelEvent, handleKeyboardEvent]);

  useEffect(() => {
    containerRef.current.style.transform = `translateY(-${currentSection * 100}vh)`;
  }, [currentSection]);

  return (
    <div ref={containerRef} style={{ overflow: 'hidden', transition: 'transform 0.5s ease-in-out' }}>
      {React.Children.map(children, child => (
        <div style={{ height: '100vh' }}>{child}</div>
      ))}
    </div>
  );
};

export default FullPageScroll;

// import React, { useRef, useState, useEffect, useCallback } from 'react';

// const FullPageScroll = ({ children }) => {
//   const containerRef = useRef(null);
//   const [currentSection, setCurrentSection] = useState(0);
//   const [isScrolling, setIsScrolling] = useState(false);
//   const sectionCount = React.Children.count(children);

//   const handleScroll = useCallback((deltaY) => {
//     if(isScrolling) return;

//     setIsScrolling(true);
    
//     if (deltaY > 0 && currentSection < sectionCount - 1) {
//       setCurrentSection(currentSection + 1);
//     } else if (deltaY < 0 && currentSection > 0) {
//       setCurrentSection(currentSection - 1);
//     }
//     setTimeout(() => setIsScrolling(false), 1500);
//   }, [isScrolling, currentSection, sectionCount]);

//   const handleWheelEvent = useCallback((e) => {
//     e.preventDefault();
//     handleScroll(e.deltaY);
//   }, [handleScroll]);

//   const handleTouchEvent = useCallback((e) => {
//     e.preventDefault();
//     // Implement touch handling logic
//   }, []);

//   useEffect(() => {
//     const container = containerRef.current;
//     container.addEventListener('wheel', handleWheelEvent, { passive: false });
//     container.addEventListener('touchmove', handleTouchEvent, { passive: false });

//     return () => {
//       container.removeEventListener('wheel', handleWheelEvent);
//       container.removeEventListener('touchmove', handleTouchEvent);
//     };
//   }, [currentSection, handleWheelEvent, handleTouchEvent]);

//   useEffect(() => {
//     // Scroll to the current section
//     containerRef.current.style.transform = `translateY(-${currentSection * 100}vh)`;
//   }, [currentSection]);

//   return (
//     <div ref={containerRef} style={{ overflow: 'hidden', transition: 'transform 0.3s ease-in-out' }}>
//       {React.Children.map(children, child => (
//         <div style={{ height: '100vh' }}>{child}</div>
//       ))}
//     </div>
//   );
// };

// export default FullPageScroll;
