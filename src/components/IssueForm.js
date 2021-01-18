import React from 'react';
const IssueForm = (props) => {
    return (
        <div id="issue-form">
            <form className="mt-5" onSubmit={props.addIssue}>
                <div className="form-row align-items-center">
                    <div className="col-lg-8">
                        <label for="taskName">Your Task</label>
                        <input type="text" className="form-control" id="taskName" value={props.currentIssue}
                            onChange={props.updateIssue} />
                        <small id="taskHelp" className="form-text text-muted">Add your issue that you want to assign to your team mate</small>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mt-2">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default IssueForm;