import { Box, FormControl, FormLabel, Slide, TextField } from "@mui/material";
import { useFormikContext } from "formik";
import { formValues } from ".";

const StepOne = () => {
  const formik = useFormikContext<formValues>();

  return (
    <Slide direction='right' timeout={700} in={true} mountOnEnter unmountOnExit>
      <Box>
        <FormControl fullWidth>
          <FormLabel sx={{ mt: 0 }}>Name *</FormLabel>
          <TextField
            size='small'
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </FormControl>
        <FormControl fullWidth>
          <FormLabel>Phone Number *</FormLabel>
          <TextField
            type='tel'
            size='small'
            onChange={formik.handleChange}
            value={formik.values.phone_number}
          />
        </FormControl>
        <FormControl fullWidth>
          <FormLabel>Email *</FormLabel>
          <TextField
            type='email'
            size='small'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </FormControl>
      </Box>
    </Slide>
  );
};
export default StepOne;
