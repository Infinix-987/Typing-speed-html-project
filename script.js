// DOM Elements
const input = document.getElementById('input');
const wordsContainer = document.getElementById('words');
const wpmElement = document.getElementById('wpm');
const accuracyElement = document.getElementById('accuracy');
const consistencyElement = document.getElementById('consistency');
const timeElement = document.getElementById('time');
const resultModal = document.getElementById('result-modal');
const resultWpm = document.getElementById('result-wpm');
const resultAccuracy = document.getElementById('result-accuracy');
const resultCharacters = document.getElementById('result-characters');
const tryAgainBtn = document.getElementById('try-again');
const shareBtn = document.getElementById('share-result');
const restartBtn = document.getElementById('restart-btn');
const themeToggle = document.getElementById('theme-toggle');
// Nav & extra modals
const navAbout = document.getElementById('nav-about');
const navStats = document.getElementById('nav-stats');
const aboutModal = document.getElementById('about-modal');
const statsModal = document.getElementById('stats-modal');
const aboutClose = document.getElementById('about-close');
const statsClose = document.getElementById('stats-close');
const statsList = document.getElementById('stats-list');

// Test configuration
const TEST_DURATION = 60; // seconds
const WORDS_PER_QUOTE = 30; // Number of random words per batch

// Test state
let testActive = false;
let startTime;
let timer;
let timeLeft = TEST_DURATION;
let currentWordIndex = 0;
let currentCharIndex = 0;
let correctChars = 0;
let totalTypedChars = 0;
let correctWords = 0;
let totalTypedWords = 0;
let currentQuote = '';
let words = [];
let userInputHistory = [];
let wpmSamples = [];

