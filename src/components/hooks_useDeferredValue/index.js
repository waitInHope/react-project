import React from "react";
import './style.css'

const Hook2 = function() {

    const createArr = function(name, number = 20000) {
        return new Array(number).fill(name).map((item, index) => `${item}-${index}`);
    }
    const tab1 = createArr('tab1');
    const tab2 = createArr('tab2');
    const tab3 = createArr('tab3');

    const tabs = {
        tab1,
        tab2,
        tab3
    }

    const [activeTab, setActiveTab] = React.useState('tab1');
    const deferredActive = React.useDeferredValue(activeTab);

    const content = tabs[deferredActive];

    const changeTab = (tab) => {
        setActiveTab(tab);
    }

    return (
        <div>
            <div className="tab">
                {Object.keys(tabs).map((item) => (<span key={item} className={item === activeTab ? 'active' : '' } onClick={() => changeTab(item)}>{item}</span>))}
            </div>
            <div className="content">
                {content.map(item => <li>{item}</li>)}
            </div>
        </div>
    )
}

export default Hook2;