import * as Yup from 'yup';

export const FORM_SCHEMA = Yup.object().shape({
  title: Yup.string().min(3, 'Naslov upita').required('Naslov upita'),
  name: Yup.string(),
  email: Yup.string(),
  tel: Yup.string(),
  description: Yup.string().min(3).required('Opišite nam ukratno problem'),
});