// Word bank provided by user (meaningful common words)
const WORD_BANK = `the, to, i, and, of, he, was, you, her, not, it, in, she, his, that, is, my, with, me, had, on, as, for, but, at, him, have, do, be, what, would, out, said, up, they, we, this, from, did, are, so, could, were, all, if, back, like, one, there, no, into, will, just, when, about, then, them, know, been, am, your, over, down, an, or, time, now, eyes, by, more, get, how, can, who, their, before, around, way, even, going, head, see, us, here, right, off, only, want, through, looked, hand, go, think, some, again, too, away, still, something, than, face, other, never, after, asked, thought, man, good, well, two, where, let, look, made, much, why, because, knew, got, little, door, our, any, room, come, make, take, long, first, say, its, felt, wanted, took, turned, need, hands, tell, really, sure, against, voice, should, has, left, which, very, people, told, came, another, while, last, life, anything, few, body, night, cannot, nothing, behind, being, enough, went, feel, side, does, thing, day, might, saw, until, things, though, those, yes, maybe, put, own, find, ever, every, looking, once, hair, moment, both, love, always, mind, next, place, inside, hard, help, front, without, found, house, mouth, old, same, keep, most, everything, himself, someone, toward, home, open, woman, trying, heard, pulled, arms, better, each, between, new, give, seemed, smile, work, across, myself, three, since, already, bed, father, small, started, almost, gave, years, stood, heart, mother, done, dark, doing, okay, tried, under, lips, else, stop, walked, words, together, nodded, feet, black, must, mean, held, blood, seen, world, many, light, men, girl, sat, arm, close, far, breath, car, hear, yet, says, leave, smiled, talk, end, gone, herself, kind, floor, fingers, call, needed, began, air, also, name, shook, getting, called, table, water, part, lot, course, yeah, coming, finally, big, probably, second, such, deep, least, along, moved, happened, past, reached, best, believe, sorry, later, stopped, phone, bit, making, feeling, sound, great, white, soon, opened, anyone, ask, half, used, set, bad, dead, family, everyone, idea, taking, shoulder, kept, move, red, forward, skin, morning, care, quickly, days, stay, rest, try, slowly, able, wall, turn, alone, remember, onto, thinking, having, closed, ground, stared, wrong, ready, please, mine, talking, watched, either, neck, full, top, ran, minutes, hurt, high, outside, actually, pain, friend, fine, matter, suddenly, run, fact, hold, understand, lost, boy, point, gaze, real, standing, wait, times, caught, pretty, word, fire, dad, whole, instead, laughed, answer, waiting, blue, five, chapter, may, friends, others, taken, cold, ago, four, different, brother, use, legs, looks, whispered, glanced, young, hit, king, met, brought, whatever, throat, question, fell, window, death, reason, start, meant, holding, stepped, kiss, exactly, school, walk, quite, large, leaned, sitting, watching, happy, realized, hope, show, touch, thank, person, running, hot, followed, sense, guess, shirt, hours, power, closer, several, human, grabbed, continued, chair, replied, sleep, true, watch, eye, beautiful, attention, pushed, glass, longer, year, beside, nice, saying, shot, line, shoulders, chance, tonight, baby, moving, today, living, perhaps, money, cut, given, step, change, fear, tears, known, control, read, job, pare, dropped, loved, couple, leaving, free, shut, office, kitchen, near, above, short, stand, live, meet, women, seat, fight, sister, decided, soft, ill, filled, case, town, less, city, rose, clear, anyway, spoke, passed, fast, completely, bring, lifted, working, street, silence, raised, stomach, seeing, truth, twenty, safe, corner, rather, staring, walking, ten, guys, business, pull, low, killed, late, straight, edge, strong, road, within, child, green, son, happen, speak, picked, expression, teeth, warm, nearly, building, food, sit, sent, sighed, yourself, knowing, girls, sort, supposed, makes, upon, entire, afraid, hour, towards, thoughts, quiet, giving, clothe, turning, miss, noticed, possible, returned, story, seem, wide, finger, waited, six, easy, week, kissed, sun, worked, worry, perfect, rolled, book, beneath, pressed, minute, become, vampire, trust, shrugged, telling, barely, deal, thanks, break, fall, sometimes, tongue, wondered, empty, wife, laugh, answered, surprised, lay, figure, immediately, tight, desk, children, knows, hey, slid, coffee, pointed, problem, during, bag, covered, middle, plan, heavy, changed, appeared, ear, play, sky, although, foot, months, wearing, gun, sight, drink, hall, quick, pulling, died, nose, however, anymore, simply, liked, stone, order, number, steps, hers, finished, conversation, lady, sounded, hundred, slightly, knees, except, became, cheek, return, alive, sir, headed, softly, strange, important, wish, thick, spent, dress, led, direction, sounds, added, sweet, none, ahead, bar, space, certain, surprise, weeks, somehow, wants, reach, tomorrow, dinner, tiny, group, worse, crazy, touched, quietly, somewhere, tone, stuff, gently, trouble, slow, broke, especially, seconds, single, wrapped, ones, broken, kids, darkness, eat, bedroom, stairs, remembered, area, doors, drive, beyond, silent, managed, wonder, worried, questions, paused, threw, placed, anger, walls, means, force, trees, wind, information, daughter, seems, follow, heat, expected, huge, bright, distance, gotten, angry, shaking, check, game, comes, meeting, doubt, lying, paper, brown, piece, tree, early, catch, cool, police, party, crowd, loud, smiling, smell, forced, serious, magic, listen, promise, glad, news, pick, guard, forget, box, clearly, pocket, agreed, save, snapped, grin, often, keeping, lip, tired, choice, tall, below, whether, war, rock, hung, playing, takes, boys, pleasure, using, earlier, calm, chin, fun, slipped, grinned, locked, obviously, sign, form, hate, evening, further, ship, letting, crossed, bottom, lie, situation, arrived, asking, lived, dream, sword, jumped, lights, pay, apartment, dressed, frowned, husband, kid, bathroom, ring, normal, carefully, waist, hoping, muttered, explain, sharp, cheeks, showed, handed, realize, hoped, breathing, glance, shed, certainly, wet, dog, center, lose, themselves, clean, imagine, picture, position, grew, spot, laughing, secret, ears, cell, land, wore, ice, despite, strength, soul, definitely, offered, view, scared, hide, talked, usually, future, leg, jaw, queen, attack, besides, lives, doctor, easily, entered, shouted, path, helped, stare, memory, fighting, knife, allowed, stayed, thirty, handle, cry, remained, forever, itself, round, forehead, metal, music, beginning, sick, beat, needs, neither, pair, gold, truck, silver, simple, vampires, cried, missed, grace, brain, aside, send, gets, company, self, thin, apart, familiar, falling, cover, protect, captain, pale, energy, class, older, notice, sigh, afternoon, jeans, wolf, weight, team, married, explained, drop, asks, following, push, spread, seven, hated, wanting, flesh, age, moments, eight, learned, putting, couch, shock, state, hospital, pass, relief, drove, goes, shake, opening, turns, wondering, settled, noise, dangerous, stuck, likely, hanging`.
  split(',').map(w => w.trim().toLowerCase());

