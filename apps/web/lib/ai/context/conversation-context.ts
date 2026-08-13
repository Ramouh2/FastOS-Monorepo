export type ConversationMessage = {
  role: "user" | "assistant";
  content: string;
};


export type AIConversationContext = {
  messages: ConversationMessage[];
};