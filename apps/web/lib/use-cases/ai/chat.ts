import { PrismaBusinessRepository } from "@/lib/repositories/prisma-business-repository";
import { PrismaAIProfileRepository } from "@/lib/repositories/prisma-ai-profile-repository";

import {
  getOrCreateConversation,
  updateConversationStage,
} from "@/lib/ai/conversation/conversation-manager";

import {
  analyzeBusinessMessage,
} from "@/lib/ai/business-analyzer";

import {
  checkProfileCompletion,
} from "@/lib/ai/conversation/profile-checker";

import {
  generateNextQuestion,
} from "@/lib/ai/conversation/question-generator";

import {
  generateWebsiteFromAIProfile,
} from "@/lib/generators/website-ai-generator";



const businessRepository =
  new PrismaBusinessRepository();


const profileRepository =
  new PrismaAIProfileRepository();




export async function chat(

  userId: string,

  message: string

) {



  const business =
    await businessRepository.findByUserId(
      userId
    );



  if (!business) {

    throw new Error(
      "Business not found"
    );

  }





  const conversation =
    await getOrCreateConversation(
      business.id
    );





  const currentProfile =
    await profileRepository.findByBusinessId(
      business.id
    );





  const context =
    await analyzeBusinessMessage(

      message,

      currentProfile
        ? {

            businessName: "",

            businessType:
              currentProfile.businessType ?? undefined,

            location:
              currentProfile.location ?? undefined,

            audience:
              currentProfile.audience ?? undefined,

            style:
              currentProfile.style ?? undefined,

            goals: [],

          }

        : null

    );





  const profile =
    await profileRepository.upsert(

      business.id,

      {

        businessType:
          context.businessType,

        location:
          context.location,

        audience:
          context.audience,

        style:
          context.style,

      }

    );





  const completion =
    checkProfileCompletion(
      profile
    );





  if (completion.completed) {


    await generateWebsiteFromAIProfile(
      profile
    );



    await updateConversationStage(

      business.id,

      "READY_TO_BUILD"

    );



    return {

      conversationId:
        conversation.id,

      stage:
        "READY_TO_BUILD",

      message:
        "J'ai toutes les informations nécessaires. Je peux maintenant créer votre site 🚀"

    };


  }






  await updateConversationStage(

    business.id,

    "DISCOVERY"

  );



  return {

    conversationId:
      conversation.id,

    stage:
      "DISCOVERY",

    missing:
      completion.missing,

    message:
      generateNextQuestion(
        completion.missing
      ),

  };


}