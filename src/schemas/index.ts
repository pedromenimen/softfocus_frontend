import * as yup from 'yup';

export const communicationSchema = yup.object().shape({
  owner_name: yup.string().required(),
  owner_email: yup.string().email().required(),
  owner_cpf: yup.string().required(),
  type: yup.string().required(),
  event: yup.string().required(),
  date: yup.string().required(),
});

export const communicationSchemaWithCoordinates = yup.object().shape({
  owner_name: yup.string().required(),
  owner_email: yup.string().email().required(),
  owner_cpf: yup.string().required(),
  type: yup.string().required(),
  event: yup.string().required(),
  date: yup.string().required(),
  latitude: yup.number().required(),
  longitude: yup.number().required(),
});
