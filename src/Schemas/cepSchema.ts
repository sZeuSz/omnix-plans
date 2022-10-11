import * as Yup from 'yup';

const cepSchema = Yup.object({
    cep: Yup.string()
    .length(8, "cep tem 8 dígitos")
    .matches(/^[0-9]{8}$/, "Não use traço")
    .required("Cep obrigatório para continuar"),
})

export {
    cepSchema,
}