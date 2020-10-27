import React, {useState} from 'react';
import '../style/App.sass';

import AddCampaign from './AddCampaign';
import Account from './Account';
import ListCampaign from './ListCampaign';

let counter = 0;
const companyAccount = 300000;

const App = () => {
  
  const [campaigns, setCampaigns] = useState([]);
  const [account, setAccount] = useState(companyAccount);

  const addNewCampaign = (name,keyword,bidAmount,campaignFund,town,radius,status) => {
    const campaign = {
      id: counter,
      name,
      keyword,
      bidAmount,
      campaignFund,
      town,
      radius,
      status
    }
    counter++;

    setCampaigns(prevState => [...prevState, campaign])
    
  }
  const deleteCampaign = (id) => {
    const campaignsList = [...campaigns];
    const newCampaignsList = campaignsList.filter(campaign => campaign.id !== id );
    
    setCampaigns(newCampaignsList)
  }
  const editCampaign = (name, keyword, bidAmount, campaignFund, town, radius, status, id) => {
    const campaignsList = [...campaigns];
    campaignsList.forEach(campaign => {

      setAccount(account - (campaignFund - campaign.campaignFund))

      if(campaign.id === id){
        return(
        campaign.name =  name,
        campaign.keyword = keyword,
        campaign.bidAmount = bidAmount,
        campaign.campaignFund = campaignFund,
        campaign.town = town,
        campaign.radius = radius,
        campaign.status = status
        )
      }})
      
    setCampaigns(campaignsList)
    
  }

  const newAccountValue =(campaignFund) => {
    setAccount(prevState => prevState - campaignFund)
    
  }
  return (
    
    <div className="app">
      <AddCampaign add={addNewCampaign} account={newAccountValue} accountValue={account}/>
      <Account account={account}/>
      <ListCampaign campaigns={campaigns} deleteCampaign={deleteCampaign} edit={editCampaign}/>
    </div>
  );
}

export default App;
