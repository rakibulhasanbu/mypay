"use client";

import { Field, Form, Formik, FormikHelpers } from "formik";
import { FC } from "react";
import { Button } from "./shared/button";

type IValues = typeof initialValues;
const initialValues = {
    name: "",
    prenom: "",
    email: "",
    CompanyName: "",
    businessType: "",
    Siret: "",
    Turnover: "",
    Country: "",
    Phone: "",
};

interface IInfoInput {
    label: string;
    placeholder: string;
    name: keyof typeof initialValues;
    type?: HTMLInputType;
}
const InfoInput: FC<IInfoInput> = ({ type, label, name, placeholder }) => (
    <div className="flex flex-col w-full max-w-[364px] space-y-3 cursor-pointer">
        <label
            htmlFor={name}
            className="font-bold text-lg leading-[26px] tracking-[0.9px] uppercase"
        >
            {label}
        </label>
        <div className="rounded-xl bg-[linear-gradient(144.39deg,#ffffff66_-278.56%,#6d6d6d66_-78.47%,#11101d66_91.61%)]">
            <Field
                id={name}
                name={name}
                type={type || "text"}
                placeholder={placeholder}
                className="bg-transparent focus:outline-none text-lg placeholder:leading-[27px] w-full py-[20.5px] px-[25px] rounded-xl"
            />
        </div>
    </div>
);

export const ContactForm = () => {
    const handleSubmit = (
        values: IValues,
        { setSubmitting }: FormikHelpers<IValues>
    ) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 500);
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className="space-y-5 max-w-[800px] mx-auto relative z-50">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center sm:place-items-end">
                    <InfoInput label="name" name="name" placeholder="Your name" />
                    <InfoInput label="username" name="prenom" placeholder="Your Username" />
                    <InfoInput
                        name="email"
                        type="email"
                        label="Email"
                        placeholder="email@example.com"
                    />
                    <InfoInput
                        name="CompanyName"
                        label="Company Name"
                        placeholder="Enter Your Company name"
                    />
                    <InfoInput
                        name="businessType"
                        label="Your Business Type"
                        placeholder="Type"
                    />
                    <InfoInput name="Siret" label="Location" placeholder="45637XXXXXXX" />
                    <InfoInput
                        name="Turnover"
                        label="Turnover"
                        placeholder="1.0000.000"
                    />
                    <InfoInput name="Country" label="Country" placeholder="Bangladesh" />
                    <InfoInput
                        name="Phone"
                        label="Phone Number"
                        placeholder="(+88) 017 763 445"
                    />

                    <div className="flex justify-start items-end sm:w-full px-5">
                        <Button
                            className="gap-12 sm:gap-[74px] lg:p-[9px]"
                            imgSize="sm:w-[45px] lg:w-[49.5px]"
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </Form>
        </Formik>
    );
};
