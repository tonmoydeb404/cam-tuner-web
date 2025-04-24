type Props = {
  title: string;
  effectiveDate: string;
};

const HeaderSection = (props: Props) => {
  const { effectiveDate, title } = props;
  return (
    <header className="mb-16">
      <h1 className="text-4xl font-bold mb-1">{title}</h1>
      <p>
        <strong>Effective Date:</strong> {effectiveDate}
      </p>
    </header>
  );
};

export default HeaderSection;
