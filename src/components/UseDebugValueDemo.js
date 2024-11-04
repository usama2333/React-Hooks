// Purpose: Provides a way to label or show debug information for custom hooks 
//when using the React DevTools.This makes it easier to inspect custom hooks' 
// values and understand their current state without directly logging them.
// Usage: Generally used in custom hooks to display debug information in React DevTools.
// How it Works: useDebugValue allows you to pass a value that will show up in DevTools, 
//giving context to the data or logic within a hook.

import { useDebugValue, useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const handleStatusChange = (status) => setIsOnline(status.isOnline);
    // Mock: subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      // Mock: unsubscribeFromFriendStatus(friendID);
    };
  }, [friendID]);

  // Display online/offline status in DevTools
  useDebugValue(isOnline ? 'Online' : 'Offline');

  return isOnline;
}

// In React DevTools, when inspecting a component using useFriendStatus, 
// you'll see Online or Offline as the current state, which makes debugging 
// the custom hook’s state easier.