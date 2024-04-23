import React from "react";
import './CreateEvent.css'

export default function CreateEvent() {
    return(
        <div className="mainWrapper">
            <div className="TopSection">
                <div className="sectionHead"> Create your Own Event Estimator </div>
            </div>
            <div className="bodySection">
                <div className="howToUse">
                    Here's how to use:
                    <ul style={{ listStyleType: 'decimal' }}>
                        <li>Click on "Add" to create a new option.</li>
                        <li>Give it a name.</li>
                        <li>Now either select the new option to create a sub-option or pricing to give a price.</li>
                        <li>In the pricing, you have 3 options (Premium, Normal, Cost-Effective) and a "per person" option (boolean).</li>
                        <li>In this way, a tree-like structure can be created for your custom event estimator.</li>
                        <li>Click on "Generate Estimator", our backend will create a custom estimator and redirect you to it.</li>
                    </ul>

                </div>
            </div>
        </div>
    )
}