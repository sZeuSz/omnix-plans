import React, { useContext } from "react";
import { useFormik } from 'formik';
import Typewriter from 'typewriter-effect';
import { Content, TypeContainer, Form, Paragraph, ContainerInput, Input, Error, Button } from "./ContentStyled";
import { getAddressByCep } from "../../services/api";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { cepSchema } from "../../Schemas/cepSchema";
import { ResultContext } from "../../Contexts/addressContext";


export default function Main() {

    const navigate = useNavigate();
    const { setResult } = useContext<React.SetStateAction<any>>(ResultContext);
    
    const formik = useFormik({
        initialValues: {
          cep: '',
          place: '',
          complement: '',
          district: '',
          locality: '',
          uf: ''
        },
        validationSchema: cepSchema,
        onSubmit: async values => {
            const result: any = await getAddressByCep(values)
            if(result.data.erro) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'cep não existe',
                    showConfirmButton: false,
                    timer: 1500
                  })
                return;
            }

            setResult(result.data);
            navigate("/offers")
        },
      });


    return (
        <Content>
            <TypeContainer>
                <Typewriter
                    options={{
                        strings: ['Bem vindo ao Omnix Plans! Aqui você encontra os melhores planos de internet da vida com preços imperdíveis 💙'],
                        delay: 70,
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 0,
                    }}
                />
            </TypeContainer>
            <Form onSubmit={formik.handleSubmit}>
                <Paragraph>Insira seu cep para ver ofertas incríveis na sua região</Paragraph>
                <ContainerInput>
                    <Input   
                        id="cep"
                        type="number"
                        {...formik.getFieldProps('cep')} 
                        placeholder="69000000"
                    />
                    {formik.touched.cep && formik.errors.cep ? (
                        <Error>{formik.errors.cep}</Error>
                    ) : null}
                </ContainerInput>
                <Button type="submit">Avançar</Button>
            </Form>
        </Content>
    )
}