import{u as x,j as e,L as n}from"./index-BvKkuolH.js";import{u as m,C as u}from"./Card-DTGclJWP.js";const p=()=>{const a=x(),t=()=>{a(-1)},{items:s,removeFromCart:d,updateQuantity:l,clearCart:o,getTotalPrice:i,getTotalItems:c}=m();return s.length===0?e.jsxs("div",{className:"md:p-15 p-4",children:[e.jsx(n,{to:"/",onClick:t,className:"border-green-600 border-1 text-green-600 hover:text-[#1b2316]  rounded-xl p-2 hover:bg-green-600 transition-colors",children:"Back Home"}),e.jsx("h1",{className:"lg:text-3xl mt-5 md:text-3xl text-2xl font-medium",children:"Shopping Cart"}),e.jsx("p",{className:"mt-5",children:"Your shopping cart is empty."})]}):e.jsxs("div",{className:"md:p-15 p-4",children:[e.jsx(n,{to:"/",onClick:t,className:"border-green-600 border-1 text-green-600 hover:text-[#1b2316]  rounded-xl p-2 hover:bg-green-600 transition-colors",children:"Back Home"}),e.jsxs("h2",{className:"lg:text-3xl md:text-3xl mt-5 text-2xl font-medium",children:["Shopping Cart (",c()," product)"]}),e.jsxs("div",{className:"flex items-center gap-5 my-5",children:[e.jsxs("div",{className:"text-lg font-medium",children:["Total: $",i().toLocaleString()]}),e.jsx("button",{onClick:o,className:"border-1 cursor-pointer rounded-lg border-blue-600 text-blue-600 px-2 py-1 hover:bg-blue-600 hover:text-[#1b2316] transition-colors",children:"Clear All"})]}),e.jsx("div",{className:"mt-30 grid xl:grid-cols-4 gap-x-4 gap-y-25 lg:grid-cols-3 md:grid-cols-2 grid-cols-1",children:s.map(r=>e.jsxs(u,{className:"pb-10 xl:px-15 flex flex-col justify-between lg:px-6 md:px-10 px-10",children:[e.jsxs("div",{children:[e.jsx("div",{className:"w-65 h-65 m-auto",children:e.jsx("img",{className:"m-auto -translate-y-15 w-auto h-auto max-w-full max-h-full",src:r.image,alt:r.name})}),e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsx("span",{className:"lg:text-3xl md:text-3xl text-2xl",children:r.name}),e.jsxs("p",{className:"lg:text-3xl md:text-3xl text-2xl",children:["$",r.price.toLocaleString()]})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 my-5 justify-center",children:[e.jsx("button",{onClick:()=>l(r.id,r.quantity-1),disabled:r.quantity<=1,className:`\r
    w-8 h-8 flex items-center justify-center \r
    border border-red-500 rounded-md \r
    transition-all duration-200 ease-in-out \r
    active:bg-red-500\r
    active:text-[#1b2316]\r
    disabled:opacity-50 disabled:cursor-not-allowed\r
    disabled:transform-none \r
    disabled:bg-transparent\r
    text-red-500\r
  `,children:"-"}),e.jsx("span",{children:r.quantity}),e.jsx("button",{className:`\r
    w-8 h-8 flex items-center justify-center \r
    border border-green-500 rounded-md \r
    transition-all duration-200 ease-in-out \r
    active:bg-green-500\r
    active:text-[#1b2316]\r
    disabled:opacity-50 disabled:cursor-not-allowed\r
    disabled:transform-none \r
    text-green-500\r
  `,onClick:()=>l(r.id,r.quantity+1),children:"+"})]}),e.jsx("button",{onClick:()=>d(r.id),className:"border-1 border-red-500 w-full text-red-500 rounded-lg px-2 py-1 transition-colors hover:bg-red-500 hover:text-[#1b2316]",children:"Delete"})]})]},r.id))})]})};export{p as default};
