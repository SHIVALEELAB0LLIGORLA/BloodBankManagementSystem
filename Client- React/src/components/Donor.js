import React, {Component} from "react";
import { Table } from "react-bootstrap";
import { Button,ButtonToolbar } from "react-bootstrap";
import { AddDonorModal } from "./AddDonorModal";
import { EditDonorModal } from "./EditDonorModal";
import AdminNavbar from "./Shared/Navbar/AdminNavbar";


export class Donor extends Component{
    
    constructor(props){
        super(props);
        this.state ={stck:[], addModalShow: false, editModalShow:false}
    }

    componentDidMount(){
        this.refreshList();
    }
    refreshList(){
        fetch("https://localhost:44327/api/donor")
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
            <AdminNavbar></AdminNavbar>  
        <Table className="mt-4" striped boardered hover size="sm">
            
            <thead>
                <tr>
                <th>Donor ID</th>
                <th>Name</th>
                <th>Blood Group</th>
                <th>Units Donating</th>
                <th>Hospital</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Option</th>
                </tr>
            </thead>
            <tbody>
                {stck.map(stk=>
                    <tr key ={stk.Donor_ID} >
                    <td>{stk.Donor_ID}</td>
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
                                editModalShow:true, did:stk.Donor_ID,dname:stk.Name,blood:stk.BloodGroup, dunit:stk.Unit,dhos:stk.Hospital,dphone:stk.Phone,dstatus:stk.Status})}>
                                    Edit
                            </Button>
                            <EditDonorModal
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
       {/*  <ButtonToolbar>
        <Button
            variant="primary"
            onClick={() => this.setState({addModalShow:true})}>
                Donate 
            
        </Button>
        <AddDonorModal
        show={this.state.addModalShow}
        onHide={addModalClose}
        />
        </ButtonToolbar> */}
        </div> 
        )
    }
}