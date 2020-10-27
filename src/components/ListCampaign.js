import React from 'react';
import Campaign from './Campaign';
import '../style/ListCampaigns.sass';

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
        <table className="campaigns-list">
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