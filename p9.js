let tax = 20;
function monthlySavings(...params){
    let salaries = params[0];
    let livingCost = params[1];
    if(Array.isArray(salaries) && !isNaN(livingCost)){
        let totalSalary = 0;
        let totalTax = 0;
        salaries.forEach(salary=>{
            if(salary >= 3000){
                totalTax += salary * (tax/100);
                totalSalary += salary;
            }else{
                totalSalary += salary;
            }
        })
        let savings = totalSalary - (totalTax + parseInt(livingCost));
        if(savings >= 0) return savings;
        else return "earn more";
    }else{
        return "invalid input";
    }
}

console.log(monthlySavings([1000,2000,3000],5400));
console.log(monthlySavings([1000,2000,2500],5000));
console.log(monthlySavings([900,2700,3400],10000));
console.log(monthlySavings(100,[900,2700,3400]));