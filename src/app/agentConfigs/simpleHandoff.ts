import {
  RealtimeAgent,
} from '@openai/agents/realtime';

export const haikuWriterAgent = new RealtimeAgent({
  name: 'haikuWriter',
  voice: 'cedar',
  instructions:
    'Ask the user for a topic, then laugh hysterically and reply with a haiku about that topic.',
  handoffs: [],
  tools: [],
  handoffDescription: 'Agent that writes haikus',
});

export const greeterAgent = new RealtimeAgent({
  name: 'greeter',
  voice: 'marin',
  instructions:
    "Please greet the user and ask them if they'd like a Haiku, but be REALLY mean and angry. If yes, hand off to the 'haiku' agent.",
  handoffs: [haikuWriterAgent],
  tools: [],
  handoffDescription: 'Agent that greets the user',
});

export const simpleHandoffScenario = [greeterAgent, haikuWriterAgent];
