import React,{useState} from 'react';
import { Card, Container } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';
import { useStateValue } from "../../StateProvider"
import Login from '../Login/LoginScreen'
import Signup from '../SignUp/SignUp'

function Products({id,title,image,price,rating}) {
    const [{ user }, dispatch] = useStateValue();
    const [isLogin, setisLogin] = useState(false);
    const [isSignup, setisSignup] = useState(false);
    const addToCart = ()=>{
        dispatch({
          type: "ADD_TO_CART",
          
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            },
          
        });
    }
    const signinToPurchase = () =>{
        setisLogin(true);
    }

    return (
        <>
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} style={{height:'140px',width:'70px',marginLeft:'38%'}} className='mt-1' />
                <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text className='d-flex flex-row justify-content-center'>
                        
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                            <p>⭐</p>
                        ))}
                        </Card.Text>
                <Card.Text>
                ₹{price}
                </Card.Text>
                {user && <Button
                    variant="contained"
                    style={{backgroundColor:"#fbcc57"}}
                    startIcon={<AddShoppingCartSharpIcon />}
                    onClick={addToCart}
                  >
                   Add to Cart
                    </Button>}
                    {!user && <Button
                        variant="contained"
                        style={{backgroundColor:"#fbcc57"}}
                        onClick={signinToPurchase}
                      >
                       Sign-in To Purchase 
                      </Button>}
                 </Card.Body>
            </Card>
            <br/>
            </Container>
            {isLogin &&
                <Login
                show={isLogin}
                onHide={() => setisLogin(false)}
                openSignup={() => setisSignup(true)}
                />
            }
            {
                isSignup &&
                <Signup
                    show={isSignup}
                    onHide={() => setisSignup(false)}
                    openLogin={() => setisLogin(true)}
                />
            }
        
        </>
    )
}

export default Products
