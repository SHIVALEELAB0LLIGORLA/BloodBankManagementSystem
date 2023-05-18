import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import AdminNavbar from './Shared/Navbar/AdminNavbar';

export class Stock extends Component{
    constructor(props){
        super(props);
        this.state={docs:[],addModalShow:false,editModalShow:false}
}
componentDidMount(){
    this.refreshList();
}
refreshList(){
    fetch('https://localhost:44327/api/stock')
    .then(response=>response.json())
    .then(data=>{
    this.setState({docs:data});
}
);}

componentDidUpdate(){
    this.refreshList();
}

render(){
    const{docs,stock_ID,blood_Group, unit_Available}=this.state;
    //let addModalClose=()=>this.setState({addModalShow:false});
    //let editModalClose=()=>this.setState({editModalShow:false});
    return(
        
     <div>  
        <AdminNavbar></AdminNavbar>
        <h3>Blood Stock Details</h3>
        <Table className="mt-4" striped bordered hover size="sm">
            <thead>
                <tr>
                <th>Stock ID</th>
                <th>Blood Group</th>
                <th>Unit Available</th>
                </tr>
            </thead>
            <tbody>
                {docs.map(doc =>
                    <tr key ={doc.Stock_ID} >
                    <td>{doc.Stock_ID}</td>
                    <td>{doc.Blood_Group}</td>
                    <td>{doc.Unit_Available}</td>
                    
                    {/* 
                    <td>
                    <ButtonToolbar>
                        <Button
                            className="mr-2"
                            variant="info"
                            onClick={()=>this.setState({editModalShow:true,stock_ID:doc.Stock_ID,blood_Group:doc.Blood_Group,unit_Available:doc.Unit_Available})}>
                            Update
                        </Button>
                        
                            <StockEditModal
                            show={this.state.editModalShow}
                            onHide={editModalClose}
                            stock_ID={stock_ID}
                            blood_Group={blood_Group}
                            unit_Available={unit_Available}
                        />
                    </ButtonToolbar> 
                    </td> */}
                    </tr>
                )}
            </tbody>
        </Table>
        {/* <ButtonToolbar>
            <br></br>
        <Button 
        variant='primary' 
        onClick={() => this.setState({ addModalShow: true })}>Add Stock</Button>
        <StockAddModal
            show={this.state.addModalShow}
            onHide={addModalClose}
        />
        </ButtonToolbar>  */}
            </div> 
    )}

}
