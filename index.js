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
        label: "String additional formatting. Notice: {{value}}",
        sublabel: "Place field variable ( {{value}} ) like this example: https://somesite.com/persons/{{value}}",
        type: "String"
      },

    ],
    //run: (value, req, attrs, cls) => {
    run: (value, req, attrs, cls, reqd, field, row) => {

      const rndid = Math.floor(Math.random() * 16777215).toString(16);
      if(attrs.preformatting){ 
        value = attrs.preformatting.replace('{{value}}', value) 
      }

      console.log('linea 62: ', value)
      console.log('linea 63: ', attrs) 
      const opts = {
        width: attrs.width,
        height: attrs.height,
        colorDark: attrs.colorDark,
        colorLight:  attrs.colorLight,
        preformatting: attrs.preformatting
      }; 
      return (
        `<div id="${rndid}"></div>`
        +
        script(
          domReady(`new QRCode(document.getElementById("${rndid}"), {
            text: '${value}',
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

      
