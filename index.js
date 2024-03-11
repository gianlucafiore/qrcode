const {
    input,
    div,
    text,
    script,
    domReady,
    text_attr,
  } = require("@saltcorn/markup/tags"); 
//   const base_headers = `/plugins/public/flatpickr-date@${
//     require("./package.json").version
//   }`;
  const headers = [
    {
      //script: `${base_headers}/flatpickr.min.js`,
      script: 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.js'
    }
  ];
  
  const qrcode = {
    type: "String",
    isEdit: true,
    configFields: [
      {
        name: "width",
        label: "Width",
        type: "Number",
      },
      {
        name: "height",
        label: "Height",
        type: "Number",
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
        width: !attrs.width,
        height: attrs.height,
        colorDark: attrs.colorDark || 'black',
        colorLight:  attrs.colorLight || 'white'
      };
      return (
        `<div id="${rndid}"></div>`
        +
        script(
          domReady(`new QRCode("test", {
            text: ${v},
            width: 128,
            height: 128,
            colorDark : "#000000",
            colorLight : "#ffffff"
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

      

{/* <div id="qrcode"></div>


<script type="text/javascript" src="/public/qrcodejs-master/qrcode.js"></script>
<script type="text/javascript">
    new QRCode(document.getElementById("qrcode"), "http://jindo.dev.naver.com/collie");
</script> */}