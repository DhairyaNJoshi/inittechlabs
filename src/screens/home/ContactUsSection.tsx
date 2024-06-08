"use client";
import Section from "@/components/Section";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/form/Form";
import { Input } from "@/components/form/Input";
import { Button } from "@/components/ui/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const formSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(phoneRegex, "Invalid Number!")
    .min(10, "Must be at least 10 characters")
    .max(18, "Invalid Number!"),
});
type StepFormSchemaType = yup.InferType<typeof formSchema>;

const ContactUsSection = () => {
  const initialValues = {
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
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
          <div className="mx-auto mt-10 max-w-[600px] rounded-xl bg-white p-5 md:p-8` shadow-xl">
            <Form {...form}>
              <p className="font-600 md:text-22 text-18 my-3 leading-5 text-gray text-center">
                Schedule a Free Consultation
              </p>
              <p className="font-500 mb-5 md:mb-7 leading-5 text-gray-100 text-center">
                Let&apos;s discuss your project and how INIT Tech Labs can help
                you achieve your digital goals.
              </p>
              <form
                className="grid grid-cols-2 gap-4"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <>
                          <span className="flex text-14 font-500">
                            First Name{" "}
                            <span className="mx-1 text-red-500">*</span>
                          </span>
                          <Input
                            type="text"
                            className={`w-full`}
                            placeholder="Enter your first name"
                            error={form.formState.errors.first_name}
                            {...field}
                          />
                        </>
                      </FormControl>
                      <FormMessage></FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <>
                          <span className="flex text-14 font-500">
                            Last Name{" "}
                            <span className="mx-1 text-red-500">*</span>
                          </span>
                          <Input
                            type="text"
                            className={`w-full`}
                            placeholder="Enter your last name"
                            error={form.formState.errors.last_name}
                            {...field}
                          />
                        </>
                      </FormControl>
                      <FormMessage></FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="relative col-span-2">
                      <div className="relative">
                        <FormControl>
                          <>
                            <span className="flex text-14 font-500">
                              Email <span className="mx-1 text-red-500">*</span>
                            </span>
                            <Input
                              type="email"
                              className={`w-full`}
                              placeholder="Enter email"
                              error={form.formState.errors.email}
                              {...field}
                            />
                          </>
                        </FormControl>
                        <FormMessage></FormMessage>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormControl>
                        <>
                          <span className="flex text-14 font-500">
                            Phone Number
                            <span className="mx-1 text-red-500">*</span>
                          </span>
                          <Input
                            type="text"
                            className={`w-full`}
                            placeholder="Enter your phone number"
                            error={form.formState.errors.phone}
                            {...field}
                          />
                        </>
                      </FormControl>
                      <FormMessage></FormMessage>
                    </FormItem>
                  )}
                />
                <Button
                  className="col-span-2 w-full text-white"
                  size={"sm"}
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactUsSection;
