import React, { Component } from 'react'

class MarsRover extends Component {
    constructor(props){
        super(props);
        this.state={
            images:[],
            error:false
        };
    }
    componentDidMount(){
        const url='https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=Cpdl2sJ3kFTf8J7fPkbfexTwS3Ld6P6YTL2Fvskk';
        
        fetch(url)
        .then((response)=> {
            return response.json();
        })
        .then((data)=>{
            this.setState({
                images: data.photos
            })            
        })
        .catch((error)=>{
            this.setState({
                error:true
            })
        });
    }
    renderItems(){
        if(!this.state.error){
            return this.state.images.map((item)=>(
                <div key={item.id} item={item}>
                <img src={item.img_src} alt='mars' width='400px' height='400px'/>
                <h4>Camera Name: {item.camera.name}, Rover Name: {item.rover.name}, Landing Date: {item.rover.landing_date}</h4>
                </div>
            ));
        }
        else{
            return <h1>Error</h1>
        }
    }

    
    render(){
        return (
            <div className='mars'>
                <div  className='mars_child'>       
                </div>


                <div className='mars_child'>
                    
                    <h3>Mars Rover</h3> {this.renderItems()}

                </div>


                <div className='mars_child'>
                </div>
            
            </div>
            
        )
    }
    
}

export default MarsRover
