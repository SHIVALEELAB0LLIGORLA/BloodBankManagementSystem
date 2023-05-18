import React, {Component} from "react";
import { Table } from "react-bootstrap";
import { Button,ButtonToolbar } from "react-bootstrap";
import { EditReceiverModal } from "./EditReceiverModal";

export class Receiver extends Component{
    
    constructor(props){
        super(props);
        this.state ={stck:[], addModalShow: false, editModalShow:false}
    }

    componentDidMount(){
        this.refreshList();
    }
    refreshList(){
        fetch("https://localhost:44327/api/Receiver")
        .then(response=>response.json())
        .then(data=>{
            this.setState({stck:data})
        }
        );
    } 
    componentDidUpdate(){
        this.refreshList();
    }
    render(){
        const{stck,did,dname,blood,dunit,dhos,dphone,dstatus} = this.state;   
        let addModalClose = () => this.setState({addModalShow:false});     
        let editModalClose = () => this.setState({editModalShow:false});     
        return(  
        
        <div>  
          
        
        <Table className="mt-4" striped boardered hover size="sm">
            
            <thead>
                <tr>
                <th>Receiver ID</th>
                <th>Name</th>
                <th>Blood Group</th>
                <th>Units Received</th>
                <th>Hospital</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Option</th>
                </tr>
            </thead>
            <tbody>
                {stck.map(stk=>
                    <tr key ={stk.Receiver_ID} >
                    <td>{stk.Receiver_ID}</td>
                    <td>{stk.Name}</td>
                    <td>{stk.BloodGroup}</td>
                    <td>{stk.Unit}</td>
                    <td>{stk.Hospital}</td>
                    <td>{stk.Phone}</td>
                    <td>{stk.Status}</td>
                    <td>
                        <ButtonToolbar>
                            <Button 
                            className="mr-2" 
                            variant="info"
                            onClick={() =>
                            this.setState({
                                editModalShow:true, did:stk.Receiver_ID,dname:stk.Name,blood:stk.BloodGroup, dunit:stk.Unit,dhos:stk.Hospital,dphone:stk.Phone,dstatus:stk.Status})}>
                                    Approve/Reject
                            </Button>
                            <EditReceiverModal
                            show = {this.state.editModalShow}
                            onHide={editModalClose}
                            did = {did}
                            dname = {dname}
                            blood = {blood}
                            dunit = {dunit}
                            dhos = {dhos}
                            dphone = {dphone}
                            dstatus = {dstatus}

                            />
                        </ButtonToolbar>
                    </td>
                    </tr>)
                }
            </tbody>
        </Table>
        {/* <ButtonToolbar>
            <br></br>
         <Button
            variant="primary"
            onClick={() => this.setState({addModalShow:true})}>
                Request Blood
            
        </Button>
        <AddReceiverModal
        show={this.state.addModalShow}
        onHide={addModalClose}
        />
        </ButtonToolbar> */}
        </div> 
        )
    }
}