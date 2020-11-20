import React,{Component} from 'react';
import '../App.css';

class Pod extends Component{
    constructor(props){
        super(props);
        this.state={
            img : [],
            error:false,
            title: null,
            explanation: null,
            url: null,
            media_type:null
        };
    }

    componentDidMount(){
        const url = 'https://api.nasa.gov/planetary/apod?api_key=Cpdl2sJ3kFTf8J7fPkbfexTwS3Ld6P6YTL2Fvskk';

           fetch(url)
           .then((response) => {
            return response.json();
          })
          .then((data) => {
            this.setState({
              img: data.articles,
              title: data.title,
              explanation: data.explanation,
              url: data.url,
              media_type: data.media_type
            })
          })
           .catch((error)=>{
               this.setState({
                   error:true
               })
           });
        }
    
    randomfunction(){
        if(this.state.media_type === "image"){
          return  <img src={this.state.url} alt='pod' width='400' height='400'/>
        }
        else{
           return <iframe src={this.state.url} allowFullScreen title='Video player' />
        }
    }

        
        

    render(){
        const {title,explanation} = this.state;

        return(
            
            <div className="pod_main">
                <div className='pod_child'> 
                <h3>Picture of the Day: {title}</h3>
                {/* <iframe src={url} allowFullScreen title='Video player'/> */}
                {this.randomfunction()}
                <h6>{explanation}</h6>
                </div>
            </div>
           
        )
    }
}

export default Pod;