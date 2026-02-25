export type Category = "cognitive" | "social" | "memory" | "motivational";

export interface Bias {
  id: string;
  number: number;
  name: string;
  category: Category;
  tagline: string;
  description: string;
  example: string;
  mentalFix: string;
  featured?: boolean; // spans 2 grid columns
}

export const BIASES: Bias[] = [
  {
    id: "confirmation-bias",
    number: 1,
    name: "Confirmation Bias",
    category: "cognitive",
    tagline: "You only hear what you already believe.",
    description:
      "The tendency to search for, interpret, and recall information that confirms your pre-existing beliefs. New evidence gets unconsciously filtered through the lens of what you already think is true — disconfirming data is dismissed as noise.",
    example:
      "A flat-earther ignores satellite imagery but accepts any blurry photo as 'proof.' Investors hold losing stocks by reading only bullish commentary.",
    mentalFix:
      "Actively seek disconfirming evidence before deciding. Ask: 'What would genuinely convince me I'm wrong?' and pursue that answer. Practice steel-manning — argue the opposing view as compellingly as possible. Audit your information diet for opposing sources.",
    featured: true,
  },
  {
    id: "sunk-cost-fallacy",
    number: 2,
    name: "Sunk Cost Fallacy",
    category: "cognitive",
    tagline: "Throwing good money after bad, forever.",
    description:
      "Continuing a doomed endeavor because of resources already invested, rather than evaluating future costs and benefits alone. Past losses are irrecoverable — only expected future outcomes should drive forward decisions.",
    example:
      "Sitting through a terrible movie because you paid for the ticket. Staying in a failing project because the team has been working on it for two years.",
    mentalFix:
      "Treat every decision as if you're starting fresh. Ask: 'If I hadn't already invested X, would I choose to start today?' Write down sunk costs explicitly and then ignore them. Evaluate only the delta: future cost vs. future return.",
  },
  {
    id: "dunning-kruger",
    number: 3,
    name: "Dunning–Kruger Effect",
    category: "cognitive",
    tagline: "The less you know, the more confident you are.",
    description:
      "Low-ability individuals systematically overestimate their competence, while genuine experts underestimate theirs. Incompetence prevents accurate self-assessment — you literally cannot perceive the gap between what you know and what you don't.",
    example:
      "A first-year medical student who diagnoses everyone with rare diseases. A novice trader who 'sees the pattern everyone else missed.'",
    mentalFix:
      "Keep a calibration journal: record predictions with confidence levels, then track outcomes. When your hit-rate diverges sharply from confidence, investigate. Seek feedback from domain experts. Study a field until the 'valley of despair' humbles you.",
    featured: true,
  },
  {
    id: "anchoring-bias",
    number: 4,
    name: "Anchoring Bias",
    category: "cognitive",
    tagline: "The first number you hear owns you.",
    description:
      "Over-reliance on the first piece of information encountered when making decisions. Subsequent judgments cluster around the initial anchor — even when it's arbitrary, irrelevant, or deliberately manipulative.",
    example:
      "A $500 jacket feels cheap after seeing a $2,000 one displayed first. Salary negotiations are dominated by whoever names a number first.",
    mentalFix:
      "Generate your own estimate before encountering external figures. In negotiations, make the first offer to set the anchor yourself. Explicitly ask: 'Why am I comparing to this number? What's my independent baseline?' Write down your pre-anchor estimate.",
  },
  {
    id: "availability-heuristic",
    number: 5,
    name: "Availability Heuristic",
    category: "cognitive",
    tagline: "If you can vividly recall it, it must be common.",
    description:
      "Judging the probability of events by how easily examples come to mind. Vivid, recent, or emotionally charged events feel far more probable than statistical base rates warrant — media coverage systematically exploits this.",
    example:
      "Fearing plane crashes (rare: 1 in 11M flights) more than car crashes (common: 1 in 101 lifetime). Overestimating shark attacks after news coverage.",
    mentalFix:
      "Override gut probability with base-rate data before acting. Ask: 'What do actual statistics say about frequency?' when your assessment feels driven by a vivid memory. Deliberately slow down risk assessments involving emotionally loaded outcomes.",
    featured: true,
  },
  {
    id: "framing-effect",
    number: 6,
    name: "Framing Effect",
    category: "cognitive",
    tagline: "How you say it changes what it means.",
    description:
      "Decisions are influenced by presentation rather than objective content. '90% survival rate' and '10% mortality rate' describe identical situations but trigger measurably different choices. Context is never neutral.",
    example:
      "Beef labeled '95% fat free' outsells '5% fat' by a wide margin. Drug trials framed as 'reduces deaths by 30%' are perceived as more effective than 'saves 3 in 10 patients.'",
    mentalFix:
      "Reframe every significant decision in both positive and negative terms before choosing. Translate percentages into raw numbers: '10% mortality' → '10 deaths per 100 patients.' Ask: 'How would an adversary present this same information?'",
  },
  {
    id: "ingroup-bias",
    number: 7,
    name: "In-group Bias",
    category: "social",
    tagline: "Your tribe is always the good tribe.",
    description:
      "The tendency to favor members of one's own group — defined by ethnicity, team, alma mater, nationality, or even arbitrary lab assignments — over outsiders. Resources, trust, and positive attributions flow preferentially inward.",
    example:
      "Identical résumés rated significantly higher when the name matches the evaluator's ethnicity. Referral networks that systematically exclude outside candidates.",
    mentalFix:
      "Implement blind evaluation processes for high-stakes decisions. Before any group-based judgment, ask: 'Would I make this same call if this person were from a different group?' Actively surface and credit out-group achievements.",
  },
  {
    id: "fundamental-attribution-error",
    number: 8,
    name: "Fundamental Attribution Error",
    category: "social",
    tagline: "Their failure is character. Yours is circumstance.",
    description:
      "Overattributing others' behavior to stable internal character traits while explaining our own through external context and circumstances. The same action receives radically different moral weight depending on who performed it.",
    example:
      "Someone cuts you off: 'They're an aggressive driver.' You cut someone off: 'I was rushing to the hospital.' Evaluators rate identical essays more harshly when the author is told to choose their position.",
    mentalFix:
      "Before judging any behavior, construct three plausible situational explanations. Ask: 'What pressures, deadlines, or contexts might have caused this — and did I benefit from similar grace today?' Apply the charitable framework you use for yourself.",
  },
  {
    id: "halo-effect",
    number: 9,
    name: "Halo Effect",
    category: "social",
    tagline: "Beautiful people are smarter. Right?",
    description:
      "One salient positive trait creates a cognitive 'halo' that inflates all other perceived attributes. Physical attractiveness, charisma, or one excellent skill causes an irrational positive spillover into unrelated domains.",
    example:
      "Attractive defendants receive lighter sentences in mock trials. Popular executives receive less blame for company failures. Teachers rate handsome students as more intelligent.",
    mentalFix:
      "Evaluate attributes independently — score competence, integrity, and skill separately before forming an overall impression. Notice when you're reasoning backward from 'I like them' to 'therefore they're qualified.' Require evidence for each domain claim.",
    featured: true,
  },
  {
    id: "self-serving-bias",
    number: 10,
    name: "Self-Serving Bias",
    category: "motivational",
    tagline: "Success is skill. Failure is someone else's fault.",
    description:
      "Attributing successes to personal qualities and failures to external factors. Protects self-esteem at the direct cost of accurate feedback loops — preventing the genuine self-assessment required for real improvement.",
    example:
      "Acing a test: 'I'm talented.' Failing: 'The teacher wrote unfair questions.' Winning a negotiation: 'I'm a sharp negotiator.' Losing: 'They were unreasonable.'",
    mentalFix:
      "After any significant outcome, force two causal accounts: one where internal factors drove failure, one where external factors drove success. Use both to calibrate a balanced postmortem before acting on the comfortable version.",
  },
  {
    id: "hindsight-bias",
    number: 11,
    name: "Hindsight Bias",
    category: "memory",
    tagline: "I knew it all along. Obviously.",
    description:
      "Viewing past events as having been predictable after they occur, creating an illusion of foresight. Prevents accurate learning from mistakes and generates overconfidence in future prediction ability.",
    example:
      "After the 2008 crash: 'Everyone knew housing was a bubble.' After a startup failure: 'The market was obviously too small.' Outcome knowledge rewrites the memory of uncertainty.",
    mentalFix:
      "Keep a dated decision journal with reasoning recorded before outcomes are known. When reviewing past decisions, force yourself to reconstruct only the information available at the time — not the information available now. Score your actual pre-decision confidence.",
  },
  {
    id: "optimism-bias",
    number: 12,
    name: "Optimism Bias",
    category: "motivational",
    tagline: "Bad things happen. Just not to me.",
    description:
      "Overestimating the likelihood of positive personal outcomes and underestimating negative ones relative to base rates. Leads to poor risk assessment, insufficient insurance, and systematic planning fallacies.",
    example:
      "Most people rate their driving skill as above average. Most first-time entrepreneurs believe they'll beat the ~90% failure rate. Most couples believe they won't divorce.",
    mentalFix:
      "Use reference-class forecasting: find base rates for similar projects rather than reasoning from your unique case. Add a 50% buffer to time and cost estimates. Run a pre-mortem: imagine it's one year from now and this failed. What happened?",
  },
  {
    id: "pessimism-bias",
    number: 13,
    name: "Pessimism Bias",
    category: "motivational",
    tagline: "Everything will probably go wrong.",
    description:
      "Overestimating the likelihood of negative outcomes and systematically underweighting positive possibilities. Produces paralysis, chronic underestimation of personal agency, and missed opportunities that compound across time.",
    example:
      "Not applying for a position because rejection feels certain before trying. Avoiding investment because the market 'always crashes.' Self-fulfilling prophecy via disengagement.",
    mentalFix:
      "Challenge catastrophic predictions with actual base rates: 'What percentage of people in my situation experience X?' Run a pre-parade: imagine the positive version and identify what enabled it. Track predictions vs. outcomes to calibrate your pessimism.",
    featured: true,
  },
  {
    id: "just-world-hypothesis",
    number: 14,
    name: "Just-World Hypothesis",
    category: "social",
    tagline: "They must have done something to deserve it.",
    description:
      "The belief that the world is fundamentally fair and outcomes reflect merit. Leads to victim-blaming, reduced empathy for structural disadvantage, and motivated dismissal of systemic inequality as personal failing.",
    example:
      "Blaming poverty on individual laziness. Rationalizing assault by the victim's choices. Believing that wealth reliably signals virtue and worth.",
    mentalFix:
      "Before attributing outcomes to personal merit, name three structural or systemic factors. Ask: 'Would I have achieved the same outcome if I had started from their exact position?' Study historical data on unequal opportunity to ground intuitions in reality.",
  },
  {
    id: "backfire-effect",
    number: 15,
    name: "Backfire Effect",
    category: "cognitive",
    tagline: "Show me I'm wrong. I'll believe harder.",
    description:
      "When confronted with disconfirming evidence, some individuals strengthen their original belief. Corrective information can paradoxically deepen conviction, especially when the belief is identity-linked or tribal in nature.",
    example:
      "Fact-checking political misbeliefs in highly partisan respondents can increase acceptance of the misbelief. Presenting vaccine safety data to committed anti-vaxxers sometimes hardens resistance.",
    mentalFix:
      "Disengage identity from the belief before examining evidence. Ask: 'If this were wrong, would I be fundamentally okay?' Frame belief updates as intellectual precision, not defeat. Give yourself 48 hours after a challenge before deciding. Never argue in public — it triggers performance, not inquiry.",
  },
  {
    id: "barnum-effect",
    number: 16,
    name: "Barnum Effect",
    category: "cognitive",
    tagline: "That horoscope describes me perfectly. (It describes everyone.)",
    description:
      "Accepting vague, flattering personality descriptions as uniquely accurate to oneself. Exploited by astrology, cold reading, and personality pseudoscience — the statements are deliberately written to apply to virtually any adult human.",
    example:
      "'You have a great need for others to like and admire you.' 'You have found it unwise to be too frank.' Everyone nods with recognition.",
    mentalFix:
      "Apply the substitution test: replace your name with someone you strongly dislike and re-read the description. If it still fits, it's generic. Demand specific, falsifiable predictions — not post-hoc rationalizations — before accepting a personality framework as real.",
  },
  {
    id: "continuity-bias",
    number: 17,
    name: "Continuity Bias",
    category: "cognitive",
    tagline: "The future will look exactly like the present.",
    description:
      "Overestimating the persistence of current trends and dramatically underestimating the likelihood of discontinuous change. Makes us excellent at preparing for incremental shifts while being blindsided by fundamental disruption.",
    example:
      "Blockbuster's board assumed video rental stores would perpetually exist. Kodak invented digital photography in 1975 — then suppressed it to protect film margins until the market destroyed them.",
    mentalFix:
      "Practice discontinuity scenario planning: 'What would have to change for this trend to reverse completely within five years?' Study historical inflection points across industries. Explicitly build non-linear scenarios into any forecast extending beyond 18 months.",
  },
  {
    id: "declensionism",
    number: 18,
    name: "Declensionism",
    category: "memory",
    tagline: "Everything used to be better. It's all going downhill.",
    description:
      "A systematic bias toward viewing the present as inferior to an idealized past, ignoring measurable evidence of progress on health, poverty, violence, and rights. Cherry-picks decline narratives while discounting improvement.",
    example:
      "'Kids today have no respect' — a complaint documented on cuneiform tablets in ancient Mesopotamia. Global child mortality, extreme poverty, and violent crime have each fallen by orders of magnitude in 100 years.",
    mentalFix:
      "Quantify the comparison: find actual historical data for the 'better era' you're invoking. Ask: 'Would I prefer to live in 1900, 1950, or today — with full knowledge of each period's medical care, physical security, and social rights?' Read Hans Rosling's Factfulness.",
    featured: true,
  },
  {
    id: "ikea-effect",
    number: 19,
    name: "Ikea Effect",
    category: "motivational",
    tagline: "I built it, therefore it's brilliant.",
    description:
      "Overvaluing objects, ideas, and plans that we have personally assembled or created, regardless of objective quality. Labor produces disproportionate affection — undermining the ability to assess our own work clearly.",
    example:
      "A handmade bookshelf appraised by its creator far above market rate. Defending a mediocre business plan with irrational conviction because you spent six months writing it.",
    mentalFix:
      "Require external review before committing to self-created plans or products. Ask: 'What would I pay for this if someone else made it — and I had no knowledge of its origin?' Separate the pride of authorship from the quality verdict.",
  },
  {
    id: "zeigarnik-effect",
    number: 20,
    name: "Zeigarnik Effect",
    category: "memory",
    tagline: "Unfinished tasks live rent-free in your head.",
    description:
      "Incomplete tasks are remembered significantly better than completed ones due to persistent cognitive tension. The mind creates an intrusive loop maintaining access to unresolved goals — useful for motivation, destructive for focused work and sleep.",
    example:
      "Remembering exactly where you paused a film you never finished, while forgetting films you've seen multiple times. The nagging awareness of an unanswered email at 2am.",
    mentalFix:
      "Use planned interruptions strategically: stop work mid-task to leverage the intrusive recall loop for motivation. For unwanted loops, externalize tasks into a trusted system — writing a task down with a defined next action quiets the mental alarm completely.",
    featured: true,
  },
];

