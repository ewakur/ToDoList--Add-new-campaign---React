import React from 'react';

const Campaign = ({name, keyword, bidAmount, campaignFund, town, radius, status, id, edit, deleteCampaign}) => {
    
    const btnStatus = status ? "On" : "Off";
    
    return (
        <tr>
            <td>{btnStatus}</td>
            <td>{name}</td>
            <td>{keyword}</td>
            <td>{bidAmount}</td>
            <td>{campaignFund}</td>
            <td>{town.toUpperCase()}</td>
            <td>{radius}</td>
            <td><button onClick={() => edit(name, keyword, bidAmount, campaignFund, town, radius, status, id)}>Edit</button><button onClick={() => deleteCampaign(id)}>X</button></td>
        </tr>
        
     );
}
 
export default Campaign;