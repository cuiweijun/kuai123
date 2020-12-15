const express = require("express")
const next = require("next");
const { default: createServer } = require("next/dist/server/next");
const dev = process.env.NODE_ENV !== 'production';// 表示的就是是否是生成环境

const app = next({dev})
const handle = app.getRequestHandler();
app.prepare().then(()=>{
    
    const serve = express()
    serve.get("/hehe",(req,res)=>{
        res.send("hello world hahaha")
    })

    serve.get("*",(req,res)=>{
        handle(req,res)//交给next的文件系统路由
    })
    serve.listen(3000,()=>{console.log("server is running -----")})
})