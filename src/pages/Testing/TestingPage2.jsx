import React, { useState } from "react";
import { useParams } from "react-router-dom";
import './TestingPage2.css';
import Category_costFactors from '../../assets/Category to Cost Factors.json';
import CostFactors_Cost from '../../assets/Cost Factors to Cost.json';

const PNLObject = ({ obj }) => {
    // Initialize stateCurr with obj.currVal if it exists, otherwise with 0
    const [stateCurr, setStateCurr] = useState(obj.currVal || 0);

    const handleCheckboxChange = (value) => {
        obj.currVal = value; // Update currVal when a checkbox is clicked
        setStateCurr(value); // Update local state
    };

    return (
        <div className="pricesContainer">
            <div className="priceBox">
                <input type="checkbox" checked={stateCurr === obj.P} className="checkBoxContainer"
                onChange={() => handleCheckboxChange(obj.P)} />
                Premium: {obj.P}
            </div>
            <br />
            <div className="priceBox">
                <input type="checkbox" checked={stateCurr === obj.N} className="checkBoxContainer"
                onChange={() => handleCheckboxChange(obj.N)} />
                Normal: {obj.N}
            </div>
            <br />
            <div className="priceBox">
                <input type="checkbox" checked={stateCurr === obj.L} className="checkBoxContainer"
                onChange={() => handleCheckboxChange(obj.L)} />
                Cost Effective: {obj.L}
            </div>
        </div>
    );
};

const CostObjectTree = ({ name, obj }) => {
    const [displayChildren, setDisplayChildren] = useState(obj.selected);
    const toggleChildrenDisplay = () => {setDisplayChildren(prevState => !prevState);};
    const toggleSelected = () => {obj.selected = !obj.selected; setDisplayChildren(obj.selected);};
    // Check if the object has 'P', 'N', and 'L' keys
    const isPNLObj = obj.hasOwnProperty('P') && obj.hasOwnProperty('N') && obj.hasOwnProperty('L');

    return (
        <div className="costObjTreeContainer" style={isPNLObj ? {}:{flexDirection: "column"}}>
            <div className="itemHead">
                <input type="checkbox" checked={obj.selected} className="checkBoxContainer"
                onChange={toggleSelected}/> {name}
            </div>
            {obj.selected && Object.keys(obj).length > 0 && (
                <ul style={{ paddingLeft: '20px',width:'100%' }}>
                    {isPNLObj ? <PNLObject obj={obj} />
                    : (Object.keys(obj).map((key, index) => (
                        key !== 'selected' && key !== 'name' && (
                            <React.Fragment key={index}>
                                {<CostObjectTree name={key} obj={obj[key]} />}
                            </React.Fragment>
                        )
                    )))}
                </ul>
            )}
        </div>
    );  
};


export default function TestingPage2() {
    const { category } = useParams();
    const costFactors = Category_costFactors[category]; // Cost Factors for current event.
    const [amt,setAmt] = useState(false);
    const [persons, setPersons] = useState(0);
    const calculateCost = (obj) => {
        let totalCost = 0;
        // Create a deep copy of the obj object
        const objCopy = JSON.parse(JSON.stringify(obj));
        // DFS traversal
        const dfs = (node) => {
            if (typeof node === 'object') {
                // Get the cost from currVal (totalCost is global here)
                if (node.currVal) totalCost += node.currVal * (node.perPerson ? persons : 1);
                // Recursively traverse children if selected
                if (node.selected && !node.currVal)  Object.values(node).forEach(child => dfs(child));
            }
        };
        Object.values(objCopy).forEach(child=>dfs(child));
        return totalCost;
    };

    // Function to add 'selected: false' to each object and their children recursively
    const addSelectedKey = (obj) => {
        if (typeof obj === 'object' && !Array.isArray(obj)) {
            obj.selected = false; // Set 'selected: false' for the current object
            Object.values(obj).forEach(child => addSelectedKey(child)); // Recursively set 'selected: false' for its children
        }
    };

    // Get the values of costFactors from CostFactors_Cost and add 'selected: false' key
    let CostObj = Object.keys(CostFactors_Cost)
        .filter(factor => costFactors.includes(factor))
        .reduce((acc, factor) => {
            const obj = { ...CostFactors_Cost[factor], name: factor };
            addSelectedKey(obj);
            acc[factor] = obj;
            return acc;
        }, {});

    return (
        <div className="mainWrapper">
            <div className="pageHead">Price Estimator for {category}</div>
            <div className="perPersonContainer">
                <div className="perPersonHead"> Wedding capacity : </div>
                <input type="number" placeholder="in number of people" className="perPersonBox" onChange={(e)=>{setPersons(e.target.value);}} />
            </div>
            {Object.values(CostObj).map((item, index) => (
                <CostObjectTree key={index} name={item.name} obj={item} />
            ))}
            <button className="calculateBtn" onClick={() => {setAmt(calculateCost(CostObj));}}> Calculate </button>
            {amt && <div className="ResultClass"> Amount {persons !== 0 ? `for ${persons} people capacity`:''} : ₹{amt} </div>}
        </div>
    );
}
