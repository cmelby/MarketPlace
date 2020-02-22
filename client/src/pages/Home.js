  
import React, {useEffect} from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from "react-bootstrap/Jumbotron";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import API from "../utils/API";
import { Link } from "react-router-dom";
import {UPDATE_PRODUCT_LIST, LOADING, ADD_PRODUCT } from "../utils/actions";
import {useStoreContext} from "../utils/GlobalState";
import 'bootstrap/dist/css/bootstrap.min.css';


const Landing = () => {
    const [state,dispatch] = useStoreContext();

    const getProductList = () => {
        dispatch({type: LOADING});
        API.searchProduct("")
            .then(res =>{
                dispatch({
                    type: UPDATE_PRODUCT_LIST,
                    productList: res.data
                });
            }).catch(err =>{
                console.log(err);
            });
    };
    const addToCart = () => {
        API.addProduct(state.currentProduct)
            .then(()=>{
                dispatch({
                    type: ADD_PRODUCT,
                    product: state.currentProduct
                });
            }).catch(err =>{
                console.log(err);
            });
    };

    useEffect(() => {
        getProductList();
    },[]);

    return(
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{heigth: "300px"}}
      src="https://9to5mac.com/wp-content/uploads/sites/6/2018/11/black-friday-apple.jpg?quality=82&strip=all&w=1600"
      alt="First slide"
    />
    <Carousel.Caption>
        
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{heigth: "300px"}}
      src="https://images.frys.com/art/deals/tralfaz/OLED_TV_Landing_Page_17-10-2016/images/lgbanner01.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <h2 className="text-black">Find The Greatest Selection of Products Directly From The Best Buy API</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{heigth: "300px"}}
      src="https://www.lg.com/us/images/MC/features/V50-Banner-D.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            <Container>
            {state.loading ? (<Spinner animation="border" className="loading"/>) : (
                <CardColumns className="mt-3">
                    {state.productList.length ? (
                        state.productList.map((product,index)=>(
                        <Card key={index} style={{ width: '18rem' }} className="shadow-sm">
                            <Card.Img   className="ml-5 pl-5 pt-5" src={product.image} style={{ width: '45%' } }/>
                            <Card.Body>
                                <Card.Title><Link to={"/product/" + product.sku}>{product.name}</Link></Card.Title>
                                <h3>Price: ${product.regularPrice}</h3>
                                <Card.Text className="text-truncate" >{product.shortDescription}</Card.Text>
                                    <Button href={"/product/" + product.sku}>View Product</Button>
                                <Button variant="success" className="ml-1 text-center" size="md" onClick={()=>addToCart()}>View Product</Button>
                            </Card.Body>
                        </Card>
                        ))
                    ):(
                        <h1>No Results</h1>
                    )}
                </CardColumns>
            )}
            </Container>
                <Jumbotron fluid className="bg-dark text-white mb-0">
                    <Container>
                    <h1>Find top products at the lowest prices!</h1>
                        <p>
                            Online Maketplace carries all the top products for every categorie straight from Best Buy.
                        </p>
                        
                    </Container>
                </Jumbotron>
        </div>
    );

};

export default Landing;



