const express = require("express")
const mongoose = require("mongoose")
const { Product } = require("./Schema")
const app = express()

mongoose.connect("hehehe")
.then(() => {
    console.log("DB Connected")
    // Product.insertMany()

    app.listen(8080, () => {
        console.log("Server Running")
    })
})

app.get("/products", async(req, res) => {
    try {

        const data = await Product.aggregate([ 
            // {
                // $match : {} // get all products

                // $match : {
                //     category : "Electronics" // get all electronics
                // }


                // $match : {
                //     category : "Electronics", // all electronics greater than price 50000
                //     price : {
                //         $gt : 50000
                //     }
                // }


                // $match : {
                //     price : {
                //         $lt : 5000 // products lesser than price 5000
                //     }
                // }



           
            // }


            // {
            //     $sort : {
            //         price : -1
            //     }
            // }

            // {
            //     $sort : {
            //         price : -1
            //     }
            // },

            // {
            //     $limit : 3
            // }


            // {
            //     $sort : {
            //         stock : 1
            //     }
            // },
            // {
            //     $limit : 5
            // }

            // {
            //     $project : {
            //         _id : 0,
            //         // category : 0,
            //         // stock : 0,
            //         // price : 1,
            //         productPrice : "$price",
            //         name : "$name"
            //     }
            // }


            // {
            //     $group : {
            //         _id : "",
            //         average : {
            //             $avg : "$price",
            //         },
            //         totalCount : {
            //             $sum : "$stock"
            //         }
            //     }
            // }


            // {
            //     $group : {
            //         _id : "",
            //         total : {
            //             $sum : {
            //                 $multiply : ["$price", "$stock"]
            //             }
            //         }
            //     }
            // }


            // {
            //     $group : {
            //         _id : "$category",
            //         averagePrice : {
            //             $avg : "$price"
            //         },
            //         totalStock : {
            //             $sum : "$stock"
            //         },
            //         totalProducts : {
            //             $sum : 1
            //         },
            //         highestPrice : {
            //             $max : "$price"
            //         },
            //         cheapestPrice : {
            //             $min : "$price",
                
            //         }
            //     }
            // }


            // {
            //     $sort : {
            //         price : 1
            //     }
            // },
            // {
            //     $group : {
            //         _id : "$category",
            //         naam : {
            //             $first : "$name"
            //         }
            //     }
            // }


            // {
            //     $group : {
            //         _id : "$category",
            //         averageStock : {
            //             $avg : "$stock"
            //         }
            //     }
            // }


            // {
            //     $match : {
            //         category : "Electronics",
            //         price : {
            //             $gt : 50000
            //         }
            //     }
            // }


            // {
            //     $match : {
            //         category : "Electronics"
            //     }
            // },
            // {
            //     $sort : {
            //         price : -1
            //     }
            // },
            // {
            //     $limit : 2
            // }


            // {
            //     $match : {
            //         stock : {
            //             $gt : 5
            //         }
            //     }
            // },
            // {
            //     $sort : {
            //         price : 1
            //     }
            // },
            // {
            //     $limit : 3
            // }

            // {
            //     $match : {
            //         category : "Electronics"
            //     }
            // },

            // {
            //     $group : {
            //         _id : "$category",
            //         average : {
            //             $avg : "$price"
            //         }
            //     }
            // }


            {
                $group : {
                    _id : "$category",
                    average : {
                        $avg : "$price"
                    }
                }
            },
            {
                $sort : {
                    average : -1
                }
            },
            {
                $limit : 1
            }


        ])

        res.json({
            msg : "OK",
            data
        })
    } catch (error) {
        res.json({
            err : error.message
        })
    }
})





