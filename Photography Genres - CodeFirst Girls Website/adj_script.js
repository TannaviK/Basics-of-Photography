 var xref = {
     Saturation: "<b>About Photo Saturation",
     Exposure: "About Light Exposure"
     Contrast: "About Contrast",
     Clarity: "About Image Clarity",
     Noise: "About Image Noise",
 };

 var defaultDipTooltip = 'Select an Image Property';

 var image = $('#adj_menu');

 image.mapster(
 {
     fillOpacity: 0.2,
     fillColor: "59585E",
     stroke: true,
     strokeColor: "F7B79E",
     strokeOpacity: 0.5,
     strokeWidth: 6,
     singleSelect: true,
     mapKey: 'name',
     listKey: 'name',
     onClick: function (e) {
         var newToolTip = MoreTooltip;


         $('#selections').html(xref[e.key]);


         image.mapster('set_options', {
             areas: [{
                 key: "Clarity"+"Noise"+"Contrast"+"Exposure"+"Saturation",
                 toolTip: newToolTip
                 }]
             });
     },
     showToolTip: true,
     toolTipClose: ["tooltip-click", "area-click"],
     areas: [
         {
             key: "Clarity",
             fillColor: "ffffff"
         },
         {
             key: "Noise",
             fillColor: "000000"
         },
         {
             key: "Contrast",
             fillColor: "000000"
         },
         {
             key: "Exposure",
             toolTip: MoreTooltip
         },
         {
             key: "Saturation",
             strokeColor: "FFFFFF"
         }
         ]
 });
