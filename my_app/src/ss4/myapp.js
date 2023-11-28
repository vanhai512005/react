import React,{component} from "react";
class  Student extends React.Component{
    constructor(props){
        //goi den constructor cua lop component
        super(props);
        //this: la noi den doi tuong hien tai trong class
        this.state ={
            name : "Le Van Hai",
            email : "hai@gmail.com"

        }
    }
    render(){
        return(
            <div>
              <h3>Hello React Component Class</h3>  
              <h1>Welcome{this.state.name}</h1>
              <h1>Your email{this.state.email}</h1>
            </div>
            
        );
    }

}
    export default Student;
