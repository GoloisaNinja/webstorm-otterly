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
                    Text: `Type “epep” to Engage EPEP switch`,
                    Command: `epep`,
                    Mood: 'relief',
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "test slot",
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
            ID: 6,
            Text: `Let's be honest, the people that work on the comms or the engines usually end up as side characters with what kind of total episode percentage? Maybe low eighties? Miss half a season because of random "shore leave" etc. But captains…ohh captains, good looking ones especially, their episode percentage is high nineties. You need to be on the bridge. You aren't sure why your crew left you alone in the cryo-bay (you'll need to throw a few of them in the brig to reestablish dominance) but you'd like some answers. That, and regardless of what is wrong with the ship, it'll be easier to figure out next steps from the one place on the ship that has comfy chairs. Your mind is still pretty foggy, but you are almost positive that the bridge is on one of the upper levels compared to the cryo-bay. You are also pretty sure that there is an authorization access protocol that is managed by cards and codes. You quickly pat the pockets of your ill-fitting jumpsuit. Nothing. No card. Strange. You head back to your locker and search it thoroughly as well. Nope. No card. Then it hits you. It's pretty obvious what happened here. Some otter crewmate woke up from their cryo-sleep and had brain fog and stole your uniform and card key! They probably even think they're the captain! This situation is so not on. As the ship experiences yet another bone-rattling, well, rattle, you figure you've got two ways to approach this. Like any good captain, you are positive you've got extra access credentials lying around in your quarters somewhere. You could try and  make a quick detour and hopefully snag your deets before the ship does its best impression of Coke meets Mentos. Or, like any devilishly good looking character in random and fairly generic space sci-fi movies, you could totally just wing it and head up to the bridge with literally no plan or credentials. Relying solely on your cheekbones, smile, and excessive amounts of absolute sauce to save the day. What to do, what to do?`,
            NodeOptions: [
                {
                    ID: "6a",
                    Text: `Type "quarters" to find your room and key card`,
                    Command: "quarters",
                    Mood: "sock drawer",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 11
                },
                {
                    ID: "6b",
                    Text: `Type "cheekbones" to absolutely wing it`,
                    Command: "cheekbones",
                    Mood: "seggsy",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 12
                },
            ],
            EarnedPoints: 5
        },
        {
            ID: 7,
            Text: `Whatever is happening on the ship you feel like it’s probably best not to go at it alone. At the very least, you know there’s a crew member that is working in the forward comms area of the ship. And what’s more, the crewmember seemed to be asking for help. If you could get the comms fixed there’s a good chance you could relay that the One Way or The Otter was in trouble. Surely Starfleet or the Rebel Alliance, or even the Empire or whatever could send some help and get you off this rust bucket! With your mind made up, you dash out of the cryo-bay and make towards, what in your gut tells you, is the forward comms array hatch. After a few unsteady falls, this way and that, as the ship continues to pitch and yaw, you finally approach a sealed bulkhead. There’s a diagram above the bulkhead that indicates that both medical and comms are just beyond. You do a little otter shoulder shrug dance, as clearly your brain fog is starting to lift! Your dance celebration is short lived however. You’re hitting the “open bulkhead” command on the side panel but absolutely nothing is happening. No sound. No movement. Nothing! Argh, this day suuucks! Ok, ok, think. Given how good looking you are, you are at the very least a high ranking officer on this ship, and at best, you might even be captain. And that means you know this ship in and out. There are three ways you could force this hatch. One, you could rip open the side panel and rewire power to the door’s hydraulics. This should get the hatch working normally again and splicing wires looks cool. Two, there are manual hatch release levers in the emergency panels near every hatch. You can grab the MHRL and with a bit of elbow grease, you should be able raise the hatch just enough to crawl under. Three, there are electrical conduits running the span of a small trench beneath the deck grating under your feet. Clearly they move beyond the hatch and into comms. There’d be a pressurized panel in the trench for conduit access and repair. As long as the panel control isn’t damaged, you should be able to get it open and slip right through. Although, getting the deck grating up could be a pain. What should you do though?`,
            NodeOptions: [
                {
                    ID: "7a",
                    Text: `Type “rewire panel” to try and reroute hydraulics`,
                    Command: "rewire panel",
                    Mood: "short circuit",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "wires",
                    NextNode: 13
                },
                {
                    ID: "7b",
                    Text: `Type “elbow grease” to try use MHRL to force the hatch`,
                    Command: "elbow grease",
                    Mood: "acronyms are cool",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "MHRL",
                    NextNode: 14
                },
                {
                    ID: "7c",
                    Text: `Type “conduit” to try and access comms via conduit panel`,
                    Command: "conduit",
                    Mood: "you conduit",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 15
                },
            ],
            EarnedPoints: 10
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
        {
            ID: 13,
            Text: `Ripping panels open and splicing wires is badass and usually way faster than manually trying to jack up some stupid hatch. With your adorable little otter paws, you ferociously rip off the casing of the hatch panel display. You might have been a little too rough and several wires tumble out of the panel housing onto the deck. You scoop them up quickly, shove them into your uniform,  and act like nothing happened, just in case anyone caught this on some kind of hidden ship cam. The panel is sparking randomly and you can smell ozone, which is maybe, not great. No matter. There are nests of wires everywhere and just as you are thinking that maybe this was the wrong call, you spot a particularly large black wire. Upon closer inspection, it’s not a wire, it’s a hydraulic line! There’s also a  small circuit panel labeled “hydraulic controller” that has a clearly damaged wire dangling nearby! But just as you are trying to reconnect the broken wire to the controller board, you notice the hydraulic line is spewing fluid. Lots of fluid. Ugh, even if you could make a good connection back to the controller board, there’s no way the hydraulics will get enough fluid to operate the hatch. You can’t worry too much about the time you just wasted, you’ll either run out of time or you won’t. At this point you could try the conduit trench, or you could also grab the MHRL from the emergency panel and get the comms hatch open manually. What do you want to do?`,
            NodeOptions: [
                {
                    ID: "13a",
                    Text: `Type “elbow grease” to try and use the MHRL to force the hatch`,
                    Command: "elbow grease",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "MHRL",
                    NextNode: 14
                },
                {
                    ID: "13b",
                    Text: `Type “conduit” to try and access comms via conduit panel`,
                    Command: "conduit",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 15
                },
            ],
            EarnedPoints: 10
        },
        {
            ID: 14,
            Text: `Every hatch has an emergency panel located just nearby that contains an MHRL. The manual hatch release levers are a bit unwieldy, but not too bad. They fit into a tool access port near the hatch and by rotating the MHRL you can raise/ratchet the hatch open bit by bit. It’s time consuming to get a hatch fully open, but you only need enough space so you can crawl under. You find the emergency panel and retrieve the MHRL. And now, like some kind of space janitor, you begin the disgusting manual task of opening the hatch. There is a reason captains have crew to do this stuff for them, you think to yourself as you bemoan how low you’ve sunk. Just as you are daydreaming about how you’re going to court martial your entire crew for insubordination, there’s a MASSIVE explosion that rocks the ship! You are thrown into the wall near the hatch access with a sickening thud. You are seeing stars for the first several seconds following the explosion, but slowly, your vision returns to normal. That was, definitely, not good. It felt like the ship might’ve just lost an entire level! Whatever is happening is getting worse. You’ve got to get through this hatch and fix that comms array before it’s too late! There is just enough space between the hatch and the deck for you to slip through. But it’s going to be really, really, tight. It’ll take another few minutes to raise the hatch any higher. And the explosion definitely made the hatch slide down a few teeth off the manual chain mechanism. Decision time - you can either try and time your dive under the hatch and hope there are no more big explosions, or you can take a few minutes and try to raise the hatch a bit higher for safety. You hate both these options, but you really don’t see any other way. What do you want to do?`,
            NodeOptions: [
                {
                    ID: "14a",
                    Text: `Type “slide” to try and shenmue slide under the hatch`,
                    Command: "slide",
                    Mood: `ain't nobody got time for that`,
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 0
                },
                {
                    ID: "14b",
                    Text: `Type “ratchet and clank” to try and raise the hatch some more`,
                    Command: "ratchet and clank",
                    Mood: "",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 0
                },
            ],
            EarnedPoints: 10
        },
        {
            ID: 15,
            Text: `The conduit maintenance panels are small, but you don’t need much space. And honestly, the idea of messing around further with the outer comms hatch just seems like a waste of time. As long as the panel isn’t too badly damaged, you should be able to remove the outer panel from this end, squirm by the conduits, and disengage the outer panel from underneath the other side of the comms hatch on the other end. It’s a good thing you don’t mind tight spaces! Wait. Do you mind tight spaces? Oh boy. This could get dicier than you initially anticipated. Oh well - there’s definitely not enough time to worry about it now. You manage to get the grating up covering the electrical trench. You shimmy in, almost expecting to trigger a panic attack, I mean, it’s been that kinda day. But nope. You’re fine. So turns out you aren’t claustrophobic. No need to mark that one on your cryo-fog from hell bingo sheet. The panel and panel control are both intact, and you are able to disengage the safety and since both sides of the trench are equal pressure at the moment, you don’t have to wait for a safety cycle. You pop out unscathed and utterly victorious on the other side of the comms hatch! In your excitement you break into a riverdance, because why not, you’ve earned it.`,
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
            ],
            EarnedPoints: -500
        },
        {
            ID: 17,
            Text: `As badass as a sparking disaster slide underneath a barely raised corridor hatch would be, you have your doubts that the ratcheting mechanism will hold up if another explosion rocks the ship again. It may take up some precious time, time you likely don’t have, to ratchet the hatch up further, but it seems like the smart approach. Kinda hard to do comms repairs if you’ve been cut in half. You arduously begin ratcheting the hatch higher just another concussive wave from yet another explosion somewhere on the ship ripples through the corridor. Had you not been holding onto the MHRL, the hatch would’ve slipped completely! You get the hatch up to a decidedly “safer” height and dive underneath. Thankfully you emerge on the other side of the hatch as one complete, still gorgeous, otter. You stuff the MHRL into an impossibly large pocket on your uniform and press on.`,
            NodeOptions: [
                {
                    ID: "17a",
                    Text: `Text “continue” to continue to comms`,
                    Command: "",
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
            NodeOptions: [
                {
                    ID: "18a",
                    Text: `Type “excited” to excitedly say hi`,
                    Command: "excited",
                    Mood: "ermergerd",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 19
                },
                {
                    ID: "18b",
                    Text: `Type “assistance” to offer your help`,
                    Command: "assistance",
                    Mood: "calm",
                    Requires: {Mood: "short circuit", Inventory: []},
                    Inventory: "",
                    NextNode: 20
                },
                {
                    ID: "18c",
                    Text: `Type “command” to assume rightful command`,
                    Command: "command",
                    Mood: "autocrat",
                    Requires: {Mood: null, Inventory: []},
                    Inventory: "",
                    NextNode: 21
                },
            ],
            EarnedPoints: 15
        },
        {
            ID: 19,
            Text: `You are just so freaking happy to see another otter! Ever since waking up in that cryo-pod, what seems like days ago, you’ve been so lonely and with the ship coming apart you’ve really felt scared and stressed. Seeing another otter just finally gives you that sense of peace, like you aren’t alone in all this chaos. Like you can finally breathe a sigh of relief knowing that it’s all going to be okay because you finally found a friend! You can’t hold back your excitement and joy as you scream, sing-song-like, into the microphone - “Hellllooooo, IS IT ME YOU’RE LOOKING FOOOOOOR!”. You hear the otter in the space suit scream out, scared and startled. You might have screamed a little too loudly? As you check the monitor, you can see that the little communications space otter has lost their grip on the antenna array. You see a tether extending out from the suit. Phew! Close one. Good thing this comms otter has their stuff together. They can just pull themselves back to the comms antenna array. No harm, no foul! Just as you are about to apologize to the adorable little space otter for startling them - they get absolutely pancaked by a large piece of debris that the ship spun into. You actually wince as you watch the horror on the monitor. You look around the comm room for a moment. “If anyone saw that - I mean, obviously it wasn’t my fault.” you say out loud. That otter really should have had less slack on that tether. You can’t be held responsible for when otters don’t follow protocol afterall. Anyway, it’s probably no big deal. That otter was likely almost done fixing everything anyway. Excitedly, you engage the “ALL COMM CHANNELS EMERGENCY” button and prepare your best captain voice for the part where you’ll say your crew sucks and you need saving. Except, the button doesn’t light up and the status panel in front of you still only indicates “EEV CHANNEL” as being fully operational. As a piece of debris the size of a small moon crashes through the hull, crippling the ship and decompressing every deck simultaneously, you can’t help but think how your crew really let you down. I mean, what a bunch of losers. At least you’ll make a gorgeous corpse. Game over.`,
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
            ],
            EarnedPoints: -500
        },
        {
            ID: 20,
            Text: `You engage the mic and deliver what is possibly your best speech ever. “Brave soul of the noble Frigate One Way or The Otter” you begin. “You would risk your life upon the rickety hull of our starcrossed ship, so that we few, we happy few, might live to see another sunrise. That we may feel summer’s kiss upon our faces. You risk all to restore the very communications array that will be our salvation, our hope, our precious dream. You, in your adorable little otter space suit, rage against the dying of the light. And we with you, we rage! We rage against the coming night! And I dear otter! I am with ye! I offer myself AS TRIBUTE!”. You are breathing raggedly. That was magnificent. Absolutely magnificent. Still, just to be clear, you add. “So, um, what I mean to say is, I’m here in comms, and I can probably help a lot.”`,
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
            Text: `“Hey! Not sure who is in the comms area, but comms are still pretty finicky. They are SUPER unreliable at the moment from ship to anything outside. So I kinda didn’t catch a word of that.” is the initial reply from the space walking otter. A tear forms in your right tear duct and slowly falls down your adorable cheek. You just gave the best speech ever and this space monkey didn’t even hear it. “Hey, I’m glad you’re in there though” the space otter continues. “I’m gonna need you to do a few things for me if we are going to get this emergency beacon back up and running. It’s a real mess out here - but I reckon there’s some fixes that need done to the comms console as well. Don’t worry - even if you’ve never used a comm unit before, I can talk you through what I want you to do, okay?” the otter says. “Now I want you to remove the main comm panel housing and DON’T TOUCH ANYTHING until I tell you too. Okay?” space otter rambles on.`,
            NodeOptions: [
                {
                    ID: "22a",
                    Text: `Type "listen" to take direction from the EEV otter`,
                    Command: "listen",
                    Mood: "",
                    Requires: {Mood: "calm", Inventory: []},
                    Inventory: "",
                    NextNode: 23
                },
                {
                    ID: "22b",
                    Text: `Type "rogue" to take offence and go totally rogue on this sob`,
                    Command: "rogue",
                    Mood: "",
                    Requires: {Mood: "autocrat", Inventory: []},
                    Inventory: "",
                    NextNode: 23
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