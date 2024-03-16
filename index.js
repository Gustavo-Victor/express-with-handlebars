import express from "express";
import exphbs from "express-handlebars"; 

const app = express();
const port = 3000; 

const hbs = exphbs.create({
    partialsDir: ["views/partials"]
}); 


app.use(express.static("public")); 
app.engine("handlebars", hbs.engine); 
app.set("view engine", "handlebars"); 


app.get("/", (req, res) => {
    res.render("home"); 
});

app.get("/products", (req, res) => {
    const products = [
        {id: 1, name: "Gaming Chair", price: 302.99, description: "Chair for gamers." },
        {id: 2, name: "Gaming Mouse", price: 30.99, description: "Mouse for gamers." },
        {id: 3, name: "Gaming Keyboard", price: 47.50, description: "Keyboard for gamers." },
        {id: 4, name: "Headset", price: 45.00, description: "Headset for gamers.", link: `/products/4` },
        {id: 5, name: "Complete Gabinet Desktop", price: 2200.00, description: "Complete gabinet including motherboard, Intel Core i9 CPU, 32GB RAM, 70GB SSD, 2TB HDD." },
        {id: 6, name: "Desktop Monitor", price: 200.00, description: "25 inch Desktop Monitor, 4k resolution." }
    ]
    res.render("products", { products }); 
});


app.get("/products/:id", (req, res) => {
    const { id } = req.params; 
    const approved = id >=1 && id <= 6; 

    if(!id || !approved) {
        const hasError = true;
        res.render("home", { hasError }); 
        return ;
    }

    res.render("product-single");
})


app.get("/about", (req, res) => {
    res.render("about"); 
});

app.get("/contact", (req, res) => {
    res.render("contact"); 
});





app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
}); 

