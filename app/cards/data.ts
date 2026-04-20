export type MajorArcanaCard = {
  number: number;
  slug: string;
  name: string;
  meaning: string;
  note: string;
  expandedMeaning: string;
  symbolism: string;
  reflection: string;
};

export type DeckGroup = {
  id: string;
  count: string;
  title: string;
  description: string;
};

export type MinorSuit = {
  slug: string;
  name: string;
  element: string;
  themes: string;
  range: string;
  atmosphere: string;
  expandedMeaning: string;
  readingFocus: string;
  courtEnergy: string;
};

export type FeaturedCard = {
  name: string;
  category: string;
  meaning: string;
  accent: string;
};

export const deckBreakdown: DeckGroup[] = [
  {
    id: "major-arcana",
    count: "22",
    title: "Major Arcana",
    description:
      "The defining archetypes of the deck, tracing change, awakening, tension, surrender, and transformation.",
  },
  {
    id: "minor-arcana",
    count: "56",
    title: "Minor Arcana",
    description:
      "The cards of lived experience, shaped by emotion, action, thought, and the material world.",
  },
  {
    id: "court-cards",
    count: "16",
    title: "Court Cards",
    description:
      "The relational voices of the deck, often reflecting people, stances, roles, and evolving aspects of the self.",
  },
];

