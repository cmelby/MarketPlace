import React, {useEffect} from "react";
import {SET_CURRENT_PRODUCT, ADD_PRODUCT, REMOVE_PRODUCT, LOADING} from "../utils/actions";
import {useStoreContext} from "../utils/GlobalState";
import API from "../utils/API";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from "react-bootstrap";

const Product = (props) =>{
    const [state,dispatch] = useStoreContext();
    // console.log(state.currentProduct);
    // console.log(state.cartList);

    const getProductInfo = () => {
        dispatch({type: LOADING});
        API.getProductInfo(props.match.params.sku)
            .then(result =>{
                var source;
                if(result.data.source = "null"){
                    source = "Best Buy";
                } else{
                    source = result.data.source;
                }
                dispatch({
                    type: SET_CURRENT_PRODUCT,
                    product: {
                        sku: result.data.sku,
                        title: result.data.name,
                        seller: source,
                        price: result.data.regularPrice,
                        description: result.data.longDescription,
                        thumbnail_url: result.data.image
                    }
                });
            }).catch(err=>{
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

    const removeFromCart = () => {
        API.removeProduct(state.currentProduct.sku)
            .then(()=>{
                dispatch({
                    type: REMOVE_PRODUCT,
                    sku: state.currentProduct.sku
                });
            }).catch(err =>{
                console.log(err);
            });
    };

    const checkCartList = () => {
        for(let i = 0; i < state.cartList.length; i++){
            if(state.currentProduct.sku === state.cartList[i].sku){
                return true;
            }
        }
        return false;
    };

    useEffect(() => {
        getProductInfo();
    },[]);

    return(
        <div className="mt-3">
            {state.loading ? (<Spinner animation="border" className="loading"/>) : (
            <Container className="mb-5 justify-content-center">
                <Row>
                    <Card className="shadow-sm p-3"  >
                <Row>
                    <Col>
                        <Card.Img 
                        src={state.currentProduct.thumbnail_url} 
                        style={{ width: '18rem' }}  
                        className="mx-auto"/>
                    </Col>
                    <Col className="float-right">
                        <Row>
                            <Card.Title className="mt-2 float-right text-left">{state.currentProduct.title}</Card.Title>
                        </Row>
                        <Row>
                            <Card.Text className="mt-w float-right text-left">Sold by: 
                            {state.currentProduct.seller}
                            </Card.Text>
                            
                            <Card.Text className="text-left">
                                {state.currentProduct.description}
                            </Card.Text>
                        </Row>
                        <Row>
                            <h2 className="float-left"><span 
                                className="px-2">
                                ${state.currentProduct.price}</span></h2>
                        </Row>
                        {checkCartList() ? (
                            <Button variant="danger" className="text-center" size="lg" onClick={()=>removeFromCart()}>Remove from Cart</Button>
                        ) : (
                            <Button variant="success" className=" text-center" size="lg" onClick={()=>addToCart()}>Add to Cart</Button>
                        )}
                        </Col>
                    </Row>
                    </Card>
           
                </Row>
            </Container>
            )}
        </div>
    );
};

export default Product;
