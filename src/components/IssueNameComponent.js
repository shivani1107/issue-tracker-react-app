import React from 'react';

class IssueNameComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isEditable:false
        }
        this.renderForm=this.renderForm.bind(this);
        this.renderIssueList=this.renderIssueList.bind(this);
        this.toggleState=this.toggleState.bind(this);
        this.updateIssue=this.updateIssue.bind(this);
    }

    updateIssue(event){
        event.preventDefault();
        this.props.editIssue(this.props.index, this.input.value);
        this.toggleState();
    }

    toggleState(){
        const {isEditable}=this.state;
        this.setState({
            isEditable:!isEditable
        })
    }

    renderForm(){
        return(
            <div id="update-issue">
               <form className="mt-5" onSubmit={this.updateIssue}>
                   <div className="form-row align-items-center">
                       <div className="col-lg-8">
                           <label for="taskName">Edit Task</label>
                           <input type="text" className="form-control" id="taskName" 
                           defaultValue={this.props.issue.name} 
                           ref={(value)=>{this.input=value;}}
                           />
                       </div>
                       <div className="col-auto">
                           <button type="submit" className="btn btn-warning mt-4">
                               Update
                           </button>
                       </div>
                   </div>
               </form>
           </div>
        );
    }
    renderIssueList(){
        return(
        <li className="list-group-item" onClick={()=>{
            this.props.clickHandler(this.props.index)}}>
            <span className={this.props.issue.completed}>{this. props.issue.name}</span> &nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-warning"
            onClick={(event)=>{
                event.stopPropagation();
                this.toggleState();
            }}
            >Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-danger" onClick={(event)=>{
                event.stopPropagation();
                this.props.deleteIssue(this.props.index);
            }}>Delete</button>
        </li>
        );
    }

    render(){
        const {isEditable}=this.state;
        return(
           <section>
               {isEditable?this.renderForm():this.renderIssueList()}
           </section>
        );
    }
}
export default IssueNameComponent;
