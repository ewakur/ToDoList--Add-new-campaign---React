import React from 'react'
import '../style/Account.sass'

const Account = ({account}) => {
    
    return ( 
        <div className="account">
        <h2>Company account</h2>
        <div>{account} PLN</div>
        <hr/>
        </div>
     );
}
 
export default Account;