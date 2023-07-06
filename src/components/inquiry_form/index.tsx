import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import { Formik, useFormik } from "formik";
import { useState } from "react";
import StepOne from "./step-one";
import StepThree from "./step-three";
import StepTwo from "./step-two";
import { ServiceType } from "./step-two";

// export the form values
export interface formValues {
  name: string;
  email: string;
  phone_number: string;
  service_type: ServiceType;
  service_option: string;
  application: string;
  resolution: string;
  screen_size: {
    length: number;
    width: number;
  };
}

const InquiryForm = () => {
  // form steps
  const [current_step, setCurrentStep] = useState(1);

  const steps = [
    {
      step: 1,
      label: "Personal Information",
    },
    {
      step: 2,
      label: "Service Type",
    },
    {
      step: 3,
      label: "Screen Size",
    },
  ];

  const getStepForm = () => {
    if (current_step === 1) {
      return <StepOne />;
    } else if (current_step === 2) {
      return <StepTwo />;
    } else if (current_step === 3) {
      return <StepThree />;
    } else {
      return <StepOne />;
    }
  };

  const formik = useFormik<formValues>({
    initialValues: {
      name: "",
      email: "",
      phone_number: "",
      service_type: "Buy",
      service_option: "",
      application: "",
      resolution: "",
      screen_size: {
        length: 0.5,
        width: 0.5,
      },
    },
    onSubmit: (values, actions) => {
      console.log({ values, actions });
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    },
  });

  return (
    <Formik {...formik} onSubmit={formik.handleSubmit}>
      <Card sx={{ bgcolor: "#E1FFF9", maxWidth: 350, width: "100%" }}>
        <CardHeader title='Quick Inquiry form' />
        <CardContent>
          <Stepper activeStep={current_step} sx={{ mb: 2 }}>
            {steps.map(({ step, label }) => (
              <Step
                key={step}
                completed={current_step > step}
                active={current_step === step}
              >
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <form onSubmit={formik.handleSubmit}>
            {getStepForm()}
            <Box
              mt={2}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button
                disabled={current_step === 1}
                size='small'
                variant='outlined'
                onClick={() => setCurrentStep(current_step - 1)}
              >
                Back
              </Button>

              {current_step === 3 ? (
                <Button
                  sx={{ justifySelf: "flex-end" }}
                  size='small'
                  variant='contained'
                ></Button>
              ) : (
                <Button
                  onClick={() => setCurrentStep(current_step + 1)}
                  sx={{ justifySelf: "flex-end" }}
                  size='small'
                  variant='contained'
                >
                  Next
                </Button>
              )}
            </Box>
          </form>
        </CardContent>
      </Card>
    </Formik>
  );
};

export default InquiryForm;
