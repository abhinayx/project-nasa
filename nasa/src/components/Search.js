import React,{Component} from 'react';
import axios from 'axios';

class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            parameter:'',
            results: [],
            links : null,
        };
    }

handleChange =(event) =>{
    this.setState({
        parameter:event.target.value
    });
};

handleSubmit = (event) =>{
    event.preventDefault();
    this.makeApiCall(this.state.parameter)
}

    makeApiCall = (searchInput) =>{
        var url=`https://api.unsplash.com/search/photos?page=1&query=${searchInput}&client_id=hLoCHMP5Gx3gD4bWpao2YCDcHPKRC8FBooqX2rB6TzE`;
        axios.get(url)
        .then((response)=>
        {
            this.setState({
                results: response.data.results
            })
        })
        .catch((error)=>{
            this.setState({
                error:true
            })
        });
    }
        
    
    render(){
            return(
                <div className="search"> 
                             <form onSubmit={this.handleSubmit}>
                             <h1>Search</h1>
                             <input onChange={this.handleChange} type ='Search' value={this.state.parameter}/> 
                             </form>

                             {this.state.results ? (
                                    <div id="meals-container">
                                        {this.state.results.map((item, index) => (
                                        <div class="single-meal" key={index}>
                                            <img src={item.urls.small} alt="meal-thumbnail" />
                                        </div>
                                        ))}
                                    </div>
                                ) : (
                                <p>Try searching for another photo...</p>
                                )}
              
                        </div>
            
        )
    }
}

export default Search;