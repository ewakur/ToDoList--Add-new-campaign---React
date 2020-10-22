import React from 'react';
import Campaign from './Campaign';

const ListCampaign = (props) => {
    
    const campaignsList = props.campaigns.map(campaign =>(
        <Campaign
        deleteCampaign={props.deleteCampaign}
        edit={props.edit}
        key={campaign.id}
        id={campaign.id}
        name={campaign.name}
        keyword={campaign.keyword}
        bidAmount={campaign.bidAmount}
        campaignFund={campaign.campaignFund}
        town={campaign.town}
        radius={campaign.radius}
        status={campaign.status}/>
    ))
    return ( 
        <>
        <h3>Campaign list:</h3>
        <table>
            <thead>
            <tr>
                <th>Status</th>
                <th>Campaign name</th>
                <th>Keyword</th>
                <th>Bid amount</th>
                <th>Campaign fund</th>
                <th>Town</th>
                <th>Radius[km]</th>
                <th>Edit/Delete</th>
            </tr>
            </thead>
            <tbody>
                {campaignsList} 
            </tbody>
        </table>
        </>
     );
}
 
export default ListCampaign;