import React, { useRef, useState, useEffect, useCallback } from 'react';

const FullPageScroll = ({ children, onSectionChange, section }) => {
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(section);
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
      onSectionChange(newSection);
      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 1500);
    }
  }, [currentSection, isScrolling, sectionCount, onSectionChange]);

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
    setCurrentSection(section);
  }, [section]);

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
