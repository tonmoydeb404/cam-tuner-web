import PrivacyPolicyView from "@/views/privacy-policy";
import { Metadata } from "next";

type Props = {};

const PrivacyPolicyPage = (props: Props) => {
  return <PrivacyPolicyView />;
};

export default PrivacyPolicyPage;

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Privacy Policy",
};
