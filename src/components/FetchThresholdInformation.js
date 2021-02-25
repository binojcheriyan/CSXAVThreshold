import React from 'react';
import '../App.css';
import  'bootstrap/dist/css/bootstrap.min.css'

export default class FetchThresholdInformation extends React.Component{
    
state={
    loading:true,
    result:null,
}

    async componentDidMount(){
        const url="http://guaemeaham1.mx.hpicorp.net/CSXAPI/api/CSXAvailableThreshold";
        const response= await fetch(url);
        const data=await response.json();
        this.setState({result: data, loading: false})
    }
    
    render(){
        if(this.state.loading){
            return <div className="App">loading...</div>;
        }

        if(!this.state.result){
            return <div className="App">didn't get a response</div>;
        }

        return (
                <div className="container bg-light">
                    <h2 className="text-center p-5">SPECIFICAV THRESHOLD IN CSX</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="text-center" scope="col">Name</th>
                                <th className="text-center" scope="col">AMS</th>
                                <th className="text-center" scope="col">APJ</th>
                                <th className="text-center" scope="col">EMEA</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.result.map((item, index)=>{
                            return(
                                <tr key={index}>
                                    <td className="text-center font-weight-bold" >{item.Name}</td>
                                    <td className="text-center" >{item.AMS}</td>
                                    <td className="text-center" >{item.APJ}</td>
                                    <td className="text-center" >{item.EMEA}</td>
                                </tr>
                            )   
                        })}
                        </tbody>
                        </table>
                </div>)
    }
}