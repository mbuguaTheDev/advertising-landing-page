import { Grid, TextField, FormControl, FormLabel, Button } from "@mui/material";
const ContactForm = () => {
  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <FormLabel>Name</FormLabel>
            <TextField size='small' />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <FormLabel>Email</FormLabel>
            <TextField type='email' size='small' />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <FormLabel>Phone Number</FormLabel>
            <TextField type='tel' size='small' />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <FormLabel>Service Type</FormLabel>
            <TextField select SelectProps={{ native: true }} size='small'>
              <option value='purchase'>Buy LED Screen</option>
              <option value='hire'>Hire LED Screen</option>
            </TextField>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <FormLabel>Extra Information</FormLabel>
            <TextField multiline minRows={2} maxRows={5} />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button fullWidth variant='contained'>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
export default ContactForm;
