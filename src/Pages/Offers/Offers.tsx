import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { Content } from "../../Components/Content/ContentStyled";
import { ResultContext } from "../../Contexts/addressContext";
import {MdOutlineSignalCellularAlt} from 'react-icons/md';
import plans from "../../data/mock";
export function Offers () {
    const { result } = useContext<React.SetStateAction<any>>(ResultContext);

    if(!result.cep) {
       return <Navigate to="/" />
    }

    return (
        <Content>
            <span>Ofertas para {`${result.logradouro}, Bairro ${result.bairro}, Cidade de ${result.localidade} - ${result.uf}`}...</span>
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
                            <ButtonSubscribe>Assinar agora</ButtonSubscribe>
                        </Plan>
                    )
                })}
            </PlansContainer>
        </Content>
    )
}

const SignalIcon = styled(MdOutlineSignalCellularAlt)`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: gray;
`;

const PlansContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 25px;
    width: 100%;
    height: 100%;
    margin-top: 35px;
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
`;

const Plan = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    height: 300px;
    border-radius: 12px;
    background: rgba(217, 217, 217, 0.35);
    padding: 10px 0px;
    margin: 10px 0px;
`;

const TitlePlan = styled.h6`
    font-size: 32px;
    color: #ffffff;
`;

const SubTitlePlan = styled.h6`
    font-size: 14px;
    color: #ffffff;
`;

const PricePlan = styled.h6`
    font-size: 26px;
    color: #ffffff;
`;

const ButtonSubscribe = styled.button`
    max-width: 150px;
    width: 100%;
    height: 65px;
    border-radius: 15px;
`;