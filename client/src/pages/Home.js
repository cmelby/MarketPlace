  
import React, {useEffect} from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
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
        API.searchProduct(state.searchTerm)
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
            {state.loading ? (<Spinner animation="border" className="loading"/>) : (
                <CardColumns className="mt-3">
                    {state.productList.length ? (
                        state.productList.map((product,index)=>(
                        <Card key={index} style={{ width: '18rem' }} className="shadow-sm">
                            <Card.Img variant="top"  className="ml-5 pl-5 pt-5" src={product.image} style={{ width: '20%' }}/>
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
        </div>
    );

};

export default Landing;



