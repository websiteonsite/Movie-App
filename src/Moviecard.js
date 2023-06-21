import {Component} from "react";

class Moviecard extends Component{
    constructor(){
        super();
            this.state = {
                title: "The Avengers",
                plot: "Supernatural powers shown in the movie",
                price: "Rs.199",
                rating: 8.9,
                stars: 0
            }
            // this.addStars = this.addStars.bind(this);
        }

        deleteStars = () => {

            if(this.state.stars <=0){
                return;                   
            }

            this.setState((prevState) => {
                return{
                    stars: prevState.stars - 0.5
                }
            });
        }
        addStars = () => {
            //form 1
            // this.setState({
            //     stars: this.state.stars + 0.5
            // });
        
            // second form
            if(this.state.stars >= 5){
                return;                   
            }
            this.setState((prevState) => {
                return{
                    stars: prevState.stars + 0.5
                }
            }, () => console.log("stars inside callback",this.state.stars));//synchronous nature

         console.log("stars:", this.state.stars); //asynchronous nature

        // addStars = () => {
        //     this.state.stars += 0.5;
        //     console.log(this.state.stars);
        //  }
       



    // addStars = () => {
    //      console.log("this.state", this);
    //     // console.log("stars are added");
    }

render() {
    const {title, plot, price, rating, stars } = this.state;
    return(
        <div className="main">
            <div className="movie-card">
                <div className="left">
                    <img alt="poster" src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"></img>
                </div>

                <div className="right">
                    <div className="title">{title}</div>

                    <div className="plot">{plot}</div>

                    <div className="price">{price} </div>
                    <div className="footer">
                    <div className="rating">{rating}</div>

                    <div className="star-dist">

                    <img className="stars" alt="decrease" 
                        src="https://cdn-icons-png.flaticon.com/512/659/659892.png"
                        onClick={this.deleteStars}
                       />
                    
                    <img className="stars" alt="increase" 
                        src="https://w7.pngwing.com/pngs/68/239/png-transparent-number-computer-icons-plus-miscellaneous-game-plus.png"
                       onClick={this.addStars}
                       />
                    <img alt="star" 
                        src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png"
                        className="stars" />
                    <span className="starCount">{stars}</span>

                    </div>
                    

                    <button className="favourite-btn"> Favourite</button>
                    <button className="unfavourite-btn">UnFavourite</button>
                    <button className="cart-btn">Add to Cart</button>
                </div>
                </div>
                </div>
        </div>
    )
}

}
export default Moviecard;