function generateRandomWords(count) {
    const arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(WORD_BANK[Math.floor(Math.random() * WORD_BANK.length)]);
    }
    return arr.join(' ');
}

// Generic modal helpers
function openModal(modalEl) {
    modalEl.style.display = 'flex';
    setTimeout(() => {
        const content = modalEl.querySelector('.modal-content');
        if (content) content.classList.add('fade-in');
    }, 10);
}
function closeModal(modalEl) {
    const content = modalEl.querySelector('.modal-content');
    if (content) content.classList.remove('fade-in');
    setTimeout(() => { modalEl.style.display = 'none'; }, 150);
}

// Render session history into stats list
function renderStatsList() {
    if (!statsList) return;
    const results = JSON.parse(localStorage.getItem('typingTestResults') || '[]').slice().reverse();
    if (results.length === 0) {
        statsList.innerHTML = '<p style="color: var(--secondary-color);">No sessions yet. Finish a test to see your history here.</p>';
        return;
    }
    const rows = results.map((r, idx) => {
        const d = new Date(r.date);
        const dateStr = d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' });
        const timeStr = d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
        const chars = `${r.correctChars || 0} / ${r.totalTypedChars || 0}`;
        return `
            <div class="result-stat" style="display:flex; justify-content:space-between; align-items:center; gap:12px; margin-bottom:10px;">
                <div style="display:flex; gap:12px; align-items:center;">
                    <strong style="min-width:40px;">#${results.length - idx}</strong>
                    <div>
                        <div style="font-weight:600; color: var(--text-color);">${dateStr} • ${timeStr}</div>
                        <div style="color: var(--secondary-color); font-size:13px;">Session summary</div>
                    </div>
                </div>
                <div style="display:flex; gap:14px;">
                    <span><strong>${r.wpm}</strong> WPM</span>
                    <span><strong>${r.accuracy}%</strong> Acc</span>
                    <span><strong>${r.consistency}%</strong> Cons</span>
                    <span><strong>${chars}</strong> Chars</span>
                </div>
            </div>`;
    }).join('');
    statsList.innerHTML = rows;
}

// Initialize the typing test
function init() {
    loadTheme();
    setupEventListeners();
    startNewTest();
}

// Set up event listeners
function setupEventListeners() {
    input.addEventListener('input', handleInput);
    input.addEventListener('keydown', handleKeyDown);
    tryAgainBtn.addEventListener('click', startNewTest);
    shareBtn.addEventListener('click', shareResults);
    restartBtn.addEventListener('click', startNewTest);
    themeToggle.addEventListener('click', toggleTheme);

    // About modal
    if (navAbout && aboutModal) {
        navAbout.addEventListener('click', (e) => { e.preventDefault(); openModal(aboutModal); });
    }
    if (aboutClose && aboutModal) {
        aboutClose.addEventListener('click', () => closeModal(aboutModal));
    }
    // Stats modal
    if (navStats && statsModal) {
        navStats.addEventListener('click', (e) => {
            e.preventDefault();
            renderStatsList();
            openModal(statsModal);
        });
    }
    if (statsClose && statsModal) {
        statsClose.addEventListener('click', () => closeModal(statsModal));
    }
    // Click outside to close for extra modals
    [aboutModal, statsModal].forEach(modal => {
        if (!modal) return;
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal(modal);
        });
    });
}