// Grid layout map: each entry describes one rendered grid cell.
// type "bias" = card by id, type "dead" = intentional empty space.
export type GridCell =
  | { type: "bias"; id: string }
  | { type: "dead"; key: string };

export const GRID_LAYOUT: GridCell[] = [
  // Row 1
  { type: "bias", id: "confirmation-bias" },      // 2-col featured
  { type: "bias", id: "sunk-cost-fallacy" },
  { type: "dead", key: "d-r1-4" },
  // Row 2
  { type: "bias", id: "dunning-kruger" },         // 2-col featured
  { type: "bias", id: "anchoring-bias" },
  { type: "bias", id: "availability-heuristic" }, // 2-col featured
  // Row 3
  { type: "dead", key: "d-r3-1" },
  { type: "bias", id: "framing-effect" },
  { type: "bias", id: "ingroup-bias" },
  { type: "bias", id: "fundamental-attribution-error" },
  // Row 4
  { type: "bias", id: "halo-effect" },            // 2-col featured
  { type: "bias", id: "self-serving-bias" },
  { type: "dead", key: "d-r4-4" },
  // Row 5
  { type: "bias", id: "hindsight-bias" },
  { type: "bias", id: "optimism-bias" },
  { type: "bias", id: "pessimism-bias" },         // 2-col featured
  // Row 6
  { type: "dead", key: "d-r6-1" },
  { type: "bias", id: "just-world-hypothesis" },
  { type: "bias", id: "backfire-effect" },
  { type: "bias", id: "barnum-effect" },
  // Row 7
  { type: "bias", id: "continuity-bias" },
  { type: "bias", id: "declensionism" },          // 2-col featured
  { type: "dead", key: "d-r7-4" },
  // Row 8
  { type: "bias", id: "ikea-effect" },
  { type: "bias", id: "zeigarnik-effect" },       // 2-col featured
  { type: "dead", key: "d-r8-4" },
];
