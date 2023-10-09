import React from 'react'
import { useGlobalContext } from '../../context/globalContext';
import { dateFormat } from '../../utils/dateFormat';
import {Line} from 'react-chartjs-2'
import styled from 'styled-components'

import {Chart as ChartJs, 
    CategoryScale, 
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js'



ChartJs.register(
    CategoryScale, 
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {

    const {incomes, expenses} = useGlobalContext()

    const data = {
        labels : incomes.map((inc) =>{
            const {date} = inc
            return dateFormat(date)
        }),

        datasets: [
            {
                label : "Income",
                data: [
                    ...incomes.map((income) => {
                        const {amount} = income
                        return amount
                    })
                ],
                backgroundColor: 'green',
                tension: 0.15
        },
        {
            label : "Expenses",
            data: [
                ...expenses.map((expense) => {
                    const {amount} = expense
                    return amount
                })
            ],
            backgroundColor: 'red'
    }
        ]
    }

  return (
    <ChartStyled>
        <Line data={data} />

        </ChartStyled>
  )
}

const ChartStyled = styled.div`
background: #fcf6f9;
border: 2px solid #ffffff;
cox-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
padding: 1rem;
border-radius: 20px;
height: 100%;
`; 

export default Chart