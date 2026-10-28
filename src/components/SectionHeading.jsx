function SectionHeading({ id, number, label, title, accent, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span className="section-number">{number}</span> {label}
      </p>
      <div className="section-heading-row">
        <h2 id={id}>
          {title}
          {accent && (
            <>
              {" "}
              <span>{accent}</span>
            </>
          )}
        </h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

export default SectionHeading;
