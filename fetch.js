function fetchData(){
    return new Promise((res,rej)=>{
        
    
setTimeout(()=>{
  const success=Math.random()>0.5;
  if(success){
    res("data is a resolved");
  }   else{
    rej("data is a rejected ");
  }
},1000)

    })
}

async function fetchData(){

     try {
    const result = await fetchData();
    console.log("Fetched data successfully!");
    console.log("Result:", result);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}
fetchData();