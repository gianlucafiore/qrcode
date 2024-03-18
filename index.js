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
      }
    ],
    run: (nm, v, attrs, cls) => {
    const rndid = Math.floor(Math.random() * 16777215).toString(16);
      const opts = {
        width: attrs.width,
        height: attrs.height,
        colorDark: attrs.colorDark || 'black',
        colorLight:  attrs.colorLight || 'white'
      };
        console.log('linea 49: ',v)
      return (
        `<div id="${rndid}"></div>`
        +
        script(
          domReady(`new QRCode(document.getElementById("${rndid}"), {
            text: '${v}',
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

      