export const majorArcana: MajorArcanaCard[] = [
  {
    number: 0,
    slug: "the-fool",
    name: "The Fool",
    meaning: "Beginnings, trust, and movement into the unknown.",
    note: "A card of open-hearted risk and sacred forward motion.",
    expandedMeaning:
      "The Fool marks the start of a new emotional or spiritual chapter. It often appears when life is asking for trust before certainty has arrived, and when a fresh path matters more than a flawless plan.",
    symbolism:
      "Its symbolism belongs to innocence, movement, and unguarded possibility. The energy is not careless so much as unburdened, willing to go where experience has not yet gone.",
    reflection:
      "Ask where you are being invited to move with more faith, curiosity, and less over-control.",
  },
  {
    number: 1,
    slug: "the-magician",
    name: "The Magician",
    meaning: "Focus, will, and turning potential into action.",
    note: "It speaks to conscious creation and gathered energy.",
    expandedMeaning:
      "The Magician appears when intention is ready to become form. It signals an ability to concentrate resources, skill, language, and attention toward a specific outcome.",
    symbolism:
      "This card often points to agency, alignment, and the disciplined use of what is already available. Its power comes from directing scattered energy into one chosen act.",
    reflection:
      "Ask what you already possess that could become potent if fully focused.",
  },
  {
    number: 2,
    slug: "the-high-priestess",
    name: "The High Priestess",
    meaning: "Inner knowing, mystery, and intuitive depth.",
    note: "A quiet invitation to trust what is felt before it is named.",
    expandedMeaning:
      "The High Priestess often arrives when external clarity is thin but internal knowing is strong. She asks for patience, perception, and reverence for what has not fully surfaced yet.",
    symbolism:
      "Her atmosphere is lunar, still, and private. She suggests that meaning is emerging beneath the visible layer, and that silence may reveal more than forceful interpretation.",
    reflection:
      "Ask what your deeper self already knows but has not yet spoken aloud.",
  },
  {
    number: 3,
    slug: "the-empress",
    name: "The Empress",
    meaning: "Growth, abundance, beauty, and devotion to life.",
    note: "She often signals fertile conditions for care and creation.",
    expandedMeaning:
      "The Empress is a card of nourishment, sensuality, and generative abundance. She speaks to the environments, relationships, and inner states that allow something living to flourish.",
    symbolism:
      "Her symbolism belongs to embodiment and receptivity: beauty that is not ornamental alone, but deeply life-giving. She suggests that creativity may need softness and trust as much as discipline.",
    reflection:
      "Ask what wants to be tended with greater care, beauty, and patience.",
  },
  {
    number: 4,
    slug: "the-emperor",
    name: "The Emperor",
    meaning: "Structure, steadiness, authority, and protection.",
    note: "A card of boundaries that make vision sustainable.",
    expandedMeaning:
      "The Emperor appears when definition, leadership, or strong scaffolding is required. He points toward what stabilizes the future, whether that means boundaries, plans, responsibility, or accountability.",
    symbolism:
      "His energy is architectural rather than ornamental. He asks what foundation can hold what you are trying to build, and what authority must be owned instead of avoided.",
    reflection:
      "Ask where stronger structure would create more freedom, not less.",
  },
  {
    number: 5,
    slug: "the-hierophant",
    name: "The Hierophant",
    meaning: "Tradition, teachings, lineage, and shared wisdom.",
    note: "It points toward systems of meaning and trusted frameworks.",
    expandedMeaning:
      "The Hierophant speaks to inherited knowledge, mentorship, and the sacred role of tradition. It may arise when the reading concerns established practice, institutional influence, or the search for guidance through lineage.",
    symbolism:
      "This card can indicate comfort in structure or tension with it. It asks how wisdom is transmitted, and whether a framework is serving your growth or limiting it.",
    reflection:
      "Ask which teachings still nourish you and which ones require renewal.",
  },
  {
    number: 6,
    slug: "the-lovers",
    name: "The Lovers",
    meaning: "Union, alignment, and values made visible.",
    note: "Less about fantasy than the truth revealed by choosing.",
    expandedMeaning:
      "The Lovers concerns intimacy, honesty, and alignment between desire and principle. It often appears when the heart is being asked to choose with clarity, not just chemistry.",
    symbolism:
      "Its symbolism is relational but not limited to romance. It can speak to the union of different inner forces and to the consequences of selecting one path over another.",
    reflection:
      "Ask what choice would bring you into deeper alignment with your actual values.",
  },
  {
    number: 7,
    slug: "the-chariot",
    name: "The Chariot",
    meaning: "Resolve, direction, and momentum through tension.",
    note: "A card of disciplined movement and emotional command.",
    expandedMeaning:
      "The Chariot marks a period when victory depends on integration rather than speed alone. It asks for focus, emotional regulation, and a willingness to drive conflicting forces toward one destination.",
    symbolism:
      "Its energy is kinetic and intentional. The card suggests forward movement, but only if inner conflict is acknowledged and directed rather than denied.",
    reflection:
      "Ask what you are steering, and whether your will is aligned with your deeper purpose.",
  },
  {
    number: 8,
    slug: "strength",
    name: "Strength",
    meaning: "Courage, tenderness, and quiet mastery.",
    note: "Its power comes through patience rather than force.",
    expandedMeaning:
      "Strength appears when courage is needed in a softer form. It is not the charge of dominance, but the steadiness of meeting intensity with calm presence and compassion.",
    symbolism:
      "This card belongs to emotional maturity, self-regulation, and the ability to stay open without becoming weak. Its power is intimate, embodied, and enduring.",
    reflection:
      "Ask where gentleness might be the most powerful response available.",
  },
  {
    number: 9,
    slug: "the-hermit",
    name: "The Hermit",
    meaning: "Reflection, solitude, and the search for deeper truth.",
    note: "The light here is intimate, deliberate, and inward-facing.",
    expandedMeaning:
      "The Hermit suggests retreat for the sake of insight. It may point toward a season of inner work, study, contemplation, or the need to hear yourself without the noise of outside pressure.",
    symbolism:
      "Its symbolism is lantern-like: enough light for the next true step, not the entire road. The card honors slowness, sincerity, and the value of private revelation.",
    reflection:
      "Ask what becomes audible when you stop reaching outward for immediate answers.",
  },
  {
    number: 10,
    slug: "wheel-of-fortune",
    name: "Wheel of Fortune",
    meaning: "Cycles, timing, and the turning of circumstance.",
    note: "It reminds the reader that no season remains fixed.",
    expandedMeaning:
      "Wheel of Fortune speaks to motion larger than personal control. It often appears when patterns are changing, events are accelerating, or timing itself is becoming part of the message.",
    symbolism:
      "This card reminds the reader that life moves in phases. What rises can recede, what feels stalled can begin to turn, and timing may matter as much as effort.",
    reflection:
      "Ask what cycle you are truly in, and whether you are resisting or cooperating with its turn.",
  },
  {
    number: 11,
    slug: "justice",
    name: "Justice",
    meaning: "Balance, accountability, and clear seeing.",
    note: "A card of cause, effect, and honest alignment.",
    expandedMeaning:
      "Justice appears when clarity must replace narrative. It asks for truth, proportion, and the willingness to see what is actually being created by your choices.",
    symbolism:
      "Its symbolism belongs to balance and consequence. This card can indicate contracts, ethics, decisions, or the sober work of returning life to alignment.",
    reflection:
      "Ask what honesty is required now, even if it complicates the story you prefer.",
  },
  {
    number: 12,
    slug: "the-hanged-man",
    name: "The Hanged Man",
    meaning: "Pause, surrender, and a changed point of view.",
    note: "It asks what becomes visible when striving stops.",
    expandedMeaning:
      "The Hanged Man marks a sacred suspension. Something may need to be released, delayed, or viewed from an entirely different orientation before movement can resume with integrity.",
    symbolism:
      "Its energy is not passive so much as deeply intentional. It suggests that wisdom may require sacrifice, waiting, or the relinquishing of the perspective that once felt obvious.",
    reflection:
      "Ask what could become clear if you stopped forcing an immediate outcome.",
  },
  {
    number: 13,
    slug: "death",
    name: "Death",
    meaning: "Endings, release, and the necessity of transformation.",
    note: "Not doom, but the passage that makes renewal possible.",
    expandedMeaning:
      "Death signals a definitive transition. It appears when something has reached its natural conclusion and cannot be revitalized by clinging alone.",
    symbolism:
      "Its symbolism is honest, clean, and irreversible. The card points less to destruction than to the stripping away required for genuine renewal.",
    reflection:
      "Ask what chapter is truly over, and what energy would be freed by accepting that fact.",
  },
  {
    number: 14,
    slug: "temperance",
    name: "Temperance",
    meaning: "Integration, harmony, and steady refinement.",
    note: "A card of balance achieved through ongoing adjustment.",
    expandedMeaning:
      "Temperance speaks to rhythm, proportion, and careful blending. It often appears when extremes are unhelpful and a more elegant middle path is available.",
    symbolism:
      "This card belongs to craft as much as peace. It suggests that healing, clarity, and beauty can emerge through small adjustments repeated over time.",
    reflection:
      "Ask what needs recalibration rather than dramatic reinvention.",
  },
  {
    number: 15,
    slug: "the-devil",
    name: "The Devil",
    meaning: "Attachment, appetite, and distorted power.",
    note: "It reveals the bargains that keep freedom at a distance.",
    expandedMeaning:
      "The Devil appears when desire has become binding, when fear or appetite has exaggerated its authority, or when a dynamic persists because it secretly offers something hard to release.",
    symbolism:
      "Its symbolism is magnetic and exposing. The card asks what you are chained to, and whether the chain is more psychological than absolute.",
    reflection:
      "Ask what pattern feels powerful only because it has gone unnamed.",
  },
  {
    number: 16,
    slug: "the-tower",
    name: "The Tower",
    meaning: "Disruption, revelation, and sudden release.",
    note: "What falls away here often could not remain intact.",
    expandedMeaning:
      "The Tower marks rupture, but not meaninglessness. It appears when false structure collapses, concealed truths break through, or life interrupts what can no longer be sustained.",
    symbolism:
      "This card belongs to revelation under pressure. What it removes may feel shocking, but its deeper work is to clear space for what is more honest and alive.",
    reflection:
      "Ask what unstable structure has been asking to come down, even before the fall became visible.",
  },
  {
    number: 17,
    slug: "the-star",
    name: "The Star",
    meaning: "Hope, renewal, and a return to clarity.",
    note: "A quieter kind of healing, luminous and sincere.",
    expandedMeaning:
      "The Star appears after intensity has passed and the nervous system can begin to soften. It is a card of healing, truthfulness, and renewed relationship to what feels possible.",
    symbolism:
      "Its symbolism is tender rather than triumphant. The light here is restorative, guiding you back toward trust, beauty, and a more spacious future.",
    reflection:
      "Ask what becomes possible when you let yourself believe in renewal again.",
  },
  {
    number: 18,
    slug: "the-moon",
    name: "The Moon",
    meaning: "Dreams, ambiguity, and emotional undercurrents.",
    note: "It belongs to intuition, shadows, and symbolic truth.",
    expandedMeaning:
      "The Moon appears when certainty is unavailable but meaning is still moving. It points toward dreams, projection, subconscious material, and emotional truth that resists simple language.",
    symbolism:
      "This card is not merely confusion. It can also indicate deep intuition, mythic imagination, and the symbolic intelligence that surfaces when literal clarity is absent.",
    reflection:
      "Ask what your feelings know that your logic has not fully translated yet.",
  },
  {
    number: 19,
    slug: "the-sun",
    name: "The Sun",
    meaning: "Vitality, joy, and full illumination.",
    note: "A card of openness, warmth, and unmistakable life force.",
    expandedMeaning:
      "The Sun is direct, generous, and clarifying. It appears when truth wants to be seen clearly, when pleasure is part of the medicine, or when energy returns after a dimmer period.",
    symbolism:
      "Its symbolism is radiant and embodied. The card supports confidence, visibility, sincerity, and the kind of happiness that does not need disguise.",
    reflection:
      "Ask what wants to be brought fully into the light without apology.",
  },
  {
    number: 20,
    slug: "judgement",
    name: "Judgement",
    meaning: "Awakening, reckoning, and a call to rise.",
    note: "It often marks a threshold between old identity and new truth.",
    expandedMeaning:
      "Judgement appears when a deeper calling is becoming difficult to ignore. It can signal life review, a major realization, or the sense that an older version of the self is no longer enough.",
    symbolism:
      "Its energy is not punishment but awakening. The card suggests that something dormant is being summoned into fuller life, often with a sense of irreversible recognition.",
    reflection:
      "Ask what truth you are now ready to answer, even if it changes your direction.",
  },
  {
    number: 21,
    slug: "the-world",
    name: "The World",
    meaning: "Completion, integration, and earned wholeness.",
    note: "The cycle closes here with presence, not perfection.",
    expandedMeaning:
      "The World marks arrival, synthesis, and the successful completion of a significant cycle. It often appears when experience has been integrated and a wider perspective has finally been embodied.",
    symbolism:
      "This card belongs to fulfillment, coherence, and maturity. It suggests not that everything is perfect, but that something has been brought to its fullest meaningful form.",
    reflection:
      "Ask what chapter has truly come full circle, and how to honor that completion before beginning again.",
  },
];

