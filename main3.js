function factorial(n) {
   
      var multi=1;
    if (n>0){
       
    for(i=1; i<=n ; i++){
        
        multi=multi*i;
    }
    
    return multi;
    }
    else{
        return null;
    }
}