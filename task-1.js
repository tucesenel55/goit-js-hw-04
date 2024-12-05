function isEnoughCapacity(products, containerSize){
 
  const values=Object.values(products)

  let sum=0
  
  for(let i=0;i<values.length;i++){
  
    sum+=values[i]
  }


  if(sum<=containerSize){
    return true
  }

  else{
    return false
  }
}

