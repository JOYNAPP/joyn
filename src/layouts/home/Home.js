import React, { Component } from 'react'
import { AccountData, ContractData, ContractForm } from 'drizzle-react-components'
import logo from '../../logo.png'

class Home extends Component {
  render() {

    console.log('JoinUp in Home from props', this.props.JoinUp);
    console.log('accounts', this.props.accounts)

    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1 header">
            <img src={logo} alt="drizzle-logo" />
            <h1>Drizzle Examples</h1>
            <p>Examples of how to get started with Drizzle in various situations.</p>

            <br/><br/>
          </div>

          <div className="pure-u-1-1">
            <h2>Active Account</h2>
            <h3>Owner</h3>
            <AccountData accountIndex="0" units="ether" precision="3" />    
            <h3>Buyers</h3>
            <h4>1</h4>      
            <AccountData accountIndex="1" units="ether" precision="3" />
            <h4>2</h4> 
            <AccountData accountIndex="2" units="ether" precision="3" />
            <h4>3</h4> 
            <AccountData accountIndex="3" units="ether" precision="3" />
            <h4>4</h4> 
            <AccountData accountIndex="4" units="ether" precision="3" />

            <h4>Lemme Buy!!!!! (Give Right To Buy)</h4>
            <ContractForm contract="JoinUp" method="giveRightToBuy" />
            <h2>IT ME</h2>
            <ContractData contract="JoinUp" method="eventcreator" />
            {/* <ContractData contract="JoinUp" method="proposals" /> */}
            {/* <ContractData contract="JoinUp" method="giveRightToBuy" /> */}

            <h4>Buy!!!! (.buy)</h4>

            <ContractForm contract="JoinUp" method="buy" />
            {/* <ContractData contract="JoinUp" method="buy" /> */}


            <br/><br/>
          </div>

          <div className="pure-u-1-1">
            <h2>SimpleStorage</h2>
            <p>This shows a simple ContractData component with no arguments, along with a form to set its value.</p>
            <p><strong>Stored Value</strong>: <ContractData contract="SimpleStorage" method="storedData" /></p>
            <ContractForm contract="SimpleStorage" method="set" />

            <br/><br/>
          </div>




          <div className="pure-u-1-1">
            <h2>TutorialToken</h2>
            <p>Here we have a form with custom, friendly labels. Also note the token symbol will not display a loading indicator. We've suppressed it with the <code>hideIndicator</code> prop because we know this variable is constant.</p>
            <p><strong>Total Supply</strong>: <ContractData contract="TutorialToken" method="totalSupply" methodArgs={[{from: this.props.accounts[0]}]} /> <ContractData contract="TutorialToken" method="symbol" hideIndicator /></p>
            <p><strong>My Balance</strong>: <ContractData contract="TutorialToken" method="balanceOf" methodArgs={[this.props.accounts[0]]} /></p>
            <h3>Send Tokens</h3>
            <ContractForm contract="TutorialToken" method="transfer" labels={['To Address', 'Amount to Send']} />

            <br/><br/>
          </div>

          <div className="pure-u-1-1">
            <h2>ComplexStorage</h2>
            <p>Finally this contract shows data types with additional considerations. Note in the code the strings below are converted from bytes to UTF-8 strings and the device data struct is iterated as a list.</p>
            <p><strong>String 1</strong>: <ContractData contract="ComplexStorage" method="string1" toUtf8 /></p>
            <p><strong>String 2</strong>: <ContractData contract="ComplexStorage" method="string2" toUtf8 /></p>
            <strong>Single Device Data</strong>: <ContractData contract="ComplexStorage" method="singleDD" />

            <br/><br/>
          </div>
        </div>
      </main>
    )
  }
}

export default Home
