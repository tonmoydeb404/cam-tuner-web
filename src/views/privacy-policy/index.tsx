import ContentSection from "./content-section";
import HeaderSection from "./header-section";

type Props = {};

const PrivacyPolicyView = (props: Props) => {
  return (
    <div className="container mx-auto py-24">
      <HeaderSection title="Privacy & Policy" effectiveDate="April 25, 2025" />
      <ContentSection />
    </div>
  );
};

export default PrivacyPolicyView;
