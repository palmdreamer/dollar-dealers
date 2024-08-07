import ContactFormGeneral from "../components/contact-form-general";

import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Hours from "../components/hours";

export default function Contact() {
  return (
    <>
      <Navigation />
      <div className="flex">
        <Hours />
        <ContactFormGeneral />
      </div>
      <Footer />
    </>
  );
}
