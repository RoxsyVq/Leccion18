function stringMultiplicar(n) {
var rpt=1;
var multi="";
    for(i=1; i<=10; i++){
        
        rpt=n*i;
       
        if(i<10){
            multi+=n+"x"+i+"="+rpt+"/";
        }
        else{
           multi+=n+"x"+i+"="+rpt; 
        }
        
    }
    return multi;
}
