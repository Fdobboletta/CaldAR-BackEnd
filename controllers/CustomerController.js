const express = require(`express`);
const app = express();
const customers = require ("../data/Customer.json")
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// getAllCustomers
app.get("/getAllCustomers", (req, res)=>{
    res.status(200).json(customers)
});
//getCustomerById
app.get("/getCustomerById/:id", (req,res) => {
    const found = customers.filter (customer => customer.id === parseInt(req.params.id));
    if (found.length > 1){
        res.status(200).json(found)
    } else {
        res.status(400).json({ msg: `No customer with the id of ${req.params.id}`})
    }
});

//getCustomerByCustomerType
app.get("/getCustomerByCustomerType/:customerType", (req,res) => {
    const found = customers.some(customer =>
        customer.customerType === String(req.params.customerType));
    if (found) {
        res.status(200).json(customers.filter(customer =>
            customer.customerType === String(req.params.customerType)));
    } else {
        res.status(400).json({ msg: `No customer with the customer type ${req.params.customerType}`});
    }
});

//getCustomerByEmail
app.get("/getCustomerByEmail/:email", (req,res) => {
    const found = customers.some(customer => customer.email === String(req.params.email));
    if (found) {
        res.status(200).json(customers.filter(customer => customer.email === String(req.params.email)));
    } else {
        res.status(400).json({ msg: `No customer with the customer type ${req.params.email}`});
    }
});

//getCustomerByBuilding
app.get("/getCustomerByBuilding/:buildings", (req,res) => {
    const buildingInt = parseInt (req.params.buildings);
    const found = customers.filter(customer => customer.buildings.includes(buildingInt));
    if (found.length > 0) {
        res.status(200).json(found);
    } else {
        res.status(400).json({ msg: `No customer with the customer type ${buildingInt}`});
    }
});

//getCustomerByFiscalAdress
app.get("/getCustomerByFiscalAdress/:fiscal_address", (req,res) => {
    const found = customers.some(customer =>
        customer.fiscal_address === String(req.params.fiscal_address));
    if (found) {
        res.status(200).json(customers.filter(customer =>
            customer.fiscal_address === String(req.params.fiscal_address)));
    } else {
        res.status(400).json({ msg: `No customer with the customer type ${req.params.fiscal_address}`});
    }
});

//deleteCustomerById
app.get("/deleteCustomerById/:id", (req,res) => {
    const found = customers.some(customer => customer.id === parseInt(req.params.id));
    if (found) {
        res.status(200).json({ 
        msg: "Member deleted",
        boilers: customers.filter(customer => customer.id !== parseInt(req.params.id))
        });
    } else {
        res.status(400).json({ msg: `No customer with the id ${req.params.id}`});
    }
});