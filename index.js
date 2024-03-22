const {
    input,
    div,
    text,
    script,
    domReady,
    text_attr,
  } = require("@saltcorn/markup/tags"); 
  const headers = [
    {
      script: 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.js'
    }
  ];
  
  const qrcode = {
    type: "String",
    isEdit: false,
    configFields: [
      {
        name: "width",
        label: "Width",
        type: "Integer",
      },
      {
        name: "height",
        label: "Height",
        type: "Integer",
        //sublabel: "Do not pick time",
      },
      {
        name: "colorDark",
        label: "Color Dark",
        type: "Color"
      },
      {
        name: "colorLight",
        label: "Color Light",
        type: "Color"
      },
      {
        name: "preformatting",
        label: "String formatting with JS",
        type: "String"
      },

    ],
    //run: (value, req, attrs, cls) => {
      run: (nm, value, attrs, cls, reqd, field, row) => {
      console.log('CLS LINEA 48:', cls)
      console.log('CLS LINEA 49:', attrs) 

      for(r in attrs.row){
        eval(`var ${r} = ${attrs[r]};`)
      }
      
      const rndid = Math.floor(Math.random() * 16777215).toString(16);
      let value_formated;
      
      if(attrs.preformatting){
        value_formated = eval(value)
      }
      else value_formated = value;

      const opts = {
        width: attrs.width,
        height: attrs.height,
        colorDark: attrs.colorDark || 'black',
        colorLight:  attrs.colorLight || 'white',
        preformatting: value_formated
      }; 
      return (
        `<div id="${rndid}"></div>`
        +
        script(
          domReady(`new QRCode(document.getElementById("${rndid}"), {
            text: '${opts.value_formated}',
            width: '${opts.width || 128}',
            height: '${opts.height || 128}',
            colorDark : '${opts.colorDark || "#000000"}',
            colorLight : '${opts.colorLight || "#ffffff"}'
          })`)
        )
      );
    },
  };
  
  module.exports = {
    sc_plugin_api_version: 1,
    fieldviews: {
      qrcode
    },
    plugin_name: "qrcode",
    headers, 
  };

      
