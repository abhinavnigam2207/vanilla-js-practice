import "./styles.css";

const tabs = [
  { id: "tab1", label: "Home", content: "Welcome to the Home tab!" },
  { id: "tab2", label: "About", content: "This is the About tab." },
  { id: "tab3", label: "Contact", content: "Get in touch on the Contact tab." },
];

document.getElementById("app").innerHTML = `<h1>Hello JavaScript!</h1>`;

const container = document.createElement("div");
const tabHeaderContainer = document.createElement("div");
const tabContentContainer = document.createElement("div");

tabs.forEach(({ id, label, content }, index) => {
  const tabElement = document.createElement("button");
  tabElement.id = id;
  tabElement.textContent = label;
  tabElement.classList = index == 0 ? "tab-header active" : "tab-header";
  tabHeaderContainer.appendChild(tabElement);

  const tabContent = document.createElement("div");
  tabContent.id = id;
  tabContent.textContent = content;
  tabContent.classList = index == 0 ? "tab-content active" : "tab-content";
  tabContentContainer.appendChild(tabContent);
});

tabHeaderContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("tab-header")) {
    Array.from(tabHeaderContainer.childNodes).map((tab) => {
      tab.classList =
        tab.id == event.target.id ? "tab-header active" : "tab-header";
    });
    Array.from(tabContentContainer.childNodes).map((tab) => {
      tab.classList =
        tab.id == event.target.id ? "tab-content active" : "tab-content";
    });
  }
});
container.appendChild(tabHeaderContainer);
container.appendChild(tabContentContainer);
document.body.appendChild(container);
