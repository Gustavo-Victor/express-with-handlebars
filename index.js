import express from "express";
import exphbs from "express-handlebars"; 
import { products } from "./lib/data.js"; 

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

    const product = products[id - 1]

    res.render("product-single", { product });
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