// Start a new typing test
function startNewTest() {
    // Reset test state
    testActive = false;
    timeLeft = TEST_DURATION;
    currentWordIndex = 0;
    currentCharIndex = 0;
    correctChars = 0;
    totalTypedChars = 0;
    correctWords = 0;
    totalTypedWords = 0;
    userInputHistory = [];
    wpmSamples = [];
    
    // Update UI
    input.value = '';
    input.disabled = false;
    input.focus();
    timeElement.textContent = timeLeft;
    wpmElement.textContent = '0';
    accuracyElement.textContent = '100';
    if (consistencyElement) consistencyElement.textContent = '100';
    
    // Hide result modal if visible
    resultModal.style.display = 'none';
    
    // Generate random lowercase words batch
    currentQuote = generateRandomWords(WORDS_PER_QUOTE);
    words = currentQuote.split(' ');
    
    // Display the words
    renderWords();
    
    // Highlight the first word
    updateActiveWord();
}

// Handle user input
function handleInput(e) {
    if (!testActive) {
        // Start the test on first input
        startTest();
    }
    
    const inputText = input.value;
    const currentWord = words[currentWordIndex];
    
    // Check if space was pressed (word completed)
    if (inputText.endsWith(' ')) {
        // Check if the completed word is correct
        const userWord = inputText.trim();
        const isCorrect = userWord === currentWord;
        
        // Update word stats
        totalTypedWords++;
        if (isCorrect) {
            correctWords++;
        }
        
        // Move to the next word
        input.value = '';
        currentWordIndex++;
        currentCharIndex = 0;
        
        // Check if test is complete
        if (currentWordIndex >= words.length) {
            // Generate a new batch if we've reached the end
            currentQuote = generateRandomWords(WORDS_PER_QUOTE);
            words = currentQuote.split(' ');
            currentWordIndex = 0;
            renderWords();
        }
        
        // Update the active word highlighting
        updateActiveWord();
        
        // Update WPM and accuracy
        updateStats();
    } else {
        // Update character-level highlighting
        currentCharIndex = inputText.length;
        updateActiveWord();
    }
}

// Handle special keys
function handleKeyDown(e) {
    // Prevent space from scrolling the page
    if (e.key === ' ' && input.value.trim() === '') {
        e.preventDefault();
    }
    
    // Handle backspace at the beginning of a word to go back to the previous word
    if (e.key === 'Backspace' && input.value === '' && currentWordIndex > 0) {
        e.preventDefault();
        currentWordIndex--;
        currentCharIndex = words[currentWordIndex].length;
        input.value = words[currentWordIndex] + ' ';
        updateActiveWord();
    }
}

// Start the test timer
function startTest() {
    if (testActive) return;
    
    testActive = true;
    startTime = new Date().getTime();
    
    // Start the countdown timer and collect WPM samples for consistency
    timer = setInterval(() => {
        const wpmNow = calculateWPM();
        if (wpmNow > 0) wpmSamples.push(wpmNow);

        // Update live consistency
        const consistency = computeConsistency(wpmSamples);
        consistencyElement.textContent = consistency;

        timeLeft--;
        timeElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            endTest();
        }
    }, 1000);
}

// End the test
function endTest() {
    clearInterval(timer);
    // Calculate final WPM and accuracy BEFORE deactivating the test
    const wpm = calculateWPM();
    const accuracy = totalTypedChars > 0 ? Math.round((correctChars / totalTypedChars) * 100) : 0;
    // Deactivate input after computing
    testActive = false;
    input.disabled = true;

    const consistency = computeConsistency(wpmSamples);
    // Show results
    showResults(wpm, accuracy, consistency);
    
    // Save test results for evolution tracking
    saveTestResult(wpm, accuracy, consistency);
}

// Show the results modal
function showResults(wpm, accuracy, consistency) {
    resultWpm.textContent = wpm;
    resultAccuracy.textContent = accuracy + '%';
    const resultConsistency = document.getElementById('result-consistency');
    if (resultConsistency) resultConsistency.textContent = consistency + '%';
    resultCharacters.textContent = correctChars + ' / ' + totalTypedChars;
    resultModal.style.display = 'flex';
    
    // Add animation class
    setTimeout(() => {
        document.querySelector('.modal-content').classList.add('fade-in');
    }, 10);
}

