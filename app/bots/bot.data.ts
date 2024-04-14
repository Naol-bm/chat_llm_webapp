import { Bot } from "@/app/store/bot";
import { nanoid } from "nanoid";
import Locale from "../locales";
import { ModelType } from "@/app/client/platforms/llm";
import { createEmptySession } from "../store";

const TEMPLATE = (PERSONA: string) =>
  `I want you to act as a ${PERSONA}. I will provide you with the context needed to solve my problem. Use intelligent, simple, and understandable language. Be concise. It is helpful to explain your thoughts step by step and with bullet points.
  !Notice: your name is GebereKoo and you are a help full agricultural expert and can assist with it`;

type DemoBot = Omit<Bot, "session">;

export const DEMO_BOTS: DemoBot[] = [
  {
    id: "1",
    avatar: "1f916",
    name: "GebereKoo",
    botHello: "Hello! How can I assist you today?",
    context: [
      {
        role: "system",
        content: TEMPLATE("Botanist"),
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 0.3,
      maxTokens: 4096,
      sendMemory: false,
    },
    readOnly: true,
    hideContext: false,
  },
  {
    id: "2",
    avatar: "1f916",
    name: "BotanistKoo",
    botHello: "Hello! How can I assist you today?",
    context: [
      {
        role: "system",
        content: TEMPLATE("Botanist"),
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 0.5,
      maxTokens: 4096,
      sendMemory: true,
    },
    readOnly: true,
    hideContext: false,
  },
  {
    id: "3",
    avatar: "1f916",
    name: "GardenerKoo",
    botHello: "Hello! How can I help you with Your Plant?",
    context: [
      {
        role: "system",
        content: TEMPLATE("Gardener"),
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 0.1,
      maxTokens: 4096,
      sendMemory: true,
    },
    readOnly: true,
    // datasource: "redhat",
    hideContext: false,
  },
  {
    id: "4",
    avatar: "1f454",
    name: "EcologistKoo",
    botHello: "Hello! How can I help you with Your Plant?",
    context: [
      {
        role: "system",
        content: TEMPLATE("Ecologist"),
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 0.1,
      maxTokens: 4096,
      sendMemory: true,
    },
    readOnly: true,
    // datasource: "watchos",
    hideContext: false,
  },
  {
    id: "5",
    avatar: "1f4da",
    name: "AdventurerKoo",
    botHello: "Hello! How can I assist you today?",
    context: [
      {
        role: "system",
        content: TEMPLATE("Adventurer"),
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 0.1,
      maxTokens: 4096,
      sendMemory: true,
    },
    readOnly: true,
    // datasource: "basic_law_germany",
    hideContext: false,
  },
];

export const createDemoBots = (): Record<string, Bot> => {
  const map: Record<string, Bot> = {};
  DEMO_BOTS.forEach((demoBot) => {
    const bot: Bot = JSON.parse(JSON.stringify(demoBot));
    bot.session = createEmptySession();
    map[bot.id] = bot;
  });
  return map;
};

export const createEmptyBot = (): Bot => ({
  id: nanoid(),
  avatar: "1f916",
  name: Locale.Store.DefaultBotName,
  context: [],
  modelConfig: {
    model: "gpt-3.5-turbo" as ModelType,
    temperature: 0.5,
    maxTokens: 4096,
    sendMemory: true,
  },
  readOnly: false,
  createdAt: Date.now(),
  botHello: Locale.Store.BotHello,
  hideContext: false,
  session: createEmptySession(),
});
