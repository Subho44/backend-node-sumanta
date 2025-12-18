const products = require("../data/products");
const sendJson = require("../utils/sendJson");


//get/products

function hp(req,res,pathname,searchParams){

    if(req.method === "GET" && pathname ==='/products') {
        const category = searchParams.get("category");

        if(category) {
            const filtered = products.filter(
                (p)=>p.category.toLowerCase() ===category.toLowerCase()
            );

            return sendJson(res,200, {
                success:true,
                total:filtered.length,
                data:filtered
            });
        }
        return sendJson(res,200, {
                success:true,
                total:products.length,
                data:products
            });

    }
}
module.exports = hp;