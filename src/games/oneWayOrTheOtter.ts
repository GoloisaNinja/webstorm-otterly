import {IGame} from '../interfaces/Node';
import {theme} from "../styles/theme";

const oneWayOrTheOtter: IGame = {
    ID: 1,
    Title: 'One Way or the Otter',
    TitleColor: theme.main_purple,
    Image: "/images/owoto.webp",
    Description: "You wake up from cryo-sleep to find alarms blaring and the ship you're on in shambles! Are you the captain or a prisoner? Why does the ship sound like it's coming apart? You'll need to work quickly to solve the mysteries and live to cuddle more space rocks, in this otterly futuristic sci-fi adventure!",
    IsAvailable: true,
    Nodes: [
        {
            ID: 1,
            Text: `The world is dark and quiet. Or, at least, it was. You are aware of something rhythmic. It’s just at the edge of your perception. But it’s there. Thudding, or maybe, rapping. It grows in intensity until finally you recognize it as an alarm sounding off. Light creeps into the corners of your field of vision and you slowly, arduously, open the heavy lids of your eyes. Blurry at first, your vision finally focuses somewhat and you can see that you are in a cryo-pod. You are suspended in gooey cryo-gel, but through the pod’s forward window, you can see the cryo-bay. There are lockers, a few terminal stations, and there’s a light on the far wall. The light is flashing red. The thudding of the alarm is muted through the gel, but it’s definitely a ship’s alarm sequence. Something is wrong! There doesn’t appear to be anyone in the pod bay. No one to let you out? What is going on? Looks like you’ll have to get out of this pod yourself. But your memory is so foggy from the after-effects of cryo-sleep. Wait. How do you even know that? Whatever, you’ll figure that out later. The point is, there’s got to be a way to exit the pod from the inside. But how? You glance around the inside of the pod. There are all the various tubes keeping you alive and such, and then you spot it. It’s some kind of user panel. The panel is protected from the cryo-gel but appears to be accessible by some physical switches. There’s two switches that grab your attention. One labeled with the characters “ECPP”, and another labeled “EPEP”. Your brain tells you these are significant. You just can’t remember why! Blasted cryo-mind-fog! You’ve got to get out of this pod. Time to make a choice - which switch do you want to activate?`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: '1a',
                    Text: `Type “ecpp” to Engage ECPP switch`,
                    Command: `ecpp`,
                    Mood: 'space popsicle',
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 2,
                    PlayType: "reckless",
                    DeathNode: true,
                },
                {
                    ID: '1b',
                    Text: `Type “epep” to Engage EPEP switch`,
                    Command: `epep`,
                    Mood: 'relief',
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 3,
                    PlayType: "reckless",
                },
            ],
            EarnedPoints: 0,
        },
        {
            ID: 2,
            Text: `You furiously try to remember what these switches stand for, but it just isn’t coming to you. You know they are both significant, but that’s about it. There are no colors or warnings to indicate that one switch is better than the other. Argh, this brain fog is so frustrating! You slam the switch labeled ECPP and quickly look to the user panel for some feedback. There are a series of muted clicks and you can hear some kind of motorized servo engaging somewhere. This is good! It’s probably the main pod chamber release! Even with cryo-brain-fog you are a genuine, rockstar genius of unfathomable proportion. Suddenly you see a flash across the user panel. The text is bold but it’s so small and hard to read through the cryo-gel. Who designed this crap? You try to rub your eyes, but that actually makes things worse. The text on the user panel keeps changing. Ugh. What does that say? Then you hear several, very serious sounding clicks. No, not clicks. Legitimate thuds. Like, very loud, concerning, thuds. You finally realize the user panel text keeps changing because, well, it’s a countdown. As your cryo-gel covered body is ejected into the cold vastness of space, you suddenly remember that ECPP stands for Evacuate Cryo Pod and Purge. Would have been nice to have remembered that 2 minutes ago. Thanks brain. Before the last breath in your lungs freezes and everything goes black, you curse the makers of the user panel for their poor font family and font size choices. Game Over.`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
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
                {
                    ID: '2b',
                    Text: `Type “after action” to see your after action report`,
                    Command: `after action`,
                    Mood: '',
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: -9999,
                    AfterAction: true
                },
            ],
            EarnedPoints: -500,
        },
        {
            ID: 3,
            Text: `You furiously try to remember what these switches stand for, but it just isn’t coming to you. You know they are both significant, but that’s about it. There are no colors or warnings to indicate that one switch is better than the other. Argh, this brain fog is so frustrating! You slam the switch labeled EPEP and quickly look to the user panel for some feedback. You can hear several clicks and the whirring of a motor somewhere. The user panel is flashing some information very quickly across the screen, but the text is so small, you can’t make out what’s happening. Suddenly there is an extremely loud hissing sound that nearly shatters your ear drums, followed by a deep, resonating thud. You are violently ejected from the cryo-pod. All the monitoring nodes and tubes are unceremoniously ripped off or out of you. A speaker near the pod you just got eject from says “Emergency Pod Eject Procedure…is now complete…have a nice day”. Oh right. That’s what EPEP means. Now you remember. Hmm. Still can’t remember what that other switch stands for though. You cough and your throat is scratchy from just having a breathing tube ripped from it, but you glance around the pod bay. All the other pods are empty. You can hear the alarm more clearly now, it’s very annoying, and your vision is clearing up. You move to the lockers and instinctively pick the second one from the right. There’s a blue uniform inside. The patch on the arm reads “One Way Or the Otter”, and the patch on the chest reads “Titan Station - LHF - Liquid HydroCarbon Frigate”. The uniform doesn’t quite fit. You must have put on some weight in cryo-sleep. You look in the mirror next to the lockers and instantly recognize your face. You are an adorable otter. Almost too adorable. And this uniform. Wow. It’s smashing on you. I mean you look fantastic. Just as you’re about to give yourself some finger guns and a few winks. The ship violently jerks to port, throwing you into the row of lockers. A whole new set of alarms start blaring. This is not good. You are trying to desperately to remember who you are. But it’s a total fog. Regardless, you need to do something. And fast! You see what looks like a communication panel on the wall by the only door in the cryo-bay. You could try to use the ship’s general comms and see if anyone responds? You can’t be on this ship alone, can you? Another part of you is thinking that the insane, and violent movement the ship just experienced can only be explained by a problem with the engines. You aren’t sure how you know that, but you’re pretty sure you know that. And yet, still another part of you thinks, that with how good looking you are, that it’s entirely possible, and indeed, likely that you are the captain of this ship called the “One Way or the Otter”. And captains belong on the bridge! What are you going to do?`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
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
                    NextNode: 5,
                    StoryArc: "ENGINEERING ARC"
                },
                {
                    ID: "3c",
                    Text: `Type “bridge” to visit the Bridge`,
                    Command: "bridge",
                    Mood: "Kirk",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 6,
                    StoryArc: "COMMAND ARC"
                },
            ],
            EarnedPoints: 5
        },
        {
            ID: 4,
            Text: `There is no way you are on this ship by yourself…right? Hauling Liquid HydroCarbons from Saturn’s moon Titan sounds like, at least, a two, maybe even, a three otter job. You should try and get someone on the comms panel to tell you what the devil is going on around here! The ship pitches violently, yet again, this time tossing you almost entirely back into your recently evacuated cryo-pod. You extricate yourself and move hurriedly to the comms panel. The alarms are blaring so loudly now and it’s clear the ship is in serious trouble. The comms panel is pretty foreign to you at the moment. It’s just a screen with some kind of ship’s operating system. There's a menu option near the top that says utilities and after clicking that you see a communication channel option. You select “general comms” and start screaming into the screen, hopeful but unsure if there’s even a microphone anywhere on this thing. At first there’s no response. You repeat your plea for someone, anyone, to answer you, to tell you what’s going on. Finally, you hear a crackle and hiss emit from the speaker near the panel. “Who is this, listen…*static*...ship is…*static*... we need …*static*... comm array is damaged …*static*... forward comm hatch …*static*... help… *transmission cuts out*”. You’re not alone! There’s another otter on the ship! The transmission was super garbled, but it sounded like the otter on the otter end (so clearly you love puns - awesome) was asking for help with some kind of comms array. It makes sense that if the ship was in trouble, that you’d be trying to reach out to maybe request a rescue, or assistance. You’d better get to the forward comms hatch right away! Then again, there’s part of you that wonders if the ship is damaged as badly as it seems, do you really have time to fix the comms array if it’s broken? You could very well be the captain, it might be best to get to the bridge and get a complete situation report. And yet again, there may be no time for that either. I mean the ship really seems like it’s coming apart! Your best shot at saving your adorable otter booty, not to mention the other otters on board, might be getting to Engineering to see if you can fix the engine! What are you going to do?`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "4a",
                    Text: `Type "comm array" to try and fix comms`,
                    Command: "comm array",
                    Mood: "chatty",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 7,
                    StoryArc: "COMMUNICATION ARC",
                },
                {
                    ID: "4b",
                    Text: `Type "bridge" to go to the bridge`,
                    Command: "bridge",
                    Mood: "bossy",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 6,
                    StoryArc: "COMMAND ARC"
                },
                {
                    ID: "4c",
                    Text: `Type "engine room" to go to engineering`,
                    Command: "engine room",
                    Mood: "greasy",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 5,
                    StoryArc: "ENGINEERING ARC"
                },
            ],
            EarnedPoints: 5
        },
        {
            ID: 5,
            Text: `The ship is breaking apart Captain! Why did you just say that with a Scottish accent? You don’t know, but it felt appropriate. With the ship pitching and jostling around the way it is, there’s only way to save this flying hunk of metal, and that’s the Engine Room. Your gut tells you that there’s probably some problem with the DyLithium Crystals or some such thing, which seems totally reasonable. You exit the cryo-bay and are immediately tossed like a rag doll down the corridor as the ship violently pitches forward. Or at least you perceive it to be “forward”. I mean who knows? Space is weird. You crash into a bulkhead, but luckily, you don’t seem to have hurt your perfect cheekbones, so that’s a plus. You also spot a graphic printed on the bulkhead. The graphic indicates a ship in flight. I mean, that’s gotta be engineering, right? You dust yourself off and begin making your way down the corridor. You are about halfway down the corridor when there’s a horrific sound of metal bending and flexing before finally groaning and giving way. Suddenly all of the oxygen in the corridor is rushing past you and you realize there’s been a hull breach! Somewhere behind you in the corridor, an entire portion of the ship has been sheared off! You desperately grab onto a rail that runs the length of the corridor into the next section of the ship. It’s not far! You could get there and close the bulkhead and repressurize that section. But you had better move fast! That’s when you hear it, it’s muted at first, probably just your ears adjusting to the horrible sound of your impending death. But then it gets louder. It’s a voice! You glance behind you and see another otter, in a uniform just like yours. They are much closer to the hull breach and it looks like they can’t hold on! You also notice on the other side of the corridor, opposite of the crew member, there’s a tool belt that’s gotten caught on some debris near the breach. The oxygen in this section is almost gone. You need to act quickly. The safest thing to do would be to just get to the bulkhead and seal off the damaged section. You could try to save the crew member, of course you both might die from getting sucked out to space or suffocation. Then there’s the tool belt. You can’t fix ship engines without tools. That’s basic engineering. But the tools are on the total opposite side of the corridor from the crew member. You can’t get the tools AND save the crew member. And getting the tools could get you killed too. So what do you want to do? `,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
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
            ID: 6,
            Text: `Let's be honest, the people that work on the comms or the engines usually end up as side characters with what kind of total episode percentage? Maybe low eighties? Miss half a season because of random "shore leave" etc. But captains…ohh captains, good looking ones especially, their episode percentage is high nineties. You need to be on the bridge. You aren't sure why your crew left you alone in the cryo-bay (you'll need to throw a few of them in the brig to reestablish dominance) but you'd like some answers. That, and regardless of what is wrong with the ship, it'll be easier to figure out next steps from the one place on the ship that has comfy chairs. Your mind is still pretty foggy, but you are almost positive that the bridge is on one of the upper levels compared to the cryo-bay. You are also pretty sure that there is an authorization access protocol that is managed by cards and codes. You quickly pat the pockets of your ill-fitting jumpsuit. Nothing. No card. Strange. You head back to your locker and search it thoroughly as well. Nope. No card. Then it hits you. It's pretty obvious what happened here. Some otter crewmate woke up from their cryo-sleep and had brain fog and stole your uniform and card key! They probably even think they're the captain! This situation is so not on. As the ship experiences yet another bone-rattling, well, rattle, you figure you've got two ways to approach this. Like any good captain, you are positive you've got extra access credentials lying around in your quarters somewhere. You could try and  make a quick detour and hopefully snag your deets before the ship does its best impression of Coke meets Mentos. Or, like any devilishly good looking character in random and fairly generic space sci-fi movies, you could totally just wing it and head up to the bridge with literally no plan or credentials. Relying solely on your cheekbones, smile, and excessive amounts of absolute sauce to save the day. What to do, what to do?`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "6a",
                    Text: `Type "quarters" to find your room and key card`,
                    Command: "quarters",
                    Mood: "search mode",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 29,
                    PlayType: "intelligent"
                },
                {
                    ID: "6b",
                    Text: `Type "cheekbones" to absolutely wing it`,
                    Command: "cheekbones",
                    Mood: "seggsy",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 12,
                    PlayType: "reckless"
                },
            ],
            EarnedPoints: 5
        },
        {
            ID: 7,
            Text: `Whatever is happening on the ship you feel like it’s probably best not to go at it alone. At the very least, you know there’s a crew member that is working in the forward comms area of the ship. And what’s more, the crewmember seemed to be asking for help. If you could get the comms fixed there’s a good chance you could relay that the One Way or The Otter was in trouble. Surely Starfleet or the Rebel Alliance, or even the Empire or whatever could send some help and get you off this rust bucket! With your mind made up, you dash out of the cryo-bay and make towards, what in your gut tells you, is the forward comms array hatch. After a few unsteady falls, this way and that, as the ship continues to pitch and yaw, you finally approach a sealed bulkhead. There’s a diagram above the bulkhead that indicates that both medical and comms are just beyond. You do a little otter shoulder shrug dance, as clearly your brain fog is starting to lift! Your dance celebration is short lived however. You’re hitting the “open bulkhead” command on the side panel but absolutely nothing is happening. No sound. No movement. Nothing! Argh, this day suuucks! Ok, ok, think. Given how good looking you are, you are at the very least a high ranking officer on this ship, and at best, you might even be captain. And that means you know this ship in and out. There are three ways you could force this hatch. One, you could rip open the side panel and rewire power to the door’s hydraulics. This should get the hatch working normally again and splicing wires looks cool. Two, there are manual hatch release levers in the emergency panels near every hatch. You can grab the MHRL and with a bit of elbow grease, you should be able raise the hatch just enough to crawl under. Three, there are electrical conduits running the span of a small trench beneath the deck grating under your feet. Clearly they move beyond the hatch and into comms. There’d be a pressurized panel in the trench for conduit access and repair. As long as the panel control isn’t damaged, you should be able to get it open and slip right through. Although, getting the deck grating up could be a pain. What should you do though?`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "7a",
                    Text: `Type “rewire panel” to try and reroute hydraulics`,
                    Command: "rewire panel",
                    Mood: "short circuit",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "wires",
                    NextNode: 13,
                    PlayType: "intelligent"
                },
                {
                    ID: "7b",
                    Text: `Type “elbow grease” to try use MHRL to force the hatch`,
                    Command: "elbow grease",
                    Mood: "acronyms are cool",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "MHRL",
                    NextNode: 14,
                    PlayType: "aggressive"
                },
                {
                    ID: "7c",
                    Text: `Type “conduit” to try and access comms via conduit panel`,
                    Command: "conduit",
                    Mood: "you conduit",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 15,
                    PlayType: "passive"
                },
            ],
            EarnedPoints: 10
        },
        {
            ID: 10,
            Text: `What’s the point of getting to Engineering, but not having any tools?  By the looks of things, there’s VERY little time left before this ship, literally, goes to pieces. You grapple for a moment about the moral quandary of leaving a fellow otter to die, but how many more otters are on this ship? As your father used to say, “the needs of the mayonnaise outweigh the needs of the sun, or the stew”. No wait. That wasn’t it. Whatever, your brain is still pretty mushy. The point is. You’ve got to get those tools if you and the possibly thousands of otter otters (still with the puns) on this ship are going to survive! You use all your otter strength to turn yourself around, towards the hull breach. You are feeling light headed already which is NOT a good sign. Oxygen is getting low. The crew otter is yelling for help and something about having kids, yada yada. Your focus is on the tool belt. It’s snagged on a piece of debris, but it’s not going to last much longer. In the coolest, and most badass way you can think of, you leap to the other side of the corridor and grab onto the rail on that side just in time before you’re evacuated into the cold blackness of space. You are only a meter (thank god you’re not an empirical units otter) away from the belt. The crew otter realizes what your doing and curses you. Somewhere between him screaming, how, and why, and deary me, you snag the tool belt! Huzzah! Just as the belt is firmly in your otter paws, there’s a massive explosion somewhere else on the ship. It causes the ship to violently pitch and the sad little crew otter loses his grip. He gives you finger as he recedes into the spinning blackness. Harsh. There’s no time to mourn. Any longer here and you’re going to pass out or lose your grip too. You make your way back up the corridor to the bulkhead and finally slam the emergency breach control module. A heavy breach shield is lowered from the ceiling and the corridor goes almost deathly quiet. You are gasping for every breath you can get. You have the toolbelt. You are alive. But you also might be cursed now. Depends on if that otter knew voodoo or whatever. You feel another shudder travel through the ship’s walls and floor. Another distant explosion? Are you under attack or something? Maybe you should have gone to the bridge afterall? It’s too late now. At this point, you could keep traveling through the corridors to try and reach Engineering. It would be fast. But with the ship coming apart, you could also opt to use the maintenance shafts. It would be A LOT slower, but the maintenance tunnels are reinforced and often have portable oxiunits so they can be used even when the ship isn’t fully pressurized, damaged, or there’s a lack of oxygen. In other words. It would be safer. But it’s only safer if the whole ship doesn’t explode. Arghh. What should you do?`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
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
        {
            ID: 13,
            Text: `Ripping panels open and splicing wires is badass and usually way faster than manually trying to jack up some stupid hatch. With your adorable little otter paws, you ferociously rip off the casing of the hatch panel display. You might have been a little too rough and several wires tumble out of the panel housing onto the deck. You scoop them up quickly, shove them into your uniform,  and act like nothing happened, just in case anyone caught this on some kind of hidden ship cam. The panel is sparking randomly and you can smell ozone, which is maybe, not great. No matter. There are nests of wires everywhere and just as you are thinking that maybe this was the wrong call, you spot a particularly large black wire. Upon closer inspection, it’s not a wire, it’s a hydraulic line! There’s also a  small circuit panel labeled “hydraulic controller” that has a clearly damaged wire dangling nearby! But just as you are trying to reconnect the broken wire to the controller board, you notice the hydraulic line is spewing fluid. Lots of fluid. Ugh, even if you could make a good connection back to the controller board, there’s no way the hydraulics will get enough fluid to operate the hatch. You can’t worry too much about the time you just wasted, you’ll either run out of time or you won’t. At this point you could try the conduit trench, or you could also grab the MHRL from the emergency panel and get the comms hatch open manually. What do you want to do?`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "13a",
                    Text: `Type “elbow grease” to try and use the MHRL to force the hatch`,
                    Command: "elbow grease",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "MHRL",
                    NextNode: 14,
                    PlayType: "aggresive"
                },
                {
                    ID: "13b",
                    Text: `Type “conduit” to try and access comms via conduit panel`,
                    Command: "conduit",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 15,
                    PlayType: "passive"
                },
            ],
            EarnedPoints: 10
        },
        {
            ID: 14,
            Text: `Every hatch has an emergency panel located just nearby that contains an MHRL. The manual hatch release levers are a bit unwieldy, but not too bad. They fit into a tool access port near the hatch and by rotating the MHRL you can raise/ratchet the hatch open bit by bit. It’s time consuming to get a hatch fully open, but you only need enough space so you can crawl under. You find the emergency panel and retrieve the MHRL. And now, like some kind of space janitor, you begin the disgusting manual task of opening the hatch. There is a reason captains have crew to do this stuff for them, you think to yourself as you bemoan how low you’ve sunk. Just as you are daydreaming about how you’re going to court martial your entire crew for insubordination, there’s a MASSIVE explosion that rocks the ship! You are thrown into the wall near the hatch access with a sickening thud. You are seeing stars for the first several seconds following the explosion, but slowly, your vision returns to normal. That was, definitely, not good. It felt like the ship might’ve just lost an entire level! Whatever is happening is getting worse. You’ve got to get through this hatch and fix that comms array before it’s too late! There is just enough space between the hatch and the deck for you to slip through. But it’s going to be really, really, tight. It’ll take another few minutes to raise the hatch any higher. And the explosion definitely made the hatch slide down a few teeth off the manual chain mechanism. Decision time - you can either try and time your dive under the hatch and hope there are no more big explosions, or you can take a few minutes and try to raise the hatch a bit higher for safety. You hate both these options, but you really don’t see any other way. What do you want to do?`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "14a",
                    Text: `Type “slide” to try and shenmue slide under the hatch`,
                    Command: "slide",
                    Mood: `ain't nobody got time for that`,
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 16,
                    PlayType: "reckless",
                    DeathNode: true,
                },
                {
                    ID: "14b",
                    Text: `Type “ratchet and clank” to try and raise the hatch some more`,
                    Command: "ratchet and clank",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 17,
                    PlayType: "intelligent"
                },
            ],
            EarnedPoints: 10
        },
        {
            ID: 15,
            Text: `The conduit maintenance panels are small, but you don’t need much space. And honestly, the idea of messing around further with the outer comms hatch just seems like a waste of time. As long as the panel isn’t too badly damaged, you should be able to remove the outer panel from this end, squirm by the conduits, and disengage the outer panel from underneath the other side of the comms hatch on the other end. It’s a good thing you don’t mind tight spaces! Wait. Do you mind tight spaces? Oh boy. This could get dicier than you initially anticipated. Oh well - there’s definitely not enough time to worry about it now. You manage to get the grating up covering the electrical trench. You shimmy in, almost expecting to trigger a panic attack, I mean, it’s been that kinda day. But nope. You’re fine. So turns out you aren’t claustrophobic. No need to mark that one on your cryo-fog from hell bingo sheet. The panel and panel control are both intact, and you are able to disengage the safety and since both sides of the trench are equal pressure at the moment, you don’t have to wait for a safety cycle. You pop out unscathed and utterly victorious on the other side of the comms hatch! In your excitement you break into a riverdance, because why not, you’ve earned it.`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "15a",
                    Text: `Type “continue” to continue to comms`,
                    Command: "continue",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 18
                },
            ],
            EarnedPoints: 5
        },
        {
            ID: 16,
            Text: `The ship is freaking coming apart! There’s no time for this manual monkey crap! You’re an otter! A captain otter! Probably. And the only way this hunk of junk is going to see another Titan Moon run is if you get through this hatch, repair the comms array and save the day! You step back a few paces and prepare for what’s likely to be the coolest dive-slide that’s ever been done. There are sparks flying everywhere and you can just imagine what the ship cams are going to record as you perform this sweet shenmue-style slide. I mean imagine watching it in slo-mo! You make a mental note to make sure that you grab all the cam footage after this fiasco so you can make a sweet Instagram, no, a TikTok that shows how awesome you are sliding under hatches and stuff. You are imagining the, probably, billions of likes that will end up skyrocketing your endorsement career as you begin sliding under the hatch. It’s all going really well until another massive explosion rocks the ship causing the hatch to slip completely off the ratcheting mechanism. You can feel your adorable little otter body cut completely in half as the impossibly heavy hatch crashes down on you. The last thought you ever have is that you might still be able to use this footage as some kind of TikTok blooper. Then everything goes black. Game over.`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "16a",
                    Text: `Type "s" to Start Over`,
                    Command: "s",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 1
                },
                {
                    ID: "16b",
                    Text: `Type “after action” to see your after action report`,
                    Command: "after action",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: -9999,
                    AfterAction: true,
                },
            ],
            EarnedPoints: -500
        },
        {
            ID: 17,
            Text: `As badass as a sparking disaster slide underneath a barely raised corridor hatch would be, you have your doubts that the ratcheting mechanism will hold up if another explosion rocks the ship again. It may take up some precious time, time you likely don’t have, to ratchet the hatch up further, but it seems like the smart approach. Kinda hard to do comms repairs if you’ve been cut in half. You arduously begin ratcheting the hatch higher just another concussive wave from yet another explosion somewhere on the ship ripples through the corridor. Had you not been holding onto the MHRL, the hatch would’ve slipped completely! You get the hatch up to a decidedly “safer” height and dive underneath. Thankfully you emerge on the other side of the hatch as one complete, still gorgeous, otter. You stuff the MHRL into an impossibly large pocket on your uniform and press on.`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "17a",
                    Text: `Text “continue” to continue to comms`,
                    Command: "continue",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 18
                },
            ],
            EarnedPoints: 5
        },
        {
            ID: 18,
            Text: `The ship is clearly suffering catastrophic failures throughout the decks. You almost don’t even hear the alarms anymore, you’ve gotten so used to them. Every corridor is flooded with red lights and emergency flashers. It’s like something out of a horror movie. You finally reach the forward comms control room. As you step inside you notice a number of panels, displays, and flashing lights. Ok, This is freaking cool. You restrain yourself from just pushing all the awesome blinky things and direct your attention to the monitors. You can see one monitor that is dedicated to an outer feed. It’s a cam that shows a large dish attached to the hull and there’s someone working on it! A tiny little otter in an adorable little otter space suit looks to be making repairs! There is a panel directly in front of you that’s already set to “EEV” channel and there’s a microphone stemming from the console. What should you say?`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "18a",
                    Text: `Type “excited” to excitedly say hi`,
                    Command: "excited",
                    Mood: "ermergerd",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 19,
                    PlayType: "reckless",
                    DeathNode: true
                },
                {
                    ID: "18b",
                    Text: `Type “assistance” to offer your help`,
                    Command: "assistance",
                    Mood: "calm",
                    Requires: {Mood: "short circuit", Inventory: []},
                    Inventory: "",
                    NextNode: 20,
                    PlayType: "intelligent"
                },
                {
                    ID: "18c",
                    Text: `Type “command” to assume rightful command`,
                    Command: "command",
                    Mood: "autocrat",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 21,
                    PlayType: "aggressive"
                },
            ],
            EarnedPoints: 15
        },
        {
            ID: 19,
            Text: `You are just so freaking happy to see another otter! Ever since waking up in that cryo-pod, what seems like days ago, you’ve been so lonely and with the ship coming apart you’ve really felt scared and stressed. Seeing another otter just finally gives you that sense of peace, like you aren’t alone in all this chaos. Like you can finally breathe a sigh of relief knowing that it’s all going to be okay because you finally found a friend! You can’t hold back your excitement and joy as you scream, sing-song-like, into the microphone - “Hellllooooo, IS IT ME YOU’RE LOOKING FOOOOOOR!”. You hear the otter in the space suit scream out, scared and startled. You might have screamed a little too loudly? As you check the monitor, you can see that the little communications space otter has lost their grip on the antenna array. You see a tether extending out from the suit. Phew! Close one. Good thing this comms otter has their stuff together. They can just pull themselves back to the comms antenna array. No harm, no foul! Just as you are about to apologize to the adorable little space otter for startling them - they get absolutely pancaked by a large piece of debris that the ship spun into. You actually wince as you watch the horror on the monitor. You look around the comm room for a moment. “If anyone saw that - I mean, obviously it wasn’t my fault.” you say out loud. That otter really should have had less slack on that tether. You can’t be held responsible for when otters don’t follow protocol afterall. Anyway, it’s probably no big deal. That otter was likely almost done fixing everything anyway. Excitedly, you engage the “ALL COMM CHANNELS EMERGENCY” button and prepare your best captain voice for the part where you’ll say your crew sucks and you need saving. Except, the button doesn’t light up and the status panel in front of you still only indicates “EEV CHANNEL” as being fully operational. As a piece of debris the size of a small moon crashes through the hull, crippling the ship and decompressing every deck simultaneously, you can’t help but think how your crew really let you down. I mean, what a bunch of losers. At least you’ll make a gorgeous corpse. Game over.`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "19a",
                    Text: `Type "s" to Start Over`,
                    Command: "s",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 1
                },
                {
                    ID: "19b",
                    Text: `Type "after action" to see your after action report`,
                    Command: "after action",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: -9999,
                    AfterAction: true,
                },
            ],
            EarnedPoints: -500
        },
        {
            ID: 20,
            Text: `You engage the mic and deliver what is possibly your best speech ever. “Brave soul of the noble Frigate One Way or The Otter” you begin. “You would risk your life upon the rickety hull of our starcrossed ship, so that we few, we happy few, might live to see another sunrise. That we may feel summer’s kiss upon our faces. You risk all to restore the very communications array that will be our salvation, our hope, our precious dream. You, in your adorable little otter space suit, rage against the dying of the light. And we with you, we rage! We rage against the coming night! And I dear otter! I am with ye! I offer myself AS TRIBUTE!”. You are breathing raggedly. That was magnificent. Absolutely magnificent. Still, just to be clear, you add. “So, um, what I mean to say is, I’m here in comms, and I can probably help a lot.”`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "20a",
                    Text: `Type "continue" to await reply`,
                    Command: "continue",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 22
                },
            ],
            EarnedPoints: 5
        },
        {
            ID: 21,
            Text: `You do a little shadow boxing before you approach the mic. You are - the freaking captain - of this bucket. And ever since you woke up, alone mind you, in the cryo-bay, you have been waiting to take command of the situation and really start laying down the law. I mean, just look at what these losers have done to your beautiful ship! My god, the insurance claims on this are going to cripple your rates. CRIPPLE THEM. You saddle up to the mic. You clear your throat. “You might look freaking adorable, in that otter sized space suit” you begin. “But that doesn’t mean I forgive you for putting a bunch of holes in my ship you degenerate! I’m taking over this operation, see! That’s right, scum bucket. THIS. IS YOUR CAPTAIN SPEAKING! And if you don’t want to spend the rest of your adorable natural life in the brig - YOU ARE GOING TO DO EXACTLY WHAT I SAY!”. You scream this last part so loudly that you start choking on your own spit. But even with that little set back - you’re still entirely sure that you just delivered the best and most motivational speech of your entire life.`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "21a",
                    Text: `Type "continue" to await reply`,
                    Command: "continue",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 22
                },
            ],
            EarnedPoints: 5
        },
        {
            ID: 22,
            Text: `“Hey! Not sure who is in the comms area, but comms are still pretty finicky. They are SUPER unreliable at the moment from ship to anything outside. So I kinda didn’t catch a word of that, transmission came through all garbled I'm afraid….” is the initial reply from the space walking otter. A tear forms and slowly falls down your adorable cheek. You just gave the best speech ever and this space monkey didn’t even hear it. “Hey, I’m glad you’re in there though” the space otter continues. “I've spliced the busted backup into the auxiliary power unit for the dish array and I've rerouted the frequency buffers up to the bridge relay. But the bridge transmitter is showing a fault out here - and the bad news is, the comms panel transmitter you’re sitting at is also showing fault. It’s a real mess out here - and I need to work on boosting our signal while you get that comm panel fault sorted. We are running out of time! Last report I got, we were hurtling at a high rate of speed out of the sector - if we don’t restore comms immediately, we’ll travel beyond the range of our array and any messages we send will be received too late!” the otter says. “I’ll be working on the signal booster out here - whoever you are - I need you to fix the fault on the comms panel in there. As soon as the fault is fixed, the wideband EMC, emergency message channel button, will light up. When it does, just hit that button and our emergency distress signal will be sent in repeating intervals automatically! The fate of the One Way or the Otter is in your hands!” space otter rambles on.`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "22a",
                    Text: `Type "hero time" to save the freaking world`,
                    Command: "hero time",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 23
                },
            ],
            EarnedPoints: 5
        },
        {
            ID: 23,
            Text: `It's really too bad EEV otter didn't hear your speech. I mean you really put a lot into that. You're about to re-deliver the entire speech, but another powerful explosion rocks the ship. It's probably best just to let it go, and focus on saving the world. You’ve got your work cut out for you given you really have no idea where to start on this comms panel. The EMC button is, indeed, not lit. You jam it a few times anyway - I mean, maybe the LED is just broken right? Fat chance, given your luck today. There’s a removable door labeled “Comm panel board access” which seems as good a place as any to start your saving the world business. You remove the door and an almost comical little puff of smoke escapes and vanishes into a haze near the ceiling. That’s probably not great. There’s definitely power reaching the board, in general, but there seems to be an issue with power reaching the left side of the board. Not only is the EMC button dark, but almost every button on that side of the panel is as well. What do you want to do?`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "23a",
                    Text: `Type “inspect” to try and trace the wiring`,
                    Command: "inspect",
                    Mood: "",
                    Requires: {Mood: "calm", Inventory: []},
                    Inventory: "",
                    NextNode: 24,
                    PlayType: "intelligent"
                },
                {
                    ID: "23b",
                    Text: `Type “bridge” to abandon comms and solve from bridge like a captain`,
                    Command: "bridge",
                    Mood: "hello time bomb",
                    Requires: {Mood: "autocrat", Inventory: []},
                    Inventory: "",
                    NextNode: 25,
                    PlayType: "reckless",
                    DeathNode: true,
                },
                {
                    ID: "23c",
                    Text: `Type “help” to ask EEV otter for help`,
                    Command: "help",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 22,
                    PlayType: "passive",
                },
            ],
            EarnedPoints: 15
        },
        {
            ID: 24,
            Text: `Time is a real issue here, but losing your cool isn’t going to do anyone any good. You’ve got to trace down this wiring issue. There’s a mess of harnesses and wires that run from each of the panel buttons, the problem is going to be trying to isolate the problem wires that are connected to the EMC. After what seems like an eternity, you are pretty sure you’ve got the correct EMC wire harness located. It’s in pretty bad shape. It looks like there was a power surge at some point and you can see obvious melting of some of the harness couplers and wire insulation. You are seriously running out of time. What are you going to do now?`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "24a",
                    Text: `Type "wires" to use the wires from your inventory!`,
                    Command: "wires",
                    Mood: "Wired",
                    Requires: {Mood: null, Inventory: ["wires"]},
                    Inventory: "",
                    NextNode: 26,
                    PlayType: "intelligent"
                },
                {
                    ID: "24b",
                    Text: `Type "wiggle" to wiggle and jiggle the wire harness`,
                    Command: "wiggle",
                    Mood: "Desperation",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 27,
                    PlayType: "aggressive"
                },
            ],
            EarnedPoints: 15
        },
        {
            ID: 25,
            Text: `This is stupid. You are the freaking captain. You thought there’d be otters down here in comms that knew what they were doing! Not just some random EEV otter messing around with wrenches in space in an admittedly adorable otter space suit. You know next to nothing about fixing communications panels and even if you did, you’d delegate that knowledge because that is what awesome captains do! You can’t even properly communicate with the EEV otter! Your best bet is to double-time it back to the main corridor and make your way to the bridge. EEV otter said their EMC had a fault as well, but there will be otters on the bridge that will know how to sort that nonsense. Besides, when the rescue does arrive, where do you want to be found? In some dirty comms closet or on the bridge in a super comfy chair with a steaming cup of Earl Grey, hot. This decision is not hard. You abandon the comms room and begin making your way back down the corridor retracing your steps. You are skittering past medical and muttering about how good that tea is going to taste when a massive piece of debris crashes through the hull into the medical bay causing a massive fireball that ignites the hundreds of oxygen canisters weirdly piled up in the corner. Your last thoughts are how many times you told those stupid otter doctors not to pile up the oxygen canisters like some kind of ridiculous video game for precisely this reason. The One Way or the Otter breaks up entirely in a terrific explosion, scattering far and wide into the blackness of space. Your tiny little frozen otter body is never found. Game Over.`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "25a",
                    Text: `Type "s" to Start Over`,
                    Command: "s",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 1
                },
                {
                    ID: "25b",
                    Text: `Type "after action" to see your after action report`,
                    Command: "after action",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: -9999,
                    AfterAction: true,
                },
            ],
            EarnedPoints: -500
        },
        {
            ID: 26,
            Text: `You suddenly remember the mess of wires you picked up after you tried to get the comms hatch open by hot-wiring the hydraulics! You excitedly pull them from your uniform and examine the gauge. Astonishingly, the gauge seems to be about right! With a little luck you could replace the fried wires in the harness with these beauties! It’s the first bit of good luck you’ve had all day and you keep expected to get flat out electrocuted to death as you are swapping out the wires for the undamaged ones - but you don’t die, so that’s super cool. With each of wires replaced, you excitedly hop up to look at the EMC button on the panel’s top. To your utter dismay - the button is STILL not lit. ARRGGGGGHHHHHH! You did everything right! You just give and give and give to this stupid flying junk pile and all it ever does it take, take, take! This is the absolute worst day ever! I mean, you didn’t even get any Cocoa Puffs for breakfast! Nothing! You woke up in some stupid pod, full of gooey gel, and it’s been an utter hellscape ever since!`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "26a",
                    Text: `Type “kick” to start kicking the comms panel for being dumb`,
                    Command: "kick",
                    Mood: "Otterly Disappointed",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 27,
                    PlayType: "reckless",
                    DeathNode: true,
                },
                {
                    ID: "26b",
                    Text: `Type “bash” to use the MHRL to bash the comms panel`,
                    Command: "bash",
                    Mood: "Bashy Otter",
                    Requires: {Mood: null, Inventory: ["MHRL"]},
                    Inventory: "",
                    NextNode: 28,
                    PlayType: "aggressive",
                },
            ],
            EarnedPoints: 20
        },
        {
            ID: 27,
            Text: `You otterly lose your sh*& and start repeatedly kicking the stupid comms panel. This stupid piece of junk is going to get you all killed and it’s not fair! It’s NOT FAIR! You are too beautiful to die in space! All this stupid panel had to do was light up the EMC button! That’s all! You rewired the stupid thing like some kind of Weasel MacGyver and what? NOTHING! You land a particularly vicious kick which, in turn, cracks your little toe bones sending arcs of shooting pain up through your leg. You howl in pain and frustration and start hopping around on your one good leg. A particularly large explosion rocks the ship, yet again, and sends you hopping out of the comms room, off balance, down the corridor into the medical bay. You are so off balance and just trying to keep from falling and hurting yourself more as you fly into a corner filled with oxygen tanks in the medical bay. There are loud clunks and bangs all around you as the oxygen tanks clatter all over the floor. In what could possibly be the most ridiculous Rube Goldberg mechanism you’ve ever seen, an oxygen tank rolls along the med-bay, slams into a med-card, which in turn, causes the med-cart drawers to fly open. Another jolt from the ship causes all the scalpels in med-cart drawer to come flying out like something out of a Spruce Lee (the amazing kung-fu otter from Canada) movie. The scalpels puncture a bunch of IV bags causing their liquid to squirt out everywhere and in all directions. Some of the IV fluid sprays over one of the portable defibrillator units nearby and causes a shower of sparks. It would be almost beautiful if you weren’t collapsed amongst a scattered array of leaking oxygen tanks. The ensuing explosion is massive enough to be catastrophic for the One Way or the Otter. As both you and the Medical Bay are first, engulfed in flames, then shot out into space in the resulting decompression, you can’t help but think. Worth it. That stupid comms panel is now also dead. It’s a hollow victory. But it’s still a victory. Game Over.`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "27a",
                    Text: `Type "s" to Start Over`,
                    Command: "s",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 1
                },
                {
                    ID: "27b",
                    Text: `Type "after action" to see your after action report`,
                    Command: "after action",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: -9999,
                    AfterAction: true,
                },
            ],
            EarnedPoints: -500
        },
        {
            ID: 28,
            Text: `You can’t believe it. This. Stupid. Panel. You have literally woken up in a tube of goo, been tossed around the ship like a freaking rag doll, crawled through grease and grime, overcome numerous life threatening situations, and this panel, this panel, had the freaking AUDACITY, to deny your Weasel MacGyver rewire as a suitable fix for the EMC! No. NO! THAT’S IT! You have absolutely had it. You feel the weight of the MHRL bouncing in your uniform as you begin floating like a butterfly around the comms panel. “So that’s how you wanna do me Comms Panel?” you scream like a crazy otter. “THAT’S HOW YOU WANNA DO ME?? YOU WANNA DO ME DIRTY!” you howl. You take the MHRL from your uniform and begin bashing the comms panel like it took your money. You are utterly relentless. The violence and frustration of the whole day pours out of you like an energy drink being shotgunned by an awkward teenager on TikTok. And then suddenly, through your red haze of anger, you perceive a light. It almost doesn’t register at first. But there it is. The EMC button is lit! THE EMC BUTTON IS LIT! You drop the MHRL and rapidly begin pushing the EMC button, over, and over, and over again! Suddenly the EEV otter comes screaming across the channel. “YOU DID IT, OH MY GOD YOU ACTUALLY DID IT!”. The EEV otter is hooting and hollering and doing (rather appropriately) a moonwalk celebration dance. The comms channels suddenly crackle to life with a repeating transmission from Titan alerting the One Way or the Otter that a rescue ship has been dispatched. As you collapse into one of the chairs in front of the comm panel, you can’t help but think what a great captain you are. What skill and prowess you possess to be able to solve such complex problems in a life and  death situation. Much later in your debrief, you’ll be asked how you managed to repair a comms panel that had, so clearly, been viciously damaged. One interviewer will comment how the comms panel “...appeared to have been severely dented and nearly catastrophically bashed.”. You only respond that there was a lot of debris flying around the ship. You wonder how the damage occurred as well, but it must’ve happened amongst all the chaos of the ship pitching and spinning. You’ll smile to yourself as you say this and you’ll go back to your quarters and kiss the MHRL that you’ve framed behind glass. Only a true captain could bash the crap out of something and get it to work like that. You smile again as settle into your little otter bed, content in knowing that you saved the day. But just before you doze off to sleep, you realize. Wait. No one in that debrief ever called you Captain. Your eyes burst open. You are the Captain right? *COMMS ENDING ACHIEVED - CONGRATULATIONS - GAME OVER*`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "28a",
                    Text: `Congratulations - type "winner" to Start Over`,
                    Command: "winner",
                    Mood: "COMMS CHAMPION",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 1
                },
                {
                    ID: "28b",
                    Text: `Type "after action" to see your after action report`,
                    Command: "after action",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: -9999,
                    AfterAction: true,
                },
            ],
            EarnedPoints: 500
        },
        {
            ID: 29,
            Text: `The more you think about it, there’s probably a wicked cool elevator that talks and has sweet doors that “whoosh” and stuff. And anything that is THAT awesome is going to require some kind of key card access. That, and whatever jerk-face McJerkingson took your creds from your locker is probably impersonating you right this very moment. And there will be no better way to prove you are, in fact, the captain, than showing up with your spare deets in hand and your high cheekbones held, well, high. Then you can have that badge lifting creton thrown out an airlock. So you decide to make for your quarters. There is, however, the slightly annoying problem of not remembering where your quarters are. You approach one of the terminals in the cryo-bay and start tapping on keys. The terminal comes to life and you quickly bring up a crew quarter schematic. Captain’s quarters, your quarters, are one deck up. There’s an access shaft just down the corridor if you take two lefts out of the cryo-bay. `,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "29a",
                    Text: `Type "continue" to head towards crew deck`,
                    Command: "continue",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 30
                },
            ],
            EarnedPoints: 5
        },
        {
            ID: 30,
            Text: `Without too much drama, you make it to your quarters, but the entire deck seems to have suffered a power failure. The panel next to your door is dark and no amount of pushing with your adorable little otter arms is making the door budge. It’s weird, because it looks like someone already tried to smash their way into your room. There’s dents and deep scratches all over the door’s surface. The entire corridor seems to be without power and is dark. However, there’s just enough light coming from an emergency panel at the end of the corridor that you can see there is room to the left, and a room to the right, of your quarters and both have their doors ajar. Maybe searching those rooms could be useful? What do you want to do?`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "30a",
                    Text: `Type "left" to inspect room on the left`,
                    Command: "left",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 31
                },
                {
                    ID: "30b",
                    Text: `Type "right" to inspect room on the right`,
                    Command: "right",
                    Mood: "",
                    Requires: {Mood: "search mode", Inventory: []},
                    Inventory: "",
                    NextNode: 32
                },
            ],
            EarnedPoints: 5
        },
        {
            ID: 31,
            Text: `You scoot left and shuffle down the corridor a bit until you reach the slightly ajar door of the room on the left. You slip inside the room and find yourself in almost total blackness. The emergency light from the corridor barely spreads beyond the, only slightly cracked, door. You can make out vague shapes. A long rectangle, possibly a bed is pressed up against, what is likely, the back wall. There is a more boxy square shape closer to the entrance, maybe a desk? You start fumbling around with items on the desk, but you just end up knocking a bunch of stuff to the floor. Ugh. This isn’t working and you aren’t finding anything in this room in the dark. What do you want to do? `,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "31a",
                    Text: `Type "back" to go back to the hallway`,
                    Command: "back",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 30
                },
                {
                    ID: "32a",
                    Text: `Type "flashlight" to turn on the flashlight`,
                    Command: "flashlight",
                    Mood: "",
                    Requires: {Mood: null, Inventory: ["flashlight"]},
                    Inventory: "",
                    NextNode: 33
                },
            ],
            EarnedPoints: 5
        },
        {
            ID: 32,
            Text: `You shimmy right and feel your way carefully until you reach the slightly ajar door to the right of your quarters. You are able to pretty easily slip inside, but are met with complete darkness. You start taking small steps around the room with your arms outstretched. A thought enters your mind, what if you aren’t alone in this room? What if there’s something that’s just been waiting in this room. Waiting with the door slightly open. Waiting for some hapless, attractive otter like yourself, to come along so it can feast on your entrails and gain your considerable soul power or something? You’ve barely started going down this thought rabbit hole when you slip on something and fall to the floor with massive thud! You lay there, stunned, for a moment. Then you start feeling your face to make sure that nothing bad happened to your adorable nose. Oh, thank the stars. It seems nothing damaged your flawless bone structure. Ugh, what did you slip on? It felt almost cylindrical as it slid beneath your foot. You start groping around on the floor by where your feet are and finally your hand brushes something. You quickly seize it up and discover it’s a flashlight! You quickly turn it on and it works! Bright, pale, light illuminates the room and casts deep shadows across the tight walls. There’s a bed pushed up against the far wall and a small desk by the entry. A quick toss of the desk doesn’t turn anything useful up. Without anything else really useful in this room, you should probably go back to the hallway.`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "32a",
                    Text: `Type "back" to go back to the hallway`,
                    Command: "back",
                    Mood: "illuminati",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "flashlight",
                    NextNode: 30
                },
            ],
            EarnedPoints: 10
        },
        {
            ID: 33,
            Text: `You switch on the flashlight and the room is immediately flooded with pale, harsh, light. Creepy shadows form on all the walls of the small room. The large rectangle shape you spotted before was, in fact, the bed. It is pushed up against the wall, but isn’t sitting quite flush. You can now clearly see the desk and the items you knocked to the floor earlier. It doesn’t look like you knocked over anything of consequence. Just some data pads and more than a few rocks. Otters love rocks. There’s a side table with another data pad and a light that is obviously not working, and there’s a larger ship panel that’s wall mounted, but it too, is dark and isn’t working. What do you want to do?`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "33a",
                    Text: `Type "desk" to search the desk with the flashlight`,
                    Command: "desk",
                    Mood: "rummager",
                    Requires: {Mood: "illuminati", Inventory: []},
                    Inventory: "",
                    NextNode: 34,
                    PlayType: "intelligent"
                },
                {
                    ID: "33b",
                    Text: `Type "bed" to search the under the askew bed`,
                    Command: "bed",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 35,
                    PlayType: "aggressive"
                },
            ],
            EarnedPoints: 10
        },
        {
            ID: 34,
            Text: `Searching the desk with a flashlight should yield a lot better results than your first, nearly blind attempt. There are several drawers, but one in particular grabs your attention. There’s been a locking mechanism installed. By default, all desk drawers in an otter’s quarters are “locked” to their specific biometric signature. But this otter felt the need to install a 3rd party, analog lock. Interesting. You grab one of the nearby rocks on the ground and bash the heavy lock until your head is ringing and your cute little otter hand is throbbing. You are about to call it quits, when the lock finally fails and makes a muted crunching sound as the internal tumblers disengage from your unceremonious bashing. You slip the lock and open the drawer. It’s completely empty. Wait? It’s completely empty? Your adorable little otter paw is almost bleeding, and this freaking drawer is empty! You kick the stupid drawer for being so stupid and in the process stub your little otter foot quite badly. As you are hopping around in pain, you accidentally hop on a rock that’s still on the ground and howl in pain, falling backwards into the drawer. You hit the drawer with such force that the drawer completely comes off the track. As the drawer shatters you spot a secret compartment! You smile to yourself. “Just as I suspected” you exclaim with a little otter fist pump. You’re like the smartest otter ever. You remove the false panel and remove the slim contents of the false bottom. It’s an old, analog, photograph. Most companies stopped producing actual film decades ago. It’s mainly produced now, in small batches, for artists and whatnot. The photograph is of an alien lifeform and has features akin to spiders back on Earth. There are multiple elongated leg-like appendages that are connected to a much smaller, but bulkier body or carapace. Your mind almost seizes on what you’re looking at, but then falls short. This cryo-fog is pure hell. You feel like you know what this creature is. Maybe even WHO, this creature is…But you can’t place it. The creature is very small in the picture and looks to be fairly young, for whatever reason, you feel like if you do know this creature, you know it when it’s much older. Looking closer, you can see there is something that didn’t quite make the frame of the photograph. It almost looks…no…it’s just too blurry and cut off, you can’t make it out. This photo is a weird find, but you almost killed yourself getting this thing, so you decide to shove it in your pocket. Better focus and keep searching the room.`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "34a",
                    Text: `Type "continue" to go back to searching the room`,
                    Command: "continue",
                    Mood: "sleuth",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "old photo",
                    NextNode: 33
                },
            ],
            EarnedPoints: 10
        },
        {
            ID: 35,
            Text: `The position of the bed is really bugging you. It’s flush against the wall and it’s really cranking on your OCD. Why. Why would some, obvious lunatic, pull their bed so that it sticks out from the wall at the bottom of the bed, but is flush with the wall at the top of the bed. It’s ludicrous. Unless of course there was something towards the back end of the bed? You shine the flashlight in that direction and move to the back of the askew bed. It’s pulled away from the wall alright, and now you can see why. There’s a fairly large hole that has been, literally, cut out by a scorcher. Scorcher’s are tools used by otters in engineering to cut bulky pieces of large metal plating. Wait, how do you know that? Anyway, there’s a massive hole that’s been cut into this wall. As you are shining your light into the hole, the realization hits you, this is the adjoining wall to your captain’s quarters. So who’s room are you in now? And why did they cut their way into your room? The mysteries are deepening by the minute. You need to get your extra credentials and get to the bridge double quick. Something nefarious is afoot. You crawl through the hole and find yourself in the next room, your room. The weird thing is, it doesn’t seem, at all, familiar. Nothing about the room jogs any particular memory which seems odd. The room has a similar layout to the one next door, the only difference being that it’s slightly larger to accommodate several extra ship console screens. That makes sense. You’d want to monitor all aspects of the ship’s operations from here, and thus would enjoy having several extra consoles, comparatively to the other otter officers. You spot the desk near the door and scramble towards it. You can’t help but notice the door. It’s jammed shut, from the inside. Looking back at the hole, you realize, the scorcher was used from this side, not the other side. Someone in this room, your room, cut their way out after jamming the door?`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "35a",
                    Text: `Type "continue" to search Captain's Quarters`,
                    Command: "continue",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 36
                },
            ],
            EarnedPoints: 10
        },
        {
            ID: 36,
            Text: `You rush to the desk, the ship violently pitches, yet again, tossing you harshly into the desk with a thud. You need to pick up the pace, the ship is clearly in trouble. You are running out of time. Whatever is going on, it’s definitely getting worse. The next few minutes will be critical. You came in here to find your extra credentials and bridge access codes, but something definitely went down in this room based on the jammed door and scorcher escape. You probably don’t have time to really do both an investigation of the room AND locate your credentials. So what’s more important?`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "36a",
                    Text: `Type "credentials" to find your bridge access creds`,
                    Command: "credentials",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 37,
                    PlayType: "intelligent"
                },
                {
                    ID: "36b",
                    Text: `Type "mystery" to build a mystery Sarah Mclachlan style`,
                    Command: "mystery",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 38,
                    PlayType: "passive"
                },
            ],
            EarnedPoints: 10
        },
        {
            ID: 37,
            Text: `There are clearly some shenanigans happening on your ship and you’ll need to get to the bottom of it all. But now just doesn’t seem like the time. You need to find your bridge credentials and get a move on. You are still completely in the dark about the ship’s problems. You could be caught in gravity well, the ship could be suffering mechanical failures, you just don’t know. You need to be on the bridge. You take another look around the room and notice that in addition to the desk, the ship consoles, the bed, and the small end tables, there is also an Otter-Secur-a-Station 9000 in the corner. These are highly sophisticated, googleplexity encrypted, storage lockers that have onboard data storage as well as physical storage. And the 9000 series is the absolute gem of all the Secur-a-Station models. Again, no idea how you actually know that, but anyway. You approach the Secur-a-Station. There’s a small keypad on the front. You get tingles just seeing it. That’s kinda weird. Anyway, you shake yourself and try to focus. What code would you have used to lock this freaking thing. Your creds are likely behind this door. All you need to do is clear this ridiculous cryo-fog! The input terminal is flashing with 5 little hashes - so you suspect the code is 5 numbers. Or is it 5 letters? A combination? The ship heaves violently, again, and you are nearly thrown off balance, but by gripping the Secur-a-Station, you are able to steady yourself at the last minute. You quickly do some head maths. If the panel takes letters and numbers, that’s um, 26 + 10, so that’s 36 individual possibilities for each of the 5 required entries. Okay, um, carry the one…so it feels…um, like a high number of probabilities. I mean we could be talking like well over 60 combinations here! As you are contemplating how bad you might be at maths, the ship pitches once again, jarring you from your internal promises to maybe take some classes. Screw it. You coded this thing right? Surely you remember the code. Cmon muscle memory! Help an otter out! You’ll only get 3 attempts before you’re locked out forever!`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "37a",
                    Text: `Type "continue" to begin your attempts`,
                    Command: "continue",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 39
                },
            ],
            EarnedPoints: 10
        },
        {
            ID: 38,
            Text: `As important as getting your bridge credentials could be, you are absolutely Murder She Wroting over all these weird circumstances. The door jammed from the inside? Someone using a scorcher to melt their way into the adjoining room? I mean, what the actual happened here? You shift into Norwegian Indie Mystery mode and start to scour the room for more clues. You check the large metal bar used to jam the door mechanism. You unjam it and have a look over the surface. But nothing really stands out. You carefully check the desk and side tables, but again, nothing really of interest. You bend low to inspect the scorcher hole that was cut from this room into the adjoining quarters. At first it all just looks like blackened metal at the edges of the hole, but then you spot it. You shine your flashlight near the upper corner of the hole and you can clearly make out a bit of torn uniform. You quickly check your own uniform to make sure it didn’t come from you, but your uniform, while not a great fit, is completely intact. No, this patch of uniform probably came from whomever cut this hole and made a run for it. You stash the bit of uniform in your pocket. It could be important. Just then, the ship heaves violently to one side. Metal clangs, clunks, groans and whines as the ship struggles to regain a normal orientation. Okay, no time for the Secur-a-Station. You need to get the bridge NOW, and just hope that you’ll be able to find a way in. A way in, that doesn’t involve flashing your sweet creds.`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "38a",
                    Text: `Type "continue" to get to the bridge ASAP`,
                    Command: "continue",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "ripped cloth",
                    NextNode: 42
                },
            ],
            EarnedPoints: 10
        },
        {
            ID: 39,
            Text: `You focus on the input panel. You slow your breathing and try to calm your little otter fingers. Your life, and the lives of all the otter otters on the ship, could be depending on you to get this code right. Let’s be honest. These are some crazy intimidating odds. But moments like these are what captains like you live for right? You do some quick shadow boxing and a few sweet roundhouse kicks to psych yourself up. This is it. This is the moment. You approach the input pad and make your first code attempt…`,
            CodeNode: true,
            CodeLength: 5,
            CodeFailedNextNode: 41,
            NodeOptions: [
                {
                    ID: "39a",
                    Text: `Enter a code with a length of 5 - letters, numbers, or both`,
                    Command: "12345",
                    Mood: "space balls",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 40
                },
            ],
            EarnedPoints: 15
        },
        {
            ID: 40,
            Text: `Wait. What? I mean that was just a desperation play! The code is seriously “12345”? That’s like something some idiot would put on their luggage! You stand in stunned silence for a moment, unable to believe that code actually worked. Another violent ship jostle,  jars you from your stupefied state. You crank the Secur-a-Station’s physical door lever and the heavy station door creaks open. There are numerous data pads, an array of very beautiful rocks (which make you go googly eyed for a minute), and some random medals, probably given to you for being awesome, in the Secur-a-Station interior. Then, you finally spot what you’ve been looking for. There’s a small, magnetic, sleeve that contains a very official (and shiny) looking access card. The sleeve looks like it is meant to simply stick to your uniform. The access card has a security designation of “All-Access: Code Otterman Empire” printed above a QR code. ERMERGERD Yasssssss!! You ACTUALLY found your bridge creds! You can finally make your way to the bridge, take command from the brain–fogged otter that is impersonating you (and doing an absolutely crap job of saving the ship by the way) and save the day! Woot! The ship is violently pitching on a regular basis - you need to get to the bridge. Now!`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "40a",
                    Text: `Type "president skroob" to double time it to the bridge`,
                    Command: "president skroob",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "bridge access",
                    NextNode: 42,
                    PlayType: "intelligent"
                },
            ],
            EarnedPoints: 100
        },
        {
            ID: 41,
            Text: `You are suddenly assaulted by a horrible double buzzing sound - ERRN ERRN - that startles your little, adorable, otter body. The Secur-a-Station input panel flashes red several times before the text “INVALID/INCORRECT CODE” scrolls across the input panel’s small E-Ink display. You notice an “Available Attempts Before Permanent Lockout” header on the input panel, and it now reads - “2 attempt(s) remaining”. You clutch your forehead with both of your little otter paws. You really thought that last attempt would be your code! Craaaap! Okay. Okay. No big deal. You roll your head side to side, crack your little otter neck bones, close your eyes, reopen them, and make your next attempt. Cmon. Be the code.`,
            CodeNode: true,
            CodeLength: 5,
            CodeFailedNextNode: 43,
            NodeOptions: [
                {
                    ID: "41a",
                    Text: `Enter a code with a length of 5 - letters, numbers, or a combo`,
                    Command: "12345",
                    Mood: "space balls",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 40
                },
            ],
            EarnedPoints: 10
        },
        {
            ID: 42,
            Text: `From the ship schematic you viewed on the console in the cryo-bay, you know the bridge is one deck up from the crew quarters deck you are currently on. This deck doesn’t have power, so you doubt the elevator with the cool “whooshie” doors is probably working, but there was another way to reach the bridge via a stairway and connecting corridor. You unjam the door and exit the room, making your way towards the stairway. On the next level you spot the corridor with glyphs and graphics indicating the bridge is just beyond. You sprint across the corridor and reach the outer bridge. The blast doors have been engaged? Hmm. That’s curious. Are blast doors used to secure the bridge during mechanical failures? Wouldn’t these only be engaged if there was a threat from the outside trying to get in? Whatever, it doesn’t matter. They probably just engaged due to the ship taking damage from the gravity well you are caught in, or the meteor field you strayed into, or the supernova that’s about to supernova you. Or because Jerkface McOtter Impersonator has no idea what the protocols are. Regardless, you need to get inside and take control of the situation.`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "42a",
                    Text: `Type "creds" to use your access creds to enter the bridge`,
                    Command: "creds",
                    Mood: "i am the captain now",
                    Requires: {Mood: null, Inventory: ["bridge access"]},
                    Inventory: "",
                    NextNode: 45,
                    PlayType: "intelligent"
                },
                {
                    ID: "42b",
                    Text: `Type "look around" to try and find another way in`,
                    Command: "look around",
                    Mood: "opportunist",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 46,
                    PlayType: "reckless"
                },
            ],
            EarnedPoints: 5
        },
        {
            ID: 43,
            Text: `You are suddenly assaulted by a horrible double buzzing sound - ERRN ERRN - that startles your little, adorable, otter body. The Secur-a-Station input panel flashes red several times before the text “INVALID/INCORRECT CODE” scrolls across the input panel’s small E-Ink display. You notice an “Available Attempts Before Permanent Lockout” header on the input panel, and it now reads - “1 attempt(s) remaining”. You clutch your forehead with both of your little otter paws. You really thought that last attempt would be your code! Craaaap! Okay. Okay. No big deal. You roll your head side to side, crack your little otter neck bones, close your eyes, reopen them, and make your next attempt. Cmon. Be the code.`,
            CodeNode: true,
            CodeLength: 5,
            CodeFailedNextNode: 44,
            NodeOptions: [
                {
                    ID: "43a",
                    Text: `Enter a code with a length of 5 - letters, numbers, or a combo`,
                    Command: "12345",
                    Mood: "space balls",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 40
                },
            ],
            EarnedPoints: 5
        },
        {
            ID: 44,
            Text: `You are suddenly assaulted by a horrible double buzzing sound - ERRN ERRN - that startles your little, adorable, otter body. The Secur-a-Station input panel flashes red several times before the text “INVALID/INCORRECT CODE” scrolls across the input panel’s small E-Ink display. NOOOOOO! The input panel goes dark and you hear a sickening whirring sound as the internal Secur-a-Doc locking mechanism melts into place. Permanently. The only way you’ll get inside this station now, is with an industrial thermite cutting tool, and about 19 hours. Neither of which you have. The ship violently rolls to one side and then back again, pitching you into the wall with a crash. You can’t investigate the room for more clues at this point, and you failed to open the stupid Secur-a-Station. You’re out of time. Whatever is happening to the ship has reached a tipping point. You just need to get to the bridge, and hope for the best outcome once you get there. There’s gotta be another way in? Maybe there’s a secret knock?`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "44a",
                    Text: `Type "curses" to head for the bridge without credentials`,
                    Command: "curses",
                    Mood: "very disappointed",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 42,
                    PlayType: "passive"
                },
            ],
            EarnedPoints: -20
        },
        {
            ID: 45,
            Text: `There’s a credential reader/terminal near the bridge doors. You scan your access credentials, and immediately the blast doors begin to retreat into the ceiling. Once the blast doors have fully disappeared above, the red colored bridge doors open. And yes! They make a super awesome “whoosh” sound! You totally called that. As you saunter onto the bridge you do a little slow-motion exaggerated shoulder shrug to really drive home the point that you are the captain of this bucket, and it is GOOD to be the captain! As you change your moves up to make it look like you are pulling yourself along an invisible rope, a blaster shot just misses your head and absolutely fries a navigation panel behind you. You dive under a nearby workstation and can’t help but think, it SUCKS to be the captain! Maybe someone objected to the invisible rope move? No way - that’s a classic. More blaster shots sizzle past the workstation you are hiding under. You take a second to survey the scene as best you can from under the workstation. The bridge is in shambles. There’s gas (you really hope that’s just pressurized oxygen) venting everywhere, panels are sparking left and right, and every screen and data monitor you can see is blaring “ALERT”. There’s a smoky haze hanging in the air from all the busted electronics. I guess now you know why the ship has been crashing all over the place. A few more shots hit the wall behind you and a waterfall of sparks pour out of the now blackened, and crispy, screen that used to be an engineering readout. This is kind of the last thing you expected. You thought maybe you’d have to order some lowly crew members around, maybe chuck an imposter or two out an airlock, but not fight off a blaster wielding psycho otter!.`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "45a",
                    Text: `Type "continue" to keep your head down!`,
                    Command: "continue",
                    Mood: "entrance ruined",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 47,
                    PlayType: "intelligent"
                },
            ],
            EarnedPoints: 25
        },
        {
            ID: 46,
            Text: `You start looking around for anything that might stand out, or anything you might be able to use to get into the bridge. You are about to give up hope when you spot it, there’s a sizable gap near the upper portion of the rightmost corner of where the blast door has extended down from the ceiling. Your guess would be that one of the impacts the ship took packed enough punch to literally dislodge the blast door from the recessed housing that guides it. This bent out the housing and made a gap before the blast door settled back into place. With a little frantic scurrying, you are able to climb up to the gap and slip inside! The blast door housing is pretty spacious given how thick they are. Once up inside the housing, you can see that you’re in something of a sub-ceiling, and it looks to run just far enough into the bridge that you can hopefully find a spot to drop down in! This is a massive security concern. You’ll need to throw your engineer out of an airlock and get a new one that can fix this travesty. But for now, you’re grateful that the gap is a thing. You discover some ducting that looks to be something of an air exchange system, likely a carbon dioxide scrubber. You can actually hear sounds coming from the bridge below! It’s muted, but there’s definitely sound transferring. This has to be your way in. Just as you are about to call out for some assistance, it’s like the entire sub-ceiling is filled with sizzling heat, sparks, and utter chaos. At first, you’re not even sure what’s happening, but then it becomes pretty clear that someone on the bridge is firing a blaster up at you! What? Seriously? You are trying to save this stupid ship and this is the thanks you get? Soooo typical. You barely have time to lament the shortcomings of your unappreciative crew before you are falling through the sub-ceiling. Obviously, the sub-ceiling sustained enough damage from the blaster shots such that it could no longer sustain the weight of your adorable little otter body. You fall, unceremoniously, into the bridge and land with a thud behind a navigation console/workstation. Whoever is shooting at you is now more determined than ever to vaporize you, or at least, that’s your assessment given the blaster fire only increases now that you’re on the bridge. This has really been one hell of a day.`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "46a",
                    Text: `Type "continue" to keep your head down!`,
                    Command: "continue",
                    Mood: "greedo shot first",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 47,
                    PlayType: "passive"
                },
            ],
            EarnedPoints: 25
        },
        {
            ID: 47,
            Text: `No one likes having blaster fire sizzling and whizzing by their head. This is kind of the last thing you expected to encounter as you got to the bridge. Your mind is racing, and the adrenaline is really pumping. You knew the ship was in trouble, but what exactly is happening here? Even with hiding under/behind this workstation, you can, more or less, tell where the blaster fire is coming from. The workstation you are using for cover, like most workstations on the ship, has an access panel that can be removed for making general repairs and accessing various internal components. It should be thick enough to act as a pretty good shield against blaster fire, if you wanted to try bumrushing your attacker. It would be pretty freaking heroic to go over the top of this workstation, all captain america style, and bash the crap out of whoever is shooting at you. Of course, if the panel isn’t thick enough, you could also end up, like sort of dead. Which would be less than ideal. You could also try calling out, maybe find out what this is all about? Negotiating maybe? I mean, this could all just be one big misunderstanding right? You could also totally make a run for it. I mean, there’s gotta be an escape pod around here somewhere, right? You can always be captain of another ship. What do you want to do?`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "47a",
                    Text: `Type "bumrush" to serve up a plate of smackdown`,
                    Command: "bumrush",
                    Mood: "let the bodies hit the floor",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 48,
                    PlayType: "reckless"
                },
                {
                    ID: "47b",
                    Text: `Type "negotiate" to use your words`,
                    Command: "negotiate",
                    Mood: "lets be adults about this",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 49,
                    PlayType: "intelligent"
                },
                {
                    ID: "47c",
                    Text: `Type "flee" to make a break for it`,
                    Command: "flee",
                    Mood: "mama says they was magic shoes",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 50,
                    PlayType: "passive"
                },
            ],
            EarnedPoints: 25
        },
        {
            ID: 48,
            Text: `So this scumbag basically ruins your pristine ship, takes your bridge by force and then, AND THEN, tries to what? TO KILL YOU? WITH A FREAKING BLASTER NO LESS? Like this punk can’t even look you in the eyes first? Well, that’s it. That really mashes your potatoes. I mean this day has suuuucked, and you were dealing with it, But now. Now it’s on. You rip the access panel from the workstation like an otter possessed. You beat the panel against your chest 300 style as you scream in your best Gerard Butler impression “GIVE THEM…NOTHING…TAKE…EVERYTHING!”. You vault over the workstation with a ferocity you never knew you had in you. You are moving so fast that you must just appear as an otter-shaped blur of death to your attacker. You are internally marveling at your greatness when a blaster shot hits your makeshift shield, burns through it, and singes your little otter paws causing you to yelp and fall backwards like a bag of rocks. That really could’ve gone better. And now you’re not sure if you’ll ever be able to learn to be a concert pianist like you wanted to, what with these singed fingies. Your attacker looms over you. And for the first time, you get a sense of what’s going on. Your attacker isn’t an otter at all. Your attacker isn’t a member of your crew. Your attacker is a large arachnid-type alien creature! Your ship has been boarded - BY SPACE PIRATES! “Oy - don’t even think about moving, you dirty lil tosser.” the creature says in a gruff voice. With one of its many arms, or legs, or, whatever, it lifts you up and suspends you in midair, upside down. The blaster is pointed directly at you. You can see a group of crew members behind the pirate - they are being restrained in some kind of electro-field generator. The arachnid pirate speaks again. “Now lil otter - I’d very much like to know what you think you’re doing up here?”.`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "48a",
                    Text: `Type "credentials" to show him your creds`,
                    Command: "credentials",
                    Mood: "picard",
                    Requires: {Mood: null, Inventory: ["bridge access"]},
                    Inventory: "",
                    NextNode: 51,
                    PlayType: "aggressive"
                },
                {
                    ID: "48b",
                    Text: `Type "old photo" to show him the photo you found`,
                    Command: "old photo",
                    Mood: "fatal frame",
                    Requires: {Mood: null, Inventory: ["old photo"]},
                    Inventory: "",
                    NextNode: 52,
                    PlayType: "intelligent"
                },
                {
                    ID: "48c",
                    Text: `Type "ripped cloth" to show him the cloth you found`,
                    Command: "ripped cloth",
                    Mood: "fashionista",
                    Requires: {Mood: null, Inventory: ["ripped cloth"]},
                    Inventory: "",
                    NextNode: 53,
                    PlayType: "passive"
                },
                {
                    ID: "48d",
                    Text: `Type "lie" to absolutely wing it`,
                    Command: "lie",
                    Mood: "fast and loose",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 54,
                    PlayType: "reckless"
                },
                {
                    ID: "48e",
                    Text: `Type "truth" to spill your guts`,
                    Command: "truth",
                    Mood: "life story",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 55,
                    PlayType: "passive"
                },
            ],
            EarnedPoints: 30
        },
        {
            ID: 49,
            Text: `Seeing all the various terminals behind you getting snap, crackle, popped by the blaster fire gives you, less than a great feeling, about using a workstation panel as a shield. Despite how freaking cool that might be. And running for it? Well, actually, that seems like kind of a good idea, but it’s too late now, you’ve settled on negotiating! After another barrage of blaster fire, you clear your little otter throat, and in your best captain voice, you belt out your opening move. “Listen up you backstabbing piece of garbage. I will literally DIE before I let you take my ship!”. Admittedly, it’s not a great opener for dialog exchange. But it definitely gets a response. A gruff voice calls back. “Oy - so you’re the captain eh? Well then, who is this mug I’ve got trapped over here then?”. Ugh. You knew it. You FREAKING knew it. “Look, that captain-wannabe-jerkface has been the absolute BANE of my day, ok? He gets out of cryo-sleep and steals my uniform and my stuff! That otter is NOT the captain. At best, that otter, is like, maybe, a canteen worker or something! Something lame!” you shout. Another barrage of blaster fire sizzles over your head. “I just don’t believe you little otter.” the gruff voice responds. Peeking beneath the workstation, you get a glimpse of your attacker. You wondered why he’d call you “little otter” if he, too, was also an otter. But he’s not an otter at all. No. He’s something otter than an otter. He’s spider-like, and he’s got multiple arms, or legs, or whatever. He’s holding the blaster in one of the arm-thingies, and he’s got some hostages behind him in some kind of “electro-field” generator. Oh wow. Your ship has literally been boarded by freaking space pirates. That would be so badass, if it also didn’t suck so much. “You’re going to have to prove to me who you are little otter, or I’m going to melt your face. And not in the cool way, with like a vicious heavy metal guitar solo. No. I’ll melt it with this blaster!” the space pirate says. This is a lot to process. What do you want to do?`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "49a",
                    Text: `Type "credentials" to show him your creds`,
                    Command: "credentials",
                    Mood: "picard",
                    Requires: {Mood: null, Inventory: ["bridge access"]},
                    Inventory: "",
                    NextNode: 51,
                    PlayType: "aggressive"
                },
                {
                    ID: "49b",
                    Text: `Type "old photo" to show him the photo you found`,
                    Command: "old photo",
                    Mood: "fatal frame",
                    Requires: {Mood: null, Inventory: ["old photo"]},
                    Inventory: "",
                    NextNode: 52,
                    PlayType: "intelligent"
                },
                {
                    ID: "49c",
                    Text: `Type "ripped cloth" to show him the cloth you found`,
                    Command: "ripped cloth",
                    Mood: "fashionista",
                    Requires: {Mood: null, Inventory: ["ripped cloth"]},
                    Inventory: "",
                    NextNode: 53,
                    PlayType: "passive"
                },
                {
                    ID: "49d",
                    Text: `Type "lie" to absolutely wing it`,
                    Command: "lie",
                    Mood: "fast and loose",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 54,
                    PlayType: "reckless"
                },
                {
                    ID: "49e",
                    Text: `Type "truth" to spill your guts`,
                    Command: "truth",
                    Mood: "life story",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 55,
                    PlayType: "passive"
                },
            ],
            EarnedPoints: 30
        },
        {
            ID: 50,
            Text: `Omg screw this. Since waking up, this ship has been nothing but an absolute nightmare. At this point, given the shape she’s in, you’ll be lucky to get the insurance money from this little disaster. You’ve seen this work in the movies, like a hundred times. You pick up a random piece of debris off the floor and chuck in the opposite direction of the bridge door. Sufficiently convinced that your brilliant distraction has befuddled your attacker, you spring up an otter made from, well springs. And you start making your mad dash towards the bridge doors. You just need to get into a sweet little escape pod and call Jake from State Farm. He’ll know what to do. But before you can get to the bridge doors you feel a blaster shot vaporize your insides. You fall to the floor clutching your tummers, or rather, the spot where your cute little tummers used to be. As you take your last breath you feel utterly betrayed by Hollywood and all the movies that made the whole distraction/escape thing seem so straightforward. Liars. Game Over.`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "50a",
                    Text: `Type "s" to Start Over`,
                    Command: "s",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 1,
                },
                {
                    ID: "50b",
                    Text: `Type "after action" to see your after action report`,
                    Command: "after action",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: -9999,
                    AfterAction: true,
                },
            ],
            EarnedPoints: -100
        },
        {
            ID: 51,
            Text: `You hand the space pirate your sweet set of extra creds you worked so hard to get. “Bear witness to my MAJESTY!” you yell awkwardly. It was supposed to come out more captain-y, but your voice kinda cracked and now it’s a little awkward. The pirate examines your creds and makes a “hmph” sound. The pirate glances back at an otter being restrained within the electro-field, the otter’s uniform is missing a fairly large patch of cloth that looks like it got ripped away. The pirate turns back to you. “So it’s you. Is it really you? Can it be?” the pirate says with astonishment. Ok. Ok. This is working. The space pirate IS in awe of your captain majesty! “Yes. It is I, my good space pirate. I. Am. The…” you start to say before the pirate cuts you off. “GREATEST THIEF OF ALL TIME!” the pirate exclaims. “I mean hold on. HOLD ON. Did you actually crack, like ACTUALLY CRACK, the Secur-a-Station model 099A to get these? Omg, you did. You actually did! You cracked a Secur-a-Station model 099A!” the pirate beams with absolute adoration. “I mean we tried to break into the Captain’s quarters when we first boarded the ship to get these! But the captain over there (the pirate motions to the otter with a patch of missing uniform) jammed the door and escaped some other way and sealed off the bridge with blast doors before we could get here! I mean, thankfully we had someone on the inside, but this is still INCREDIBLE! We heard that OTTERESSENCE had been captured, but we didn’t believe it!” the pirate blurts out. And there it is. Suddenly your memory comes flooding back. You aren’t the captain of the One Way or the Otter. You were captured by her. They chucked you in cryo-sleep until they could get you back to a federated station and turn you in for the bounty! You had snuck on board near Titan in hopes of siphoning off some of the liquid hydrocarbons they had on board, but you got caught! The pirate claps you on the back. “You are like my ultimate hero, seriously, you are the best!” the pirate gushes. You laugh awkwardly as you attempt to play this cool. But right now there are two things running through your mind. One. You need to get to an escape pod and get out of here. Two. You have the STUPIDEST thief name there ever was. Like seriously. OTTERESSENCE? You sign a few autographs for the pirates and make your way to an escape pod. A quick check of nav system and you’re pretty sure where you need to go. Your crew will be holed up on Phobos waiting for you to return. As your pod falls away from the One Way or the Otter, you plot a course for Mars. You’ve got stuff to steal, and a name change form to file. *COMMAND ARC - THIEF ENDING ACHIEVED - CONGRATULATIONS - GAME OVER*`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "51a",
                    Text: `Type "s" to Start Over`,
                    Command: "s",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 1,
                },
                {
                    ID: "51b",
                    Text: `Type "after action" to see your after action report`,
                    Command: "after action",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: -9999,
                    AfterAction: true,
                },
            ],
            EarnedPoints: 600
        },
        {
            ID: 52,
            Text: `You aren’t entirely sure why, but you hand the space pirate the photo you found in the desk back in the crew quarters. I mean, the thing in the picture kinda looks like this pirate, so who knows, maybe it’ll get you a little good will? The pirate takes the photo and stares at it for what seems like ages. Crap. This was a bad idea. You are about to grab a nearby piece of debris and book a one way ticket to otter bashy town, but the pirate finally speaks. “I can’t believe it. I can’t believe it. I’m actually in the presence of greatness. It’s an honour sir!” the pirate exclaims. You look to one side, and then the other. Surely, there’s someone standing beside you. But no. He is indeed addressing you. You are about to speak, but the pirate cuts you off. “Colonel Dregg didn’t think you were still alive! That’s why he sent us to take the ship! I mean, he told us all about your plan to infiltrate the crew of the One Way or the Otter and steal the ship AND the liquid hydrocarbon payload, but after you went dark, we assumed the worst! The Colonel said you’d have this picture of him as a kid, as proof of your identity, as a failsafe!” the pirate gushes. Suddenly, all the memories come flooding back, pushing away the cryo-induced brain fog. You aren’t the captain of the One Way or the Otter, you infiltrated the crew and became Number One. The whole time your intention was to hijack the ship and meet up with Colonel Dregg and the other pirates! The desk you found that photo in, was yours! Everything was going to plan, you were able to ingratiate yourself to the captain and crew. You had learned the ship operations and even spent one whole rotation learning the route and contact protocol at the hydrocarbon base on Titan. But then it had all gone sideways. The captain had caught you trying to get an encrypted message out and tossed you into the cryo-bay until they could figure out what to do with you. It all takes a second to sink in. “I AM. THE GREATEST PIRATE. ALIIIIIVEEEEEE!” you exclaim. You start something between a chicken dance and an electric slide, with the pirate next to you joining in. You finally get control of the ship and send the crew out in evac pods. The ship is pretty damaged from the whole pirate boarding party thing, but you’ll still get some seriously good coin for it. You mark a course for Trident, Neptune’s moon, where Colonel Dregg will be waiting for you. I guess you were right all along, sort of anyway. As of right now. You ARE the captain of the One Way or the Otter. *COMMAND ARC - UNDERCOVER PIRATE ENDING ACHIEVED - CONGRATULATIONS - GAME OVER*`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "52a",
                    Text: `Type "s" to Start Over`,
                    Command: "s",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 1,
                },
                {
                    ID: "52b",
                    Text: `Type "after action" to see your after action report`,
                    Command: "after action",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: -9999,
                    AfterAction: true,
                },
            ],
            EarnedPoints: 600
        },
        {
            ID: 53,
            Text: `You are, definitively, out of ideas. This day, omg, this day has just sucked. In your head, you’re going to use this ripped piece of uniform as a metaphor. Like, have a look at this ripped uniform, Mr. Space Pirate. This ripped uniform represents our two opposing sides. Pirates vs Captains. Bad vs Good. And look where it gets us huh? It RIPS us apart yeah? I mean, just look at it. LOOK AT IT! We are so much more than our jobs yeah? Like, I get it, you’re a pirate, you board ships, hurt people, steal stuff. And I’m a captain. I fly cool ships, I order people around. I drink Earl Grey ridiculously hot. I’m awesome. But that doesn’t mean that we’re that different. You are formulating all this out in your head when the pirate speaks up and breaks your train of thought. Which is a bloody shame, because you were really on to something there. “Ahhhh, now this is interesting!” the pirate expounds. “This patch of cloth is from an officer’s uniform. See this marking here?” the pirate points to a glyph on the uniform. You actually hadn’t seen this initially. You were too busy trying to get to the bridge in one piece and save the day. “Oh yeah, in fact, this isn’t from just any officer uniform, little otter, this marking indicates its from the captain’s uniform. Mhmm. Seems there’s a bit of a controversy over who the captain is on this ship.” the pirate explains. You’re about to tell him that you are, in fact, the captain, but the pirate rambles on. “See, I need the captain to give me the storage bay code so I don’t have to self-destruct this little betty of a ship instead of making off with my hydrocarbons. If I get the storage bay code, I can then I can just calmly, and, respectively, steal all the hydrocarbons. If I don’t get the code. I blows the whole ship. Now I figures this mug is the captain (the pirate points to the otter with a large patch of cloth missing from his uniform) but I cants prove it, ya know? But if this cloth matches that rip in his uniform exactly? Well then, then I’ve got my captain.” the pirate says insidiously. You really don’t like his tone. The pirate walks over to the electro-field and extracts the otter with a patch missing from his uniform. The pirate gruffly places the ripped cloth over the hole in the uniform. It’s a perfect match. “Well. Well. Well. I knew it.” the pirate drolls. The captain shoots you look of pure anger. You shrug and smile as your memory starts to come back to you. It’s true, you actually aren’t the captain of the One Way or the Otter. In fact, you remember you’re actually a pretty bad cook on this ship. After one of you experimental souffles ended up causing a hull breach, the captain decided to put you in cryo-sleep until they made port. The pirates clearly boarded the ship while you were in cryo, and chased the captain to his quarters. He was able to jam the door and escape, but not before he ripped his uniform. And now you’ve basically outed the captain, who was probably trying to stay quiet long enough until a distress signal could get out. You sheepishly shrug as the captain gives over the hydrocarbon bay code. The pirate tosses you all back into the electro-field and scampers off to claim his booty. The rest of the otters in the electro-field glare at you. No hydrocarbons means no bonuses for any of the members of the crew. “Look, I’ll make this up to you. When we get back to port, I’ll make souffles!” you exclaim. The volume of exasperated groans and curses that follow are almost enough to convince you that they don’t want your souffles. Almost. *COMMAND ARC - JUST A COOK ENDING ACHIEVED - CONGRATULATIONS - GAME OVER*`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "53a",
                    Text: `Type "s" to Start Over`,
                    Command: "s",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 1,
                },
                {
                    ID: "53b",
                    Text: `Type "after action" to see your after action report`,
                    Command: "after action",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: -9999,
                    AfterAction: true,
                },
            ],
            EarnedPoints: 600
        },
        {
            ID: 54,
            Text: `Your uncle always told you. The best way out of any sticky situation. Lies. Just so many lies. Hit them with lies so fast and so hard that they just can’t even process all the lies. Then when they are in the deepest state of otter befuddlement. BAM. You do something awesome! So you start with how you are a prisoner on this ship, captured by this evil crew over sheer jealousy because of how gorgeous you are. That’s right. You were minding your own business. Looking tasty. And BAM. These haters got out their hateraide and just started hatin. Next thing you know, you are a prisoner, but it’s okay, because you have precious intel. That’s right. You’ve been spying the whole time you’ve been on this bucket, and guess what space pirate, this ship isn’t carrying hydrocarbons, oh no. no sir. This ship is carrying alien pudding. I know, I know. It sounds crazy. But it’s the best damn pudding you’ve ever tasted. It’s better than snack-pak pudding. It’s better than grandma’s pudding. But wait, there’s more. You are just starting to tell the space pirate how there’s actually a contingent of space marines on board the One Way or the Otter that are being transported to a terraforming colony full of Xenomorphs when the space pirate bashes you over the head with the butt of his blaster. The world spins and sways and your vision starts to go black. You were just getting to the good part and then you were going to pull your awesome move. Ugh. Uncle Jack would be so disappointed. The last thing you see is a bunch of super confused crew members looking at you in disgust. GAME OVER.`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "54a",
                    Text: `Type "s" to Start Over`,
                    Command: "s",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 1,
                },
                {
                    ID: "54b",
                    Text: `Type "after action" to see your after action report`,
                    Command: "after action",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: -9999,
                    AfterAction: true,
                },
            ],
            EarnedPoints: -150
        },
        {
            ID: 55,
            Text: `Sister Maria at the orphanage always told you, tell the truth, the whole truth, or I’ll whack your knuckles back to the stone age. So you literally just UNLOAD on this space pirate. You start with how there were never any biscuits by the time you got up to the canteen counter at school when you were a kid otter. You talk about how this shaped your child-mind to be prepared for disappointments in life. You delve into the time you found THE PERFECT food bashing rock but then Otty FREAKING Spencer stole it and denied it and made you look like a fool. You are just starting to get into the “Great Sticky Bun Debacle of 3244” when the space pirate brings down the butt of his blaster on the top of you head. Hard. First you see stars, then a dense fog starts to creep around the periphery of your vision. You briefly see the other crew members before you pass out. They all seem to be shaking their heads in disbelief. That makes sense you think. There really should have been enough biscuits for everyone. I mean. That’s just poor planning right? Know your biscuit velocity is all your saying. Then everything goes dark. GAME OVER.`,
            CodeNode: false,
            CodeLength: 0,
            CodeFailedNextNode: 0,
            NodeOptions: [
                {
                    ID: "55a",
                    Text: `Type "s" to Start Over`,
                    Command: "s",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 1,
                },
                {
                    ID: "55b",
                    Text: `Type "after action" to see your after action report`,
                    Command: "after action",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: -9999,
                    AfterAction: true,
                },
            ],
            EarnedPoints: -150
        },
    ],
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