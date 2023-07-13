const requestbtn = document.querySelector("#btn")
const adviceId = document.querySelector(".advNumber")
const adviceText = document.querySelector(".adviceText")






const sendRequest = async()=>{
    try{
        const response = await axios.get("https://api.adviceslip.com/advice")

      const requestId = response.data.slip.id;
      const requestText = response.data.slip.advice;
        adviceId.innerText = `Advice #${requestId}`;
        adviceText.innerText = `"${requestText}"`;
    }
    catch(e){
      adviceText.innerText = `"${e}"`;
    }
  
  } 




requestbtn.addEventListener("click" , ()=>{
   sendRequest()

})





 


