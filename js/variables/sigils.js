let currentLocalSigils = [];

// Check if 'sigils' exists in localStorage
if (localStorage.getItem('sigils')) {
  currentLocalSigils = JSON.parse(localStorage.getItem('sigils'));
}

// If no sigils in localStorage, default to an empty array
export let sigilsState = currentLocalSigils || [];
