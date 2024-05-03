import React, { useState } from 'react';

export default function RecipeStep({ stepText }) {
  /**
   * TODO #5:
   * 1. Add state for tracking if step is completed
   * 2. Update styles based on state
   */
  const [isComplete, setComplete] = useState(false);

  return (
    <li>
      <label
        style={{
          textDecoration: isComplete ? 'line-through' : 'none',
        }}
      >
        {stepText}
      </label>
      <input
        type="checkbox"
        checked={isComplete}
        onChange={() => setComplete(!isComplete)}
      ></input>
    </li>
  );
}
