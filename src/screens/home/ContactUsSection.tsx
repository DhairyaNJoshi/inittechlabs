"use client";
import ContactUsForm from "@/components/ContactUsForm";
import Section from "@/components/Section";

const ContactUsSection = () => {
  return (
    <Section className="bg-primary-50">
      <div className="container">
        <div className="mx-auto max-w-[900px]">
          <h2 className="font-700 text-gray text-center text-32 lg:text-42 leading-8 lg:leading-[42px]">
            Ready to Take the Next Step?
          </h2>
          <p className="font-500 md:text-20 text-18 my-5 leading-7 md:leading-8 text-gray-100 text-center">
            Contact INIT Tech Labs today to discuss your IT needs and explore
            how we can help your business thrive in the digital age.
          </p>
          <ContactUsForm
            title="Schedule a Free Consultation"
            subTitle="Let’s discuss your project and how INIT Tech Labs can help you
            achieve your digital goals."
          />
        </div>
      </div>
    </Section>
  );
};

export default ContactUsSection;
