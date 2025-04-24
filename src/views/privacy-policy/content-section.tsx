type Props = {};

const ContentSection = (props: Props) => {
  return (
    <div className="prose">
      <p>
        Thank you for using <strong>CamTuner</strong>. This Privacy Policy
        explains how we handle your information when you use our Chrome
        extension.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        CamTuner does <strong>not collect</strong>, transmit, or share any
        personal information or identifiable data from users.
      </p>
      <p>The extension only uses the following browser APIs:</p>
      <ul>
        <li>
          <strong>Storage API:</strong> Used to store your preferences (e.g.,
          zoom level, brightness, custom settings) <strong>locally</strong> on
          your device.
        </li>
        <li>
          <strong>Camera Access:</strong> Used to access your webcam for
          real-time feed customization. This access is handled entirely within
          your browser.
        </li>
      </ul>
      <p>
        <strong>No data is sent to any server or third party.</strong>
      </p>

      <h2>2. How Your Data Is Used</h2>
      <p>
        All customization data (like visual settings) is stored{" "}
        <strong>locally</strong> and used only to enhance your webcam
        experience. None of this data leaves your browser.
      </p>

      <h2>3. Permissions Justification</h2>
      <ul>
        <li>
          <strong>Storage Permission:</strong> Used solely to save your settings
          so you don’t need to reconfigure the extension each time.
        </li>
        <li>
          <strong>Content Script Access to &lt;all_urls&gt;:</strong> Required
          to ensure the extension can overlay or apply changes on any video
          conferencing or streaming site where the webcam is used.
        </li>
      </ul>
      <p>
        We do <strong>not</strong> use this permission to read or modify site
        content.
      </p>

      <h2>4. Data Security</h2>
      <p>
        Since CamTuner does not collect or transmit data, there is no risk of
        data leakage from our end. All operations happen locally on your device.
      </p>

      <h2>5. Changes to This Policy</h2>
      <p>
        We may update this policy in the future. If we make significant changes,
        we will update the effective date above and notify users if necessary.
      </p>

      <h2>6. Contact</h2>
      <p>
        If you have any questions or concerns about this privacy policy, please
        contact:
      </p>
      <p>
        <strong>Tonmoy Deb</strong>
        <br />
        Email: tonmoydeb404@gmail.com
      </p>
    </div>
  );
};

export default ContentSection;
