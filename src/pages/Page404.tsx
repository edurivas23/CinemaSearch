import { HeartCrack } from "lucide-react"

export const Page404 = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white text-4xl h-screen gap-10">
       <HeartCrack size={120} className="animate-bounce"/>
      <h1> 404 - Página No Encontrada</h1>
     
    </div>
  )
}
