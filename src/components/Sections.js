import Proptypes from 'prop-types';
function Section({ title, children }) {
  return (
    <div>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

Section.propTypes = {
  title: Proptypes.string,
};

export default Section;
