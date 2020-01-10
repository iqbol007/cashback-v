
const regularPerchasesPercent =  1;
const increasedPurchasesPercent =  5;
const specialPurchasesPercent = 30;
const cashbackLimit = 3000;
const REGULAR = `regular`;
const INCREACED = 'increaced';
const SPECIAL= 'special';
let cashback = 0;
    let purchases = 
    [
         {sum:2341,category:REGULAR},
         {sum:3121,category:INCREACED},
         {sum:981,category:SPECIAL}
    ];    
function cash(purchases,i) 
{
    if (purchases[i].category===REGULAR) 
    {   cashback = purchases [i].sum * regularPerchasesPercent;
        if (cashback>cashbackLimit) {
            return cashbackLimit;
        }
        else return cashback; 
    }else if(purchases[i].category===INCREACED)
    {
        cashback =  purchases[i].sum*increasedPurchasesPercent;
        if (cashback>cashbackLimit) {
            return cashbackLimit;
        }
        else return cashback; 
    }else if(purchases[i].category===SPECIAL)
    {
        cashback =  purchases[i].sum * specialPurchasesPercent;
        if (cashback>cashbackLimit) {
            return cashbackLimit;
        }
        else return cashback; 
    }
    else return 0;
}

for (let i = 0; i < purchases.length; i++) {
    console.log(cash(purchases,i));   
}