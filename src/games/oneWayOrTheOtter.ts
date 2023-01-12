import { IGame } from '../interfaces/Node';

const oneWayOrTheOtter: IGame = {
	ID: 1,
	Title: 'One Way or the Otter',
	Nodes: [
		{
			ID: 1,
			Text: `The first sense you experience is an, almost, rhythmic thud. It's not your heartbeat. It's something else. Slowly, the thud gains a certain auditory profile. There's a frequency to the thud. It's high-pitched and it is coming in waves. It becomes clear it's an alarm, and it's going off. You can actually feel the weight of your eyelids as you try to open them. They are heavy. Resistant to being opened. Finally, you convince them otherwise.Your vision is cloudy at first, fuzzy, and altogether hazy. The alarm is blaring somewhere in the distance, but it seems very far away, or muted somehow. Slowly it hits you, you are waking up. Yes. You are waking up from an unconscious state for sure. As your eyes begin to focus you can see that you are entombed in some kind of vertical chamber with a large see-through window in the front. Your brain instantly tells you that what you're entombed in, is in fact, a cryo-status pod. Whatever the heck that is. Beyond your pod you can see the wall of lockers. There is a red haze every two seconds or so that is in rhythm with that alarm you are hearing. Your memory is still fuzzy. You know you are on a ship, but beyond that, it's all a fog. You need to get out of this cryo-thingy. Looking around the pod is difficult. You are attached to various tubes and other wires and things. But you manage to spot two levers on either side of the pod. One is slighlty higher and purple, and the other is a fair bit lower and orange. Or is it green and white? Oh great, you think to yourself, am I color blind? It is hard to tell with red haze of that alarm!`,
			NodeOptions: [
				{
					ID: '1a',
					Text: `Type "a" to choose the Purple Lever`,
					Command: `a`,
					Mood: 'space popsicle',
					Requires: { Mood: null, Inventory: [] },
					NextNode: 2,
				},
				{
					ID: '1b',
					Text: `Type "b" to choose the Orange Lever`,
					Command: `b`,
					Mood: 'groggy',
					Requires: { Mood: null, Inventory: [] },
					NextNode: 3,
				},
			],
			EarnedPoints: 0,
		},
		{
			ID: 2,
			Text: `You stare for an extra few seconds the lever definitely looks Purple, and you love the color purple. It's weird you just remembering random stuff like that. Must be this cryo-freeze really messes up the memory. Anyway - you pull the definitely purple lever. There's a few deep thuds and several clicks. A user interface displays on the clear window just in front of you. It shows a countdown to "Pod Purge To Space" in 3...2... where was this user interface when you woke up!? As you get evacuated into the cold blackness of space, you can't help but feel like the color purple totally betrayed you. It's the last feeling you ever have. Game Over.`,
			NodeOptions: [
				{
					ID: '2a',
					Text: `Type "s" to Start Over`,
					Command: `s`,
					Mood: '',
					Requires: { Mood: null, Inventory: [] },
					NextNode: 1,
				},
			],
			EarnedPoints: -500,
		},
		{
			ID: 3,
			Text: `The orange lever is decidely easier to reach which heavily influences your decision. It turns out you might be super lazy. You finally manage to activate the lever. There's a series of strange, and bizarre clicks. Suddenly, a user interface screen displays on the clear pod window in front of you. There's a clamp release indicator and it says it's counting down for pod occupant release! Suddenly, the pod bursts open and you are unceremoniously dumped onto the pod bay floor, all of the hoses and wires connecting you to the pod are jerked free. A bunch of gooey cryo-liquid spills out around you and you cough horrendously. Only as your coughing fit begins to ease do you realize that the blaring alarm is really quite loud in here. There is definitely something wrong here. You stumble across the pod bay to a mirror near the lockers. It takes a second for you to recognize yourself in the mirror, but that's you alright. You are tremendously gorgeous otter. Like freaking stunning. You are in the process of giving yourself a bunch of winks and finger guns in the mirror, when the ship suddenly jolts and pitches to one side which causes you to lose your footing. You stumble, but catch yourself against a locker. That was close! You could have really hurt your beautiful face! Seeing your reflection has jarred some other memories as well. You know you are on a ship called the "One Way or the Otter". It's a liquid hydrocarbon frigate out of a remote station on Titan's moon called "None Otter". You can't quite remember where you were heading, but that memory should come back soon. Must just be in a haze due to the cryo-pod. Something is definitely wrong with the ship, you just don't know what at this point. There aren't any other crew members in cryo-pods. That seems weird. It feels like it would be highly unlikely you'd be making this trip alone. You spot what looks like a comm panel on the wall near the door. Maybe you could try it and see if anyone on the ship responded? Then again, that jolt did NOT seem good. Clearly there's something wrong with the engines. You've seen enough movies to know there's probably something wrong with dylithium crystal in Engineering. But you know what? You are fabulous looking. Like just gorgeous. And gorgeous people are usually Captains, right? The bridge is always where all the action is!`,
			NodeOptions: [
				{
					ID: '3a',
					Text: `Type "a" to try the Comms panel`,
					Command: `a`,
					Mood: `chatty`,
					Requires: { Mood: 'danger', Inventory: [] },
					NextNode: 4,
				},
				{
					ID: '3b',
					Text: `Type "b" to make your way to Engineering`,
					Command: `b`,
					Mood: `scotty`,
					Requires: { Mood: null, Inventory: [] },
					NextNode: 5,
				},
				{
					ID: '3c',
					Text: `Type "c" to make your way to the Bridge`,
					Command: `c`,
					Mood: `bossy`,
					Requires: { Mood: null, Inventory: [] },
					NextNode: 6,
				},
			],
			EarnedPoints: 5,
		},
	],
	getNodeById(n: number) {
		const nodeIndex = this.Nodes.findIndex((node) => node.ID === n);
		if (nodeIndex !== -1) {
			return this.Nodes[nodeIndex];
		}
		return {
			ID: -99,
			Text: '',
			NodeOptions: [],
			EarnedPoints: -99,
		};
	},
};

export default oneWayOrTheOtter;
