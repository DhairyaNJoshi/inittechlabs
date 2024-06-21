import ContactUsForm from "@/components/ContactUsForm";
import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";

const INFORMATION = [
  {
    title: "Our Office",
    description:
      "Our virtual headquarters is embedded in the heart of your software.",
    image: "/images/svg/location-image.svg",
  },
  {
    title: "Email Us",
    email: "inittechlabs@gmail.com",
    image: "/images/svg/email-image.svg",
  },
];
const ContactCardSection = () => {
  return (
    <Section className="bg-primary">
      <div className="container">
        <div className="mx-auto max-w-[900px]">
          <h2 className="font-700 text-white text-center text-32 lg:text-42 leading-8 lg:leading-[42px]">
            Ready to Take the Next Step?
          </h2>
          <p className="font-500 md:text-20 text-18 my-5 leading-7 md:leading-8 text-white text-center">
            Fill out the form below, and our team will get back to you promptly
            to discuss how we can collaborate on your next project.
          </p>
          <ContactUsForm title="Schedule a Free Consultation" />
        </div>
        <hr className="my-10" />
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {INFORMATION.map((item, i) => (
            <div
              key={i}
              className="border rounded-xl border-white p-5 md:p-7 shadow-md grid sm:grid-cols-[auto_1fr] gap-x-6 space-y-2"
            >
              <div className="sm:self-center flex justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  height={0}
                  width={0}
                  className="w-full h-full max-w-[120px] max-h-[120px]"
                />
              </div>
              <div>
                <h3 className="font-700 text-white text-20 leading-7">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="font-500 text-white text-18 leading-7">
                    {item.description}
                  </p>
                )}
                {item.email && (
                  <Link
                    href={`mailto:${item.email}`}
                    className="font-500 text-white text-18 leading-7 underline"
                    target="_blank"
                  >
                    {item.email}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ContactCardSection;
