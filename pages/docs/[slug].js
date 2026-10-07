import{useRouter}from"next/router"
import ReactMarkdown from"react-markdown"
import fs from"fs"
import path from"path"
import Link from"next/link"

export async function getStaticPaths(){
  const dir="docs"
  const dirPath=path.join(process.cwd(),dir)
  let files=[]
  try{
    files=fs.readdirSync(dirPath).filter(f=>f.endsWith(".md")).map(f=>({params:{slug:f.replace(".md","")}}))
  }catch(e){console.error(e.message)}
  return{paths:files,fallback:false}
}

export async function getStaticProps({params}){
  const dir="docs"
  const fullPath=path.join(process.cwd(),dir,params.slug+".md")
  const content=fs.readFileSync(fullPath,"utf-8")
  return{props:{content}}
}

export default function Page({content}){
  const router=useRouter()
  if(router.isFallback)return<div>Loading...</div>
  return(
    <div style={{maxWidth:"800px",margin:"0 auto",padding:"20px"}}>
      <nav style={{marginBottom:"20px"}}><Link href="/">← Home</Link></nav>
      <article><ReactMarkdown>{content}</ReactMarkdown></article>
      <nav style={{marginTop:"20px"}}><Link href="/">← Back to Home</Link></nav>
    </div>
  )
}
