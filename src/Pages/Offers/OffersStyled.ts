import styled from "styled-components";
import {MdOutlineSignalCellularAlt} from 'react-icons/md';

export const SignalIcon = styled(MdOutlineSignalCellularAlt)`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: gray;
`;

export const PlansContainer = styled.div`
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

export const Plan = styled.div`
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

export const TitlePlan = styled.h6`
    font-size: 32px;
    color: #ffffff;
`;

export const SubTitlePlan = styled.h6`
    font-size: 14px;
    color: #ffffff;
`;

export const PricePlan = styled.h6`
    font-size: 26px;
    color: #ffffff;
`;

export const ButtonSubscribe = styled.button`
    max-width: 150px;
    width: 100%;
    height: 65px;
    border-radius: 15px;
`;

export const Text = styled.p`
    font-size: 22px;
    color: #ffffff;
    text-align: center;
`;