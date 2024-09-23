function myBlog(){
    window.location.href='./blog.html';
}


const nav = document.querySelector('header');
window.addEventListener("scroll",function(){
  if(document.documentElement.scrollTop > 0){
    nav.classList.add("sticky");
  }
  else{
    nav.classList.remove("sticky");
  }
})


const title1 = document.getElementById('title1').innerText;
const title2 = document.getElementById('title2').innerText;
const title3 = document.getElementById('title3').innerText;


const donation = document.getElementById('donation-btn');
const history = document.getElementById('history-btn');

const card1 = document.getElementById('card-1-btn');
const card2 = document.getElementById('card-2-btn');
const card3 = document.getElementById('card-3-btn');





donation.addEventListener('click', function() {
  showDonationHistory('donation');

  donation.classList.add('activeBtn');
  donation.classList.remove('inactiveBtn');

  history.classList.remove('activeBtn');  
  history.classList.add('inactiveBtn');   
});




// History button click event
history.addEventListener('click', function() {
  showDonationHistory('history');

  history.classList.add('activeBtn');
  history.classList.remove('inactiveBtn');

  donation.classList.remove('activeBtn');  
  donation.classList.add('inactiveBtn');   
});


card1.addEventListener('click',function(){

  

  const input1 = document.getElementById('input1');
  const value1 = parseFloat(input1.value);
  const price1 = document.getElementById('price1');
  let price1Value = parseFloat(price1.innerText); 
  const balance = document.getElementById('available-balance');
  let balanceValue = parseFloat(balance.innerText);  


  
  if (value1 > balanceValue || value1 <= 0 || input1.value === '' || isNaN(input1.value)) {
    alert('Invalid donation amount');
  }
  
  else {
      
      balanceValue -= value1; 
      balance.innerText = balanceValue.toFixed(2);  
      
      price1Value = price1Value + value1;
      price1.innerText = price1Value;


      document.getElementById('history').innerHTML +=`
      <div class="border rounded-lg p-5 my-5 shadow-md">
           <h1 class="text-lg font-semibold pb-3">${value1} Taka is ${title1}</h1>
           <p class="text-gray-600 font-light">Date: ${new Date()}</p>
       </div>
     `

      modalShow('my_modal_1'); 
  }


})




card2.addEventListener('click',function(){

  const input2 = document.getElementById('input2');
  const value2 = parseFloat(input2.value);
  const price2 = document.getElementById('price2');
  let price2Value = parseFloat(price2.innerText); 
  const balance = document.getElementById('available-balance');
  let balanceValue = parseFloat(balance.innerText);


  
  if (value2 > balanceValue || value2 <= 0 || input2.value === '' || isNaN(input2.value)) {
    alert('Invalid donation amount');
     
  }
  
  else {

      balanceValue -= value2; 
      balance.innerText = balanceValue.toFixed(2);  
      
      price2Value = price2Value + value2;
      price2.innerText = price2Value;

      document.getElementById('history').innerHTML +=`
      <div class="border rounded-lg p-5 my-5 shadow-md">
           <h1 class="text-lg font-semibold pb-3">${value2} Taka is ${title2}</h1>
           <p class="text-gray-600 font-light">Date: ${new Date()}</p>
       </div>
     `

      modalShow('my_modal_2');  
  }


})


card3.addEventListener('click',function(){

  const input3 = document.getElementById('input3');
  const value3 = parseFloat(input3.value);
  const price3 = document.getElementById('price3');
  let price3Value = parseFloat(price3.innerText); 
  const balance = document.getElementById('available-balance');
  let balanceValue = parseFloat(balance.innerText);


  
  if (value3 > balanceValue || value3 <= 0 || input3.value === '' || isNaN(input3.value)) {
    alert('Invalid donation amount');
       
  }
  
  else {
      

      balanceValue -= value3; 
      balance.innerText = balanceValue.toFixed(2);  
      
      price3Value = price3Value + value3;
      price3.innerText = price3Value;


      document.getElementById('history').innerHTML +=`
    <div class="border rounded-lg p-5 my-5 shadow-md">
         <h1 class="text-lg font-semibold pb-3">${value3} Taka is Donated for ${title3}</h1>
         <p class="text-gray-600 font-light">Date: ${new Date()}</p>
     </div>
   `

      modalShow('my_modal_3'); 
  }



})

