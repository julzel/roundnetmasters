const Section = ({ className, children, bgColor, id }) => {
  const sectionStyle = {
    height: '100dvh',
    position: 'relative',
    backgroundColor: bgColor || '#f9d42d'
  }
  return (
    <section
      key={id}
      id={id}
      className={className}
      style={sectionStyle}
    >
      {children}
    </section>
  );
}
 
export default Section;