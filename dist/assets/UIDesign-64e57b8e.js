import{d as p,c as r,a as c,b as l,w as m,T as d,e as u,f as _,F as I,r as x,u as e,o as n,g as C,m as g,h as w,n as T,i as h}from"./index-d5347808.js";import{C as f,u as v,_ as k}from"./useModal-c54916e2.js";const M=[{cardImg:"/src/assets/img/ux/01.png",swiperImg:["/src/assets/img/ux/01_01.png","/src/assets/img/ux/01_02.png","/src/assets/img/ux/01_03.png","/src/assets/img/ux/01_04.png"],cardTitle:"GoodMaji 物流平台優化",cardTag:"好馬吉物流",class:"lg:col-span-3 col-span-1",modalImg:"/src/assets/img/ux/01x.png",designConcept:"重新設計並改造整體配色及風格，提升視覺效果和使用者體驗，讓整體UI界面更加清晰。"},{cardImg:"/src/assets/img/ux/02.png",swiperImg:["/src/assets/img/ux/02_01.png","/src/assets/img/ux/02_02.png","/src/assets/img/ux/02_03.png"],cardTitle:"AI Center",cardTag:"供應商後台",class:"lg:col-span-3 col-span-1",modalImg:"/src/assets/img/ux/02x.png",designConcept:"提共給廠商商品上下架及建立活動...等。負責建立Guideline，商品上下架規劃、對帳報表、受眾分析...等頁面。"},{cardImg:"/src/assets/img/ui/02.png",swiperImg:["/src/assets/img/ui/02_01.png","/src/assets/img/ui/02_02.png"],cardTitle:"Game",cardTag:"Slot & Spin Wheel",class:"lg:col-span-3 col-span-1",modalImg:"/src/assets/img/ui/02x.png",designConcept:"客戶花費哈幣玩拉霸,並得到品牌贈品,於下次結帳時一起贈送出去"},{cardImg:"/src/assets/img/ui/03.png",swiperImg:["/src/assets/img/ui/03_01.png","/src/assets/img/ui/03_02.png","/src/assets/img/ui/03_03.png"],cardTitle:"Promotions",cardTag:"基底、節慶活動",class:"lg:col-span-3 col-span-1",modalImg:"/src/assets/img/ui/03x.png",designConcept:"。"}],b={class:"container pb-8"},y={class:"grid hover:grid-flow-row grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-y-6 gap-x-6"},V=p({__name:"UIDesign",props:{products:null,cardTitle:null,modalImg:null,designConcept:null},setup(B){const s=v(),i=a=>{s.component.value=h(k),s.cardTitle.value=a.cardTitle,s.modalImg.value=a.modalImg,s.designConcept.value=a.designConcept,s.swiperImg=a.swiperImg,s.showModal()};return(a,D)=>(n(),r("div",b,[(n(),c(u,{to:"#app"},[l(d,null,{default:m(()=>[e(s).show.value?(n(),c(C(e(s).component.value),g({key:0,onClose:e(s).closeModal},e(s)),null,16,["onClose"])):w("",!0)]),_:1})])),_("ul",y,[(n(!0),r(I,null,x(e(M),(o,t)=>(n(),r("li",{key:t,class:T([o.class,"bg-white","rounded","duration-500","hover:shadow-black/30"])},[l(f,g(o,{onOpenModal:()=>i(o)}),null,16,["onOpenModal"])],2))),128))])]))}});export{V as default};