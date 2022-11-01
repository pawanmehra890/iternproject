import React from "react";
import './index.css'
const Cart=({cartitem,remove,removeifull,additemmss})=>{
   

    
 const Totalprice=cartitem.reduce((prices,item)=>prices+item.price*item.quatntity,0)



   return(
      <>
   
   <div className="container">
      <div className="">
         {
             cartitem.length===0&&(<div > <h1 style={{color:'red'}}>No item added yet</h1></div>)
         }
      </div>
   </div>
 

<div class="container">

	<h1>Shopping Cart</h1>

	<div class="cart">

		<div class="products">
      {
               cartitem.map((items)=>{
                  return(
                     <>
			<div class="product">
        
				<img src={items.image} style={{width:200}}/>

				<div class="product-info">

				 
   <h3 class="product-name">{items.name}</h3>

<h4 class="product-price">{items.price}</h4>

<h4 class="product-offer">40%</h4>

<p class="product-quantity">Qnt: <button onClick={()=>remove(items)}>-</button> <input value={items.quatntity} name=""/><button onClick={()=>additemmss(items)} >+</button> </p>

<p class="product-remove">

   <i class="fa fa-trash" aria-hidden="true"></i>

   <span class="remove"> <button class="remove" onClick={()=>removeifull(items)}>Remove</button> </span>

</p>

</div>             
		</div>
 </>
                  )
               })
            }
		

			</div>

			

		</div>

		<div class="cart-total">

			

			<p>

				<h2>Number of Items</h2>
   {
      cartitem.map((ite)=>{
         return(
            <>
            <div className="">
          <h4>{ite.name}:</h4>
            </div>
           
        <h4>{ite.quatntity}</h4>
            </>
         )
      })
   }
			

			</p>
         <p>

<h3>Total Price</h3>

<h3>{Totalprice}</h3>

</p>
     	<a href="#">Proceed to Checkout</a>

		</div>

	</div>








      </>
   )
}
export default Cart