import React, {Component} from "react";
import { Table } from "react-bootstrap";
import { Button,ButtonToolbar } from "react-bootstrap";
import AdminNavbar from "./Shared/Navbar/AdminNavbar";


export class Person extends Component{
    
    constructor(props){
        super(props);
        this.state ={stck:[], addModalShow: false, editModalShow:false}
    }

    componentDidMount(){
        this.refreshList();
    }
    refreshList(){
        fetch("https://localhost:44327/api/Person")
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
                <th>User ID</th>
                <th>Name</th>
                <th>Adress</th>
                <th>Phone</th>
                <th>Active Status</th>
                <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {stck.map(stk=>
                    <tr key ={stk.Person_ID} >
                    <td>{stk.Person_ID}</td>
                    <td>{stk.Name}</td>
                    <td>{stk.Address}</td>
                    <td>{stk.Phone}</td>
                    <td>{stk.IsActive}</td>
                    
                    <td>{stk.Password}</td>
                    <td>
                      {/*   <ButtonToolbar>
                            <Button 
                            className="mr-2" 
                            variant="info"
                            onClick={() =>
                            this.setState({
                                editModalShow:true, did:stk.Person_ID,dname:stk.Name,blood:stk.Address, dunit:stk.Phone,dhos:stk.IsActive,dphone:stk.Phone,dstatus:stk.Password})}>
                                    Edit
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
                        </ButtonToolbar> */}
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