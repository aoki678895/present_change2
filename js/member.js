function generateMemberFields() {
  const numMembers = document.getElementById('num-members').value;
  const memberFields = document.getElementById('member-fields');

  // Clear out any existing fields
  memberFields.innerHTML = '';

  for (let i = 0; i < numMembers; i++) {
      const input = document.createElement('input');
      input.type = 'text';
      input.value = `メンバー${i + 1}`;  // Set default value
      input.className = 'member-name';
      memberFields.appendChild(input);
  }
}

function exchangeGifts() {
  const numMembers = document.getElementById('num-members').value;
  const memberFields = document.getElementById('member-fields').children;
  const results = document.getElementById('results');

  // Get member names and shuffle them
  let members = [];
  for (let i = 0; i < numMembers; i++) {
      members.push(memberFields[i].value);
  }
  // members = shuffleArray(members);
  members = shuffleArrayDifferent(members);

  // Now assign gifts
  let resultsHTML = '';
  for (let i = 0; i < numMembers; i++) {
      const giver = memberFields[i].value;
      const receiver = members[i];
      resultsHTML += `<p>${giver}は${receiver}にプレゼントをあげます。</p>`;
  }

  document.getElementById('loading-screen').style.display = 'none'; 
  results.innerHTML = resultsHTML;
  results.style.display = 'block';
  document.getElementById('reset-button').style.display = 'block';

}


// Shuffle array such that no element remains in its original position
function shuffleArrayDifferent(array) {
  let originalArray = [...array];
  let shuffledArray;
  
  do {
    shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = shuffledArray[i];
      shuffledArray[i] = shuffledArray[j];
      shuffledArray[j] = temp;
    }
  } while (!isDifferent(originalArray, shuffledArray));
  
  return shuffledArray;
}

// Check if two arrays have any element in the same position
function isDifferent(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      return false;
    }
  }
  return true;
}

