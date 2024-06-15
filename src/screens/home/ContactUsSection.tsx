"use client";
import ContactUsForm from "@/components/ContactUsForm";
import Section from "@/components/Section";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const formSchema = yup.object().shape({
  email: yup.string().email().required("This field is required"),
  name: yup.string().required("This field is required"),
  companyName: yup.string().required("This field is required"),
  requirement: yup.string().required("This field is required"),
  phone: yup
    .string()
    .required("This field is required")
    .matches(phoneRegex, "Invalid Number!")
    .min(10, "Must be at least 10 characters")
    .max(18, "Invalid Number!"),
});
type StepFormSchemaType = yup.InferType<typeof formSchema>;

const ContactUsSection = () => {
  const initialValues = {
    email: "",
    name: "",
    companyName: "",
    phone: "",
    requirement: "",
  };
  const form = useForm<StepFormSchemaType>({
    resolver: yupResolver(formSchema),
    defaultValues: initialValues,
  });
  const onSubmit: SubmitHandler<StepFormSchemaType> = async (data) => {
    console.log("data", data);
  };
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
