"use client";
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
import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
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

const ContactUsForm = ({
  title,
  subTitle,
}: {
  title?: string;
  subTitle?: string;
}) => {
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    try {
      const result = await axios.post(`/api/form/submit`, data);

      if (result.status === 200) {
        toast.success("Your request has been submitted!");
        setIsLoading(false);
        form.reset();
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Something went wrong. Please try again later.");
      console.log(error);
    }
  };
  return (
    <div className="sm:mx-auto mt-10 max-w-[600px] rounded-3xl bg-white p-5 md:p-8 shadow-xl  mx-2">
      <Form {...form}>
        {title && (
          <p className="font-600 md:text-22 text-18 my-3 leading-5 text-gray text-center">
            Schedule a Free Consultation
          </p>
        )}
        {subTitle && (
          <p className="font-500 mb-5 md:mb-7 leading-5 text-gray-100 text-center">
            Let&apos;s discuss your project and how INIT Tech Labs can help you
            achieve your digital goals.
          </p>
        )}
        <form
          className="grid grid-cols-2 gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormControl>
                  <>
                    <span className="flex text-14 font-500">
                      Name
                      <span className="mx-1 text-red-500">*</span>
                    </span>
                    <Input
                      type="text"
                      className={`w-full`}
                      placeholder="Enter your first name"
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
            name="companyName"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormControl>
                  <>
                    <span className="flex text-14 font-500">
                      Company Name
                      <span className="mx-1 text-red-500">*</span>
                    </span>
                    <Input
                      type="text"
                      className={`w-full`}
                      placeholder="Enter your last name"
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
            name="requirement"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormControl>
                  <>
                    <span className="flex text-14 font-500">
                      Requirement
                      <span className="mx-1 text-red-500">*</span>
                    </span>
                    <Input
                      type="text"
                      className={`w-full`}
                      placeholder="Enter your requirement"
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
            isLoading={isLoading}
            disabled={isLoading}
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactUsForm;
