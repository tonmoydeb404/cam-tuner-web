import ContentSection from "./content-section";
import HeaderSection from "./header-section";

type Props = {};

const PrivacyPolicyView = (props: Props) => {
  return (
    <div className="container mx-auto pb-24 pt-56">
      <HeaderSection title="Privacy & Policy" effectiveDate="April 25, 2025" />
      <ContentSection />
    </div>
  );
};

export default PrivacyPolicyView;
