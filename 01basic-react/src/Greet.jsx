function Greet() {
  return (
    <div className="greet-msg">
      <h4>What is React?</h4>
      <p>React is an open-source JavaScript library for building user interfaces, particularly for single-page applications (SPAs) where you need a fast and interactive user experience.</p>

      <h4>Key Features:</h4>
      <ol>
        <li>
          Component-Based Architecture
          <ul>
            <li>UI is broken into components (independent, reusable pieces).</li>
            <li>Example: Buttons, forms, headers — each as its own component.</li>
          </ul>
        </li>

        <li>
          JSX (JavaScript XML)
          <ul>
            <li>A syntax extension that allows you to write HTML inside JavaScript.</li>
            <li>Makes code more readable and easier to manage.</li>
          </ul>
        </li>

        <li>
          Virtual DOM
          <ul>
            <li>React maintains a virtual representation of the DOM.</li>
            <li>It updates only what changes, making UI updates fast and efficient.</li>
          </ul>
        </li>

        <li>
          Unidirectional Data Flow
          <ul>
            <li>Data flows one way (from parent to child components), making the app predictable.</li>
          </ul>
        </li>

        <li>
          Hooks
          <ul>
            <li>React Hooks allow function components to manage state and side effects.</li>
            <li>Example: useState, useEffect</li>
          </ul>
        </li>
      </ol>
    </div>
  );
}

export default Greet