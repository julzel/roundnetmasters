const Section = ({ className, children, bgColor }) => {
  const sectionStyle = {
    height: '100dvh',
    position: 'relative',
    backgroundColor: bgColor || '#f9d42d'
  }
  return (
    <section
      className={className}
      style={sectionStyle}
    >
      {children}
    </section>
  );
}
 
export default Section;