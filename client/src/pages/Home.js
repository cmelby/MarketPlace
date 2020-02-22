  
import React, {useEffect} from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from "react-bootstrap/Jumbotron";
import Spinner from "react-bootstrap/Spinner";
import API from "../utils/API";
import { Link } from "react-router-dom";
import {UPDATE_PRODUCT_LIST, LOADING} from "../utils/actions";
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
      src="https://cnet4.cbsistatic.com/img/Cy_16sIzu0lsQPwr028jIErjnAE=/2017/10/25/fe670436-9b70-4b56-ba1c-91a097a74b91/best-buy-apple-sale.png"
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{heigth: "300px"}}
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRv7Uxpacy1TXWnDPfNyn_iTTHX25KdtKZCj0m_S-8u64yyTNQP"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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



