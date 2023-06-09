//attach a click listener to a play button
window.addEventListener("keydown", handleQwerty);

document.querySelector('button')?.addEventListener('click', async () => {
	await Tone.start()
	console.log('audio is ready')
})

const sampler = new Tone.Sampler({
	urls: {
		"C4": "42247__timkahn__c_s-cello-c4.flac",
	},
	release: 1,
}).toDestination();

function handleQwerty(event) {
    let key = event.key.toUpperCase();
    keys = ["Z", "X", "C", "V"];
    notes = ["A3", "C4", "E4", "G4"];

    for(let i = 0; i < keys.length; i++){
        if (key === keys[i]){
            console.log(keys[i])
            pluckNote("keyboard", notes[i]);
        }
    }
}

function pluckNote(eventType, noteName){
    console.log(`note "${noteName}" triggered with ${eventType} event`);
    sampler.triggerAttack(noteName);
  }