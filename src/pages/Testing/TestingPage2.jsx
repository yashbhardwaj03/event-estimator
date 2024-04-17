import React from "react";
import { useParams } from "react-router-dom";
import './TestingPage2.css'
import Category_costFactors from '../../assets/Category to Cost Factors.json'
import CostFactors_Cost from '../../assets/Cost Factors to Cost.json'

export default function TestingPage2() {
    const { category } = useParams();
    const costFactors = Category_costFactors[category];
    return(
        <div className="mainWrapper">
            <h1>Price Estimator for {category}</h1>
            <br/>
            {costFactors}
        </div>
    )
}