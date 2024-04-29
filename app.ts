/*import inquirer from "inquirer"
import chalk from "chalk"

const transactionHistory=[]

console.log(chalk.yellowBright("<<<<<<Welcome To PakPay>>>>>"));

const answers=await inquirer.prompt([
  {
    type:"input",
    name:"name",
    message:"Enter Your Name"
  },
  {
    type:"input",
    name:"password",
    message:"Enter Your Pin Code"

  },
  {
    type:"input",
    name:"accountNumber",
    message:"Enter Your Account Number"
  }
])
if (answers.name == "Sheharyar" && answers.password =="1234" && answers.accountNumber=="010101") {
  console.log(chalk.yellowBright(`<<<<<WELCOME ${answers.name} TO PAYPAK`));
  
} else {
  console.log(chalk.redBright("wrong creditentials"));
  
}

let balance:number=50000;

let app = await inquirer.prompt([
  {
    type:"list",
    name:"option",
    message:"What would you like to do?",
    choices:["Send Money","Bill Payment","Cash Deposit","Balance Enquiry","Logout"]
  }
])
if (app.option == "Send Money") {
  let sendMoney = await inquirer.prompt([
  
  {
    type:"input",
    name:"receiverAccountNumber",
    message:"Enter Receiver Account Number"
  },{
    type:"input",
    name:"amount",
    message:"Enter Amount"
    },
  {
    type:"input",
    name:"password",
    message:"Enter Your Pin Code"
  }
  ])
  if (sendMoney.password == answers.password) {
    if (sendMoney.receiverAccountNumber == answers.accountNumber) {
      console.log(chalk.redBright("You can't send money to yourself"));
    } else {
      if (sendMoney.amount > balance) {
        console.log(chalk.redBright("Insufficient Balance"));
      } else {
        balance = balance - sendMoney.amount;
        console.log(chalk.greenBright("Transaction Successful"));
        console.log(chalk.greenBright(`Your Balance is ${balance}`));
        transactionHistory.push(sendMoney);
      }
    }
  }
}

if (app.option == "Bill Payment") {
  let billPayment = await inquirer.prompt([
    {
      type:"list",
      name:"billName",
      message:"Select Your Bill",
      choices:["Electricity Bill","Water Bill","Gas Bill","Mobile Package"]
    }
  ])
  if (billPayment.billName == "Electricity Bill") {
    let electricityBill = await inquirer.prompt([
      {
        type:"input",
        name:"amount",
        message:"Enter Amount"
      },
      {
        type:"input",
        name:"password",
        message:"Enter Your Pin Code"
      }
    ])
    if (electricityBill.password == answers.password) {
      if (electricityBill.amount > balance) {
        console.log(chalk.redBright("Insufficient Balance"));
      } else {
        balance = balance - electricityBill.amount;
        console.log(chalk.greenBright("Transaction Successful"));
        console.log(chalk.greenBright(`Your Balance is ${balance}`));
        transactionHistory.push(electricityBill);
      }
    }
    if (billPayment.billName == "Water Bill") {
      let waterBill = await inquirer.prompt([
        {
          type:"input",
          name:"amount",
          message:"Enter Amount"
        },
        {
          type:"input",
          name:"password",
          message:"Enter Your Pin Code"
        }
      ])
      if (waterBill.password == answers.password) {
        if (waterBill.amount > balance) {
          console.log(chalk.redBright("Insufficient Balance"));
        } else {
          balance = balance - waterBill.amount;
          console.log(chalk.greenBright("Transaction Successful"));
          console.log(chalk.greenBright(`Your Balance is ${balance}`));
          transactionHistory.push(waterBill);
        }
      }
      if (billPayment.billName== "Gas Bill") {
        let gasBill = await inquirer.prompt([
          {
            type:"input",
            name:"amount",
            message:"Enter Amount"
          },
          {
            type:"input",
            name:"password",
            message:"Enter Your Pin Code"
          }
        ])
        if (gasBill.password == answers.password) {
          if (gasBill.amount > balance) {
            console.log(chalk.redBright("Insufficient Balance"));
          } else {
            balance = balance - gasBill.amount;
            console.log(chalk.greenBright("Transaction Successful"));
            console.log(chalk.greenBright(`Your Balance is ${balance}`));
            transactionHistory.push(gasBill);
          }
        }
        if (billPayment.billName == "Mobile Package") {
          let mobilePackage = await inquirer.prompt([
            {
              type:"list",
              name:"mobilePackage",
              message:"Select Your Mobile Package",
              choices:["Weekly Bundle","Monthly Freedom"]

            }
            
          ])
          if (mobilePackage.mobilePackage == "Weekly Bundle") {
            let weeklyBundle = await inquirer.prompt([
              {
                type:"input",
                name:"amount",
                message:"Enter Amount"
              },
              {
                type:"input",
                name:"password",
                message:"Enter Your Pin Code"
              }
            ])
            if (weeklyBundle.password == answers.password) {
              if (weeklyBundle.amount > balance) {
                console.log(chalk.redBright("Insufficient Balance"));
              } else {
                balance = balance - weeklyBundle.amount;
                console.log(chalk.greenBright("Transaction Successful"));
                console.log(chalk.greenBright(`Your Balance is ${balance}`));
                transactionHistory.push(weeklyBundle);
              }
            }
            if (mobilePackage.mobilePackage == "Monthly Freedom") {
            let monthlyFreedom = await inquirer.prompt([
              {
                type:"input",
                name:"amount",
                message:"Enter Amount"
              },
              {
                type:"input",
                name:"password",
                message:"Enter Your Pin Code"
              }

            ])
              if (monthlyFreedom.password == answers.password) {
                if (monthlyFreedom.amount > balance) {
                  console.log(chalk.redBright("Insufficient Balance"));
                } else {
                  balance = balance - monthlyFreedom.amount;
                  console.log(chalk.greenBright("Transaction Successful"));
                  console.log(chalk.greenBright(`Your Balance is ${balance}`));
                  transactionHistory.push(monthlyFreedom);
                }
              }
         if(app.option == "Cash Deposit"){
          let cashDeposit = await inquirer.prompt([
            {
              type:"input",
              name:"amount",
              message:"Enter Amount"
            },
            {
              type:"input",
              name:"password",
              message:"Enter Your Pin Code"
            },{
              type:"input",
              name:"accountNumber",
              message:"Enter  Bank Account Number From Where You Want To Deposit Amount "
            },
            {
              type:"input",
              name:"AccountPC",
              message:"Enter Account Pin "
            }
            
          ])
          if(cashDeposit.password == answers.password){
            balance=balance + cashDeposit.amount;
            console.log(chalk.greenBright("Transaction Successfull"));
            console.log(chalk.greenBright(`Your Balance Is ${balance}`));
            transactionHistory.push(cashDeposit);
            
            
          }
          
         }
          if (app.option == "Balance Enquiry") {
            console.log(chalk.greenBright(`Your Balance is ${balance}`));
          }
          }
          if (app.option == "Logout") {
            console.log(chalk.greenBright("Thank You For Using Our Services"));
            console.log(chalk.greenBright("Have A Nice Day"));
          }
          }}
          
          
        }
      }
    }
  }*/

  import inquirer from "inquirer";
  import chalk from "chalk";
  
  const transactionHistory: any[] = [];
  
  console.log(chalk.yellowBright("<<<<<<Welcome To PakPay>>>>>"));
  
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter Your Name",
    },
    {
      type: "input",
      name: "password",
      message: "Enter Your Pin Code",
    },
    {
      type: "input",
      name: "accountNumber",
      message: "Enter Your Account Number",
    },
  ]);
  
  if (
    answers.name === "Sheharyar" &&
    answers.password === "1234" &&
    answers.accountNumber === "010101"
  ) {
    console.log(
      chalk.yellowBright(`<<<<<WELCOME ${answers.name} TO PAYPAK`)
    );
  } else {
    console.log(chalk.redBright("wrong credentials"));
  }
  
  let balance: number = 50000;
  
  let app = await inquirer.prompt([
    {
      type: "list",
      name: "option",
      message: "What would you like to do?",
      choices: ["Send Money", "Bill Payment", "Cash Deposit", "Balance Enquiry" ,"Transaction History","Logout"],
    },
  ]);
  
  if (app.option === "Send Money") {
    let sendMoney = await inquirer.prompt([
      {
        type: "input",
        name: "receiverAccountNumber",
        message: "Enter Receiver Account Number",
      },
      {
        type: "input",
        name: "amount",
        message: "Enter Amount",
      },
      {
        type: "input",
        name: "password",
        message: "Enter Your Pin Code",
      },
    ]);
  
    if (sendMoney.password === answers.password) {
      if (sendMoney.receiverAccountNumber === answers.accountNumber) {
        console.log(chalk.redBright("You can't send money to yourself"));
      } else {
        if (sendMoney.amount > balance) {
          console.log(chalk.redBright("Insufficient Balance"));
        } else {
          balance -= sendMoney.amount;
          console.log(chalk.greenBright("Transaction Successful"));
          console.log(chalk.greenBright(`Your Balance is ${balance}`));
          transactionHistory.push(sendMoney);
        }
      }
    }
  }
  
  if (app.option === "Bill Payment") {
    let billPayment = await inquirer.prompt([
      {
        type: "list",
        name: "billName",
        message: "Select Your Bill",
        choices: ["Electricity Bill", "Water Bill", "Gas Bill", "Mobile Package"],
      },
    ]);
  
    if (billPayment.billName === "Electricity Bill") {
      let electricityBill = await inquirer.prompt([
        {
          type: "input",
          name: "amount",
          message: "Enter Amount",
        },
        {
          type: "input",
          name: "password",
          message: "Enter Your Pin Code",
        },
      ]);
  
      if (electricityBill.password === answers.password) {
        if (electricityBill.amount > balance) {
          console.log(chalk.redBright("Insufficient Balance"));
        } else {
          balance -= electricityBill.amount;
          console.log(chalk.greenBright("Transaction Successful"));
          console.log(chalk.greenBright(`Your Balance is ${balance}`));
          transactionHistory.push(electricityBill);
        }
      }
    }
  
    if (billPayment.billName === "Water Bill") {
      let waterBill = await inquirer.prompt([
        {
          type: "input",
          name: "amount",
          message: "Enter Amount",
        },
        {
          type: "input",
          name: "password",
          message: "Enter Your Pin Code",
        },
      ]);
  
      if (waterBill.password === answers.password) {
        if (waterBill.amount > balance) {
          console.log(chalk.redBright("Insufficient Balance"));
        } else {
          balance -= waterBill.amount;
          console.log(chalk.greenBright("Transaction Successful"));
          console.log(chalk.greenBright(`Your Balance is ${balance}`));
          transactionHistory.push(waterBill);
        }
      }
    }
  
    if (billPayment.billName === "Gas Bill") {
      let gasBill = await inquirer.prompt([
        {
          type: "input",
          name: "amount",
          message: "Enter Amount",
        },
        {
          type: "input",
          name: "password",
          message: "Enter Your Pin Code",
        },
      ]);
  
      if (gasBill.password === answers.password) {
        if (gasBill.amount > balance) {
          console.log(chalk.redBright("Insufficient Balance"));
        } else {
          balance -= gasBill.amount;
          console.log(chalk.greenBright("Transaction Successful"));
          console.log(chalk.greenBright(`Your Balance is ${balance}`));
          transactionHistory.push(gasBill);
        }
      }
    }
  
    if (billPayment.billName === "Mobile Package") {
      let mobilePackage = await inquirer.prompt([
        {
          type: "list",
          name: "mobilePackage",
          message: "Select Your Mobile Package",
          choices: ["Weekly Bundle", "Monthly Freedom"],
        },
      ]);
  
      if (mobilePackage.mobilePackage === "Weekly Bundle") {
        let weeklyBundle = await inquirer.prompt([
          {
            type: "input",
            name: "amount",
            message: "Enter Amount",
          },
          {
            type: "input",
            name: "password",
            message: "Enter Your Pin Code",
          },
        ]);
  
        if (weeklyBundle.password === answers.password) {
          if (weeklyBundle.amount > balance) {
            console.log(chalk.redBright("Insufficient Balance"));
          } else {
            balance -= weeklyBundle.amount;
            console.log(chalk.greenBright("Transaction Successful"));
            console.log(chalk.greenBright(`Your Balance is ${balance}`));
            transactionHistory.push(weeklyBundle);
          }
        }
      }
  
      if (mobilePackage.mobilePackage === "Monthly Freedom") {
        let monthlyFreedom = await inquirer.prompt([
          {
            type: "input",
            name: "amount",
            message: "Enter Amount",
          },
          {
            type: "input",
            name: "password",
            message: "Enter Your Pin Code",
          },
        ]);
  
        if (monthlyFreedom.password === answers.password) {
          if (monthlyFreedom.amount > balance) {
            console.log(chalk.redBright("Insufficient Balance"));
          } else {
            balance -= monthlyFreedom.amount;
            console.log(chalk.greenBright("Transaction Successful"));
            console.log(chalk.greenBright(`Your Balance is ${balance}`));
            transactionHistory.push(monthlyFreedom);
          }
        }
      }
    }
  }
  
  if (app.option === "Cash Deposit") {
    let cashDeposit = await inquirer.prompt([
      {
        type: "input",
        name: "amount",
        message: "Enter Amount",
      },
      {
        type: "input",
        name: "password",
        message: "Enter Your Pin Code",
      },
      {
        type: "input",
        name: "accountNumber",
        message: "Enter Sender Account Number",
      },
      
    ])
    
    if (cashDeposit.receiverAccountNumber === answers.accountNumber) {
      console.log(chalk.redBright("You can't deposit money to yourself"));
    } else {
      balance += cashDeposit.amount;
      console.log(chalk.greenBright("Transaction Successful"));
      console.log(chalk.greenBright(`Your Balance is ${balance}`));
      transactionHistory.push(cashDeposit);
    }
  };
  
  if (app.option === "Balance Enquiry") {
    console.log(chalk.greenBright(`Your Balance is ${balance}`));
  };
  
  if (app.option === "Logout") {
    console.log(chalk.greenBright("Thank You For Using Banking System"));
    process.exit();
  };
  
  if (app.option === "Transaction History") {
    console.log(chalk.greenBright(transactionHistory));
  };

