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
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={stateCurr === obj.P}
                    onChange={() => handleCheckboxChange(obj.P)}
                />
                Premium: {obj.P}
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={stateCurr === obj.N}
                    onChange={() => handleCheckboxChange(obj.N)}
                />
                Normal: {obj.N}
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={stateCurr === obj.L}
                    onChange={() => handleCheckboxChange(obj.L)}
                />
                Cost Effective: {obj.L}
            </label>
        </div>
    );
};

const CostObjectTree = ({ name, obj }) => {
    const [displayChildren, setDisplayChildren] = useState(false);

    const toggleChildrenDisplay = () => {
        setDisplayChildren(prevState => !prevState);
    };

    const toggleSelected = () => {
        obj.selected = !obj.selected;
        setDisplayChildren(obj.selected);
    };
    // Check if the object has 'P', 'N', and 'L' keys
    const isPNLObj = obj.hasOwnProperty('P') && obj.hasOwnProperty('N') && obj.hasOwnProperty('L');

    return (
        <li>
            <input
                type="checkbox"
                checked={obj.selected}
                onChange={toggleSelected}
            />
            {name}

            {obj.selected && Object.keys(obj).length > 0 && (
                <ul style={{ paddingLeft: '20px' }}>
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

        </li>
    );
    
};

export default function TestingPage2() {
    const { category } = useParams();
    const costFactors = Category_costFactors[category]; // Cost Factors for current event.
    const [amt,setAmt] = useState(0)

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
    
    // Calculates the cost.
    const calculateCost = (obj) => {
        // Initialize total cost
        let totalCost = 0;
    
        // Helper function for DFS traversal
        const dfs = (node) => {
            // Check if node is an object
            if (typeof node === 'object') {
                // Check if node is selected or has currVal
                if (node.selected) {
                    totalCost += node.currVal || 0;
                } else if (node.currVal) {
                    totalCost += node.currVal;
                }
    
                // Recursively traverse children
                Object.values(node).forEach(child => dfs(child));
            }
        };
    
        // Start DFS traversal from the root object
        dfs(obj);
    
        // Return the total cost
        return totalCost;
    };
    

    return (
        <div className="mainWrapper">
            <h1>Price Estimator for {category}</h1>
            <br />
            <ul>
                {Object.values(CostObj).map((item, index) => (
                    <CostObjectTree key={index} name={item.name} obj={item} />
                ))}
            </ul>
            <button onClick={() => {setAmt(calculateCost(CostObj))}}> Calculate </button>
            Total Cost: {amt} (Note: Hit Calculate to get the updated result)
        </div>
    );
}
