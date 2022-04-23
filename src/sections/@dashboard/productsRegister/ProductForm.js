import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
  FormControl,
  InputLabel,
  OutlinedInput,
  MenuItem,
  Select
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

export default function ProductForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    console.log('Contr', event.target.value);
    setAge(event.target.value);
  };

  const FormSchema = Yup.object().shape({
    nombre: Yup.string().required('nombre es requerido'),
    tipo: Yup.string().required('tipo es requerido  '),
    costo: Yup.number().min(0, 'Debe ser un número mayor a 0').required('el costo es requerido'),
    precio: Yup.number().min(0, 'Debe ser un número mayor a 0').required('el precio es requerido'),
    cantidad: Yup.number()
      .min(0, 'Debe ser un número mayor a 0')
      .required('La cantidad es requerida')
  });

  const formik = useFormik({
    initialValues: {
      nombre: '',
      tipo: '',
      costo: 0,
      precio: 0,
      cantidad: 0
      // ,
      // email: ''
    },
    validationSchema: FormSchema,
    onSubmit: (values) => {
      alert('enviado');
      console.log('insert', JSON.stringify(values, null, 2));

      // navigate('/dashboard', { replace: true });
    }
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3} sx={{ m: 1, mb: 3 }}>
          <TextField
            select
            label="Tipo"
            {...getFieldProps('tipo')}
            // value={age}
            // onChange={ handleChange}
            error={Boolean(touched.tipo && errors.tipo)}
            helperText="Seleccione un tipo"
          >
            <MenuItem value="" />
            <MenuItem value="Dije pequeño">Dije pequeño</MenuItem>
            <MenuItem value="Dije mediano">Dije mediano</MenuItem>
            <MenuItem value="Dije grande">Dije grande</MenuItem>
            <MenuItem value="pulso pequeño">pulso pequeño</MenuItem>
            <MenuItem value="pulso mediano">pulso mediano</MenuItem>
            <MenuItem value="pulso grande">pulso grande</MenuItem>
            <MenuItem value="anillos pequeño">anillos pequeño</MenuItem>
            <MenuItem value="anillos mediano">anillos mediano</MenuItem>
            <MenuItem value="anillos grande">anillos grande</MenuItem>
            <MenuItem value="Collar pequeño">Collar pequeño</MenuItem>
            <MenuItem value="Collar mediano">Collar mediano</MenuItem>
            <MenuItem value="Collar grande">Collar grande</MenuItem>
            <MenuItem value="Arete pequeño">Arete pequeño</MenuItem>
            <MenuItem value="Arete mediano">Arete mediano</MenuItem>
            <MenuItem value="Arete grande">Arete grande</MenuItem>
            <MenuItem value="Argolla pequeño">Argolla pequeño</MenuItem>
            <MenuItem value="Argolla mediano">Argolla mediano</MenuItem>
            <MenuItem value="Argolla grande">Argolla grande</MenuItem>
          </TextField>

          <TextField
            fullWidth
            type="text"
            label="Nombre"
            {...getFieldProps('nombre')}
            error={Boolean(touched.nombre && errors.nombre)}
            helperText={touched.nombre && errors.nombre}
          />
          <TextField
            fullWidth
            type="number"
            label="Costo"
            {...getFieldProps('costo')}
            error={Boolean(touched.costo && errors.costo)}
            helperText={touched.costo && errors.costo}
          />
          <TextField
            fullWidth
            type="number"
            label="Cantidad"
            {...getFieldProps('cantidad')}
            error={Boolean(touched.cantidad && errors.cantidad)}
            helperText={touched.cantidad && errors.cantidad}
          />
          <TextField
            fullWidth
            type="number"
            label="Precio"
            {...getFieldProps('precio')}
            error={Boolean(touched.precio && errors.precio)}
            helperText={touched.precio && errors.precio}
          />
          {/* <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Costo</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={<InputAdornment position="start">Q.</InputAdornment>}
              label="Costo"
              {...getFieldProps('costo')}
              error={Boolean(touched.costo && errors.costo)}
            />
          </FormControl> */}
        </Stack>
        <LoadingButton fullWidth size="large" type="submit" variant="contained">
          Guardar
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
