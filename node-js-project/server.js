const http = require('http');
const parseUrl = require("./utils/parseUrl");
const sendJson = require('./utils/sendJson');
const hp = require('./routes/productRoutes');


const server = http.createServer((req,res)=>{
    const {pathname,searchParams} = parseUrl(req);

       if(req.method ==='GET' && pathname ==="/") {
            return sendJson(res,200, {
                success:true,
                message:"server isrunning",
                routes: [
                    "GET/products",
                    "GET/products/:id",
                    "GET/products ?category=Electronics",
                ]
            });
        }

        const handeled = hp(req,res,pathname,searchParams);
        if(handeled !== false) return;

    });

    const port = 5600;
    server.listen(port,()=>{
        console.log("server is running port 5600");
    });