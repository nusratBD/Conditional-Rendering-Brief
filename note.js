// 5 way of condition rendering
/* 
1. Option-01: if-else: Write the code before return and use the message variable inside return.
    let message;
    if (carts.length === 0) {
        message = <p className="alert-to-buy">Please Buy Some Product</p>
    }
    else if(carts.length<=3){
        message = <p className="alert-to-buy-more">Buy More</p>
    }
    else{
        message = <p className="thanks-alert">Thanks For Shopping!!</p>
    }
-------------------------------------------------------------------------------
2. Option-02: ternary operator:
            {
                carts.length === 0? <p className='alert-to-buy-more'>Dokane Jokhon Esecho, Kicho to Kino</p>:<p className='alert-to-buy'>Tumi Fokir Na, Buje Gechi</p>
            }
-------------------------------------------------------------------------------
3. Option-03: Logical &&. If the condition is true, the code will execute.
            {
                carts.length===3 && <p className='discount-50'>If you buy more, you will get 50% discount!!</p>
            }
--------------------------------------------------------------------------------
4. Option-04: Logical ||. If the condition is false, the code will execute. 
            {
                carts.length<6||<p className='special-client-alert'>Tumi Amader Special Client!!</p>
            }
*/

//==============================================================================
//2 ways of conditional style
/* 
Option-01: Only ternary operator 
            <h3 className={carts.length===1?'blue':carts.length===2?'lightseagreen':carts.length===3?'red': carts.length===4?'orchid':'special'}>Selected Items: {carts.length}</h3>
            {message}
--------------------------------------------------------------------------------
Option-02: ternary operator with template string 
            <h1 className={`bolder ${carts.length===1?'orchid':carts.length===2? 'lightseagreen': carts.length===3? 'red':carts.length===4?'blue':carts.length>=5?'special': 'black'}`}>Order Summary</h1>
 */