// Update the active word and character highlighting
function updateActiveWord() {
    // Reset all word highlighting
    const wordElements = document.querySelectorAll('.word');
    wordElements.forEach((wordEl, index) => {
        wordEl.classList.remove('active');
        
        // Highlight the active word
        if (index === currentWordIndex) {
            wordEl.classList.add('active');
            
            // Update character highlighting within the active word
            const chars = wordEl.querySelectorAll('.letter');
            const inputText = input.value;
            
            chars.forEach((charEl, charIndex) => {
                charEl.classList.remove('correct', 'incorrect', 'active');
                
                if (charIndex < inputText.length) {
                    const isCorrect = charEl.textContent === inputText[charIndex];
                    charEl.classList.add(isCorrect ? 'correct' : 'incorrect');
                    
                    // Update character stats
                    if (charIndex === inputText.length - 1) {
                        totalTypedChars++;
                        if (isCorrect) {
                            correctChars++;
                        }
                    }
                } else if (charIndex === inputText.length) {
                    charEl.classList.add('active');
                }
            });
        }
    });
}

// Render the words in the container
function renderWords() {
    wordsContainer.innerHTML = '';
    
    words.forEach((word, wordIndex) => {
        const wordEl = document.createElement('div');
        wordEl.className = 'word' + (wordIndex === 0 ? ' active' : '');
        
        // Split the word into characters for individual highlighting
        for (let i = 0; i < word.length; i++) {
            const charEl = document.createElement('span');
            charEl.className = 'letter';
            charEl.textContent = word[i];
            wordEl.appendChild(charEl);
        }
        
        // Add a space after each word except the last one
        if (wordIndex < words.length - 1) {
            const spaceEl = document.createElement('span');
            spaceEl.textContent = ' ';
            wordEl.appendChild(spaceEl);
        }
        
        wordsContainer.appendChild(wordEl);
    });
}

// Update WPM and accuracy stats
function updateStats() {
    const wpm = calculateWPM();
    const accuracy = totalTypedChars > 0 ? Math.round((correctChars / totalTypedChars) * 100) : 100;
    
    wpmElement.textContent = wpm;
    accuracyElement.textContent = accuracy;
}

// Calculate current WPM
function calculateWPM() {
    if (!testActive) return 0;
    
    const timeElapsed = (TEST_DURATION - timeLeft) / 60; // in minutes
    const wpm = Math.round((correctChars / 5) / (timeElapsed || 1));
    
    return wpm;
}

// Compute consistency score from WPM samples (0-100)
function computeConsistency(samples) {
    if (!samples || samples.length < 2) return 100;
    const mean = samples.reduce((a, b) => a + b, 0) / samples.length;
    if (mean === 0) return 0;
    const variance = samples.reduce((acc, v) => acc + Math.pow(v - mean, 2), 0) / samples.length;
    const std = Math.sqrt(variance);
    const cv = std / mean; // coefficient of variation
    const score = Math.round(Math.max(0, Math.min(100, 100 * (1 - cv))));
    return score;
}

// Removed quote source in favor of random lowercase words

// Save test results to localStorage for evolution tracking
function saveTestResult(wpm, accuracy, consistency) {
    const results = JSON.parse(localStorage.getItem('typingTestResults') || '[]');
    results.push({
        date: new Date().toISOString(),
        wpm,
        accuracy,
        consistency,
        correctChars,
        totalTypedChars
    });
    
    // Keep only the last 100 results
    if (results.length > 100) {
        results.shift();
    }
    
    localStorage.setItem('typingTestResults', JSON.stringify(results));
}

// Share results
function shareResults() {
    const text = `I just typed at ${resultWpm.textContent} WPM with ${resultAccuracy.textContent} accuracy on TypeFlow! 🚀`;
    
    if (navigator.share) {
        navigator.share({
            title: 'My Typing Test Results',
            text: text,
            url: window.location.href
        }).catch(console.error);
    } else {
        // Fallback for browsers that don't support Web Share API
        navigator.clipboard.writeText(text + ' ' + window.location.href).then(() => {
            alert('Results copied to clipboard!');
        }).catch(() => {
            // If clipboard API fails, show a prompt
            prompt('Copy to clipboard: Ctrl+C, Enter', text);
        });
    }
}

// Theme management
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update theme toggle icon
    const icon = themeToggle.querySelector('i');
    icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Set initial theme toggle icon
    const icon = themeToggle.querySelector('i');
    icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
