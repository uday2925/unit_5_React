const path = require("path");

module.exports={
    entry:"./src/index.js",
    output:{
       path:path.resolve(".","build"),//foldername
       filename:"builder.js"        //filename
    },
    mode:"development",
    module: {
        rules: [
          { test: /\.css$/, use: ["style-loader",'css-loader'] }        
        ],
      },
};