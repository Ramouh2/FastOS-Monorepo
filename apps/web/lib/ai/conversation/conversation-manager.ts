import { PrismaAIConversationRepository } from "@/lib/repositories/prisma-ai-conversation-repository";


const conversationRepository =
  new PrismaAIConversationRepository();



export async function getOrCreateConversation(
  businessId: string
) {


  let conversation =
    await conversationRepository.findByBusinessId(
      businessId
    );



  if (!conversation) {

    conversation =
      await conversationRepository.create(
        businessId
      );

  }



  return conversation;

}





export async function updateConversationStage(

  businessId: string,

  stage: string

) {


  return conversationRepository.updateStage(

    businessId,

    stage

  );

}