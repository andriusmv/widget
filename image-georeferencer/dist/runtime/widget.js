System.register(["jimu-core","jimu-arcgis","jimu-ui","esri/layers/MediaLayer","esri/layers/support/ImageElement","esri/layers/support/ExtentAndRotationGeoreference","esri/layers/support/LocalMediaElementSource"],(function(e,i){var a={},t={},r={},o={},n={},l={},s={};return{setters:[function(e){a.React=e.React,a.css=e.css,a.jsx=e.jsx},function(e){t.JimuMapViewComponent=e.JimuMapViewComponent},function(e){r.Alert=e.Alert,r.Button=e.Button,r.Card=e.Card,r.CardBody=e.CardBody,r.CardHeader=e.CardHeader,r.Label=e.Label,r.Loading=e.Loading,r.LoadingType=e.LoadingType,r.Slider=e.Slider,r.Switch=e.Switch,r.WidgetPlaceholder=e.WidgetPlaceholder},function(e){o.default=e.default},function(e){n.default=e.default},function(e){l.default=e.default},function(e){s.default=e.default}],execute:function(){e((()=>{var e={9861:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"></path><circle cx="18" cy="7" r="2"></circle></svg>'},8931:e=>{"use strict";e.exports=o},8787:e=>{"use strict";e.exports=l},4565:e=>{"use strict";e.exports=n},8680:e=>{"use strict";e.exports=s},2686:e=>{"use strict";e.exports=t},9244:e=>{"use strict";e.exports=a},4321:e=>{"use strict";e.exports=r}},i={};function d(a){var t=i[a];if(void 0!==t)return t.exports;var r=i[a]={exports:{}};return e[a](r,r.exports,d),r.exports}d.d=(e,i)=>{for(var a in i)d.o(i,a)&&!d.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:i[a]})},d.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="";var c={};return d.p=window.jimuConfig.baseUrl,(()=>{"use strict";d.r(c),d.d(c,{__set_webpack_public_path__:()=>f,default:()=>x});var e=d(9244),i=d(2686),a=d(4321);const t="Image Georeferencer",r="Select Image",o="Add to Map",n="Clear",l="Interactive Mode",s="Upload an image (PNG, JPG, JPEG, GIF, or BMP; max 10MB) and use the interactive tools to position it on the map. The transform tool allows moving, scaling and rotating.",m="Please select a map widget in the widget settings.";var u=d(8931),p=d(4565),g=d(8787),v=d(8680),y=function(e,i,a,t){return new(a||(a=Promise))((function(r,o){function n(e){try{s(t.next(e))}catch(e){o(e)}}function l(e){try{s(t.throw(e))}catch(e){o(e)}}function s(e){var i;e.done?r(e.value):(i=e.value,i instanceof a?i:new a((function(e){e(i)}))).then(n,l)}s((t=t.apply(e,i||[])).next())}))};const w=d(9861),x=d=>{var c,x,f,b,j,h,L,M,O;const[I,V]=e.React.useState({jimuMapView:null,mediaLayer:null,mediaLayerView:null,selectedImageFile:null,imagePreviewUrl:null,isUploading:!1,uploadError:null,isInteractiveMode:null===(x=null===(c=d.config)||void 0===c?void 0:c.enableInteractiveMode)||void 0===x||x,isImageAdded:!1,opacity:.75}),C=e.React.useRef(null),U=1024*(null!==(b=null===(f=d.config)||void 0===f?void 0:f.maxImageSizeMB)&&void 0!==b?b:10)*1024,P=e.React.useMemo((()=>{var e,i;return null!==(i=null===(e=d.config)||void 0===e?void 0:e.allowedImageTypes)&&void 0!==i?i:["image/jpeg","image/png","image/gif","image/webp"]}),[null===(j=d.config)||void 0===j?void 0:j.allowedImageTypes]),R=e.React.useCallback((e=>{I.mediaLayer&&e.view.map.remove(I.mediaLayer);const i=new v.default,a=new u.default({title:"Uploaded Images",source:i,opacity:I.opacity});return e.view.map.add(a),e.view.whenLayerView(a).then((e=>{V((i=>Object.assign(Object.assign({},i),{mediaLayer:a,mediaLayerView:e})))})),a}),[I.mediaLayer,I.opacity]),k=e.React.useCallback((e=>{e&&(V((i=>Object.assign(Object.assign({},i),{jimuMapView:e}))),R(e))}),[R]),S=e.React.useCallback((e=>{var i;const a=null===(i=e.target.files)||void 0===i?void 0:i[0];if(!a)return;if(!P.includes(a.type))return void V((e=>Object.assign(Object.assign({},e),{uploadError:`Unsupported file type. Allowed types: ${P.join(", ")}`})));if(a.size>U)return void V((e=>{var i,a;return Object.assign(Object.assign({},e),{uploadError:`File too large. Maximum size: ${null!==(a=null===(i=d.config)||void 0===i?void 0:i.maxImageSizeMB)&&void 0!==a?a:10}MB`})}));const t=URL.createObjectURL(a);V((e=>Object.assign(Object.assign({},e),{selectedImageFile:a,imagePreviewUrl:t,uploadError:null})))}),[P,U,null===(h=d.config)||void 0===h?void 0:h.maxImageSizeMB]),E=e.React.useCallback((()=>y(void 0,void 0,void 0,(function*(){var e,i;if(I.selectedImageFile&&I.jimuMapView&&I.mediaLayer){V((e=>Object.assign(Object.assign({},e),{isUploading:!0})));try{const a=I.mediaLayer.source;a.elements.removeAll();const t=URL.createObjectURL(I.selectedImageFile),r=new Image,o=new Promise((e=>{r.onload=()=>{e({width:r.naturalWidth,height:r.naturalHeight})},r.src=t})),{width:n,height:l}=yield o,s=n/l,c=I.jimuMapView.view.extent.clone(),m=c.center.x,u=c.center.y;let v,y;s>c.width/c.height?(v=.25*c.width,y=v/s):(y=.25*c.height,v=y*s);const w={xmin:m-v/2,ymin:u-y/2,xmax:m+v/2,ymax:u+y/2,spatialReference:c.spatialReference},x=new p.default({image:t,georeference:new g.default({extent:w})});a.elements.add(x),I.isInteractiveMode&&I.mediaLayerView&&(I.mediaLayerView.interactive=!0,I.mediaLayerView.selectedElement=x,I.mediaLayerView.interactionOptions&&(I.mediaLayerView.interactionOptions.tool="transform")),(null===(i=null===(e=d.config)||void 0===e?void 0:e.autoFitToView)||void 0===i||i)&&(yield I.jimuMapView.view.goTo(w)),V((e=>Object.assign(Object.assign({},e),{isUploading:!1,isImageAdded:!0})))}catch(e){console.error("Error uploading image:",e),V((e=>Object.assign(Object.assign({},e),{isUploading:!1,uploadError:"Failed to upload image. Please try again."})))}}}))),[I,null===(L=d.config)||void 0===L?void 0:L.autoFitToView]),B=e.React.useCallback((()=>{if(I.mediaLayerView){const e=!I.isInteractiveMode;I.mediaLayerView.interactive=e,V((i=>Object.assign(Object.assign({},i),{isInteractiveMode:e})))}}),[I.mediaLayerView,I.isInteractiveMode]),A=e.React.useCallback((e=>{const i=parseFloat(e.target.value);V((e=>Object.assign(Object.assign({},e),{opacity:i}))),I.mediaLayer&&(I.mediaLayer.opacity=i)}),[I.mediaLayer]),N=e.React.useCallback((()=>{I.mediaLayerView&&(I.mediaLayerView.interactive=!1,I.mediaLayerView.selectedElement=null),I.imagePreviewUrl&&URL.revokeObjectURL(I.imagePreviewUrl),I.jimuMapView&&(I.mediaLayer&&I.jimuMapView.view.map.remove(I.mediaLayer),R(I.jimuMapView)),V((e=>Object.assign(Object.assign({},e),{selectedImageFile:null,imagePreviewUrl:null,isImageAdded:!1,uploadError:null}))),C.current&&(C.current.value="")}),[I.jimuMapView,I.mediaLayer,I.mediaLayerView,I.imagePreviewUrl,R]);return(null===(M=d.useMapWidgetIds)||void 0===M?void 0:M[0])?(0,e.jsx)("div",{className:"jimu-widget image-georeferencer-widget",css:(F=d.theme,e.css`
    .image-georeferencer-widget {
      padding: 1rem;
      height: 100%;
      overflow: auto;

      .widget-content {
        height: 100%;

        .card {
          height: 100%;

          .card-body {
            max-height: calc(100% - 60px);
            overflow: auto;
          }
        }
      }

      .upload-section {
        text-align: center;

        .btn {
          width: 100%;
        }
      }

      .image-preview {
        text-align: center;
        padding: 1rem;
        border: 2px dashed ${F.ref.palette.neutral[500]};
        border-radius: 8px;
        background: ${F.ref.palette.neutral[200]};

        img {
          display: block;
          margin: 0 auto;
        }
      }

      .interactive-controls {
        .tool-selection {
          .btn {
            min-width: 80px;
          }
        }

        .coordinate-input {
          .coordinate-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            margin-bottom: 8px;

            .coordinate-row {
              display: flex;
              align-items: center;
              gap: 4px;

              label {
                min-width: 45px;
                font-size: 0.875rem;
                font-weight: 500;
              }

              input {
                flex: 1;
                padding: 4px 8px;
                border: 1px solid ${F.ref.palette.neutral[500]};
                border-radius: 4px;
                font-size: 0.875rem;

                &:focus {
                  outline: none;
                  border-color: ${F.sys.color.primary.main};
                  box-shadow: 0 0 0 2px ${F.sys.color.primary.main}20;
                }
              }
            }
          }
        }
      }

      .instructions {
        padding: 1rem;
        background: ${F.ref.palette.neutral[200]};
        border-radius: 8px;
        border-left: 4px solid ${F.sys.color.primary.main};

        small {
          line-height: 1.4;
        }
      }

      .mr-2 {
        margin-right: 0.5rem !important;
      }

      .mt-2 {
        margin-top: 0.5rem !important;
      }

      .mt-3 {
        margin-top: 1rem !important;
      }

      .mb-2 {
        margin-bottom: 0.5rem !important;
      }

      .mb-3 {
        margin-bottom: 1rem !important;
      }

      .ml-2 {
        margin-left: 0.5rem !important;
      }

      .d-block {
        display: block !important;
      }
    }
  `)},(0,e.jsx)(i.JimuMapViewComponent,{useMapWidgetId:null===(O=d.useMapWidgetIds)||void 0===O?void 0:O[0],onActiveViewChange:k}),(0,e.jsx)("div",{className:"widget-content"},(0,e.jsx)(a.Card,null,(0,e.jsx)(a.CardHeader,null,(0,e.jsx)("h5",null,t)),(0,e.jsx)(a.CardBody,null,(0,e.jsx)("div",{className:"upload-section mb-3"},(0,e.jsx)("input",{ref:C,type:"file",accept:P.join(","),onChange:S,style:{display:"none"}}),(0,e.jsx)(a.Button,{type:"primary",onClick:()=>{var e;null===(e=C.current)||void 0===e||e.click()},disabled:I.isUploading},"\u{1f4e4} ",r)),I.imagePreviewUrl&&(0,e.jsx)("div",{className:"image-preview mb-3"},(0,e.jsx)("img",{src:I.imagePreviewUrl,alt:"Preview",style:{maxWidth:"100%",maxHeight:"150px",objectFit:"contain",border:"1px solid #ddd",borderRadius:"4px"}}),(0,e.jsx)("div",{className:"mt-2"},!I.isImageAdded&&(0,e.jsx)(a.Button,{type:"primary",onClick:E,disabled:I.isUploading,className:"mr-2"},I.isUploading?(0,e.jsx)(a.Loading,{type:a.LoadingType.Donut}):o),(0,e.jsx)(a.Button,{type:"secondary",onClick:N},n))),I.isImageAdded&&(0,e.jsx)("div",{className:"interactive-controls"},(0,e.jsx)("div",{className:"mb-3"},(0,e.jsx)(a.Label,null,(0,e.jsx)(a.Switch,{checked:I.isInteractiveMode,onChange:B}),(0,e.jsx)("span",{className:"ml-2"},l))),(0,e.jsx)("div",{className:"mb-3"},(0,e.jsx)(a.Label,{className:"d-block mb-2"},"Opacity: ",Math.round(100*I.opacity),"%"),(0,e.jsx)(a.Slider,{value:I.opacity,min:0,max:1,step:.01,onChange:A,size:"default"}))),I.uploadError&&(0,e.jsx)(a.Alert,{text:I.uploadError,onClose:()=>{V((e=>Object.assign(Object.assign({},e),{uploadError:null})))}}),!I.isImageAdded&&(0,e.jsx)("div",{className:"instructions mt-3"},s))))):(0,e.jsx)(a.WidgetPlaceholder,{icon:w,widgetId:d.id,message:m});var F};function f(e){d.p=e}})(),c})())}}}));