
const simplePerchasesPercent =  1;
const increasedPurchasesPercent =  5;
const specialPurchasesPercent = 30;
const cashbackLimit = 3000;
const SIMPLE = `simple`;
const INCREACED = 'increaced';
const SPECIAL= 'special';
let cashback = 0;      
    const purchases = [
        {
            sum: 12,
            category: SIMPLE
        },
        {
            sum: 15,
            category: INCREACED
        },
        {
            sum: 200,
            category: SIMPLE
        },
        {
            sum: 1030,
            category: SPECIAL
        },
    ];
    
    function takePercent(sum, percent){
        let answer = sum * percent / 100;
        return answer;
    }
    let predictCashback = 0;
    
    for(const purchase of purchases){
        if(purchase.category == SIMPLE){
            predictCashback += takePercent(purchase.sum, simplePerchasesPercent);
        } else if(purchase.category == INCREACED){
            predictCashback += takePercent(purchase.sum, increasedPurchasesPercent);
        } else if(purchase.category == SPECIAL){
            predictCashback += takePercent(purchase.sum, specialPurchasesPercent);
        }
        
    }
    
    if(predictCashback > cashbackLimit){
        predictCashback = cashbackLimit;
    }
    
    cashback = predictCashback;
    console.log(cashback);
     
 
   
 

 
    