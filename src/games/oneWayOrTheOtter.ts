import {IGame} from '../interfaces/Node';

const oneWayOrTheOtter: IGame = {
    ID: 1,
    Title: 'One Way or the Otter',
    Image: "/images/owoto.webp",
    Description: "You wake up from cryo-sleep to find alarms blaring and the ship you're on in shambles! Are you the captain or a prisoner? Why does the ship sound like it's coming apart? You'll need to work quickly to solve the mysteries and live to cuddle more space rocks, in this otterly futuristic sci-fi adventure!",
    Nodes: [
        {
            ID: 1,
            Text: `The world is dark and quiet. Or, at least, it was. You are aware of something rhythmic. It’s just at the edge of your perception. But it’s there. Thudding, or maybe, rapping. It grows in intensity until finally you recognize it as an alarm sounding off. Light creeps into the corners of your field of vision and you slowly, arduously, open the heavy lids of your eyes. Blurry at first, your vision finally focuses somewhat and you can see that you are in a cryo-pod. You are suspended in gooey cryo-gel, but through the pod’s forward window, you can see the cryo-bay. There are lockers, a few terminal stations, and there’s a light on the far wall. The light is flashing red. The thudding of the alarm is muted through the gel, but it’s definitely a ship’s alarm sequence. Something is wrong! There doesn’t appear to be anyone in the pod bay. No one to let you out? What is going on? Looks like you’ll have to get out of this pod yourself. But your memory is so foggy from the after-effects of cryo-sleep. Wait. How do you even know that? Whatever, you’ll figure that out later. The point is, there’s got to be a way to exit the pod from the inside. But how? You glance around the inside of the pod. There are all the various tubes keeping you alive and such, and then you spot it. It’s some kind of user panel. The panel is protected from the cryo-gel but appears to be accessible by some physical switches. There’s two switches that grab your attention. One labeled with the characters “ECPP”, and another labeled “EPEP”. Your brain tells you these are significant. You just can’t remember why! Blasted cryo-mind-fog! You’ve got to get out of this pod. Time to make a choice - which switch do you want to activate?`,
            NodeOptions: [
                {
                    ID: '1a',
                    Text: `Type “ecpp” to Engage ECPP switch`,
                    Command: `ecpp`,
                    Mood: 'space popsicle',
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 2,
                },
                {
                    ID: '1b',
                    Text: `Type “epep” Engage EPEP switch`,
                    Command: `epep`,
                    Mood: 'relief',
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "tube",
                    NextNode: 3,
                },
            ],
            EarnedPoints: 0,
        },
        {
            ID: 2,
            Text: `You furiously try to remember what these switches stand for, but it just isn’t coming to you. You know they are both significant, but that’s about it. There are no colors or warnings to indicate that one switch is better than the other. Argh, this brain fog is so frustrating! You slam the switch labeled ECPP and quickly look to the user panel for some feedback. There are a series of muted clicks and you can hear some kind of motorized servo engaging somewhere. This is good! It’s probably the main pod chamber release! Even with cryo-brain-fog you are a genuine, rockstar genius of unfathomable proportion. Suddenly you see a flash across the user panel. The text is bold but it’s so small and hard to read through the cryo-gel. Who designed this crap? You try to rub your eyes, but that actually makes things worse. The text on the user panel keeps changing. Ugh. What does that say? Then you hear several, very serious sounding clicks. No, not clicks. Legitimate thuds. Like, very loud, concerning, thuds. You finally realize the user panel text keeps changing because, well, it’s a countdown. As your cryo-gel covered body is ejected into the cold vastness of space, you suddenly remember that ECPP stands for Evacuate Cryo Pod and Purge. Would have been nice to have remembered that 2 minutes ago. Thanks brain. Before the last breath in your lungs freezes and everything goes black, you curse the makers of the user panel for their poor font family and font size choices. `,
            NodeOptions: [
                {
                    ID: '2a',
                    Text: `Type “s” to Start Over`,
                    Command: `s`,
                    Mood: 'space popsicle',
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 1,
                },
            ],
            EarnedPoints: -500,
        },
        {
            ID: 3,
            Text: `You furiously try to remember what these switches stand for, but it just isn’t coming to you. You know they are both significant, but that’s about it. There are no colors or warnings to indicate that one switch is better than the other. Argh, this brain fog is so frustrating! You slam the switch labeled EPEP and quickly look to the user panel for some feedback. You can hear several clicks and the whirring of a motor somewhere. The user panel is flashing some information very quickly across the screen, but the text is so small, you can’t make out what’s happening. Suddenly there is an extremely loud hissing sound that nearly shatters your ear drums, followed by a deep, resonating thud. You are violently ejected from the cryo-pod. All the monitoring nodes and tubes are unceremoniously ripped off or out of you. A speaker near the pod you just got eject from says “Emergency Pod Eject Procedure…is now complete…have a nice day”. Oh right. That’s what EPEP means. Now you remember. Hmm. Still can’t remember what that other switch stands for though. You cough and your throat is scratchy from just having a breathing tube ripped from it, but you glance around the pod bay. All the other pods are empty. You can hear the alarm more clearly now, it’s very annoying, and your vision is clearing up. You move to the lockers and instinctively pick the second one from the right. There’s a blue uniform inside. The patch on the arm reads “One Way Or the Otter”, and the patch on the chest reads “Titan Station - LHF - Liquid HydroCarbon Frigate”. The uniform doesn’t quite fit. You must have put on some weight in cryo-sleep. You look in the mirror next to the lockers and instantly recognize your face. You are an adorable otter. Almost too adorable. And this uniform. Wow. It’s smashing on you. I mean you look fantastic. Just as you’re about to give yourself some finger guns and a few winks. The ship violently jerks to port, throwing you into the row of lockers. A whole new set of alarms start blaring. This is not good. You are trying to desperately to remember who you are. But it’s a total fog. Regardless, you need to do something. And fast! You see what looks like a communication panel on the wall by the only door in the cryo-bay. You could try to use the ship’s general comms and see if anyone responds? You can’t be on this ship alone, can you? Another part of you is thinking that the insane, and violent movement the ship just experienced can only be explained by a problem with the engines. You aren’t sure how you know that, but you’re pretty sure you know that. And yet, still another part of you thinks, that with how good looking you are, that it’s entirely possible, and indeed, likely that you are the captain of this ship called the “One Way or the Otter”. And captains belong on the bridge! What are you going to do?`,
            NodeOptions: [
                {
                    ID: "3a",
                    Text: `Type “comms” to use the Comm Panel`,
                    Command: "comms",
                    Mood: "Uhura",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 4
                },
                {
                    ID: "3b",
                    Text: `Type “engine” to visit Engineering`,
                    Command: "engine",
                    Mood: "Scotty",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 5
                },
                {
                    ID: "3c",
                    Text: `Type “bridge” to visit the Bridge`,
                    Command: "bridge",
                    Mood: "Kirk",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 6
                },
            ],
            EarnedPoints: 5
        },
        {
            ID: 4,
            Text: `There is no way you are on this ship by yourself…right? Hauling Liquid HydroCarbons from Saturn’s moon Titan sounds like, at least, a two, maybe even, a three otter job. You should try and get someone on the comms panel to tell you what the devil is going on around here! The ship pitches violently, yet again, this time tossing you almost entirely back into your recently evacuated cryo-pod. You extricate yourself and move hurriedly to the comms panel. The alarms are blaring so loudly now and it’s clear the ship is in serious trouble. The comms panel is pretty foreign to you at the moment. It’s just a screen with some kind of ship’s operating system. There's a menu option near the top that says utilities and after clicking that you see a communication channel option. You select “general comms” and start screaming into the screen, hopeful but unsure if there’s even a microphone anywhere on this thing. At first there’s no response. You repeat your plea for someone, anyone, to answer you, to tell you what’s going on. Finally, you hear a crackle and hiss emit from the speaker near the panel. “Who is this, listen…*static*...ship is…*static*... we need …*static*... comm array is damaged …*static*... forward comm hatch …*static*... help… *transmission cuts out*”. You’re not alone! There’s another otter on the ship! The transmission was super garbled, but it sounded like the otter on the otter end (so clearly you love puns - awesome) was asking for help with some kind of comms array. It makes sense that if the ship was in trouble, that you’d be trying to reach out to maybe request a rescue, or assistance. You’d better get to the forward comms hatch right away! Then again, there’s part of you that wonders if the ship is damaged as badly as it seems, do you really have time to fix the comms array if it’s broken? You could very well be the captain, it might be best to get to the bridge and get a complete situation report. And yet again, there may be no time for that either. I mean the ship really seems like it’s coming apart! Your best shot at saving your adorable otter booty, not to mention the other otters on board, might be getting to Engineering to see if you can fix the engine! What are you going to do?`,
            NodeOptions: [
                {
                    ID: "4a",
                    Text: `Type "comm array" to try and fix comms`,
                    Command: "comm array",
                    Mood: "chatty",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 7
                },
                {
                    ID: "4b",
                    Text: `Type "bridge" to go to the bridge`,
                    Command: "bridge",
                    Mood: "bossy",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 6
                },
                {
                    ID: "4c",
                    Text: `Type "engine room" to go to engineering`,
                    Command: "engine room",
                    Mood: "greasy",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 5
                },
            ],
            EarnedPoints: 5
        },
        {
            ID: 5,
            Text: `The ship is breaking apart Captain! Why did you just say that with a Scottish accent? You don’t know, but it felt appropriate. With the ship pitching and jostling around the way it is, there’s only way to save this flying hunk of metal, and that’s the Engine Room. Your gut tells you that there’s probably some problem with the DyLithium Crystals or some such thing, which seems totally reasonable. You exit the cryo-bay and are immediately tossed like a rag doll down the corridor as the ship violently pitches forward. Or at least you perceive it to be “forward”. I mean who knows? Space is weird. You crash into a bulkhead, but luckily, you don’t seem to have hurt your perfect cheekbones, so that’s a plus. You also spot a graphic printed on the bulkhead. The graphic indicates a ship in flight. I mean, that’s gotta be engineering, right? You dust yourself off and begin making your way down the corridor. You are about halfway down the corridor when there’s a horrific sound of metal bending and flexing before finally groaning and giving way. Suddenly all of the oxygen in the corridor is rushing past you and you realize there’s been a hull breach! Somewhere behind you in the corridor, an entire portion of the ship has been sheared off! You desperately grab onto a rail that runs the length of the corridor into the next section of the ship. It’s not far! You could get there and close the bulkhead and repressurize that section. But you had better move fast! That’s when you hear it, it’s muted at first, probably just your ears adjusting to the horrible sound of your impending death. But then it gets louder. It’s a voice! You glance behind you and see another otter, in a uniform just like yours. They are much closer to the hull breach and it looks like they can’t hold on! You also notice on the other side of the corridor, opposite of the crew member, there’s a tool belt that’s gotten caught on some debris near the breach. The oxygen in this section is almost gone. You need to act quickly. The safest thing to do would be to just get to the bulkhead and seal off the damaged section. You could try to save the crew member, of course you both might die from getting sucked out to space or suffocation. Then there’s the tool belt. You can’t fix ship engines without tools. That’s basic engineering. But the tools are on the total opposite side of the corridor from the crew member. You can’t get the tools AND save the crew member. And getting the tools could get you killed too. So what do you want to do? `,
            NodeOptions: [
                {
                    ID: "5a",
                    Text: `Type “seal bulkhead” to get to safety`,
                    Command: "seal bulkhead",
                    Mood: "selfish",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 8
                },
                {
                    ID: "5b",
                    Text: `Type “rescue” to try and save the crew otter`,
                    Command: "rescue",
                    Mood: "selfless",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "crew mate",
                    NextNode: 9
                },
                {
                    ID: "5c",
                    Text: `Type “tools” to try and save the tools`,
                    Command: "tools",
                    Mood: "greater good",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "tool belt",
                    NextNode: 10
                },
            ],
            EarnedPoints: 5
        },
        {
            ID: 10,
            Text: `What’s the point of getting to Engineering, but not having any tools?  By the looks of things, there’s VERY little time left before this ship, literally, goes to pieces. You grapple for a moment about the moral quandary of leaving a fellow otter to die, but how many more otters are on this ship? As your father used to say, “the needs of the mayonnaise outweigh the needs of the sun, or the stew”. No wait. That wasn’t it. Whatever, your brain is still pretty mushy. The point is. You’ve got to get those tools if you and the possibly thousands of otter otters (still with the puns) on this ship are going to survive! You use all your otter strength to turn yourself around, towards the hull breach. You are feeling light headed already which is NOT a good sign. Oxygen is getting low. The crew otter is yelling for help and something about having kids, yada yada. Your focus is on the tool belt. It’s snagged on a piece of debris, but it’s not going to last much longer. In the coolest, and most badass way you can think of, you leap to the other side of the corridor and grab onto the rail on that side just in time before you’re evacuated into the cold blackness of space. You are only a meter (thank god you’re not an empirical units otter) away from the belt. The crew otter realizes what your doing and curses you. Somewhere between him screaming, how, and why, and deary me, you snag the tool belt! Huzzah! Just as the belt is firmly in your otter paws, there’s a massive explosion somewhere else on the ship. It causes the ship to violently pitch and the sad little crew otter loses his grip. He gives you finger as he recedes into the spinning blackness. Harsh. There’s no time to mourn. Any longer here and you’re going to pass out or lose your grip too. You make your way back up the corridor to the bulkhead and finally slam the emergency breach control module. A heavy breach shield is lowered from the ceiling and the corridor goes almost deathly quiet. You are gasping for every breath you can get. You have the toolbelt. You are alive. But you also might be cursed now. Depends on if that otter knew voodoo or whatever. You feel another shudder travel through the ship’s walls and floor. Another distant explosion? Are you under attack or something? Maybe you should have gone to the bridge afterall? It’s too late now. At this point, you could keep traveling through the corridors to try and reach Engineering. It would be fast. But with the ship coming apart, you could also opt to use the maintenance shafts. It would be A LOT slower, but the maintenance tunnels are reinforced and often have portable oxiunits so they can be used even when the ship isn’t fully pressurized, damaged, or there’s a lack of oxygen. In other words. It would be safer. But it’s only safer if the whole ship doesn’t explode. Arghh. What should you do?`,
            NodeOptions: [
                {
                    ID: "10a",
                    Text: `Type “tunnels” to take the maintenance shafts`,
                    Command: "tunnels",
                    Mood: "cautious",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 11
                },
                {
                    ID: "10b",
                    Text: `Type “corridors” to take the corridors`,
                    Command: "corridors",
                    Mood: "i am speed",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 12
                },
            ],
            EarnedPoints: 5
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
            Image: "",
            Description: "",
            NodeOptions: [],
            EarnedPoints: -99,
        };
    },
};

export default oneWayOrTheOtter;

// blank node format
// {
// 	ID: 0,
// 		Text: ``,
// 	NodeOptions: [
// 	{
// 		ID: "",
// 		Text: ``,
// 		Command: "",
// 		Mood: "",
// 		Requires: { Mood: null, Inventory: []},
// 		Inventory: "",
// 		NextNode: 0
// 	},
// ],
// 	EarnedPoints: 5
// },