import React from "react";

class MemeGenerator extends React.Component {
    constructor() {
        super();
        this.state= {
            topText: "",
            bottomText: "",
            randomImage: "https://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }
    
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data;
                  this.setState({
                      allMemeImgs: memes
                  });
            });
    }
    
    changeHandler(event) {
        console.log(this.state.allMemeImgs.length);
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }
    
    submitHandler(event) {
        event.preventDefault();
        const randNumber = Math.floor(Math.random() * 100);
        const randomURL = this.state.allMemeImgs[randNumber].url;
        this.setState({
            randomImage: randomURL
        });
    }
    
    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.submitHandler}>
                    <input 
                        name="topText"
                        placeholder="Top text" 
                        value={this.state.topText} 
                        onChange={this.changeHandler}
                    />
                    <input 
                        name="bottomText"
                        placeholder="Bottom text" 
                        value={this.state.bottomText} 
                        onChange={this.changeHandler}
                    />
                    <button>
                        Gen
                    </button>                    
                </form>
                <div className="meme">
                    <img src={this.state.randomImage} />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        );
    }
}

export default MemeGenerator;