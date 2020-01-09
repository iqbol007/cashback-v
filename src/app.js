
const regularPerchasesPercent =  1;
const increasedPurchasesPercent =  5;
const specialPurchasesPercent = 30;
const cashbackLimit = 3000;
    let purchases = 
    [
        a={sum:0,category:{regular:324,increaced:124,special:12}},
        b={sum:0,category:{regular:19,increaced:91,special:95}},
        c={sum:0,category:{regular:284,increaced:32,special:49}}
    ];
function allSum(i)
{
   return purchases[i].sum = purchases[i].category.regular
   +purchases[i].category.increaced+purchases[i].category.special;
}
    let regularPurchasesCashback, 
    increacedPurchasesCashback , 
    specialPurchasesCashback ; 
 
function cash(purchases,i) 
{
    regularPurchasesCashback = purchases[i].category.regular*regularPerchasesPercent,
    increacedPurchasesCashback = purchases[i].category.increaced*increasedPurchasesPercent,
    specialPurchasesCashback = purchases[i].category.special*specialPurchasesPercent;
    let cashback = regularPurchasesCashback + specialPurchasesCashback + increacedPurchasesCashback;
if (cashback < cashbackLimit) {
    return cashback;
}else 
{
    cashback = cashbackLimit;
    return cashback;
} 
}
 for (let i = 0; i < purchases.length; i++) 
 {
      console.log(`Покупка: ${i+1}`);
      console.log(`Кешбек по категории regular ${ purchases[i].category.regular*regularPerchasesPercent}`);
      console.log(`Кешбек по категории increaced ${purchases[i].category.increaced*increasedPurchasesPercent}`);
      console.log(`Кешбек по категории special ${purchases[i].category.special*specialPurchasesPercent}`);
      console.log(`Суммарно: ${cash(purchases,i)}`);
     
 }

