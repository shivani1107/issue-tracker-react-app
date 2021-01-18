import logo from './logo.svg';
import './App.css';
import React from 'react';
import HeaderComponent from './HeaderComponent';
import IssueListComponent from './components/IssueListComponent';
import FooterComponent from './FooterComponent';

function App() {
  return (
   <React.Fragment>
     <HeaderComponent/>
   <IssueListComponent/>
   <FooterComponent/>
   </React.Fragment>
  );
}

export default App;