export const minorSuits: MinorSuit[] = [
  {
    slug: "wands",
    name: "Wands",
    element: "Fire",
    themes: "Desire, initiative, identity, momentum, creative force",
    range: "Ace through King",
    atmosphere:
      "Wands explore ambition and life force, often arriving when something wants to be started, claimed, or pursued with conviction.",
    expandedMeaning:
      "Wands carry the language of spark, appetite, assertion, and becoming. When this suit dominates a reading, the question often shifts toward agency: what wants to begin, what must be claimed, and what is asking for courage instead of hesitation.",
    readingFocus:
      "This suit often becomes prominent around reinvention, creative projects, sexual energy, risk, leadership, and the friction between instinct and discipline.",
    courtEnergy:
      "Its court cards usually feel charismatic, restless, bold, or catalytic. They can point to a person, a style of action, or the attitude needed to move something forward.",
  },
  {
    slug: "cups",
    name: "Cups",
    element: "Water",
    themes: "Emotion, intimacy, receptivity, relationships, intuition",
    range: "Ace through King",
    atmosphere:
      "Cups hold the subtle landscape of feeling, attachment, and longing, mapping how connection moves through the inner life.",
    expandedMeaning:
      "Cups belong to tenderness, emotion, memory, spiritual resonance, and the bonds that shape the heart. When Cups dominate a reading, the emotional truth of the situation is usually more important than the surface events alone.",
    readingFocus:
      "This suit often becomes central in questions of love, longing, grief, intimacy, trust, reconciliation, dreams, and the movement of feeling through the body.",
    courtEnergy:
      "Its court cards often feel romantic, intuitive, reflective, or deeply relational. They can signal compassion, emotional maturity, or the need to remain soft without losing discernment.",
  },
  {
    slug: "swords",
    name: "Swords",
    element: "Air",
    themes: "Thought, language, conflict, clarity, discernment",
    range: "Ace through King",
    atmosphere:
      "Swords examine the mind under pressure, where truth, decision, fear, and precision all meet.",
    expandedMeaning:
      "Swords speak through logic, anxiety, language, conflict, and revelation. When they dominate a spread, the reading is often asking for discernment, precision, or an honest confrontation with what has been mentally or verbally shaping the story.",
    readingFocus:
      "This suit often appears in moments involving hard truths, decisions, contracts, arguments, overthinking, and the tension between fear and clarity.",
    courtEnergy:
      "Its court cards can feel sharp, strategic, skeptical, or incisive. They may point toward mental discipline, difficult communication, or the need to cut through confusion cleanly.",
  },
  {
    slug: "pentacles",
    name: "Pentacles",
    element: "Earth",
    themes: "Body, work, resources, craft, material reality",
    range: "Ace through King",
    atmosphere:
      "Pentacles speak to the tangible world: what is built, sustained, invested in, and made real over time.",
    expandedMeaning:
      "Pentacles hold the language of embodiment, work, money, routine, craft, and long-term stability. When this suit is strong, the reading often returns to what is practical, sustainable, rooted, and materially true.",
    readingFocus:
      "This suit tends to matter most in readings about livelihood, health, home, discipline, study, value, stewardship, and the slow work of making something real.",
    courtEnergy:
      "Its court cards often feel grounded, capable, dependable, or materially aware. They can indicate mastery through repetition, devotion, and attention to the physical world.",
  },
];

export const featuredCards: FeaturedCard[] = [
  {
    name: "The Fool",
    category: "Major Arcana",
    meaning: "A fresh threshold, a leap of faith, and an unguarded beginning.",
    accent: "from-violet-300/30 to-transparent",
  },
  {
    name: "The Star",
    category: "Major Arcana",
    meaning: "Hope returning after rupture, with a gentler and steadier light.",
    accent: "from-sky-300/30 to-transparent",
  },
  {
    name: "Ace of Cups",
    category: "Minor Arcana",
    meaning: "Emotional opening, spiritual softness, and a new flow of feeling.",
    accent: "from-cyan-300/24 to-transparent",
  },
  {
    name: "Three of Swords",
    category: "Minor Arcana",
    meaning: "Heartbreak that clarifies, names, and changes what comes next.",
    accent: "from-white/16 to-transparent",
  },
  {
    name: "Queen of Pentacles",
    category: "Court Card",
    meaning: "Grounded care, embodied devotion, and practical abundance.",
    accent: "from-amber-200/22 to-transparent",
  },
  {
    name: "Knight of Wands",
    category: "Court Card",
    meaning: "Urgency, charisma, appetite, and bold forward motion.",
    accent: "from-orange-300/24 to-transparent",
  },
];
