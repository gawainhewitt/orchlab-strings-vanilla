//attach a click listener to a play button
window.addEventListener("keydown", handleQwerty);

document.querySelector('button')?.addEventListener('click', async () => {
	await Tone.start()
	console.log('audio is ready')
})

const sampler = new Tone.Sampler({
	urls: {
		"C4": "cello-short.flac",
	},
	release: 1,
}).toDestination();

function handleQwerty(event) {
    let key = event.key.toUpperCase();
    keys = ["Z", "X", "C", "V"];
    notes = ["A3", "B3", "C4", "D4"];

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