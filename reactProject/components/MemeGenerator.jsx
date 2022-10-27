import { Component } from 'react'

class MemeGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topText: '',
            bottomText: '',
            randomImg: "https://i.imgflip.com/m78d.jpg",
            allMemeImgs: []
        }
        this.ChangeHendle =  this.ChangeHendle.bind(this)
       
        this.hendelSubmit =  this.hendelSubmit.bind(this)
    }

    ChangeHendle(e){
        const {value, name} = e.target
const inputText = value
this.setState({[name]:inputText})
    }

    hendelSubmit(e){
        e.preventDefault()
        const {allMemeImgs} = this.state
        const random = Math.floor(Math.random()* allMemeImgs.length) 
this.setState({randomImg:allMemeImgs[random].url})
console.log(allMemeImgs[random].url);
    }

  

    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(res => {
            const {memes} = res.data
            this.setState({allMemeImgs:memes})
            console.log(this.state.randomImg);
            })
        
    }
    
    
    render() {
        return (
            <div>
                <form className='meme-form' onSubmit={this.hendelSubmit}>
                    <input onChange={this.ChangeHendle} value={this.state.topText} name={'topText'} placeholder={'topText'} type="text" />
                    <input onChange={this.ChangeHendle} value={this.state.bottomText} name={'bottomText'} placeholder={'bottomText'} type="text" />
                    <button >Gen</button>
                </form>
                <div className='meme'>
                    <img src={this.state.randomImg} alt="" />
                    <h2 className='top'>{this.state.topText}</h2>
                    <h2 className='bottom'>{this.state.bottomText}</h2>
                </div>
            </div>
            
        );
    }
}


export default MemeGenerator;