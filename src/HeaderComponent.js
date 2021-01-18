import React from 'react';
import NavigationPanelCOmponent from './NavigationPanelCOmponent';
class HeaderComponent extends React.Component{
   constructor(props){
       super(props);
       this.state={
           logoText:"issue tracker app"
       }
   }
    render(){
        return(
            <div>
                <NavigationPanelCOmponent logoText={this.state.logoText}/>
            </div>
        );
    }
}
export default HeaderComponent;