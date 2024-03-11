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
      script: './qrcodejs-master/qrcode.js'
    }
  ];
  
  const qrcode = {
    type: "String",
    isEdit: true,
    configFields: [
      {
        name: "allow_input",
        label: "Allow input",
        type: "Bool",
      },
      {
        name: "day_only",
        label: "Only day",
        type: "Bool",
        //sublabel: "Do not pick time",
      },
      {
        name: "minDate",
        label: "Min date",
        type: "String",
        sublabel: "(Ex: 2022-10-1 or today)",
      },
      {
        name: "default_now",
        label: "Default to now",
        type: "Bool",
      },
      {
        name: "current_hm",
        label: "Current hour minute",
        sublabel: "Set default time of day to current time.",
        type: "Bool",
      },
      {
        name: "locale",
        label: "Language (locale)",
        sublabel: "Available: es, pt, fr, it, ru, de",
        type: "String",
      },
  
      {
        name: "dateFormat",
        label: "Date format",
        required: true,
        type: "String",
        default: "Y-m-d H:i",
        sublabel: `<a href="https://flatpickr.js.org/formatting/">Formatting options</a>`,
      },
      {
        name: "placeholder",
        label: "Placeholder",
        type: "String",
      },
    ],
    run: (nm, v, attrs, cls) => {
    //   const rndid = Math.floor(Math.random() * 16777215).toString(16);
    //   const opts = {
    //     enableTime: !attrs.day_only,
    //     allowInput: attrs.allow_input,
    //     dateFormat: attrs.day_only ? "Y-m-d" : "Z",
    //     altInput: true,
    //     altFormat: attrs.dateFormat || (attrs.day_only ? "Y-m-d" : "Y-m-d H:i"),
    //     minDate: attrs.minDate,
    //     //maxDate: attrs.maxDate,
    //     locale: attrs.locale,
    //     defaultDate: attrs.default_now && !v ? new Date() : undefined,
    //     defaultHour: attrs.current_hm && !v ? new Date().getHours() : undefined,
    //     defaultMinute:
    //       attrs.current_hm && !v ? new Date().getMinutes() : undefined,
    //   };
      return (
        '<div id="qrcode"></div>'
        +
        script(
          domReady(`new QRCode(document.getElementById("qrcode"), "http://jindo.dev.naver.com/collie")`)
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