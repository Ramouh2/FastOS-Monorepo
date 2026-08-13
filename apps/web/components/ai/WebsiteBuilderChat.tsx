"use client";

import { useState } from "react";


export default function WebsiteBuilderChat(){

  const [step,setStep] = useState(1);


  return (

    <div className="max-w-xl rounded-2xl bg-neutral-900 p-6">


      <p className="text-xl mb-6">
        Je vais créer votre site automatiquement 🚀
      </p>


      {step === 1 && (

        <div>

          <p className="mb-4">
            Quel type de restaurant avez-vous ?
          </p>


          <div className="space-y-3">

            <button className="block w-full rounded-xl bg-neutral-800 p-4">
              🍔 Fast Food
            </button>


            <button className="block w-full rounded-xl bg-neutral-800 p-4">
              🍕 Italien
            </button>


            <button className="block w-full rounded-xl bg-neutral-800 p-4">
              🍣 Sushi
            </button>


          </div>

        </div>

      )}


    </div>

  );

}