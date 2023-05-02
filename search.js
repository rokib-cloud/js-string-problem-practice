const lyrics = 'tmi kala pakhi ami jani ki. bosonto kale tomay bolte pari ni';

const toLowerCase = lyrics.toLowerCase();
const doesExist = lyrics.includes('pakhi');
console.log(doesExist);

if (lyrics.indexOf('bosonto') !== -1) {
    console.log('lyrics exist');
}
else {
    console.log('lyrics does not exist');
}

//starts with 
console.log(lyrics.startsWith('Tmi'));

//ends with

const fileName = 'file.pdf';

const isExist = fileName.endsWith('.pdf')
console.log(isExist)