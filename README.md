## 1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll:

- **getElementById**: Selects one element by its ID. Returns a single element.
- **getElementsByClassName**: Selects all elements with a specific class. Returns a collection of elements.
- **querySelector**: Selects the first element that matches a CSS selector.
- **querySelectorAll**: Selects all elements that match a CSS selector. Returns a list of elements.

---

## 2. How to create and insert a new element into the DOM:

To create a new element, you need to:

1. Create the element using `document.createElement`.
2. Add content or attributes to the element.
3. Insert it into the DOM using methods like `appendChild` or `insertBefore`.

---

## 3. Event Bubbling and how it works:

Event Bubbling is when an event happens on a child element and then moves up to its parent elements. The event starts from the inner element and goes outward through the DOM tree.

---

## 4. Event Delegation in JavaScripT:

Event Delegation is when you add an event listener to a parent element instead of adding it to each child. The parent listens for events from its children.

**Why it is useful:**

- Saves memory by using fewer event listeners.
- Works for elements that are added to the page later.

---

## 5. Difference between preventDefault() and stopPropagation():

- **preventDefault()**: Stops the default action of an element, like stopping a form from submitting or a link from opening.
- **stopPropagation()**: Stops the event from moving up the DOM tree, preventing parent elements from reacting to the event.
