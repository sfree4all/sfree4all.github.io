document.getElementById('generate-affirmation').addEventListener('click', function() {
    const affirmations = ["I know this time is stressful, but I believe in you!", "It can be hard to believe sometimes, but you're doing great!"];
    const index = Math.floor(Math.random() * affirmations.length);
    document.getElementById('affirmation-display').innerText = affirmations[index];
});

document.getElementById('reframe-thought').addEventListener('click', function() {
    const negativeThought = document.getElementById('negative-thought').value;
    const reframedThoughts = {
        "I'm a failure": "My value is not a product of the work I do",
        "I always mess up": "I learn something new each time I make a mistake"
    };
    document.getElementById('reframed-thought-display').innerText = reframedThoughts[negativeThought] || "Think of what you've learned from this!";
});

document.getElementById('rant-text').addEventListener('input', function() {
    // No saving logic, just an acknowledgment message display
    document.querySelector('#rant-box p').style.visibility = 'visible';
});
