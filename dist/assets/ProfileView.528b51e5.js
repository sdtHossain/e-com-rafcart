import{T as n}from"./TheBreadcrumb.b0b6f99f.js";import{_ as o}from"./AccountSidebar.1a46ee51.js";import{_ as l,o as t,c as a,q as d,k as e,F as c}from"./index.9dd86fef.js";const p={},m={class:"col-span-9 shadow rounded px-6 pt-5 pb-7"},_=d('<h4 class="text-lg font-medium capitalize mb-4">Profile information</h4><div class="space-y-4"><div class="grid grid-cols-2 gap-4"><div><label for="first">First name</label><input type="text" name="first" id="first" class="input-box"></div><div><label for="last">Last name</label><input type="text" name="last" id="last" class="input-box"></div></div><div class="grid grid-cols-2 gap-4"><div><label for="birthday">Birthday</label><input type="date" name="birthday" id="birthday" class="input-box"></div><div><label for="gender">Gender</label><select name="gender" id="gender" class="input-box"><option value="male">Male</option><option value="female">Female</option></select></div></div><div class="grid grid-cols-2 gap-4"><div><label for="email">Email Address</label><input type="email" name="email" id="email" class="input-box"></div><div><label for="phone">Phone number</label><input type="text" name="phone" id="phone" class="input-box"></div></div></div><div class="mt-4"><button type="submit" class="py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"> save changes </button></div>',3),b=[_];function u(i,s){return t(),a("div",m,b)}const v=l(p,[["render",u]]),f={class:"container grid grid-cols-12 items-start gap-6 pt-4 pb-16"},h={__name:"ContentWrapper",setup(i){return(s,r)=>(t(),a("div",f,[e(o),e(v)]))}},B={__name:"ProfileView",setup(i){return(s,r)=>(t(),a(c,null,[e(n),e(h)],64))}};export{B as default};