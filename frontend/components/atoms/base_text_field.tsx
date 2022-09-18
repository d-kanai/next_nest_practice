import { Control, Controller } from "react-hook-form";
import { TextField } from '@mui/material';

export default function BaseTextField(props:{name: string, control: Control<any, any>}) {
    return (
      <Controller name={props.name} control={props.control} render={({ field, formState }) => (
        <TextField {...field} fullWidth
         helperText={formState.errors[props.name]?.message?.toString()} 
         label={props.name} name={props.name}
         variant="outlined"
         error={!!formState.errors[props.name]}
        />
      )} />
    )
  }