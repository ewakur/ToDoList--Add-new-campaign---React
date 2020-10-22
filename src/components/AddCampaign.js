import React, {useState} from 'react';
import '../style/AddCampaign.sass';

const AddCampaign = (props) => {
    const [state,setState] = useState({
        name: '',
        keyword: '',
        bidAmount: '',
        campaignFund: '',
        town: '',
        radius:'',
        status: false
      })
    
      const handleInputValueChange = e => {
        
        if (e.target.type === "checkbox") {
          setState({
            ...state,
            [e.target.name]: e.target.checked,
          })
        } else {
          setState({
            ...state,
            [e.target.name]: e.target.value
          })
        }
        
      }
      const {name, keyword, bidAmount, campaignFund, town, radius, status} = state;
      const handleAddNewTask = e => {
          e.preventDefault();
          
          if(name && keyword && bidAmount && campaignFund<=props.accountValue && town.length > 2 && radius){
            props.add(name, keyword, bidAmount, campaignFund, town, radius, status);
            props.account(campaignFund);
            setState({
                name: '',
                keyword: '',
                bidAmount: '',
                campaignFund: '',
                town: '',
                radius:'',
                status: false
              })
        }
        else if (campaignFund>props.accountValue) return alert('Not enough money on company accout - change Campaign Fund')

        else return alert("Some values are missing - please add all")
      }

    return (
        <>
        <h1>Add new campaign</h1>
        <form className='add-campaign' onSubmit={handleAddNewTask}>
            <label>Campaign name</label>
            <input name="name" type="text" value={name} onChange={handleInputValueChange}/>
            <label>Keyword</label>
            <input name="keyword" type="text" value={keyword} onChange={handleInputValueChange}/>
            <label>Bid amount</label>
            <input name="bidAmount" type="number" min="20" placeholder="min. value 20" value={bidAmount} onChange={handleInputValueChange}/>
            <label>Campaign fund</label>
            <input name="campaignFund" type="number" value={campaignFund} onChange={handleInputValueChange}/>
            <label>Town</label>
            <select name="town" id="town" value={town} onChange={handleInputValueChange}>
                <option value="">-</option>
                <option value="cracow">Cracow</option>
                <option value="warsaw">Warsaw</option>
                <option value="sopot">Sopot</option>
                <option value="wroclaw">Wrocław</option>
                <option value="katowice">Katowice</option>
                <option value="gdynia">Gdynia</option>
                <option value="zakopane">Zakopane</option>
            </select>
            <label>Radius [km]</label>
            <input name="radius" type="number" value={radius} onChange={handleInputValueChange}/>
            <label>Status</label>
            <input name="status" type="checkbox" checked={status} value={status} onChange={handleInputValueChange}/>
            <button type="submit">Add campaign</button>
        </form>
        </>
    )
}

export default AddCampaign;