import { Box, FormControl, FormLabel, Slide, TextField } from "@mui/material";
import { useFormikContext } from "formik";
import { useState, useEffect } from "react";
import { formValues } from ".";

export type ServiceType =
  | "Buy"
  | "Hire"
  | "Service/Maintenance"
  | "Structure Fabrication"
  | "Screen Installation & Configuration";

const StepTwo = () => {
  const formik = useFormikContext<formValues>();
  const service_types: ServiceType[] = [
    "Buy",
    "Hire",
    "Service/Maintenance",
    "Structure Fabrication",
    "Screen Installation & Configuration",
  ];

  const [service_options, setServiceOptions] = useState<string[]>([]);

  // service type helper
  const updateServiceOptions = (service_type: ServiceType): string[] => {
    switch (service_type) {
      case "Buy":
        return [
          "Indoor  LED Screen  Installation",
          "Outdoor Rental Stage Event LED screen",
          "LED poster",
          "Interactive WhiteBoard",
          "Indoor Transparent LED Display",
          "LED Logo",
          "Table Top L Shaped LED Android tablet",
          "Gobo Lights",
          "Line Array Speakers",
          "Video Processor",
          "Live Streaming Camera",
          "3D hologram",
        ];
      case "Hire":
        return ["Indoor Event", "Outdoor Event", "LED Poster"];

      case "Service/Maintenance":
        return [];

      case "Structure Fabrication":
        return [
          "Indoor  LED Screen",
          "Outdoor LED screen",
          "Commercial Advertising LED Billboard",
          "LED Logo",
          "Line Array Speakers",
          "Live Streaming Camera",
        ];

      case "Screen Installation & Configuration":
        return [];

      default:
        return [];
    }
  };

  useEffect(() => {
    const updatedOptions = updateServiceOptions(formik.values.service_type);
    setServiceOptions(updatedOptions);
  }, [formik.values.service_type]);

  return (
    <Slide direction='left' timeout={700} in={true} mountOnEnter unmountOnExit>
      <Box>
        <FormControl fullWidth>
          <FormLabel sx={{ mt: 0 }}>Choose service type *</FormLabel>
          <TextField
            select
            SelectProps={{ native: true }}
            size='small'
            name='service_type'
            value={formik.values.service_type}
            onChange={formik.handleChange}
          >
            {service_types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </TextField>
        </FormControl>
        <FormControl fullWidth>
          <FormLabel>Choose service option *</FormLabel>
          <TextField
            select
            SelectProps={{ native: true }}
            size='small'
            name='service_option'
            value={formik.values.service_option}
            onChange={formik.handleChange}
          >
            {service_options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </TextField>
        </FormControl>
        <FormControl fullWidth>
          <FormLabel>Email *</FormLabel>
          <TextField
            type='email'
            size='small'
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </FormControl>
      </Box>
    </Slide>
  );
};

export default StepTwo;
