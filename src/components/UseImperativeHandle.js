// Purpose: Allows you to customize or control the values or methods 
// that are exposed to parent components when using ref with React.forwardRef.
// Usage: Often used when creating reusable components that need to expose specific
//  methods or properties to parent components. For example, you might use 
// it in a custom input component to expose methods like .focus() or .clear().
// How it Works: useImperativeHandle(ref, createHandle, [deps]) takes three arguments:
// ref: The forwarded ref from the parent.
// createHandle: A function that returns an object containing the values/methods you want to expose.
// [deps]: An optional dependency array that re-runs createHandle if dependencies change.

import { useImperativeHandle, useRef, forwardRef } from 'react';

const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    clear: () => (inputRef.current.value = '')
  }));

  return <input ref={inputRef} {...props} />;
});

// Usage in a parent component
function ParentComponent() {
  const inputRef = useRef();

  const handleFocus = () => inputRef.current.focus();
  const handleClear = () => inputRef.current.clear();

  return (
    <div>
      <FancyInput ref={inputRef} />
      <button onClick={handleFocus}>Focus</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}
