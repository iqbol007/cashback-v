
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
         {sum:23401,category:REGULAR},
         {sum:31821,category:INCREACED},
         {sum:19831,category:SPECIAL}
    ];    
function cash(purchases,i) 
{
    if (purchases[i].category===REGULAR) 
    {   cashback = (purchases [i].sum/100) * regularPerchasesPercent;
        if (cashback>cashbackLimit) {
            return cashbackLimit;
        }
        else return cashback; 
    }else if(purchases[i].category===INCREACED)
    {
        cashback =  (purchases[i].sum/100)*increasedPurchasesPercent;
        if (cashback>cashbackLimit) {
            return cashbackLimit;
        }
        else return cashback; 
    }else if(purchases[i].category===SPECIAL)
    {
        cashback =  (purchases[i].sum/100) * specialPurchasesPercent;
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