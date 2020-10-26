import React, {useState} from 'react';

const Campaign = (props) => {

    const {name, keyword, bidAmount, campaignFund, town, radius, status, id, edit, deleteCampaign} = props;
    
    const [isEdit,setIsEdit]=useState(false);
    const [editValues,setEditValues] = useState(props);

    const handleEdit = id => {
        setIsEdit(true)
    }

    const handleSave = id => {
        setIsEdit(false);
        if(editValues) {
            edit(editValues.name, editValues.keyword, editValues.bidAmount, editValues.campaignFund, editValues.town, editValues.radius, editValues.status, id)
        }
        else {
            setEditValues(name, keyword, bidAmount, campaignFund, town, radius, status)
        }
    }

    const handleEditInputChange = e => {
        
        if (e.target.type === "checkbox") {
          setEditValues({
            ...editValues,
            [e.target.name]: e.target.checked,
          })
        } else {
          setEditValues({
            ...editValues,
            [e.target.name]: e.target.value
          })
        }
        
      }
    
    const btnStatus = status ? "On" : "Off";
    
    if(isEdit){
        return (
            <tr>
                <td><input type="checkbox" name="status" checked={editValues.status} value={editValues.status} onChange={handleEditInputChange}/></td>
                <td><input type="text" name="name" value={editValues.name} onChange={handleEditInputChange}/></td>
                <td><input type="text" name="keyword" value={editValues.keyword} onChange={handleEditInputChange}/></td>
                <td><input type="number" name="bidAmount" min="20" value={editValues.bidAmount} onChange={handleEditInputChange}/></td>
                <td><input type="number" name="campaignFund" value={editValues.campaignFund} onChange={handleEditInputChange}/></td>
                <td><select name="town" value={editValues.town} onChange={handleEditInputChange}>
                <option value="">-</option>
                <option value="cracow">Cracow</option>
                <option value="warsaw">Warsaw</option>
                <option value="sopot">Sopot</option>
                <option value="wroclaw">Wrocław</option>
                <option value="katowice">Katowice</option>
                <option value="gdynia">Gdynia</option>
                <option value="zakopane">Zakopane</option>
            </select></td>
                <td><input type="number" name="radius" value={editValues.radius} onChange={handleEditInputChange}/></td>
                <td>
                    <button onClick={() => handleSave(id)}>Save</button>
                    <button onClick={() => deleteCampaign(id)} disabled>X</button>
                </td>
            </tr>
         );
    }
    else {
        return (
            <tr>
                <td>{btnStatus}</td>
                <td>{name}</td>
                <td>{keyword}</td>
                <td>{bidAmount}</td>
                <td>{campaignFund}</td>
                <td>{town.toUpperCase()}</td>
                <td>{radius}</td>
                <td>
                    <button onClick={() => handleEdit(id)}>Edit</button>
                    <button onClick={() => deleteCampaign(id)}>X</button>
                </td>
            </tr>
         );
    }
    
    
}
 
export default Campaign;