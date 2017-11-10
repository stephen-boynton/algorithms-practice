function harmlessRansomNote(noteText, magazineText) {
  let noteArray = noteText.split(" ");
  let magazineArray = magazineText.split(" ");
  const magazineObj = magazineArray.reduce((acc, curr) => {
    if (!acc[curr]) acc[curr] = 0;
    acc[curr]++;
    return acc;
  }, {});
  let possible = true;
  noteArray.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) possible = false;
    } else {
      possible = false;
    }
  });
  console.log(possible);
  return possible;
}

const note =
  "vivamus magna justo lacinia eget consectetur sed convallis at tellus lorem ipsum dolor sit amet consectetur adipiscing elit mauris blandit aliquet elit eget tincidunt nibh pulvinar a";

const magazine =
  "sed porttitor lectus nibh vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui mauris blandit aliquet elit eget tincidunt nibh pulvinar a";

harmlessRansomNote(note, magazine);

// This function has an O(n) + O(m) or O(n + m) or a linear runtime Big O Notation.
