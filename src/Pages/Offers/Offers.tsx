import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Content } from "../../Components/Content/ContentStyled";
import { ResultContext } from "../../Contexts/addressContext";
import plans from "../../Data/mock";
import { Text,PlansContainer, ButtonReturn, Plan, SignalIcon, TitlePlan, SubTitlePlan, PricePlan, ButtonSubscribe } from "./OffersStyled";
import Swal from 'sweetalert2';

export function Offers () {
    const { result } = useContext<React.SetStateAction<any>>(ResultContext);
    const navigate = useNavigate()

    if(!result.cep) {
       return <Navigate to="/" />
    }

    const sweetAlert = async () => {
        await Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Nice! em breve um caba vai aparecer aí na sua casa, obrigado.',
            showConfirmButton: false,
            timer: 4000
          })
        navigate('/');
    }
    return (
        <Content>
            <Text>Ofertas para {`${result.logradouro}, Bairro ${result.bairro}, Cidade de ${result.localidade} - ${result.uf}`}...</Text>
            <PlansContainer>
                {plans.map((plan) => {
                    return (
                        <Plan>
                            <SignalIcon />
                            <div>
                                <TitlePlan>{plan.title}</TitlePlan>
                                <SubTitlePlan>{plan.subTitle}</SubTitlePlan>
                            </div>
                            <PricePlan>{plan.pricePerMonth}/Mês</PricePlan>
                            <ButtonSubscribe onClick={sweetAlert} >Assinar agora</ButtonSubscribe>
                        </Plan>
                    )
                })}
            </PlansContainer>

        <ButtonReturn onClick={() => navigate('/')}>Ops, errei meu cep!</ButtonReturn>
        </Content>
    )
}

