function startApp() {
    document.getElementById('title').style.display = 'none';
    document.getElementById('num-members-screen').style.display = 'block';
}

function showMemberFields() {
    const numMembersInput = document.getElementById('num-members');
    const numMembers = numMembersInput.value;

    if (numMembers === '' || numMembers === '0'|| numMembers === '1') {
        alert('有効な人数を入力してください。');
        numMembersInput.focus();
        return;
    }

    generateMemberFields();
    document.getElementById('num-members-screen').style.display = 'none';
    document.getElementById('member-form').style.display = 'block';
}

//処理中の画面を表示
function showLoadingScreen() { // This is new
    document.getElementById('member-form').style.display = 'none';
    document.getElementById('loading-screen').style.display = 'block';
    setTimeout(exchangeGifts, 2000); // Execute exchangeGifts after a 2-second delay
}

function backToNumMembers() {
    document.getElementById('member-form').style.display = 'none';
    document.getElementById('num-members-screen').style.display = 'block';
}

function resetApp() {
    // Clear the results
    const results = document.getElementById('results');
    results.innerHTML = '';
    results.style.display = 'none';
  
    // Hide the reset button
    document.getElementById('reset-button').style.display = 'none';
  
    // Show the member input screen
    document.getElementById('member-form').style.display = 'block';
  }



// ... the rest of your JS code ...

