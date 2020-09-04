const signInButton = document.getElementById('signInButton');
const signOutButton = document.getElementById('signOutButton');
const userNameDisplay = document.getElementById('userNameDisplay');

function signInNavBarChanges(account) {
  userNameDisplay.innerText = `${account.name}`;
  signOutButton.classList.remove('d-none');
  signInButton.classList.add('d-none');
}

function signOutNavBarChanges() {
  userNameDisplay.innerText = '';
  signOutButton.classList.add('d-none');
  signInButton.classList.remove('d-none');
}

var signInCallbacks = [ signInNavBarChanges ];
var signOutCallbacks = [ signOutNavBarChanges ];

signInButton.onclick = function () { signIn(signInCallbacks) };
signOutButton.onclick = function () { signOut(signOutCallbacks) };

var account = myMSALObj.getAccount();
if (account) {
  signInNavBarChanges(account);
} else {
  signOutNavBarChanges();
}