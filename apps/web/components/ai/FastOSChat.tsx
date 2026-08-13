"use client";

import { useState } from "react";


export default function FastOSChat(){

  const [message,setMessage] = useState("");

  const [loading,setLoading] = useState(false);


  const [messages,setMessages] = useState<
    {
      role:"user"|"assistant";
      content:string;
    }[]
  >([
    {
      role:"assistant",
      content:
      "Bonjour 👋 Parlez-moi de votre entreprise, je vais créer votre présence digitale."
    }
  ]);




  async function sendMessage(){

    if(!message.trim()) return;


    const userMessage = message;


    setMessages((prev)=>[
      ...prev,
      {
        role:"user",
        content:userMessage
      }
    ]);


    setMessage("");

    setLoading(true);



    try {


      const response = await fetch(
        "/api/ai/analyze",
        {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            message:userMessage
          })
        }
      );



      const data = await response.json();



      setMessages((prev)=>[
        ...prev,
        {
          role:"assistant",
          content:
`J'ai analysé votre activité 🧠

🏪 Type :
${data.businessType || "Non détecté"}

📍 Localisation :
${data.location || "À préciser"}

🎯 Clientèle :
${data.audience || "À préciser"}

🎨 Style :
${data.style || "À définir"}

---

Je vais utiliser ces informations pour créer votre expérience FastOS. 🚀`
        }
      ]);



    } catch(error){


      setMessages((prev)=>[
        ...prev,
        {
          role:"assistant",
          content:
          "Une erreur est survenue pendant l'analyse."
        }
      ]);


    }


    setLoading(false);

  }





  return (

    <div className="max-w-xl rounded-2xl bg-neutral-900 p-6">


      <div className="space-y-4 mb-6">


        {messages.map((msg,index)=>(

          <div
            key={index}
            className={
              msg.role==="assistant"
              ?
              "rounded-xl bg-neutral-800 p-4 whitespace-pre-line"
              :
              "rounded-xl bg-orange-500 p-4 whitespace-pre-line"
            }
          >

            {msg.content}

          </div>

        ))}


        {
          loading && (

            <div className="rounded-xl bg-neutral-800 p-4">
              FastOS analyse votre entreprise... 🤖
            </div>

          )
        }


      </div>




      <div className="flex gap-3">


        <input

          className="flex-1 rounded-xl bg-neutral-800 p-3 text-white"

          placeholder="Décrivez votre entreprise..."

          value={message}

          onChange={(e)=>setMessage(e.target.value)}

          onKeyDown={(e)=>{

            if(e.key==="Enter"){
              sendMessage();
            }

          }}

        />



        <button

          onClick={sendMessage}

          disabled={loading}

          className="rounded-xl bg-orange-500 px-5"

        >

          Envoyer

        </button>


      </div>



    </div>

  );

}