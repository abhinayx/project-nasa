import React, { Component } from 'react'


export default class Weather extends Component {
    constructor(props){
        super(props);
        this.state={
            result:[],
            error:false

        };
    }
    
    componentDidMount(){
        const url='https://api.nasa.gov/insight_weather/?api_key=Cpdl2sJ3kFTf8J7fPkbfexTwS3Ld6P6YTL2Fvskk&feedtype=json&ver=1.0';
        fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            this.setState({
                result:data
            })
        })
        .catch((error)=>{
            this.setState({
                error:true
            })
        });
    }

    
    render(){

        const{result}=this.state;
        return (
            <div className="weather">
                {
                    Object.keys(result).filter((soldays)=>soldays !== 'validity_checks' && soldays !=='sol_keys').map((soldays,i)=>{
                        var av= result[soldays]['PRE']['av']
                        var bc=[av]                      
                        return (
                        <div><h4>{bc}</h4>
                        
                        </div>

                        
                        )
                    })
                }
            </div>
        )
    }
}
